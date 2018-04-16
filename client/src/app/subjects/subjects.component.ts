import { Component, OnInit } from '@angular/core';
import { SubjectsService }   from '../service/subjects.service';
import { NgForm }   from '@angular/forms';
declare var $:any;
@Component({
selector: 'app-subjects',
templateUrl: './subjects.component.html',
styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
results: any;
constructor(private subjects:SubjectsService) { }

ngOnInit() {
$.getScript('assets/js/admin.js');
this.load();
}
load(){
this.subjects.load().subscribe(data => {
this.results=data;
}
}
add(){
this.subjects.add(this.subjectcode).subscribe(data => {
this.load();
}
}

delete(this.id){
this.subjects.delete(this.id).subscribe(data => {
console.log(data);
}
}

}