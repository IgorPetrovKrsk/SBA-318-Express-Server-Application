import express from 'express';
import error from './error/error.mjs';

//setup
const app = express();
const PORT = 3000 || 3001;


//middleware
app.use(express.json());

app.get('/',(req,res,next) =>{
  //res.json({test:'test'});
  next();
})

// 404 Middleware
app.use((req, res, next) => {
  next(error(404, 'Resource Not Found'));
});

//error handling
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({ error: err.message });
  });

  
  // Listener
app.listen(PORT, () => {
    console.log(`Server started on Port: ${PORT}`);
  });