async function getDataUser(authorized) {
  let userInfo;

  if (authorized) {
    const { fullName, hobby } = await import("./user/index.js");

    userInfo = {
      fullName: fullName,
      hobby: hobby
    };

  } else {
    userInfo = {
      forbidden: 403
    };
  }

  return userInfo;
}

async function viewUser() {
  const authorized = false;
  const user = await getDataUser(authorized);

  console.log(user);
};

viewUser();