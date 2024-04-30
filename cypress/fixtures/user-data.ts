type Users = {
  validUser: {
    email: string;
    username: string;
    password: string;
  };
  invalidUsername: {
    username: string;
  };
  invalidEmail: {
    email: string;
  };
  invalidPassword: {
    password: string;
  };
};

export const USERS: Users = {
  validUser: {
    email: "hello@cypress.io",
    username: "newUsername",
    password: "Mypassword1$",
  },
  invalidUsername: {
    username: "takenUsername",
  },
  invalidEmail: {
    email: "hello.cypress.io",
  },
  invalidPassword: {
    password: "pass",
  },
};
