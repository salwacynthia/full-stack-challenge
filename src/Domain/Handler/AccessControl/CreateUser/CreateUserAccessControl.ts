// !Challenge: Access Control
export class CreateUserAccessControl {
  public check(apiKey : string): boolean {
    const expectedApiKey = process.env.API_KEY;

    return apiKey === expectedApiKey;

  }
}
