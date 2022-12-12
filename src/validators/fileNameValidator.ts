import { Request,Response , NextFunction } from "express";
import fs from 'fs';
import path from 'path';

const validateImage = (req: Request, res: Response,next: NextFunction) => {
    
    const fileName = req.query.filename;
    const imageHeight = req.query.height;
    const imageWidth = req.query.width;
    const filePath = path.join(__dirname,"..","..","images");
    
    if(Object.keys(req.query).length === 0){
        return res.status(200).send("this is the home directory of the api")
    }
    try {
        
        
        
       const image =  fs.readFile(path.join(filePath,fileName +".jpg" as string),(err,data)=>{
        if(!err){
            if(isNaN(Number(imageHeight))){
                console.log("this is not a number") ;
                console.log(typeof Number(imageHeight));
             return   res.status(406).send(`please enter a valid number "${imageHeight}" is not a number`);
            }
            if(isNaN(Number(imageWidth))){
                console.log("this is not a number") ;
                console.log(typeof Number(imageWidth));
              return   res.status(406).send(`please enter a valid number "${imageWidth}" is not a number`);
            }
            if(Number(imageHeight)>0 && Number(imageWidth)>0 ) {
            next();
           
            console.log("no error");
                }
                else{
                    return   res.status(406).send(`please enter  a positive value`);

                }
            
            
            }
        else{
         return   res.status(404).send("file not found");
        }
       });
        
        // res.status(200);
        // res.type('jpg');
        // res.send(image);
        
       
        
       
        } catch (e) {
        return res.status(400) ;
    }
    
    
}

export {validateImage}