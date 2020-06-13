import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/auth.service';
import { Router } from '@angular/router';
import { CollectionService } from '../collection.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 
  isOpen:boolean = false;
  showLogoutBtn = false;
  constructor(private _authservice:AuthService,private router:Router,public collectionSevice:CollectionService) { }

  ngOnInit(): void {
    if(localStorage.getItem('token')){
      this.showLogoutBtn =true;
    }else{
      this.showLogoutBtn = false;
    }
  }
  ToggleNavbar(){
    this.isOpen=!this.isOpen
  }
  logout(){
    localStorage.removeItem('token');
    this.collectionSevice.isLogged = false;
    this.router.navigate(['/login']);
  }
}
