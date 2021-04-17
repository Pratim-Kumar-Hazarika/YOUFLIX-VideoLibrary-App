const Users = [
  {
    name: "pratim",
    password: "123"
  },
  {
    name: "john",
    password: "123"
  },
  {
    name: "aloo",
    password: "123"
  }
];

const findByUserName = (username) => {
  return Users.find((item) => item.name === username);
};

export function fakeFetchApi(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userFound = findByUserName(username);
      console.log({ userFound });
      if (userFound.password === password) {
        resolve({ success: true, status: 200 });
      } else {
        reject({ success: false, status: 401 });
      }
    }, 3000);
  });
}
