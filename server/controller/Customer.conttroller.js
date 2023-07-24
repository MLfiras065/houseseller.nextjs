const {
  Customer,
  
} = require("../database/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const selectAllCustomer = (req, res) => {
  Customer.findAll({})
    .then((result) => {
      res.json(result);
    })
    .catch((err) => console.log(err));
};
const selectCustomer = (req, res) => {
  Customer.findAll({ where: { id: req.params.id } })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => console.log(err));
};
const registerCustomer = (req, res) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hashedPassword) => {
      const customer = new Customer({
        image: req.body.image,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashedPassword,
        role: req.body.role,
      });
      customer.save().then((result) => {
        res.status(201).send(result);
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
const logInCostumer = (req, res) => {
  Customer.findAll({ where: { email: req.body.email } }).then((user) => {
    bcrypt
      .compare(req.body.password, user.password)
      .then((passCheck) => {
        if (!passCheck) {
          return res.status(400).json({ message: "Password wrong" });
        }
        const token = jwt.sign(
          {
            id: user.dataValues._id,
            email: user.dataValues.email,
            role:user.dataValues.role
          },
          "RandomToken",
          { expireIn: "300h" }
        );
        const decode=jwt.decode(token)
        req.signedCookies.token=token
      
        res.status(200).json({ email: user.dataValues.email, token:token,decode:decode });
      })
      .catch((err) => {
        console.log(err);
      });
  });
};
//   const addCollection=(req,res)=>{
//     const { location, numbOfrooms, numbOfBathroom, area, price } = req.body;
//     House.create({ location, numbOfrooms, numbOfBathroom, area, price })
//       .then((result) => {
//         res.json(result);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }
module.exports = {
  logInCostumer,
  registerCustomer,
  selectAllCustomer,
  selectCustomer,
  //   addCollection,
};
