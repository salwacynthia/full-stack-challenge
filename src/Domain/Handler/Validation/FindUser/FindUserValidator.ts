import * as Joi from 'joi';

// !Challenge: Input Validation

const findUserSchema = Joi.object({
  take: Joi.number().integer().min(1).required(),
  page: Joi.number().integer().min(1).required(),
});

export class FindUserValidator {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public validate(payload: { take: number; page: number }): any {
    return findUserSchema.validate(payload);
  }
}
