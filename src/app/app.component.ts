import { Component, OnInit } from '@angular/core';
import {book} from './book';
import { FrndService } from "./services/frnd.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  
 
  
 book: book[]=[];

 constructor(private g: FrndService){}

 ngOnInit(){
   this.g.getjson().subscribe((data) => {
     this.book = data;
   })
 }
 idsort()
 {
   this.book.sort((a,b) =>a.id<b.id ? -1 :a.id>b.id ?1 : 0);
 }
 titlesort()
 {
   console.log('vhg')
   this.book.sort((a,b) => a.title < b.title ? -1 : a.title > b.title ? 1 :0)
 }
 authorsort()
 {
   this.book.sort((a,b) => a.author < b.author ? -1 : a.author > b.author ?1 :0)
 }
 yearsort()
 {
   this.book.sort((a,b) => a.year < b.year ? -1 : a.year > b.year ? 1: 0)
 }
 delete(emp )
 {
   this.book.splice(this.book.indexOf(emp),1);
   alert("deleted");
 }

}
