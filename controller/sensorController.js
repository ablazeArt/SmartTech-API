const { MongoClient } = require("mongodb");

// Replace the connection string with your own MongoDB Atlas connection string
const uri = "mongodb+srv://Fuart:8zPOhzqyvOr8P6sx@final-project.kwefovi.mongodb.net/?retryWrites=true&w=majority";

exports.getValueSensors = async (req, res) => {
  try {
    const client = new MongoClient(uri, { useNewUrlParser: true });

    // Connect to the MongoDB Atlas cluster
    await client.connect();

    // Select the database and collection you want to query
    const collection = client.db("test").collection("test-node-red");

    // Fetch all documents in the collection
    const commands = await collection.find({}).toArray();

    // Close the database connection
    client.close();

    // Return the fetched commands
    res.json(commands);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch commands" });
  }
};
