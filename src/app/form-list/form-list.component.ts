import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.scss']
})
export class FormListComponent implements OnInit {

  displayedColumns: string[] = ['position', 'formName' , 'action'];
  dataSource = [{'position':1 , 'formName':'form1'},{'position':2 , 'formName':'form2'},{'position':3 , 'formName':'form3'}];
  constructor(private router :Router) { }

  ngOnInit(): void {
  }

  edit()
  {

  }

  delete()
  {

  }
  view()
  {
   this.router.navigateByUrl('/formbuilder');
  }
}
