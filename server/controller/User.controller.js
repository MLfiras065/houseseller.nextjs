const { User, House } = require("../database/User");
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");


const selectAllUsers = async (req, res) => {
  const w = await User.findAll({});

  try {
    res.json(w);
  } catch (error) {
    console.log(error);
  }
};
const getUser= async (req,res)=>{
  const get=await User.findOne({where:{email:req.params.email}})
  try {
    res.json(get)
  } catch (error) {
    console.log(error);
  }
}
const registerUser = (req, res) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hashedPassword) => {
      const user = new User({
        id: req.params.id,
        image: req.body.image,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashedPassword,
        role:req.body.role
        
      });
      user.save().then((result) => {
        console.log("hello",req.body);
        res.status(201).json(result);
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
const logIn = (req, res) => {
  User.findOne({ where: { email: req.body.email } }).then((user) => {
    console.log("user",user.dataValues.password)
    bcrypt
      .compare(req.body.password, user.dataValues.password)
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
          { expiresIn: "500000h" }
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
const getHome = async (req, res) => {
  const w = await House.findAll();
  try {
    res.json(w)
  } catch (error) {
    console.log(error);
  }
};
const AddHome = (req, res) => {
  const { image,location, numbOfrooms, numbOfBathroom, area, price } = req.body;
  House.create({ image,location, numbOfrooms, numbOfBathroom, area, price })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
const updateHome = async (req, res) => {
  const { image,location, numbOfrooms, numbOfBathroom, area, price } = req.body;
  console.log("hell",req.body)
  House.update(
    { image,location, numbOfrooms, numbOfBathroom, area, price },
    { where: { id: req.params.id } }
  )
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log(error);
    });
};
const deleteHome=(req,res)=>{
  House.destroy({where:{id:req.params.id}}).then((result)=>{
    res.json(result)
  }).catch((err)=>{
    console.log(err);
  })
}

module.exports = {
  deleteHome,
  selectAllUsers,
  getUser,
  registerUser,
  logIn,
  AddHome,
  updateHome,
  getHome,
};
