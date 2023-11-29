const express = require('express');
const app = express();
const DarvinSheme =require('../model/sheme')


    const createDarvin=async(req,res)=>{ 

        try{
           const darvin = await DarvinSheme.create(req.body)
          res.status(201).json({ darvin:darvin.toObject()})
        }
     catch(error){
res.status(500).json({msg:error})
     }   
    }  


    const getDarvin =async(req,res)=>{

        const darvinlink=req.query.darvinlink
        
       try{
        const result=await DarvinSheme.findOne({darvinlink:darvinlink})
        if(!result){
            return res.status(404).json({error:'bu linkin karşiliği yok'})
        }

        else 
        res.json({longlink:result.longlink})
       }
       catch(error){
            res.status(500).json({msg:error})
       
    }

    }



    module.exports={getDarvin,createDarvin}


















