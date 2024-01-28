import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Sach } from 'src/app/models/sach.model';
import { Tacgia } from 'src/app/models/tacgia.model';
import { Nxb } from 'src/app/models/nxb.model';

@Component({
  selector: 'app-ds-sach',
  templateUrl: './ds-sach.component.html',
  styleUrls: ['./ds-sach.component.css']
})
export class DsSachComponent implements OnInit {

  constructor(private service:SharedService) { }
  dssach: Array<Sach> = [];
  dstg: Array<Tacgia> = [];
  dsnxb: Array<Nxb> = [];
  dem: number = 0;
  firstPage: number = 1;
  itemsPPage: number = 7;
  totalSach:any;
  searchText = '';

  ngOnInit(): void {
    this.getSachList();
    this.loadTG();
    this.loadNxb();
  }

  getSachList(){
    this.service.LayDSSach().subscribe(res => {
      this.dssach = res;
      console.log(res);
      this.totalSach = res.length;
    })
  }

  loadTG() {
    // Lấy danh sách tác giả từ service (đã tạo ở DataService)
    this.service.LayDSTg().subscribe(tgs => {
      this.dstg = tgs;
      console.log(tgs);
      // Gọi hàm để kết hợp tên tác giả vào dssach
      this.dssach.forEach(sach => {
        const tacGia = this.dstg.find(tg => tg.id === sach.tacgiaID);
        if (tacGia) {
          sach.tentacgia = tacGia.tentacgia;
          console.log(sach.tentacgia);
        }
      });
    });
  }

  loadNxb() {
    // Lấy danh sách nxb từ service (đã tạo ở DataService)
    this.service.LayDSNXB().subscribe(nxbs => {
      this.dsnxb = nxbs;
      console.log(nxbs);
      // Gọi hàm để kết hợp tên nxb vào dssach
      this.dssach.forEach(sach => {
        const nXB = this.dsnxb.find(x => x.id === sach.nhaxbID);
        if (nXB) {
          sach.nhaxb = nXB.tennhaxb;
          console.log(sach.nhaxb);
        }
      });
    });
  }
}
