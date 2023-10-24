// !Challenge: E2E Testings without sending Mails


// testing if the staging env is down 

import { binding, given, when, then } from 'cucumber-tsflow';
import axios from 'axios';
import {Context} from 'Test/Steps/V1/Context'

@binding()
export class StagingEnvCheck {
  private responseStatus: number;
  public constructor(protected context: Context) {}

  @given(/the staging environment URL is "([^"]*)"/)
  public async givenTheStagingEnvironmentURL(url: string) {
    this.context.environmentURL = url;
  }

  @when(/I send a GET request to the staging url endpoint/)
  public async whenISendGETRequestToHealthCheckEndpoint() {
    try {
      // Make an HTTP GET request 
      const response = await axios.get(`${this.context.environmentURL}/stagingEnv-check`);
      this.responseStatus = response.status;
    } catch (error) {
      this.responseStatus = 0;
    }
  }

  @then(/the response status code should be (\d+)/)
  public thenTheResponseStatusCodeShouldBe(expectedStatusCode: number) {
    expect(this.responseStatus).toBe(expectedStatusCode);
  }
}

// test run er time e email jeno na jay 

