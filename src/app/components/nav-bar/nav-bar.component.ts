import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent implements OnInit {


  constructor(
  ) { }

  ngOnInit(): void {
  
  }

  @HostListener('window:scroll', ['$event'])

  onWindowScroll() {
    let element = document.querySelector('.navbar') as HTMLElement;
    if (window.scrollY ) {
      element.classList.remove('navbar-inverse');
    } else {
      element.classList.add('navbar-inverse');
    }
  }
}
