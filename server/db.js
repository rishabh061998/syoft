const mongoose=require("mongoose");

module.exports=()=>{
    const connectionParams={
    useNewParser:true,
    useUnifiedTopology:true,
    };
    try{
        mongoose.connect(process.env.DB,connectionParams);
        console.log("connected")
    }catch(error){
console.log(error)
console.log('could not connect to database')
    }
}