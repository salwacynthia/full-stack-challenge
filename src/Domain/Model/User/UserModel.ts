import { UserEntity } from 'Infrastructure/Entity/UserEntity';

export class UserModel {
  public readonly name: string;
  public readonly email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  static fromEntity(entity: UserEntity): UserModel {
    return new UserModel(entity.name, entity.email);
  }
}
