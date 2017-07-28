import { Component, OnInit } from '@angular/core';
import { StylesService } from "./../styles.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-ashtanga',
  templateUrl: './ashtanga.component.html',
  styleUrls: ['./ashtanga.component.css'],
  providers: [StylesService]
})
export class AshtangaComponent implements OnInit {
styles;

  constructor(private style: StylesService) { }

  ngOnInit() {
    this.style.getList()
    .subscribe((styles) => {
      this.styles = styles;
      console.log(styles);
    })
  }

}
