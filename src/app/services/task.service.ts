import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

constructor(private _http: HttpClient) { }

  addTask(data: any): Observable<any>{
    let list = localStorage.getItem('todo');
   if(list !== null){
    const parsedList = JSON.parse(list);
     if(typeof parsedList === 'object'){
      const array =  [...parsedList, data];
       localStorage.setItem("todo", JSON.stringify(array))
     }else{
       parsedList.push(data);
       localStorage.setItem("todo", JSON.stringify(parsedList))
     }
   }else{
    localStorage.setItem("todo", JSON.stringify([data]))
   }
        return this._http.post("https://main--enchanting-marshmallow-109241.netlify.app/task", data)
  }

  getTaskList(): Observable<any>{
    return this._http.get("https://main--enchanting-marshmallow-109241.netlify.app/task")
}

deleteTask(id: Number): Observable<any>{
  let list = localStorage.getItem('todo');
  const myArray = list !== null ? JSON.parse(list) : [];
  const newArray: {task: string; completionTime: number; dueDate: String; }[] = [];
  for (let index = 1; index <= myArray.length; index++) {
      if(index !== id){
 newArray.push(myArray[index-1]);
      }
  }
  localStorage.setItem("todo", JSON.stringify(newArray))
  return this._http.delete(`https://main--enchanting-marshmallow-109241.netlify.app/task/${id}`)
}
}
