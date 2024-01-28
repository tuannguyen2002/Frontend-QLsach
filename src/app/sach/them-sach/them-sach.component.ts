import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Nxb } from 'src/app/models/nxb.model';
import { Sach } from 'src/app/models/sach.model';
import { Tacgia } from 'src/app/models/tacgia.model';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-them-sach',
  templateUrl: './them-sach.component.html',
  styleUrls: ['./them-sach.component.css']
})
export class ThemSachComponent implements OnInit {

  dsSach: Sach = {
    id: '',
    tensach: '',
    tacgiaID: '',
    nhaxbID: '',
    giaban: 0,
    soluong: 0,
    ghichu: '',
    tentacgia: '',
    nhaxb: '',
  };

  dstg: Array<Tacgia> = [];
  dsnxb: Array<Nxb> = [];

  constructor(private service: SharedService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.loadNXB();
    this.loadTG();
  }

  themSach() {
    this.service.ThemSach(this.dsSach)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/sach']);
        }
      });
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

  goBack() {
    this.router.navigate(['/sach']);
  }
}
