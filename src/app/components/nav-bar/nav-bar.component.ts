import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent implements OnInit {

  highContrast!: boolean

  constructor(
    private themeService: ThemeService
  ) { }

  ngOnInit(): void {
    this.themeService.isHighConstrast.subscribe(data => {
      console.log(data)
    })
  }
  toggleHighContrast(){
    this.highContrast = !this.highContrast
    this.themeService.toggleHighConstrast(this.highContrast)
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
