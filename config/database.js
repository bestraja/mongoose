
const mongoose=require("mongoose")

const connectDatabase=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI )
        console.log("db connect");
    } catch (error) {
        console.log(error);
    }
}

module.exports=connectDatabase