import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { from, Observable } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private serviceID = environment.EMAILJS_SERVICE_ID;
  private templateID = environment.EMAILJS_TEMPLATE_ID;

  constructor() {
    emailjs.init(environment.EMAILJS_API_KEY);
  }
  public sendEmail(emailData: {
    name: string;
    email: string;
    message: string;
  }): Observable<EmailJSResponseStatus> {
    return from(emailjs.send(this.serviceID, this.templateID, emailData));
  }
}
