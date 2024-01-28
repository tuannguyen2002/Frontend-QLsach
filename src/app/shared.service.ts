import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Nxb } from './models/nxb.model';
import { Sach } from './models/sach.model';
import { Tacgia } from './models/tacgia.model';
import { Theloai } from './models/theloai.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoggedIn: Observable<boolean> = this.isLoggedInSubject.asObservable();
  private userNameSubject: BehaviorSubject<string> = new BehaviorSubject<string>("");
  userName: Observable<string> = this.userNameSubject.asObservable();

  private isAuthenticatedValue:boolean = false;
  readonly APIUrl = "https://localhost:44359/api/";

  isAuthenticated(): boolean {
    return this.isAuthenticatedValue;
  }

  constructor(private http:HttpClient) { }

  //NXB
  LayDSNXB():Observable<Nxb[]>{
    return this.http.get<Nxb[]>(this.APIUrl + "nxbs");
  }

  ThemNXB(addNXB:Nxb): Observable<Nxb> {
    addNXB.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Nxb>(this.APIUrl + "nxbs", addNXB);
  }

  SuaNXB(id:string, editNXB:Nxb):Observable<Nxb>{
    return this.http.put<Nxb>(this.APIUrl + "nxbs/" + id, editNXB);
  }

  XoaNXB(id:string):Observable<Nxb>{
    return this.http.delete<Nxb>(this.APIUrl + "nxbs/" + id);
  }

  GetIdNXB(id: string):Observable<Nxb>{
    return this.http.get<Nxb>(this.APIUrl + "nxbs/" + id);
  }

  //Sach
  LayDSSach():Observable<Sach[]>{
    return this.http.get<Sach[]>(this.APIUrl + "saches");
  }

  ThemSach(addsach:Sach): Observable<Sach> {
    addsach.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Sach>(this.APIUrl + "saches", addsach);
  }

  SuaSach(id:string, editsach:Sach):Observable<Sach>{
    return this.http.put<Sach>(this.APIUrl + "saches/" + id, editsach);
  }

  XoaSach(id:string):Observable<Sach>{
    return this.http.delete<Sach>(this.APIUrl + "saches/" + id);
  }

  GetIdSach(id: string):Observable<Sach>{
    return this.http.get<Sach>(this.APIUrl + "saches/" + id);
  }

  //Tacgia
  LayDSTg():Observable<Tacgia[]>{
    return this.http.get<Tacgia[]>(this.APIUrl + "tacgias");
  }

  ThemTG(addTG:Tacgia): Observable<Tacgia> {
    addTG.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Tacgia>(this.APIUrl + "tacgias", addTG);
  }

  SuaTG(id:string, editTG:Tacgia):Observable<Tacgia>{
    return this.http.put<Tacgia>(this.APIUrl + "tacgias/" + id, editTG);
  }

  XoaTG(id:string):Observable<Tacgia>{
    return this.http.delete<Tacgia>(this.APIUrl + "tacgias/" + id);
  }

  GetIdTG(id: string):Observable<Tacgia>{
    return this.http.get<Tacgia>(this.APIUrl + "tacgias/" + id);
  }

  //Thể loại
  LayDSTl():Observable<Theloai[]>{
    return this.http.get<Theloai[]>(this.APIUrl + "theloais");
  }

  ThemTl(addTl:Theloai): Observable<Theloai> {
    addTl.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Theloai>(this.APIUrl + "theloais", addTl);
  }

  SuaTl(id:string, editTl:Theloai):Observable<Theloai>{
    return this.http.put<Theloai>(this.APIUrl + "theloais/" + id, editTl);
  }

  XoaTl(id:string):Observable<Theloai>{
    return this.http.delete<Theloai>(this.APIUrl + "theloais/" + id);
  }

  GetIdTl(id: string):Observable<Theloai>{
    return this.http.get<Theloai>(this.APIUrl + "theloais/" + id);
  }

  //Login-signup
  signUp(userObj: any): Observable<any> {
    return this.http.post<any>(this.APIUrl + "User/register", userObj);
  }

  Login(userObj: any): Observable<any> {
    return this.http.post<any>(this.APIUrl + "User/authenticate", userObj)
      .pipe(
        map(response => {
          if (response && response.token) {
            this.isAuthenticatedValue = true;
            this.isLoggedInSubject.next(true);
            this.userNameSubject.next(response.userName); // Cập nhật BehaviorSubject
          }
          return response;
        })
      );
  }

  logout(): void {
    this.isLoggedInSubject.next(false);
    this.userNameSubject.next(""); // Cập nhật BehaviorSubject
    // Thêm logic đăng xuất nếu cần thiết
  }
}
