import express from "express";
import bodyParser from "body-parser"; // Update for newer versions if needed
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// Database integration (replace with your actual database connection and logic)
let posts = [
    { id: 1, title: "Post 1", content: "This is my first post" },
    { id: 2, title: "Post 2", content: "This is my second post" },
]; 

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
    res.render('posts.ejs', { posts }); // Render 'post.ejs' and pass 'posts'
  });
  
// Route to handle post deletion
app.delete('/posts/:id', (req, res) => {
  const { id } = req.params;
  const index = posts.findIndex(post => post.id === Number(id));

  if (index !== -1) {
    posts.splice(index, 1); // Remove post from array
  } else {
    res.status(404).send('Post not found!'); // Handle non-existent post
  }

  res.redirect('/'); // Redirect to home page after deletion
});

app.listen(port, () => {
  console.log(`My server is running on port ${port}.`);
});