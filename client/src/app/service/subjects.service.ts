import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SubjectsService {

constructor(private http:HttpClient) { }
load(){
return this.http.get('https://jaychou.herokuapp.com/api/subjects')
}

add(data){
return this.http.post('https://jaychou.herokuapp.com/api/subjects',{subcode: data})
}

delete(){
return this.http.delete('https://jaychou.herokuapp.com/api/subjects',{sub_id: 12})
}

}
