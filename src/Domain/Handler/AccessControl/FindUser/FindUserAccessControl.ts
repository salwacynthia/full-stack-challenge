// !Challenge: Access Control
export class FindUserAccessControl {
  public check(apiKey : string): boolean {
    const expectedApiKey = process.env.API_KEY;

    return apiKey === expectedApiKey;

  }
}
