import { createCourse } from "./routes"
import express from 'express';


const app = express() 

app.post("/courses", (request, response)=>{
    console.log(request.body);
    const {name} = request.body;
    return response.json({name});

});

app.get("/", createCourse); 

app.listen(3333, () => console.log("Server is running!")); 