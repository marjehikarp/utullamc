interface User {
  name: string;
}

const user: User = {
  name: "Jobayer"
};

function greet(user: User): string {
  return `Hello, ${user.name}!`;
}

console.log(greet(user));
