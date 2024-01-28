import { Component, OnInit } from '@angular/core';
import { Tacgia } from 'src/app/models/tacgia.model';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-ds-tacgia',
  templateUrl: './ds-tacgia.component.html',
  styleUrls: ['./ds-tacgia.component.css']
})
export class DsTacgiaComponent implements OnInit {

  constructor(private service:SharedService) { }

  dstg: Array<Tacgia> = [];
  dem: number = 0;
  firstPage: number = 1;
  itemsPPage: number = 7;
  totalTG:any;
  searchText = '';

  ngOnInit(): void {
    this.getTgList();
  }

  getTgList(){
    this.service.LayDSTg().subscribe(res => {
      this.dstg = res;
      console.log(res);
      this.totalTG = res.length;
    })
  }

}
