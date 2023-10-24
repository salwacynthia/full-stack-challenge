import { CreateUserAccessControl } from 'Domain/Handler/AccessControl/CreateUser/CreateUserAccessControl';
import { CreateUserValidator } from 'Domain/Handler/Validation/CreateUser/CreateUserValidator';
import { EventService } from 'Domain/Service/EventService/EventService';
import { MailService } from 'Domain/Service/MailService/MailService';

// !Challenge: UseCase
export class CreateUserUseCase {
  private readonly validator: CreateUserValidator;
  private readonly accessControl: CreateUserAccessControl;
  private readonly mailService: MailService;
  private readonly eventService: EventService;
  
  
  constructor() {
    this.validator = new CreateUserValidator();
    this.accessControl = new CreateUserAccessControl();
    this.mailService = new MailService();
    this.eventService = new EventService();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  execute(payload: { name: string; email: string }, apiKey : string): void {
    this.mailService.sendMail('Send another Mail to Jeff Bezos!');

    //validating payload

    if (!this.validator.validate(payload)){
      throw new Error('invalid user data')
    }

    //checking access control
    if(!this.accessControl.check(apiKey)){
      throw new Error('Access denied')
    }

    //event checking
    this.eventService.dispatch('userCreated');
  }
}
