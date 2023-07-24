const express = require("express");
const app = express();
const  cors = require('cors')
const  cookieParser = require('cookie-parser');
const houseRoute=require('../server/routes/house.router')
const CustomerRoute=require('../server/routes/Customer.router')
const adminRoute=require('../server/routes/admin.router')
const PORT = process.env.PORT || 3001
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));
app.use(cors())
app.use('/api/user',houseRoute)
app.use('/api/Customer',CustomerRoute)
app.use('/api/admin',adminRoute)
const {func}=require("../server/database/User")

const initApp = async () => {
    console.log("Testing the database connection..");

    try {
        await func()
        console.log("Connection has been established successfully.");

        app.listen(PORT, () => {
            console.log(`Server is up and running at: http://localhost:${PORT}`);
        });
    } catch (error) {
        console.log( error);
    }
};

initApp()



