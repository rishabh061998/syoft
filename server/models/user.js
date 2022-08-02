const mongoose=require("mongoose")
const jwt=require("jsonwebtoken")
const joi=require("joi")
const passwordComplexity=require("joi-password-complexity")

const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:strinf,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
})

userSchema.methods.generateAuthToken=function(){
const token=jwt.sign({_id:this.id},process.env.JWTPRIVATEKEY,{expiresin:"30d"})
return token
};


const User=mongoose.model("user",userSchema);

const validate=(data)=>{
const schema=joi.object({
    firstName:joi.string().required().label("First Name"),
    lastName:joi.string().required().label("last Name"),
    email:joi.string().required().label("Email"),
  password:passwordComplexity().required().label("Password")
})
return schema.validate(data)
}

module.expor