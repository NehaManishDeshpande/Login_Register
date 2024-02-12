const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const EmployeeModel = require('./models/Employee');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/employee");

app.post('/login', (req, res) => {
    const {email, password} = req.body;
    EmployeeModel.findOne({email: email})
    .then(user =>{
        if(user)
        {
            if (user.password === password) {
                res.json("Success")
            }
            else
            {
                res.json("The password is incorrect")
            }
        }
        else
        {
            res.json("No record existed")
        }
    })
});
app.post('/register', (req, res) => {
    // Check if the user already exists in the database based on email
    EmployeeModel.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                return EmployeeModel.findOneAndUpdate({ email: req.body.email }, req.body, { new: true })
            } else {
                return EmployeeModel.create(req.body);
            }
        })
        .then(employee => res.json(employee))
        .catch(err => res.status(400).json({ error: err.message }));
});



app.listen(3001, () => {
    console.log("server is running");
});
