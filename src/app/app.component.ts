import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <main>
      <section class="brand-name">
        <h1>欢迎使用学生管理系统</h1>
      </section>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: []
})
export class AppComponent {
  constructor(private authService: AuthService, private router: Router) {
    // 强制导航到登录页
    this.router.navigateByUrl('/login');
  }
}