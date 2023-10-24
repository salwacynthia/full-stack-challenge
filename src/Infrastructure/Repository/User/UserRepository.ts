import { UserModel } from 'Domain/Model/User/UserModel';
import { UserEntity } from 'Infrastructure/Entity/UserEntity';

export class UserRepository {
  public allUsers : UserModel[]
  constructor(allUsers : UserModel[]) {
    this.allUsers = allUsers
  }
  public createUser(props: {
    email: string;
    name: string;
  }): Promise<UserEntity> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          email: props.email,
          name: props.name,
          createdAt: new Date().getTime(),
        });
      }, 1000);
    });
  }

  // !Challenge: Pagination
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public findUser(props: { page: number; take: number }):UserModel[]  {

  // Calculate the starting index
  const startIndex = (props.page - 1) * props.take;
  // Calculate the ending index
  const endIndex = startIndex + props.take;

  // Retrieve user data within therange
  const paginatedUsers = this.allUsers.slice(startIndex, endIndex);

  return paginatedUsers;
  }
}
