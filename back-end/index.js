import express from 'express';
import mongoose from 'mongoose';
import path from 'path';

const uri = 'mongodb+srv://ananyakoduru22:wJJdnMfiXTaPEyFs@cluster0.pjmeg.mongodb.net/dormDesigner?retryWrites=true&w=majority'; 

async function startServer(req, res) {
  try {
    if (!mongoose.connection.readyState) {
      await mongoose.connect(uri);
      console.log("Connected to MongoDB!");
    }

    const layoutController = (await import('./controllers/layoutController.js')).default;

    const app = express();
    app.use(express.json()); 
    const PORT = process.env.PORT || 5000;

    app.use('/api', layoutController);

    // Serve static files from React app
    app.use(express.static(path.join(__dirname, '../dorm-designer/build')));

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../dorm-designer/build', 'index.html'));
    });

    // Handle the request
    app(req, res);
  } catch (error) {
    console.error("Error in serverless function:", error);
    res.status(500).json({ error: "Server error" });
  }
}

export default startServer;
