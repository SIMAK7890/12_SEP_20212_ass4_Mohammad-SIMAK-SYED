import express,{request,response} from "express";
import mongoose from  "mongoose";
import modelName from "./module.js";
const CONNECTION_STRING= "mongodb://127.0.0.1:27017/modelName?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.5.4"
const app = express ();
app.use(express.json());

app.use("/createuser", async (request,response) => {
    var data = await modelName.create({
      Name:request.body.Name,
       Age:request.body.Age,
       Email:request.body.Email,
       Password:request.body.Password,
       Dob:request.body.Dob,
       Address:request.body.Address
      })
response.status(200).json(data);
  });
 app.use("/updateone", async (req, res) => {
    try {
      let data = await modelName.updateMany(
        { Name: req.body.Name },
        { $set: {Age: req.body.Age},
        }
      );
res.status(200).json(data);
    } catch (error) {
      res.status(401).json(error.message);
    }
  });
  app.use("/delete", async (req, res) => {
    try {
      let data = await modelName.remove(
        { Name: req.body.Name }
         
      );
      res.status(200).json(data);
    } catch (error) {
      res.status(401).json(error.message);
    }
  });

mongoose.connect(CONNECTION_STRING).then(() => {
    app.listen (3030, () => {
    console.log("App is running successfully...");
    });
  })

  .catch((error) => {
    console.log(error);
  });