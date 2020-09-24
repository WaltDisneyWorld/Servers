import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardAuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private userService: UserService) {}

  async canActivate() {
    await this.userService.init();
    if (!this.userService.user)
      this.router.navigate(['/']);
    return true;
  }  
}
