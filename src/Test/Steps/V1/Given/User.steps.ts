/* eslint-disable @typescript-eslint/no-unused-vars */
import { binding, given } from 'cucumber-tsflow';

// !Challenge

@binding()
export class UserGivenSteps {
  @given(/An existing User with name "([^"]*)" and email "([^"]*)"/)
  public anExistingUserWithNameAndEmail(name: string, email: string) {
    return 'pending';
  }

  @given(/Nothing/)
  public nothing() {
    return 'pending';
  }
}
