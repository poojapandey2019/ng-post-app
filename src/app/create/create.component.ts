import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
import { Router } from '@angular/router';
import { FormGroup,Validators, FormBuilder } from '@angular/forms';
import { Post } from '../model/post';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form: FormGroup;
  
  constructor(public postService:PostService, private router:Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: [null,  [Validators.required, Validators.minLength(1)]],
      body: [null, [Validators.required, Validators.minLength(1)]]
    });
  }
  onSubmit(){
    console.log(this.form.value);
    let post = {"userId": 8, "title": this.form.value.title,"body": this.form.value.body};
    this.postService.create(post).subscribe((res)=>{
      console.log('Post created Successfully!');
      console.log(res);
      this.router.navigateByUrl('');
    });
  }

}
