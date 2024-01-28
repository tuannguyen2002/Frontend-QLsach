import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersachComponent } from './usersach/usersach.component';
import { DsUsersachComponent } from './usersach/ds-usersach/ds-usersach.component';
import { ThemUsersachComponent } from './usersach/them-usersach/them-usersach.component';
import { SuaXoaUsersachComponent } from './usersach/sua-xoa-usersach/sua-xoa-usersach.component';



@NgModule({
  declarations: [
    UsersachComponent,
    DsUsersachComponent,
    ThemUsersachComponent,
    SuaXoaUsersachComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
