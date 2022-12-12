import { Request,Response ,NextFunction, response } from "express";
import fs from 'fs';
import path from 'path';
const sharp = require('sharp');
const convertedFilesPath = path.join(__dirname,"..","..","thumbs");
const filesPath = path.join(__dirname,"..","..","images");



async function resize(filename: string,filepath: string,width: number, height: number)  {
    
    console.log(path.join(filepath,filename as string+"_"+height.toString()+"_"+width.toString() +".jpg" as string));
    
    
    const sharpObj =   sharp(path.join(filesPath,filename+".jpg"))
      .resize({height: height,width: width})
      .toFile(path.join(filepath,filename as string+"_"+height.toString()+"_"+width.toString() +".jpg" as string))
      .then((info: string)=>{console.log(info)})
      .catch((err: string)=>{console.log(err)});
    try {
      await sharpObj ;
    }
    catch(err){
      return err ;
    }
  
return ;
}
async function convert(res:Response ,fileName: string,imageHeight: number,imageWidth: number) {
  await resize(fileName,convertedFilesPath,imageWidth,imageHeight);
    try{
        
        const image = await fs.readFile(path.join(convertedFilesPath,fileName as string+"_"+imageHeight.toString()+"_"+imageWidth.toString() +".jpg" as string),(err,data)=>{
            
                
               res.type("jpg");
               return  res.send(data) ;
               
                
            
          
            
           });
    }
    catch(err){
      return res.status(406).send(err);
    }




  }



const convertImage = async (req: Request, res: Response)=>{
    const fileName = req.query.filename;
    const imageHeight = req.query.height;
    const imageWidth = req.query.width;
    
    
    
    try{
        
       
    const convertedImage = await convert(res as Response,fileName as string,Number(imageHeight) as number,Number(imageWidth) as number);
    
}
catch(err){
 res.status(404) ;
}

}
export {convertImage} ;
export default resize ;
