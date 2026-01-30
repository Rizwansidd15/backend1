const usermodel = require("../model/user.model");

async function userDetail(req, res) {
  const { firstName, lastName, email, subject, message } = req.body;

  const user = await usermodel.create({
    firstName,
    lastName,
    email,
    subject,
    message,
  });

  res.status(201).json({
    message: "user details got",
    user,
  });
}

module.exports = {
  userDetail,
};
