import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Nxb } from 'src/app/models/nxb.model';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-them-nxb',
  templateUrl: './them-nxb.component.html',
  styleUrls: ['./them-nxb.component.css']
})
export class ThemNxbComponent implements OnInit {
  constructor(
    private service:SharedService,
    private route: ActivatedRoute,
    private router: Router,
    private toast: NgToastService) { }

  NhaXB:Nxb = {
    id: '',
    tennhaxb: '',
    sdt: '',
    ghichu: '',
  }

  ngOnInit(): void {
  }

  themNXB(){
    this.service.ThemNXB(this.NhaXB)
    .subscribe({
      next:(nxb) => {
        this.toast.success({detail: "THÀNH CÔNG", summary: "Thêm nhà xuất bản thành công.", duration:4000})
        this.router.navigate(['/nhaxuatban']);
      },
      error:(err) => {
        this.toast.error({detail: "LỖI", summary: "Có lỗi xảy ra, vui lòng thử lại.", duration:4000})
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
