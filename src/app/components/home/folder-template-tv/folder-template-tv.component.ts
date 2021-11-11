import { Component, Input, OnInit } from '@angular/core';
import { TvShow } from 'src/app/dtos/TvShow';

@Component({
  selector: 'app-folder-template-tv',
  templateUrl: './folder-template-tv.component.html',
  styleUrls: ['./folder-template-tv.component.sass']
})
export class FolderTemplateTvComponent implements OnInit {
  @Input() 
  TvShow: TvShow | null = null;
  @Input() 
  title: string | null = null;
  constructor() { }

  ngOnInit(): void {
  }

}
