import mongoose, { Schema, model, models } from 'mongoose'

import bcrypt from 'bcrypt'

const userSchema = new Schema({
    name:{
        type:String,
        required:[true, 'Name is requiered.'],
        trim: true,
        minLength: [2, 'Name must be larger then 2 characters'],
        maxLength:[50, 'Name must be less than 50 characters']
    },
    petName:{
        type:String,
        required:[true, 'A Pet Name is requiered'],
        trim: true,
    },
    raza:{
        type:String,
        required:[true, 'Raza is requiered'],
        trim:true
    },
    size:{
        type:String,
        required:[true, 'Size is requiered']
    },
    phone:{
        type:String,
        required:[true, 'Phone is requiered'],
        trim: true
    },
    email:{
        type:String,
        required:[true, 'Email is requiered'],
        trim:true,
        unique: [true, 'The email adress can only be registred once'],
        match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email'],
    },
    password:{
        type:String,
        required:[true, 'password is requiered'],
        minLength:[8, 'password must be at least 8 characters long'],
        match:[ /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,  "Password must contain at least one letter and one number"]
    },
    role:{
        type:String,
        default:'user'
    }    
    })

    //hash the password before saving
    userSchema.pre('save', async function(next){
        if(!this.isModified('password')) return next()
        try {
            const salt = await bcrypt.genSalt(10)
            this.password = await bcrypt.hash(this.password, salt)
            next()
        } catch (error) {
            next(error)
        }
    })

    //compare password method
    userSchema.methods.comparePassword = async function(password){
        try {
            return await bcrypt.compare(password, this.password)
        } catch (error) {
            throw error
        }
    }

    const User = models.User || model('User', userSchema)

    export default User