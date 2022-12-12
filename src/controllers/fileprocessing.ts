import { NextFunction, Request,Response } from "express";
import fs from 'fs';
import path from 'path';
import { convertImage } from "./imageprocessing";
const viewImage = (req: Request, res: Response,next: NextFunction) => {

    const fileName = req.query.filename ;
    const imageHeight = req.query.height;
    const imageWidth = req.query.width;
    const convertedFilesPath = path.join(__dirname,"..","..","thumbs");
    
    try {
        
        
        
       const image =  fs.readFile(path.join(convertedFilesPath,fileName as string,"_",imageHeight as string,"_",imageWidth +".jpg" as string),(err,data)=>{
        if(!err){
        
           res.type("jpg");
           return  res.send(data) ;
           
            console.log("no error");
        }
        else{
           
            convertImage(req,res) ;
           
        }
        
       });
        
     
       
        } catch (e) {
        return res.status(400) ;
    }
    
    
}

export {viewImage}