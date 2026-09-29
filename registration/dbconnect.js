// STEP-1 : IMPORT MONGOOSE PACKAGE
const mongoose = require('mongoose');

// Database Connection URL
// const uri = "mongodb+srv://channatalie005_db_user:natalie123@cluster0.cs6zg3l.mongodb.net/aupp2026cn?appName=Cluster0";
//OR
const uri = "mongodb://channatalie005_db_user:natalie123@ac-lzqzl81-shard-00-00.cs6zg3l.mongodb.net:27017,ac-lzqzl81-shard-00-01.cs6zg3l.mongodb.net:27017,ac-lzqzl81-shard-00-02.cs6zg3l.mongodb.net:27017/aupp2026cn?ssl=true&replicaSet=atlas-evr51t-shard-0&authSource=admin&appName=Cluster0"

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    // STEP-2 : ESTABLISH CONNECTION WITH MONGODB DATABASE THROUGH MONGOOSE
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    //await mongoose.disconnect(); <- delete
  }
}
run().catch(console.dir);

// STEP-3 : EXPORT MODULE mongoose because we need it in other JS file
module.exports = mongoose;
