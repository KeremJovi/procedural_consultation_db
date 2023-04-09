import app from './app'
import 'express-async-errors';


const port = process.env.PORT || 3000;


app.listen(port, () => {
  console.log(`Server runs on port: ${port}`);
})
