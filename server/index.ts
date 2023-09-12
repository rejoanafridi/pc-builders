import express, { Request, Response } from 'express';
import fs from 'fs';
import cors from 'cors'; // Import the cors package

const app = express();
const PORT = process.env.PORT || 3000;

// Use cors middleware to enable CORS
app.use(cors());

app.get('/products', (req: Request, res: Response) => {
  // Read the JSON file
  fs.readFile('products.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    // Parse the JSON data
    const products = JSON.parse(data);

    // Send the products as JSON response
    res.json(products);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
