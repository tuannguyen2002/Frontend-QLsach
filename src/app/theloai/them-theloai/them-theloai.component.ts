import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Theloai } from 'src/app/models/theloai.model';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-them-theloai',
  templateUrl: './them-theloai.component.html',
  styleUrls: ['./them-theloai.component.css']
})
export class ThemTheloaiComponent implements OnInit {

  constructor(private service:SharedService, private route: ActivatedRoute, private router: Router) { }
  
  success: boolean = false;

  theLoai:Theloai = {
    id: '',
    tentheloai: '',
    ghichu: '',
  }

  ngOnInit(): void {
  }

  themTL(){
    this.service.ThemTl(this.theLoai)
    .subscribe({
      next:(tl) => {
        console.log(tl);

        this.router.navigate(['/theloai']);
        this.success = true;

        setTimeout(() => {
          this.success = false;
        }, 3000);
      }
    })
  }

  goBack(){
    this.router.navigate(['/theloai']);
  }

}

