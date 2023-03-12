import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { CoreService } from './core/core.service';
import { ListAddEditComponent } from './list-add-edit/list-add-edit.component';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = "App"
  displayedColumns: string[] = [
    'id',
    'task',
    'completionTime',
    'dueDate',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;
  constructor(private _dialog: MatDialog, public taskService: TaskService, private _coreService: CoreService) {}

  ngOnInit(): void {
    this.getTaskList();
  }

  getTaskList() {
    this.taskService.getTaskList().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
      },
      error: console.log,
    });
  }
  openAddEditList() {
    const dialogRef = this._dialog.open(ListAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (value) => {
        if (value) {
          this.getTaskList();
        }
      },
      error: console.log,
    });
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe({
      next: () => {
        this._coreService.openSnackBar("Task Done")
        this.getTaskList();
      },
      error: console.log,
    });
  }
}
