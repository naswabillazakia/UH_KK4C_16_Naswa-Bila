const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    nama: {
        type: String,
        require: [true,'silahkan isikan nama'],
        unique: true
    },
    email:{
        type: String,
        require: true,
        unique:  true,
        match: [/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/, 'Silahkan isikan email valid!']

    }
})

module.exports = mongoose.model('users', UserSchema)