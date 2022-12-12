import { Router } from "express";
import {validateImage} from '../validators/fileNameValidator';
import { convertImage } from '../controllers/imageprocessing';
import { viewImage } from "../controllers/fileprocessing";
const apiRouter: Router = Router() ;

apiRouter.get("/api",
  validateImage ,
  
  viewImage,
  convertImage
)

export default apiRouter;

