import { Component, OnInit } from '@angular/core';
import { Sach } from 'src/app/models/sach.model';
import { Tacgia } from 'src/app/models/tacgia.model';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-ds-usersach',
  templateUrl: './ds-usersach.component.html',
  styleUrls: ['./ds-usersach.component.css']
})
export class DsUsersachComponent implements OnInit {

  constructor(private service:SharedService) { }


  dssach: Array<Sach> = [];
  dstg: Array<Tacgia> = [];
  dem: number = 0;

  ngOnInit(): void {
    this.getSachList();
    this.loadTG();
  }

  getSachList(){
    this.service.LayDSSach().subscribe(res => {
      this.dssach = res;
      console.log(res);
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
}
