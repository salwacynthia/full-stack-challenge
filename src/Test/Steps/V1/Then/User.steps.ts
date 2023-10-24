/* eslint-disable @typescript-eslint/no-unused-vars */
import { binding, then } from 'cucumber-tsflow';
import { Context } from '../Context';

@binding([Context])
export class UserThenSteps {
  public constructor(protected context: Context) {}

  @then(/The response contains "([^"]*)" users/)
  public theResponseContainsUsers(amount: number) {
    return 'pending';
  }

  @then(/I should get a response with status code "([^"]*)"/)
  public iShouldGetAResponseWithStatusCode(statusCode: string) {
    return 'pending';
  }
}
