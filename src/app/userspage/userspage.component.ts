import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userspage',
  templateUrl: './userspage.component.html',
  styleUrls: ['./userspage.component.css']
})
export class UserspageComponent implements OnInit {
  userslist: any[];

  constructor(private userservice:UserService,private route:Router) { }

  ngOnInit() {
    this.userservice.FetchUsers().subscribe(res=>{
      this.userslist=Object.values(res)
    })
  }
  logout(){
    localStorage.clear()
    this.route.navigate(['home'])
  }
}
