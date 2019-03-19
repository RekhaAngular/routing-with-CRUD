import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  //template:'<h1>This is first</h1>',
  styleUrls: ['./first.component.css']
  //styles: [ 'p{ color:red;}']
})
export class FirstComponent implements OnInit {

  constructor(private http:Http) { }

  ngOnInit() {
  	return this.http.get('https://httpbin.org/get').subscribe(res=>{
  		debugger;
  		let reponse = res.json();
  	}) 
    // let obj ={
    //   'group':'Science',
    //   'studentName':'test',
    //   'class':'test'

    // }
    // return this.http.post('https://httpbin.org/get', obj).subscribe(res=>{
    //   debugger;
    //   let reponse = res.json();
    // }) 

  }
  

}

