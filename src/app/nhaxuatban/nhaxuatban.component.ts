import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-nhaxuatban',
  templateUrl: './nhaxuatban.component.html',
  styleUrls: ['./nhaxuatban.component.css']
})
export class NhaxuatbanComponent implements OnInit {

  constructor(public service: SharedService) { }

  ngOnInit(): void {
  }

}
