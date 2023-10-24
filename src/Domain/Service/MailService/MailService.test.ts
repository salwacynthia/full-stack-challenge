
import { MailService } from './MailService'; 

describe('MailService', () => {
  it('should not send an email when tests are run', () => {
    const mailService = new MailService();
    const sendMailSpy = jest.spyOn(mailService, 'sendMail');

    mailService.sendMail('Test email message');

    expect(sendMailSpy).not.toHaveBeenCalled();

  });
});
