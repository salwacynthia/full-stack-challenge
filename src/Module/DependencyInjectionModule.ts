import { Module } from '@nestjs/common';
import { UserController } from 'Application/Controller/User/UserController';
import { CreateUserUseCase } from 'Domain/UseCase/CreateUser/CreateUserUseCase';
import { FindUserUseCase } from 'Domain/UseCase/FindUser/FindUserUseCase';


// !Challenge: Dependency Injection
@Module({
  imports: [CreateUserUseCase],
  controllers: [UserController],
  providers: [FindUserUseCase],
})
export class DependencyInjectionModule {}



//Functional Programming 

//const UserController = UserController();

//const DependencyInjectionModule = DependencyInjectionModule({
  //controllers: [UserController],
  //providers: [],
//}); 
