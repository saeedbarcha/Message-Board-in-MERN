
const mongoose = require("mongoose");

//client url
//  const DB = "mongodb+srv://200402397:bjz9Po7ca8ESRm4h@cluster0.5uqht.mongodb.net/messageboardangular"


const DB = "mongodb+srv://saeed:saeed1122@cluster0.bcpfsne.mongodb.net/mernTodo?retryWrites=true&w=majority";
// const DB = "mongodb://localhost:27017/merntodo";

mongoose.connect(DB,{
    // useCreateIndex:true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useFindAndModify: false
    }).then(() => console.log("Connected to mongodb successfully..."))
      .catch((err)=> console.log("Not connected to DB"+ err));
  