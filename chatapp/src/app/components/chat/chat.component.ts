import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  @Input() userInfoText:any;
  @Input() texts:any;
  @Input() textFrom:any;
  
  imgUrl:string = "http://localhost/chatphp/img/";
  text:any;

  text_Info:any = {
    id:0,
    contact_id: null,
    text_from:  null,
    text_to:  null,
    messaget: null,
    timedate: new Date()

}

   subscription:any;

  constructor(private service:UserserviceService) { }

  

  ngOnInit() {
    this.mostrarText();
    
    this.subscription = this.service.refresh$.subscribe(() =>{
      this.mostrarText();
    });
    
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
    console.log("unsubscribe")
    
  }

  mostrarText(){
    this.service.mostrartext().subscribe(data => {
      this.texts = data;
    })
  }


  sentText(){
    this.text_Info.contact_id = this.textFrom.email + this.userInfoText.email;
    this.text_Info.text_from = this.textFrom.email;
    this.text_Info.text_to = this.userInfoText.email;
    this.text_Info.messaget = this.text;
   
    if(this.text_Info.messaget != ""){
    this.service.setText(this.text_Info).subscribe(data => {
      // console.log(data)
      this.text = "";
    })
  }else{
    alert("Introduscar un mensaje")
  }
    
   // this.mostrarText();

  }


}
