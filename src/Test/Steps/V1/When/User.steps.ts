/* eslint-disable @typescript-eslint/no-unused-vars */
import { binding, when } from 'cucumber-tsflow';
import { Context } from '../Context';

@binding([Context])
export class RecipeWhenSteps {
  public constructor(protected context: Context) {}

  @when(/I call the findUser endpoint with page "([^"]*)" and take "([^"]*)"/)
  public async iCallTheGetRecipeEndpointWithId(page: string, take: string) {
    return 'pending';
  }

  @when(
    /I call the createUser endpoint with name "([^"]*)" and email "([^"]*)"/,
  )
  public async iCallTheCreateUserEndpointWithNameAndMail(
    name: string,
    email: string,
  ) {
    return 'pending';
  }
}
