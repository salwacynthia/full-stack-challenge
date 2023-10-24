import * as Joi from 'joi';

// !Challenge: Input Validation
export class CreateUserValidator {
  CreateUserValidator(payload: { name: string; email: string; }) {
    throw new Error('Method not implemented.');
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public validate(payload: { name: string; email: string }): any {
    Joi;
  }
}
