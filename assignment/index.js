const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const port = 3000;

const app = express();

app.use(cors());
app.use(express.json());
mongoose.connect('mongodb+srv://kushalpaliwal75:jl48x8AemkVHkh0H@cluster0.0nphqqn.mongodb.net/');


const userSchema = new mongoose.Schema({
  userFirstName: { type: String, required: true },
  userLastName: { type: String, required: true },
  userPrefName: { type: String },
  userPronoun: { type: String },
  userEmail: { type: String, required: true },
  userPNumber: { type: String },
  userFaxNumber: { type: String },
  userDepartment: { type: String },
  address1: { type: String },
  address2: { type: String },
  city: { type: String },
  province: { type: String },
  country: { type: String },
  zip: { type: String },
  managerFirstName: { type: String },
  managerLastName: { type: String },
  managerEmail: { type: String },
  linkedin: { type: String },
  facebook: { type: String },
  other: { type: String }
});

const User = mongoose.model('User', userSchema);

module.exports = User;


app.post('/submit',(req,res)=>{
  const user = new User(req.body);
  user.save();
  res.status(200).send("User Info saved successfully");

})

app.listen(port,()=>{
  console.log(`Server started at port ${port}`);
})



