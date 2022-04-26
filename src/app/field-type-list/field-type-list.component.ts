import { Component, Input, OnInit } from '@angular/core';
import { json } from 'src/assets/data';

@Component({
  selector: 'app-field-type-list',
  templateUrl: './field-type-list.component.html',
  styleUrls: ['./field-type-list.component.scss']
})
export class FieldTypeListComponent implements OnInit {
  basic_Components=json.formControls;

  @Input()
  doneList: any;

  constructor() { }

  ngOnInit(): void {
  }

}
