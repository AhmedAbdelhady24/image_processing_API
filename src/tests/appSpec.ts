import {app} from '../app' ;
import supertest from 'supertest';
import resize from '../controllers/imageprocessing';
// it('expect myFunc(5) to equal 25', () => {
//   expect(myFunc(5)).toEqual(25);
// });
import path from 'path';
const request  = supertest(app);

describe('Test endpoint ' , () => {
    it('gets api home endpoint', async () => {
        const response = await request.get('/api');
        expect(response.status).toBe(200);
    }
)});

describe('Test empty get request  ' , () => {
    it('responds with 404 with empty parameters provided', async () => {
        const response = await request.get('/api?filename=&width=&height=');
        expect(response.status).toBe(404);
    }
)});
describe('width  in the correct format  ' , () => {
    it('responds with this input is not a number', async () => {
        const response = await request.get('/api?filename=fjord&width=a&height=500');
        expect(response.status).toBe(406);
    }
)});

describe('height  in the correct format  ' , () => {
    it('responds with this input is not a number', async () => {
        const response = await request.get('/api?filename=fjord&width=500&height=c');
        expect(response.status).toBe(406);
    }
)});

describe('Test fuction ' , () => {
    it('expect transform request to not throw an error', async () => {
        const response = await request.get('/api?filename=fjord&width=400&height=900');
        expect(response.status).toBe(200);
    }
)});

describe('Test fuction ' , () => {
    it('expect transform to not throw an error', async () => {
        const convertedFilesPath = path.join(process.cwd(),"thumbs");
        expect(async () => {
            
            await resize("fjord",process.cwd()+"\\thumbs\\",600,200);
        }).not.toThrow();
    }
)});

