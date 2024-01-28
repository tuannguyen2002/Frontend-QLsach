import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Theloai } from 'src/app/models/theloai.model';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-sua-xoa-theloai',
  templateUrl: './sua-xoa-theloai.component.html',
  styleUrls: ['./sua-xoa-theloai.component.css']
})
export class SuaXoaTheloaiComponent implements OnInit {

  success: boolean = false;

  EditDeleteTL:Theloai = {
    id: '',
    tentheloai: '',
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
          this.service.GetIdTl(id)
          .subscribe({
            next: (res) => {
              console.log(res);
              this.EditDeleteTL = res;
            }
          })
        }
      }
    })
  }

  suaTL(){
    this.service.SuaTl(this.EditDeleteTL.id, this.EditDeleteTL).subscribe({
      next:(res) => {
        this.router.navigate(['/theloai']);
      }
    })
  }

  xoaTL(){
    this.service.XoaTl(this.EditDeleteTL.id).subscribe({
      next:(res) => {
        this.router.navigate(['/theloai']);
      }
    })
  }

  goBack(){
    this.router.navigate(['/theloai']);
  }
}

