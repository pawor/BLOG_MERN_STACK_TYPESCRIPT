import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please add your name"],
        trim:true,
        maxLength:[20,"Your name is up to 20 chars long."]
    },
    account:{
        type:String,
        required:[true, "Please add your email or phone"],
        trim:true,
        unique:true
    },
    password:{
        type:String,
        required:[true, "Please add your password"],
        trim:true
    },
    avatar:{
        type:String,
        default:'https://res.cloudinary.com/sut/image/upload/v1634407261/istockphoto-1323490923-170667a_kzjwms.jpg'
    },
    type:{
        type:String,
        default:'normal'
    }
},{
    timestamps:true
})
export default mongoose.model('User',userSchema)