import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.scss']
})
export class SidenavbarComponent implements OnInit {

  constructor(private service:UserserviceService, private router:Router) { }

  users:any;
  userlog:any;
  @Output() texts:any;
  imgUrl:string = "http://localhost/chatphp/img/";
  @Output() userInfoText:any;
  @Output() textFrom:any;

  filterUser:string = "";

  ngOnInit() {
    this.mostrarUsers();
    this.userlog = this.service.userinfo;
    this.textFrom = this.userlog;

  }

  mostrarUsers(){
    this.service.mostrarusers().subscribe(data => {
      this.users = data;
     // console.log(this.service.getToken());
    })
  }

  

 
  logout(){
  this.service.deleteToken();
  // window.location.href = window.location.href;
  this.router.navigate(['/login']);
  }

  select_chat(user:number){
    this.userInfoText = user;

    

  }
  

}
