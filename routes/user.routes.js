import { Router } from 'express';

const userRouter = Router();

// Define routes for user-related operations
userRouter.get('/users', (req, res) => res.send({ title: 'GET all users' }));

userRouter.get('/:id', (req, res) => res.send({ title: 'GET users details' }));

userRouter.post('/', (req, res) => res.send({ title: 'CREATE new user' }));

userRouter.put('/:id', (req, res) => res.send({ title: 'UPDATE user' }));

userRouter.delete('/:id', (req, res) => res.send({ title: 'DELETE user' }));

// Export the user router
export default userRouter;