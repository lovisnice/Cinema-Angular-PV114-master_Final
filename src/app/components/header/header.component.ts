import { Component } from '@angular/core';
import { AccountService } from '../account/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public accountService:AccountService){}
  logout(){
    this.accountService.logout().subscribe(res=>{
      this.accountService.deleteToken();
    })
  }

}
