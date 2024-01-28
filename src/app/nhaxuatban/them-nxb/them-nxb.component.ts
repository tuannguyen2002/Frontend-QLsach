import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Nxb } from 'src/app/models/nxb.model';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-them-nxb',
  templateUrl: './them-nxb.component.html',
  styleUrls: ['./them-nxb.component.css']
})
export class ThemNxbComponent implements OnInit {
  constructor(private service:SharedService, private route: ActivatedRoute, private router: Router) { }
  
  success: boolean = false;

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
        console.log(nxb);

        this.router.navigate(['/nhaxuatban']);
        this.success = true;

        setTimeout(() => {
          this.success = false;
        }, 3000);
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
