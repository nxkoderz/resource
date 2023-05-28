import express, { Request, Response, Router } from 'express'

const router: Router = express.Router()

router.get('/all', (req: Request, res: Response) => {
    console.log('get all users')
    res.send('hey there')
})

router.post('/register', (req: Request, res: Response) => {
    res.send('hey there')
})

export default router;