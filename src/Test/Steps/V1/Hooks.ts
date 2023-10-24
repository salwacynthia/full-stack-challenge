import { after, afterAll, before, beforeAll, binding } from 'cucumber-tsflow';

@binding([])
class MySteps {
  constructor() {}

  @beforeAll()
  public static beforeAllScenarios(): void {}

  @afterAll()
  public static afterAllScenarios(): void {
    // ...
  }

  @before()
  public beforeScenario(): void {}

  @after()
  public afterScenario(): void {
    // ...
  }
}

export = MySteps;
