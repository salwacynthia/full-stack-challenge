import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  public sendMail(message): void {
    console.log(message);
  }
}
