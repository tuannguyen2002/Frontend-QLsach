import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tacgia } from 'src/app/models/tacgia.model';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-sua-xoa-tacgia',
  templateUrl: './sua-xoa-tacgia.component.html',
  styleUrls: ['./sua-xoa-tacgia.component.css']
})
export class SuaXoaTacgiaComponent implements OnInit {

  success: boolean = false;

  EditDeleteTG:Tacgia = {
    id: '',
    tentacgia: '',
    quequan: '',
    ghichu: '',
  }

  constructor(private router: Router, private route: ActivatedRoute, private service: SharedService) { }

  ngOnInit(): void {
    this.getID();
  }

  getID(){
    this.route.paramMap.subscribe({
      next: (param) => {
        const id = param.get('id');
        if(id){
          this.service.GetIdTG(id)
          .subscribe({
            next: (res) => {
              console.log(res);
              this.EditDeleteTG = res;
            }
          })
        }
      }
    })
  }

  suaTG(){
    this.service.SuaTG(this.EditDeleteTG.id, this.EditDeleteTG).subscribe({
      next:(res) => {
        this.router.navigate(['/tacgia']);
      }
    })
  }

  xoaTG(){
    this.service.XoaTG(this.EditDeleteTG.id).subscribe({
      next:(res) => {
        this.router.navigate(['/tacgia']);
      }
    })
  }

  goBack(){
    this.router.navigate(['/tacgia']);
  }
}
