import {
  Body,
  Controller,
  Get,
  Injectable,
  Post,
  Request,
  Response,
  Version,
} from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiQuery } from '@nestjs/swagger';
import { CreateUserUseCase } from 'Domain/UseCase/CreateUser/CreateUserUseCase';
import { FindUserUseCase } from 'Domain/UseCase/FindUser/FindUserUseCase';
import { CreateUserRequestBody } from './Request/User/CreateUserRequest';
import { FindUserRequest } from './Request/User/FindUserRequest';
import { CreateUserResponse } from './Response/User/CreateUserResponse';
import { FindUserResponse } from './Response/User/FindUserResponse';

@Injectable()
@Controller('/user')
export class UserController {
  constructor(
    private readonly findUserUseCase: FindUserUseCase,
    private readonly createUserUseCase: CreateUserUseCase,
  ) {}

  @Version('1')
  @Post('')
  @ApiBody(CreateUserRequestBody)
  @ApiQuery({ name: 'apiKey', required: true }) 
  @ApiOkResponse({ type: CreateUserResponse })
  createUser(@Body() body, @Response() res, @Request() req  ) {

    const apiKey = req.query.apiKey;

    return res.status(201).send(
      this.createUserUseCase.execute({
        name: body.name,
        email: body.email,
      }, apiKey),
    );
  }

  // !Challenge: Filter
  @Get('')
  @ApiQuery(FindUserRequest.take)
  @ApiQuery(FindUserRequest.page)
  @ApiQuery({name:'apiKey', required : true})
  @ApiOkResponse({ type: FindUserResponse })
  findUser(@Request() req, @Response() res) {

    const apiKey = req.query.apiKey;
    const nameFilter = req.query.name;

    return res.status(200).send(
      this.findUserUseCase.execute({
        take: req.query.take,
        page: req.query.page,
        name:nameFilter
      }, apiKey,),
    );
  }
}
