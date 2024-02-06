import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
   data:any
  constructor(private http:HttpClient) { }

  updateemployee(id:number,data:any){
    return this.http.put('http://localhost:2000/alldata' +id,data);
  }
  fetchData(id:number){
    return this.http.get('http://localhost:2000/alldata' +id);
  }

  postdata(data:any){
    return this.http.post('http://localhost:2000/alldata',data);
  }
}
