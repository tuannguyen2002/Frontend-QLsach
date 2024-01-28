import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NhaxuatbanComponent } from './nhaxuatban/nhaxuatban.component';
import { ThemNxbComponent } from './nhaxuatban/them-nxb/them-nxb.component';
import { SuaXoaNxbComponent } from './nhaxuatban/sua-xoa-nxb/sua-xoa-nxb.component';

import { TacgiaComponent } from './tacgia/tacgia.component';
import { ThemTacgiaComponent } from './tacgia/them-tacgia/them-tacgia.component';
import { SuaXoaTacgiaComponent } from './tacgia/sua-xoa-tacgia/sua-xoa-tacgia.component';

import { TheloaiComponent } from './theloai/theloai.component';
import { ThemTheloaiComponent } from './theloai/them-theloai/them-theloai.component';
import { SuaXoaTheloaiComponent } from './theloai/sua-xoa-theloai/sua-xoa-theloai.component';

import { SachComponent } from './sach/sach.component';

import { HoadonComponent } from './hoadon/hoadon.component';
import { SuaXoaSachComponent } from './sach/sua-xoa-sach/sua-xoa-sach.component';
import { ThemSachComponent } from './sach/them-sach/them-sach.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticatedGuard } from './helpers/authenticated.guard';


const routes: Routes = [
  { path: '', component: SachComponent , canActivate: [AuthenticatedGuard] },

  { path: 'nhaxuatban', component: NhaxuatbanComponent },
  { path: 'nhaxuatban/themnxb', component: ThemNxbComponent },
  { path: 'nhaxuatban/suaxoanxb/:id', component: SuaXoaNxbComponent },

  { path: 'tacgia', component: TacgiaComponent },
  { path: 'tacgia/themtacgia', component: ThemTacgiaComponent },
  { path: 'tacgia/suaxoatacgia/:id', component: SuaXoaTacgiaComponent },

  { path: 'theloai', component: TheloaiComponent },
  { path: 'theloai/themtheloai', component: ThemTheloaiComponent },
  { path: 'theloai/suaxoatheloai/:id', component: SuaXoaTheloaiComponent },

  { path: 'sach', component: SachComponent },
  { path: 'sach/themsach', component: ThemSachComponent },
  { path: 'sach/suaxoasach/:id', component: SuaXoaSachComponent },

  { path: 'hoadon', component: HoadonComponent },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
