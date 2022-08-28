
const express = require("express");
require("./db/conn");
const cors = require("cors");
var bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 8000;

// importing schemas
const Art =require("./models/artSchema")
const Cars =require("./models/carsSchema")
const Music =require("./models/musicSchema")
const Programming =require("./models/proSchema")
const Sports =require("./models/sportSchema")


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(cors());


// apis
//*************  art api   **********//
// post
app.post("/art", async (req, res)=>{
  try {
      console.log(req.body);
      const addArt= new Art(req.body);
      const addedArt= await addArt.save();
      res.status(201).send(addedArt)
  }catch (err) {
     res.status(400).send(err);
    }
})

// get
app.get("/art", async (req, res)=>{
  try {
      const getArt= await Art.find();
      res.status(201).send(getArt)
  }catch (err) {
     res.status(400).send(err);
    }
})
// put
app.put("/art", async (req, res)=>{
  try {
      const id = req.body._id;
      const updateArt =await Art.updateOne({ _id : id},{

            $set:{
              name: req.body.name,
              artistName: req.body.artistName,
              type: req.body.type,
              price: req.body.price,
              date: req.body.date
           } 
       });
       res.status(201).send(updateArt);
  }catch (err) {
     res.status(400).send(err);
    }
})
// delete
app.delete("/art/:id", async (req, res)=>{
  try {
      const delArt =await Art.findByIdAndDelete(req.params.id);
      res.status(201).send(delArt);
  }catch (err) {
     res.status(400).send(err);
    }
})

//************* car api  **********/
// post
app.post("/car", async (req, res)=>{
  try {
      console.log(req.body);
      const addCar= new Cars(req.body);
      const addedCar= await addCar.save();
      res.status(201).send(addedCar)
  }catch (err) {
     res.status(400).send(err);
    }
})

// get
app.get("/car", async (req, res)=>{
  try {
      const getCar= await Cars.find();
      res.status(201).send(getCar)
  }catch (err) {
     res.status(400).send(err);
    }
})
// put
app.put("/car", async (req, res)=>{
  try {
    const id = req.body._id;

      const updateCar =await Cars.updateOne({ _id : id},{
            $set:{
              name: req.body.name,
              model: req.body. model,
              price: req.body.price,
              speed: req.body.speed,
              date: req.body.date
           }  
       });
       res.status(201).send(updateCar);
  }catch (err) {
     res.status(400).send(err);
    }
})
// delete
app.delete("/car/:id", async (req, res)=>{
  try {
      const delCar =await Cars.findByIdAndDelete(req.params.id);
      res.status(201).send(delCar);
  }catch (err) {
     res.status(400).send(err);
    }
})


//************* music api  **********/
// post
app.post("/music", async (req, res)=>{
  try {
      console.log(req.body);
      const addMusic= new Music(req.body);
      const addedMusic= await addMusic.save();
      res.status(201).send(addedMusic)
  }catch (err) {
     res.status(400).send(err);
    }
})

// get
app.get("/music", async (req, res)=>{
  try {
      const getMusic= await Music.find();
      res.status(201).send(getMusic)
  }catch (err) {
     res.status(400).send(err);
    }
})
// put
app.put("/music", async (req, res)=>{
  try {
    const id = req.body._id;

      const updateMusic =await Music.updateOne({ _id : id},{
            $set:{
              name: req.body.name,
              type: req.body.type,
              instruments: req.body.instruments,
              length: req.body.length,
              date: req.body.date
           }
       });
       res.status(201).send(updateMusic);
  }catch (err) {
     res.status(400).send(err);
    }
})
// delete
app.delete("/music/:id", async (req, res)=>{
  try {
      const delMusic =await Music.findByIdAndDelete(req.params.id);
      res.status(201).send(delMusic);
  }catch (err) {
     res.status(400).send(err);
    }
})


//************* Programming api  **********/
// post
app.post("/pro", async (req, res)=>{
  try {
      console.log(req.body);
      const addPro= new Programming(req.body);
      const addedPro= await addPro.save();
      res.status(201).send(addedPro)
  }catch (err) {
     res.status(400).send(err);
    }
})

// get
app.get("/pro", async (req, res)=>{
  try {
      const getPro= await Programming.find();
      res.status(201).send(getPro)
  }catch (err) {
     res.status(400).send(err);
    }
})

// put
app.put("/pro", async (req, res)=>{
  try {
    const id = req.body._id;

      const updatePro =await Programming.updateOne({ _id : id},{
            $set:{
                language: req.body.language,
                applications: req.body.applications,
                category: req.body.category,
                level: req.body.level,
                duration: req.body.duration
           } 
       });
       res.status(201).send(updatePro);
  }catch (err) {
     res.status(400).send(err);
    }
})

// delete
app.delete("/pro/:id", async (req, res)=>{
  try {
      const delPro =await Programming.findByIdAndDelete(req.params.id);
      res.status(201).send(delPro);
  }catch (err) {
     res.status(400).send(err);
    }
})


//************* Sports api  **********/
// post
app.post("/sports", async (req, res)=>{
  try {
      console.log(req.body);
      const addSport= new Sports(req.body);
      const addedSport= await addSport.save();
      res.status(201).send(addedSport)
  }catch (err) {
     res.status(400).send(err);
    }
})

// get
app.get("/sports", async (req, res)=>{
  try {
      const getSport= await Sports.find();
      res.status(201).send(getSport)
  }catch (err) {
     res.status(400).send(err);
    }
})
// put
app.put("/sports", async (req, res)=>{
  try {
    const id = req.body._id;

      const updateSport =await Sports.updateOne({ _id : id},{
            $set:{
              name: req.body.name,
              country: req.body.country,
              numOfPlayers: req.body.numOfPlayers,
              playIn: req.body.playIn,
              date: req.body.date
           }
       });
       res.status(201).send(updateSport);
  }catch (err) {
     res.status(400).send(err);
    }
})

// delete
app.delete("/sports/:id", async (req, res)=>{
  try {
      const delSports =await Sports.findByIdAndDelete(req.params.id);
      res.status(201).send(delSports);
  }catch (err) {
     res.status(400).send(err);
    }
})


// listening
app.listen(port , ()=>{
    console.log(`connection is setup at ${port}`)
})
