import { ApiBodyOptions } from '@nestjs/swagger';

export const CreateUserRequestBody: ApiBodyOptions = {
  schema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description: 'Name of User',
        example: 'John Doe',
      },
      email: {
        type: 'string',
        description: 'Email of User',
        example: 'john.doe@gmail.com',
      },
    },
    required: ['name', 'email'],
  },
};
