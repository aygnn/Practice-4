const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require("mongoose");
const dotenv=require('dotenv')

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config()

PORT=process.env.PORT
url=process.env.CONNECTION.replace('<password>',process.env.PASSWORD)
const Schema = mongoose.Schema;

const flowerproduct=new Schema({
    image:{type:String,required:true},
    name:{type:String,required:true},
    price:{type:Number,required:true},
    stock:{type:Number,required:true},

}
)

const Flowers = mongoose.model("flowers", flowerproduct);
mongoose.set('strictQuery', true);
mongoose.connect(url,(err)=>{
    if(!err){
        app.listen(PORT,()=>{
            console.log('SERVER WORKING');
        })
    }

})

app.get('/', (req, res) => {
    res.send('HELLO');
  });

  //post product

app.post('/flowers',(req,res)=>{
    let newflower=new Flowers({
        image:req.body.image,

        name:req.body.name,
        price:req.body.price,
        stock:req.body.stock
    })
    newflower.save()
    res.send({message:'flower added'})
})

//get flowers

app.get('/flowers',(req,res)=>{
   Flowers.find({},(err,doc)=>{
    if(!err){
        res.send(doc)
    }
    else{
        res.status(404).json({message:err})
    }
   })
})

//get by id


app.get('/flowers/:id',(req,res)=>{
    const {id}=req.params
    Flowers.findById(id,(err,doc)=>{
     if(!err){
        if(doc){

            res.send(doc)
        }
        else{
            res.send({message:'flower not found'})

        }
     }
     else{
         res.status(404).json({message:err})
     }
    })
 })

 //delete 
  
app.delete('/flowers/:id',(req,res)=>{
    const {id}=req.params
    Flowers.findByIdAndDelete(id,(err)=>{
     if(!err){
        res.send({message:'flower deleted'})

        }
     else{
         res.status(404).json({message:err})
     }
    })
 })

 

