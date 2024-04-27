import express from "express";
import bodyParser from "body-parser"; // Update for newer versions if needed
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// Database integration (replace with your actual database connection and logic)
let posts = []; // Replace with database interaction

app.use(express.static("public"));

// Update for newer body-parser versions (check documentation for specific parsers)
app.use(bodyParser.urlencoded({ extended: true })); // Example for URL-encoded data

// Route to handle form submissions for creating new blog posts
app.post("/publish", (req, res) => {
  const { title, content } = req.body; // Extract data from form submission

  // Replace with database logic to save the post
  const newPost = { title, content };
  posts.push(newPost); // Temporary for demonstration, replace with database interaction

  // Redirect to the home page to show the list of posts
  res.redirect('/');
});

// Route to display the homepage
app.get('/', (req, res) => {
  // Replace with database logic to retrieve posts
  res.render('index.ejs', { posts });
});

// Route to display the post creation form
app.get('/posts', (req, res) => {
  res.render('posts.ejs'); // Assuming "posts.ejs" contains the form
});

app.listen(port, () => {
  console.log(`My server is running on port ${port}.`);
});