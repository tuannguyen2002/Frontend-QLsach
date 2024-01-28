import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-tacgia',
  templateUrl: './tacgia.component.html',
  styleUrls: ['./tacgia.component.css']
})
export class TacgiaComponent implements OnInit {

  constructor(public service: SharedService) { }

  ngOnInit(): void {
  }

}
