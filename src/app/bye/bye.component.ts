import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-bye',
  templateUrl: './bye.component.html',
  styleUrls: ['./bye.component.css']
})
export class ByeComponent implements OnInit{
  ballForm!:FormGroup;
  
  constructor(private over:FormBuilder, private router:Router, private http:HttpClient) {
    this.ballForm = this.over.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
   })
}

ngOnInit(): void {
}




  login(data: any) {
    this.http.get<any>("http://localhost:2000/alldata").subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.username === this.ballForm.value.username && a.password === this.ballForm.value.password;
      })
     
  
      if (user) {
        
          alert("Successfully Signed In");
        this.router.navigate(['/data']);
        
      } else {
        alert("Invalid email or password");
      }
     });
  }
}
