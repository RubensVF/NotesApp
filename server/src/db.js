import mongoose from 'mongoose';

mongoose
  .connect("mongodb://localhost:27017/notes", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((db) => console.log(`DB is connected`))
  .catch((err) => console.log(err));