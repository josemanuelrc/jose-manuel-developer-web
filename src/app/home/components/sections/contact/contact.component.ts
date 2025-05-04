import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ScrollSpyDirective } from 'src/app/core/directives/ScrollSpy.directive';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, ScrollSpyDirective],
})
export class ContactComponent {
  private emailService = inject(EmailService);
  private fb = new FormBuilder();

  contactForm = this.fb.nonNullable.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required]],
  });

  sendEmail() {
    this.emailService
      .sendEmail({
        name: this.contactForm.value.name!,
        email: this.contactForm.value.email!,
        message: this.contactForm.value.message!,
      })
      .subscribe(() => {
        console.log('Correo enviado con éxito!');
      });
  }

  isFieldInvalid(field: string) {
    const control = this.contactForm.get(field);
    return control?.invalid && (control.dirty || control.touched);
  }

  getErrorMessage(field: string): string {
    const control = this.contactForm.get(field);

    if (control?.errors?.['required']) {
      return 'Este campo es obligatorio';
    }
    if (control?.errors?.['email']) {
      return 'Introduce un formato de email válido';
    }
    return '';
  }
}
