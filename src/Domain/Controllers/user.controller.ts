
import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { CreateUserAccessControl } from 'Domain/Handler/AccessControl/CreateUser/CreateUserAccessControl';
import { FindUserAccessControl } from 'Domain/Handler/AccessControl/FindUser/FindUserAccessControl';
//eta ami korlam

@Controller('users')
export class UserController {
  constructor(
    private createUserAccessControl: CreateUserAccessControl,
    private findUserAccessControl: FindUserAccessControl,
  ) {}

  @Post()
  async createUser(@Req() req, @Res() res) {
    const apiKey = req.headers['X-API-Key'];

    if (this.createUserAccessControl.check(apiKey)) {
    
      res.json({ message: 'User created' });
    } else {

      res.json({ message: 'Unauthorized access' });
    }
  }

  @Get()
  async protectedRoute(@Req() req, @Res() res) {
    const apiKey = req.headers['X-API-Key'];

    if (this.findUserAccessControl.check(apiKey)) {
     
      res.json({ message: 'Access granted' });
    } else {
     
      res.json({ message: 'Unauthorized access' });
    }
  }
}
