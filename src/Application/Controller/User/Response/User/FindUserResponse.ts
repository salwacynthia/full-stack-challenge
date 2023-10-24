import { ApiProperty } from '@nestjs/swagger';
import { UserModel } from 'Domain/Model/User/UserModel';

export class FindUserResponse {
  @ApiProperty({ type: () => UserModel, isArray: true })
  public readonly models: UserModel[];

  @ApiProperty()
  public readonly total: number;
  constructor(models: UserModel[], total: number) {
    this.models = models;
    this.total = total;
  }
  static from(payload: {
    models: UserModel[];
    total: number;
  }): FindUserResponse {
    return new FindUserResponse(payload.models, payload.total);
  }
}
