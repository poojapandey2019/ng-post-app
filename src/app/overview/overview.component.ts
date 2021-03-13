import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  postList: Post[] = [];

  constructor(public postService:PostService) { }

  ngOnInit(): void {
    this.postService.getAll().subscribe((data)=>{
      this.postList = data;
    console.log(this.postList);
  })
  }

}
