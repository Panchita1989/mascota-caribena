import mongoose, { Schema } from 'mongoose'

const reservationSchema = new Schema({
    name:{
        type:String,
        required:[true, 'Name is requiered.'],
        trim: true,
        minLength: [2, 'Name must be larger then 2 characters'],
        maxLength:[50, 'Name must be less than 50 characters']
    },
    petName:{
        type:String,
        required:[true, 'Pet Name is requiered.'],
        trim: true,
    },
    raza:{
        type:String,
        required:[true, 'Raza is requiered.'],
        trim: true,
    },
    age:{
        type:Number,
        required:[true, 'Age is requiered.'],
        trim: true,
    },
    email:{
        type:String,
        requiered:[true, 'Email is requiered.'],
        trim:true
    },
    information:{
        type:String,
        required:false,
        trim: true,
    },
    date:{
        type:String,
        
    },
    time:{
        type:String,
        

    }
})

const Reservation = mongoose.models.Reservation || mongoose.model('Reservation', reservationSchema)

export default Reservation