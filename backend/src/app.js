import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();
app.use(cors({
<<<<<<< HEAD
    origin: [process.env.CLIENT_URI , 'http://localhost:5173'],
=======
    origin:  process.env.CLIENT_URI ,
>>>>>>> d8d3b63637e53367864ca77e9f3ea08933e40c83
    methods:"GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true
}));

app.use(express.json({limit:"10kb"}))

app.use(cookieParser())


//import routes
import scholarshipRoutes from './routes/scholarship.routes.js';
import userRoutes from './routes/user.routes.js';
import bookmarkRoutes from './routes/bookmark.routes.js';


// routes dec
app.use('/api/auth', userRoutes);
app.use('/api/scholarships', scholarshipRoutes);
app.use('/api/scholarships', scholarshipRoutes);
app.use('/api/bookmarks', bookmarkRoutes);


export {app};
