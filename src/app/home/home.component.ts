import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  images = ['https://cdn.shopify.com/s/files/1/0272/4770/6214/articles/shutterstock_1103310314_1200x862.jpg?v=1600201932',
    'https://media.istockphoto.com/id/479986424/photo/hens-in-the-henhouse.jpg?s=612x612&w=0&k=20&c=byY64NW3zxw-JRKQJbW_Gc_43I4Oha5b6wFtKiWTPfM=',
    'https://media.istockphoto.com/id/478287121/photo/chickens-on-traditional-free-range-poultry-farm.jpg?s=612x612&w=0&k=20&c=6pIj6E6VgJ9XNHv1C4Pjtd20pzZ_9w4np1k6HVtZK9I=',];
}
