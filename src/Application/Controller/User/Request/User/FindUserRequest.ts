export const FindUserRequest = {
  take: {
    name: 'take',
    type: Number,
    required: true,
    description: 'Number of elements to take',
    example: 10,
  },
  page: {
    name: 'page',
    type: Number,
    required: true,
    description: 'Current page number',
    example: 1,
  },
};
