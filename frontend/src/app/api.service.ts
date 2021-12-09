import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  headers: HttpHeaders;

  constructor(public http: HttpClient){
    this.headers = new HttpHeaders();
    this.headers.append('Accept', 'application/json');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');


  }

  addStudent(data){
    return this.http.post('http://localhost/oe6_itpel/backend/create.php', data);
  }

  getStudent(){
    return this.http.get('http://localhost/oe6_itpel/backend/getstudent.php');
  }

  deleteStudent(id){
    return this.http.delete('http://localhost/oe6_itpel/backend/delete.php?id='+id);
  }
}

