import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tacgia } from 'src/app/models/tacgia.model';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-them-tacgia',
  templateUrl: './them-tacgia.component.html',
  styleUrls: ['./them-tacgia.component.css']
})
export class ThemTacgiaComponent implements OnInit {

  constructor(private service:SharedService, private route: ActivatedRoute, private router: Router) { }
  
  success: boolean = false;

  tacGia:Tacgia = {
    id: '',
    tentacgia: '',
    quequan: '',
    ghichu: '',
  }

  ngOnInit(): void {
  }

  themTG(){
    this.service.ThemTG(this.tacGia)
    .subscribe({
      next:(tg) => {
        console.log(tg);

        this.router.navigate(['/tacgia']);
        this.success = true;

        setTimeout(() => {
          this.success = false;
        }, 3000);
      }
    })
  }

  goBack(){
    this.router.navigate(['/tacgia']);
  }

}
