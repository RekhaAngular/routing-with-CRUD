import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
	math:any;
	science:any;
	english:any;
	listallValues = [];
	btn:string = 'Submit';
	EditObjectId:any;
    constructor() { }

  	ngOnInit() {
  	}

  	save() {
  		if(this.EditObjectId === null || this.EditObjectId === "" || this.EditObjectId === undefined) {
  			let obj = {
	  			'math':this.math,
	  			'science':this.science,
	  			'english':this.english
	  		}
			this.listallValues.push(obj);
  		} else {
  			this.listallValues[this.EditObjectId].math = this.math;
  		    this.listallValues[this.EditObjectId].science = this.science;
  		    this.listallValues[this.EditObjectId].english = this.english;
  		    this.EditObjectId = "";
  		    this.btn = 'Submit';
  		}
  		
		this.math="";
  		this.science="";
  		this.english="";
  	}

  	Editing(Index) {
  		debugger;
  		this.btn = 'Update';
  		this.EditObjectId = Index;
  		this.math = this.listallValues[Index].math;
  		this.science = this.listallValues[Index].science;
  		this.english = this.listallValues[Index].english;

  	}

  	delete(Index) {
  		this.listallValues.splice(Index, 1);
  	}
}
