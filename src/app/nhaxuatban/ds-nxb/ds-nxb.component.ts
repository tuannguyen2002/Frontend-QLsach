import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Nxb } from 'src/app/models/nxb.model';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-ds-nxb',
  templateUrl: './ds-nxb.component.html',
  styleUrls: ['./ds-nxb.component.css']
})
export class DsNxbComponent implements OnInit {

  constructor(private service:SharedService) { }
  dsnxb: Array<Nxb> = [];
  dem: number = 0;
  firstPage: number = 1;
  itemsPPage: number = 7;
  totalNXB:any;
  searchText = '';

  ngOnInit(): void {
    this.getNxbList();
  }

  getNxbList(){
    this.service.LayDSNXB().subscribe(res => {
      this.dsnxb = res;
      console.log(res);
      this.totalNXB = res.length;
    })
  }

  

}
