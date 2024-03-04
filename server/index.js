const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer'); 
const CustomerModel = require('./models/Customer');
const AdminModel = require('./models/Admin');
const CardModel = require('./models/Card');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('Uploads'));
mongoose.connect("mongodb://127.0.0.1:27017/employee");


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'Uploads'); 
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); 
    }
});

const upload = multer({ storage: storage });

//FOR CARD
app.post('/AddCard', upload.single('image'), (req, res) => {
    const { DressName, Prize, crossed, off, discription, categories} = req.body;

   
    const parsedCategories = JSON.parse(categories);

    const image = req.file ? req.file.path : null;

    const newCard = new CardModel({
        DressName,
        Prize,
        crossed,
        off,
        discription,
        image, 
        categories: parsedCategories 
    });

    newCard.save()
        .then(card => {
            res.json(card);
        })
        .catch(err => {
            res.status(400).json({ error: err.message });
        });
});


app.delete('/RemoveCard', (req, res) => {
    const { DressName, Prize, crossed, off, discription } = req.body;

    CardModel.findOneAndDelete({ DressName, Prize, crossed, off, discription })
        .then(card => {
            if (!card) {
                return res.status(404).json({ error: "Card not found" });
            }
            res.json({ message: "Card removed successfully" });
        })
        .catch(err => {
            res.status(400).json({ error: err.message });
        });
});


// FOR CUSTOMER
app.post('/login', (req, res) => {
    const {email, password} = req.body;
    CustomerModel.findOne({email: email})
    .then(user =>{
        if(user) {
            if (user.password === password) {
                res.json("Customer Login Success");
            } else {
                res.json("Customer Password is incorrect");
            }
        } else {
            res.json("No Customer record exists with this email");
        }
    })
    .catch(err => res.status(400).json({ error: err.message }));
});

app.post('/register', (req, res) => {
    CustomerModel.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                return CustomerModel.findOneAndUpdate({ email: req.body.email }, req.body, { new: true })
            } else {
                return CustomerModel.create(req.body);
            }
        })
        .then(admin => res.json(admin))
        .catch(err => res.status(400).json({ error: err.message }));
});



//FOR ADMIN
app.post('/AdminLogin', (req, res) => {
    const {email, password} = req.body;
    AdminModel.findOne({email: email})
    .then(user =>{
        if(user) {
            if (user.password === password) {
                res.json("Admin Login Success");
            } else {
                res.json("Admin Password is incorrect");
            }
        } else {
            res.json("No admin record exists with this email");
        }
    })
    .catch(err => res.status(400).json({ error: err.message }));
});

app.post('/AdminRegister', (req, res) => {
    AdminModel.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                return AdminModel.findOneAndUpdate({ email: req.body.email }, req.body, { new: true })
            } else {
                return AdminModel.create(req.body);
            }
        })
        .then(admin => res.json(admin))
        .catch(err => res.status(400).json({ error: err.message }));
});


//GETTING CARDS
// Add a new endpoint for fetching cards based on category
app.get('/cards', (req, res) => {
    const { categories } = req.query;
    CardModel.find({ categories: categories })
        .then(cards => {
            res.json(cards);
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
});



app.listen(3001, () => {
    console.log("server is running");
});