import { Component } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'QLsach_FE';
  constructor(public service: SharedService) {}
  isLoggedIn: boolean = false;
  userName: string = "";

  ngOnInit(): void {
    // Đăng ký để theo dõi sự thay đổi của trạng thái đăng nhập
    this.service.isLoggedIn.subscribe((status: boolean) => {
      this.isLoggedIn = status;
    });

    // Đăng ký để theo dõi tên người dùng khi đăng nhập thành công
    this.service.userName.subscribe((name: string) => {
      this.userName = name;
    });
  }

  logout(): void {
    // Gọi phương thức đăng xuất từ SharedService
    this.service.logout();
  }
}
