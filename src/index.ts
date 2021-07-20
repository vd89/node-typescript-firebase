import Express, {Request, Response,NextFunction,json} from 'express'

const app = Express()

app.use(json())
app.get('/',(req:Request, res:Response, next:NextFunction) => {
 return res.status(200).json({Message: 'Server is running ', statusCode:200})
})



export default app