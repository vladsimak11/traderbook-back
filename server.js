const mongoose = require("mongoose");

const app = require("./src/app");

app.get('/', (req, res) => {
   res.send('Hello World!');
  });

const { DB_HOST, PORT = 3003} = process.env;

mongoose.set('strictQuery', true);

mongoose.connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Database connection successful! Port: ${PORT}`)
    });
  })
  .catch( error => {
    console.log(error.message);
    process.exit(1);
  });