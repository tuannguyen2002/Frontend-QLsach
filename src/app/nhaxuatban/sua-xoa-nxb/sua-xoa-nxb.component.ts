import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Nxb } from 'src/app/models/nxb.model';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-sua-xoa-nxb',
  templateUrl: './sua-xoa-nxb.component.html',
  styleUrls: ['./sua-xoa-nxb.component.css']
})
export class SuaXoaNxbComponent implements OnInit {
  success: boolean = false;

  EditDeleteNXB:Nxb = {
    id: '',
    tennhaxb: '',
    sdt: '',
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
        console.log('id:'+id);
        if(id){
          this.service.GetIdNXB(id)
          .subscribe({
            next: (res) => {
              console.log(res);
              this.EditDeleteNXB = res;
            }
          })
        }
      }
    })
  }

  suaNXB(){
    this.service.SuaNXB(this.EditDeleteNXB.id, this.EditDeleteNXB).subscribe({
      next:(res) => {
        this.router.navigate(['/nhaxuatban']);
      }
    })
  }

  xoaNXB(){
    this.service.XoaNXB(this.EditDeleteNXB.id).subscribe({
      next:(res) => {
        this.router.navigate(['/nhaxuatban']);
      }
    })
  }

  onlyNumber(event: any): void {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (!(charCode >= 48 && charCode <= 57)) {
      event.preventDefault();
    }
  }

  goBack(){
    this.router.navigate(['/nhaxuatban']);
  }
}
