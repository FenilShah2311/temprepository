import { Component } from '@angular/core';
import { UsersDataService } from './users-data.service';
import { UserServiceService } from './user-service.service';
import { dataType } from '../user.model';
import { from } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name="";
  title = 'routingAndAfter';
  data=[];
  constructor(private user:UsersDataService,private userService:UserServiceService){
    console.warn(this.user.getData());
    let data=this.user.getData();
    this.name=data.name;
    console.log("Name",this.name);
    this.userService.getData().subscribe(data=>{
      console.warn(data)
      //this.data=data;
    })
  }
//Model example
  getModelData(){
    const datas:dataType={
    name: 'Fenil Shah',
    id:100,
    indian:true,
    address:'Gopipura'
  }
  return datas;
  }
  onSubmit(dat){
    console.warn(dat);
  }
}
