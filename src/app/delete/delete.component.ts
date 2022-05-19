import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(public ls:ServiceService) { }


  ngOnInit() {
  }

  delete(loanId){
    this.ls.removeLoan(loanId);
  }

}
