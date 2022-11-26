export const isPasswordbyNicknameQuery = `
  query ListUsers($filter: ModelUserFilterInput, $limit: Int, $nextToken: String) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nickname
        email
        loginedAt
        password
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const LoginQuery = `
  query ListUsers($filter: ModelUserFilterInput, $limit: Int, $nextToken: String) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        createdAt
        verifiedAt
      }
      nextToken
    }
  }
`;

export const updateLoginedAtQuery = `
  mutation UpdateUser($input: UpdateUserInput!, $condition: ModelUserConditionInput) {
    updateUser(input: $input, condition: $condition) {
      id
      nickname
      email
      loginedAt
      password
      createdAt
      updatedAt
    }
  }
`;

export const updateUserQuery = /* GraphQL */ `
  mutation UpdateUser($input: UpdateUserInput!, $condition: ModelUserConditionInput) {
    updateUser(input: $input, condition: $condition) {
      id
      nickname
      email
      loginedAt
      verifiedAt
      createdAt
    }
  }
`;