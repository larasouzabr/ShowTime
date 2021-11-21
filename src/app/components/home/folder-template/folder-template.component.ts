import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/dtos/Movie';

@Component({
  selector: 'app-folder-template',
  templateUrl: './folder-template.component.html',
  styleUrls: ['./folder-template.component.sass']
})
export class FolderTemplateComponent implements OnInit {
  @Input() 
  sliderConfig: any;
  @Input() 
  movies: Movie | null = null;
  @Input() 
  title!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
