import { moveItemInArray, copyArrayItem } from '@angular/cdk/drag-drop';
import { CdkDragDrop } from '@angular/cdk/drag-drop/drag-events';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.scss']
})
export class NewFormComponent implements OnInit {
  isLabelEdit:boolean=false;
  label:any;
  constructor() { }

  ngOnInit(): void {
  }

   
  dataArray: Array<any> = [];
  jsonData: Array<any> = [];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }    
  }



  createFormControl(value:string)
  {
   this.isLabelEdit=true
   this.label= new FormControl();
   
  }

}
