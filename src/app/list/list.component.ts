import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(public ls:ServiceService) { }
  public loans;

  ngOnInit() {

    this.loans= this.ls.getAllLoans();
  }



}
