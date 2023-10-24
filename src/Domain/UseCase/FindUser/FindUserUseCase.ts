import { FindUserAccessControl } from 'Domain/Handler/AccessControl/FindUser/FindUserAccessControl';
import { FindUserValidator } from 'Domain/Handler/Validation/FindUser/FindUserValidator';
import { UserModel } from 'Domain/Model/User/UserModel';
import { UserRepository } from 'Infrastructure/Repository/User/UserRepository';

// !Challenge: UseCase
export class FindUserUseCase {
  private readonly validator: FindUserValidator;
  private readonly accessControl: FindUserAccessControl;
  private readonly userRepository: UserRepository;
  constructor() {
    this.validator = new FindUserValidator();
    this.accessControl = new FindUserAccessControl();
    this.userRepository = new UserRepository([]);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  execute(payload: { page: number; take: number; name:string }, apiKey:string): {
    total: number;
    models: UserModel[];
  } {
     // Validating payload
    if (!!this.validator.validate(payload)) {
      throw new Error('Invalid payload');
    }

    // Checking access control
    if (!this.accessControl.check(apiKey)) {
      throw new Error('Access denied');
    }

    // Retrieving users from the repository
    let users = this.userRepository.findUser(payload);

    // Calculating the total number of users
    const totalUsers = users.length;

    //filterring using name
    if (payload.name) {
      const nameFilter = payload.name.toLowerCase();
      users = users.filter((user) => user.name.toLowerCase().includes(nameFilter));
    }


    return {
      total : totalUsers,
      models: users,
    };
  }
}
