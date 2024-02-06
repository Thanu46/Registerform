import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
  datas:any;
constructor(private http:HttpClient,private router:Router){

}
ngOnInit(){
  this.getData();
}
getData(){
  this.http.get('http://localhost:2000/alldata').subscribe(res=>{
    this.datas=res;
    console.log();
  })
}
deletehello(id:number){
  this.http.delete('http://localhost:2000/alldata'+id).subscribe(result=>{
    console.log(result);
    this.getData();
    alert("if you want delete confirm")
  })
}

}
