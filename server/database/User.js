const { Sequelize, DataTypes } = require("sequelize")

const sequelize = new Sequelize("houseseller","root", "0657firasML", {
    host: "127.0.0.1",
    dialect: "mysql",
    

  });
   sequelize.query('CREATE DATABASE IF NOT EXISTS houseseller ').then(()=>{
    console.log("data mawjouda");
   }).catch((err)=>console.log(err))
const func=()=>{sequelize.authenticate().then(()=>{
    console.log("data");
}).catch((err)=>{console.log(err)})}
 
const Customer = sequelize.define("Customer", {

  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
},
accepted:{type:DataTypes.BOOLEAN,
defaultValue:false},
role:{type:DataTypes.STRING,
},
CollectionId:{type:DataTypes.INTEGER}
});
sequelize.sync().then(() => {
    console.log('customer table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});
const Admin = sequelize.define("Admin", {
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  UserId:{type:DataTypes.INTEGER},
  CustomerId:{type:DataTypes.INTEGER}
});
const User = sequelize.define("User", {
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  accepted:{type:DataTypes.BOOLEAN,
  defaultValue:false},
  role:{type:DataTypes.STRING,
  },
  collectionId:{type:DataTypes.INTEGER}
});

const House = sequelize.define("House", {
  image:{type:DataTypes.STRING,
  allowNull:false},
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  numbOfrooms: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  numbOfBathroom: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  area: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  categoryId:{type:DataTypes.INTEGER},
userId:{type:DataTypes.INTEGER}  
});
const Category = sequelize.define("Category", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: { type: DataTypes.STRING },
  houseId:{type:DataTypes.INTEGER}
});

const Collection = sequelize.define("Collection", {
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
  customerId:{type:DataTypes.INTEGER},

});

Customer.hasMany(Collection,{foreignKey:"customerId"});
Collection.belongsTo(Customer,{foreignKey:"customerId"});
User.hasMany(Collection,{foreignKey:"userId"})
Collection.belongsTo(User,{foreignKey:"userId"})
Category.hasMany(House,{foreignKey:"categoryId"});
House.belongsTo(Category,{foreignKey:"categoryId"});
User.hasMany(House,{foreignKey:"userId"});
House.belongsTo(User,{foreignKey:"userId"});
Category.hasMany(House,{foreignKey:"categoryId"});
House.belongsTo(Category,{foreignKey:"categoryId"});
Admin.hasMany(Customer,{foreignKey:"adminId"})
User.hasMany(Admin,{foreignKey:"adminId"})
Admin.belongsTo(User,{foreignKey:"adminId"})
// Customer.belongsTo(Admin)
// Collection.hasMany(House,{through:"User"})
// House.belongstoMany(Collection)


module.exports = { User, House, Admin, Customer, Category, Collection,func,sequelize };
