const { Admin, User, Customer, Category } = require("../database/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const selectAllAdmin = (req, res) => {
  Admin.findAll({})
    .then((result) => {
      res.json(result);
    })
    .catch((err) => console.log(err));
};
const registerAdmin = (req, res) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hashedPassword) => {
      const admin = new Admin({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashedPassword,
        role:req.body.role
      });
      admin.save().then((result) => {
        res.status(201).send(result);
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
const logInAdmin = (req, res) => {
  Admin.findAll({ where: { email: req.params.email } }).then((user) => {
    bcrypt
      .compare(req.body.password, user.password)
      .then((passCheck) => {
        if (!passCheck) {
          return res.status(400).json({ message: "Password wrong" });
        }
        const token = jwt.sign(
          {
            id: user._id,
            email: user.email,
            role:user.role
          },
          "RandomToken",
          { expireIn: "50000h" }
        );
        const decode=jwt.decode(token)
        res.status(200).json({ email: user.email, token:token,decode:decode });
      })
      .catch((err) => {
        console.log(err);
      });
  });
};
const acceptUser = async (req, res) => {
  const updateUser = await User.update(
    { accepted: true },
    { where: { id: req.params.id } }
  );
  try {
    res.json(updateUser);
  } catch (error) {
    console.log(error);
  }
};
const acceptCustomer = async (req, res) => {
  const updateCustomer = await Customer.update(
    { accepted: true },
    { where: { id: req.params.id } }
  );
  try {
    res.json(updateCustomer);
  } catch (error) {
    console.log(error);
  }
};
const deleteCustomer = (req, res) => {
  Customer.destroy({ where: { id: req.params.id } })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
const deleteUser = (req, res) => {
  User.destroy({ where: { id: req.params.id } })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
const addCategory = (req, res) => {
  const { name, description } = req.body;
  Category.create({ name, description })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = {
  logInAdmin,
  registerAdmin,
  selectAllAdmin,
  acceptCustomer,
  acceptUser,
  deleteCustomer,
  deleteUser,
  addCategory,
};
