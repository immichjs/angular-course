import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.sass'],
})
export class SignComponent {
  public formAuth: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  public messageError!: string;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  public submitForm() {
    if (this.formAuth.valid) {
      this.authService.sign(this.formAuth.value).subscribe({
        next: (response) => {
          this.formAuth.reset();

          return response;
        },
        error: (error) => (this.messageError = error),
      });
    }
  }
}
