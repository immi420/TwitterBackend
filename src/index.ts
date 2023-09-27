import express from 'express';
import userRoutes from './routes/userRoutes';
import tweetRoutes from './routes/tweetRoutes';

const app = express();
app.use(express.json());
app.use('/user',userRoutes);
app.use('/tweet',tweetRoutes);

//home
app.get('/', (req, res) => {
    res.send("Hello World new app");
});


app.listen(3000, () => {
    console.log('Server ready at : 3000');
})


