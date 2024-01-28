import { Component, OnInit } from '@angular/core';
import { Theloai } from 'src/app/models/theloai.model';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-ds-theloai',
  templateUrl: './ds-theloai.component.html',
  styleUrls: ['./ds-theloai.component.css']
})
export class DsTheloaiComponent implements OnInit {

  constructor(private service:SharedService) { }

  dstl: Array<Theloai> = [];
  dem: number = 0;
  firstPage: number = 1;
  itemsPPage: number = 7;
  totalTL:any;
  searchText = '';

  ngOnInit(): void {
    this.getTlList();
  }

  getTlList(){
    this.service.LayDSTl().subscribe(res => {
      this.dstl = res;
      console.log(res);
      this.totalTL = res.length;
    })
  }

}
