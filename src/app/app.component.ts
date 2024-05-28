import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MaterialModule } from './material.module';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MaterialModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private router: Router) { }
  onClickApply() {
    
    this.router.navigate(['/apply']);
  }

  onClickEnquiry() {
    this.router.navigate(['/enquiry']);
  }

  onClickView() {
    this.router.navigate(['/view']);
  }
  title = 'HEALTHBOARD';
}
