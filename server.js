const express=require('express');
const app=express();

const cors=require('cors');

const corsOptions={
    origin:'http://localhost:5173',
    methods: "GET,POST,PATCH,PUT,DELETE,HEAD",
    credentials:true
}

app.use(cors(corsOptions));
app.options('*',cors());

// establishing database connection
const db=require('./db');

// Body Parser used to extract body from POST request by client
const bodyParser=require('body-parser');
app.use(bodyParser.json());

require('dotenv').config();

const userroutes=require('./routes/userroutes');
app.use('/api2/person',userroutes);

PORT_NO=process.env.PORT || 3000;

app.listen(PORT_NO,()=>{
    console.log("Server running at port 3000!")
})