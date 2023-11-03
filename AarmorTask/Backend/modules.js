const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
    id: Number,
    cname: String
});

const bloodSchema = new mongoose.Schema({
    id: Number,
    bldgrp: String
});

const userSchema = new mongoose.Schema({
    id: Number,
    name: String,
    mobile: Number,
    dob: String,
    addrs: String
});

const CityModel = mongoose.model('mycollection3', citySchema);
const BloodModel = mongoose.model('mycollection4', bloodSchema);
const UserModel = mongoose.model('mycollection2', userSchema);

module.exports = { CityModel, BloodModel, UserModel };
