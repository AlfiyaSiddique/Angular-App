import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-list-add-edit',
  templateUrl: './list-add-edit.component.html',
  styleUrls: ['./list-add-edit.component.css'],
})
export class ListAddEditComponent {
  listForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private taskService: TaskService,
    private _dialogRef: MatDialogRef<ListAddEditComponent>,
    private _coreService: CoreService

  ) {
    this.listForm = this._fb.group({
      task: '',
      completionTime: '',
      dueDate: '',
    });
  }

  onFormSubmit() {
    if (this.listForm.valid) {
      this.taskService.addTask(this.listForm.value).subscribe({
        next: (value: any) => {
          this._coreService.openSnackBar("Task added sucessfully")
          this._dialogRef.close(true)
        },
        error: (err: any) => {
          console.error(err);
        },
      });
    }
  }
}
