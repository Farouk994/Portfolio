const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended : true} ));
app.use(express.json());

const PORT = process.env.PORT || 4000;

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

app.listen(PORT, ()=>{
    console.log(" ===> Listening to PORT " + PORT)
});