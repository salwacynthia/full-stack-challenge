import * as Joi from 'joi';

// !Challenge: Input Validation


const createUserSchema = Joi.object({
  name : Joi.string().required(),
  email: Joi.string().email().required(),
});

export class CreateUserValidator {
  CreateUserValidator(payload: { name: string; email: string; }) {
    throw new Error('Method not implemented.');
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public validate(payload: { name: string; email: string }): any {
    return createUserSchema.validate(payload);
  }
}
