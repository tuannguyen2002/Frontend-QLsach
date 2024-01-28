import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Nxb } from 'src/app/models/nxb.model';
import { Sach } from 'src/app/models/sach.model';
import { Tacgia } from 'src/app/models/tacgia.model';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-sua-xoa-sach',
  templateUrl: './sua-xoa-sach.component.html',
  styleUrls: ['./sua-xoa-sach.component.css']
})
export class SuaXoaSachComponent implements OnInit {

  EditDeleteSACH:Sach = {
    id: '',
    tensach: '',
    tacgiaID: '',
    nhaxbID: '',
    giaban: 0,
    soluong: 0,
    ghichu: '',
    tentacgia: '',
    nhaxb: '',
  }

  constructor(private router: Router, private route: ActivatedRoute, private service: SharedService) { }

  dstg: Array<Tacgia> = [];
  dsnxb: Array<Nxb> = [];

  ngOnInit(): void {
    this.getID();
    this.loadNXB();
    this.loadTG();
  }

  getID(){
    this.route.paramMap.subscribe({
      next: (param) => {
        const id = param.get('id');
        console.log('id:'+id);
        if(id){
          this.service.GetIdSach(id)
          .subscribe({
            next: (res) => {
              console.log(res);
              this.EditDeleteSACH = res;
            }
          })
        }
      }
    })
  }

  suaSACH(){
    this.service.SuaSach(this.EditDeleteSACH.id, this.EditDeleteSACH).subscribe({
      next:(res) => {
        this.router.navigate(['/sach']);
      }
    })
  }

  xoaSACH(){
    this.service.XoaSach(this.EditDeleteSACH.id).subscribe({
      next:(res) => {
        this.router.navigate(['/sach']);
      }
    })
  }

  loadTG() {
    this.service.LayDSTg().subscribe(tg => {
      this.dstg = tg;
    });
  }

  loadNXB() {
    this.service.LayDSNXB().subscribe(x => {
      this.dsnxb = x;
    });
  }

  onlyNumber(event: any): void {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (!(charCode >= 48 && charCode <= 57)) {
      event.preventDefault();
    }
  }

  goBack(){
    this.router.navigate(['/sach']);
  }
}