import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
// import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SmartTastTracker';

  defpriority='All';
  
  name:string="";
  date:string="";
  priority:string="";
  mogi:string='';
  arr:string[]=[];
  handleMessage(msg:string){
    this.mogi=msg;
  }
  isOverDew(date:any): boolean {
    const today=new Date();
    const taskDate=new Date(date);
    return taskDate < today;

  }
  handleArray(arr:string[]){
    alert('Poke')
    this.arr=arr
  }
 todos: { name: string; date: string; priority: string ;done:boolean}[] = [];
 displayTodos: { name: string; date: string; priority: string ;done:boolean}[] = [];
 tem: { name: string; date: string; priority: string ;done:boolean}[] = [];
  filterEm=()=>{
    if (this.defpriority==='All'){
      this.displayTodos=this.todos;
    }
    else{
      this.tem=this.todos.filter(i=>{
        return i.priority===this.defpriority

      })
      this.displayTodos=this.tem
    }
  }
 addTodo(){
  if(this.name && this.date && this.priority){
    this.todos.push({name:this.name,date:this.date,priority:this.priority,done:false});
    this.name="";
    this.date="";
    this.priority="";
   
  }else{
    alert("Please fill all the fields");
  }
  this.filterEm()
 }




}
// import { Component,EventEmitter,Input,Output ,OnInit,OnDestroy} from '@angular/core';

// @Component({
//   selector: 'app-child',
//   imports: [],
//   templateUrl: './child.component.html',
//   styleUrl: './child.component.css'
// })
// export class ChildComponent implements OnInit,OnDestroy{
//   constructor (){
//     console.log('Created Constructor')
//   }
//   ngOnInit(): void {
//     console.log("Init")
//   }
//   ngOnDestroy(): void {
//     console.log('Distroy')
//   }
//   @Input() msg!: string;

//   @Output() msgToParent = new EventEmitter<string>();
//   sendMsgToParent(){
//     this.msgToParent.emit("Slayying it!")
//   }
//   @Output() arrToParent = new EventEmitter<string[]>();

//   sendArr(){
//     const arr = ['apple', 'banana', 'cherry'];
//     this.arrToParent.emit(arr);
//   }
// }
