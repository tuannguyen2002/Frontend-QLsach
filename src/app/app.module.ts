import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxPaginationModule} from 'ngx-pagination';

import { NhaxuatbanComponent } from './nhaxuatban/nhaxuatban.component';
import { DsNxbComponent } from './nhaxuatban/ds-nxb/ds-nxb.component';
import { ThemNxbComponent } from './nhaxuatban/them-nxb/them-nxb.component';
import { SuaXoaNxbComponent } from './nhaxuatban/sua-xoa-nxb/sua-xoa-nxb.component';
import { SearchNXBPipe } from './nhaxuatban/ds-nxb/search-nxb.pipe';

import { TacgiaComponent } from './tacgia/tacgia.component';
import { DsTacgiaComponent } from './tacgia/ds-tacgia/ds-tacgia.component';
import { ThemTacgiaComponent } from './tacgia/them-tacgia/them-tacgia.component';
import { SuaXoaTacgiaComponent } from './tacgia/sua-xoa-tacgia/sua-xoa-tacgia.component';
import { SearchTGPipe } from './tacgia/ds-tacgia/search-tg.pipe';

import { SharedService } from './shared.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TheloaiComponent } from './theloai/theloai.component';
import { DsTheloaiComponent } from './theloai/ds-theloai/ds-theloai.component';
import { ThemTheloaiComponent } from './theloai/them-theloai/them-theloai.component';
import { SuaXoaTheloaiComponent } from './theloai/sua-xoa-theloai/sua-xoa-theloai.component';
import { SearchTLPipe } from './theloai/ds-theloai/search-tl.pipe';

import { SachComponent } from './sach/sach.component';
import { DsSachComponent } from './sach/ds-sach/ds-sach.component';
import { ThemSachComponent } from './sach/them-sach/them-sach.component';
import { SuaXoaSachComponent } from './sach/sua-xoa-sach/sua-xoa-sach.component';
import { SearchSachPipe } from './sach/ds-sach/search-sach.pipe';


import { HoadonComponent } from './hoadon/hoadon.component';
import { DsHoadonComponent } from './hoadon/ds-hoadon/ds-hoadon.component';
import { ThemSuaHoadonComponent } from './hoadon/them-sua-hoadon/them-sua-hoadon.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    AppComponent,

    NhaxuatbanComponent,
    DsNxbComponent,
    ThemNxbComponent,
    SuaXoaNxbComponent,

    TacgiaComponent,
    DsTacgiaComponent,
    ThemTacgiaComponent,
    SuaXoaTacgiaComponent,

    TheloaiComponent,
    DsTheloaiComponent,
    ThemTheloaiComponent,
    SuaXoaTheloaiComponent,

    SachComponent,
    DsSachComponent,
    
    HoadonComponent,
    DsHoadonComponent,
    ThemSuaHoadonComponent,
    ThemSachComponent,
    SuaXoaSachComponent,
    SearchNXBPipe,
    SearchSachPipe,
    SearchTGPipe,
    SearchTLPipe,
    LoginComponent,
    RegisterComponent,
    
    
  ],
  imports: [
    RouterModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
