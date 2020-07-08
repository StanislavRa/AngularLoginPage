import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../../shared/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../../auth/auth.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {

    // Create observer object
    const loginObserver = {
      next: x => console.log('User logged in'),
      error: err => console.log(err)
    };

    this.authService.login(f.value).subscribe(loginObserver);
  }
}
