import express from "express";

const app = express();

// app.get("/", (req, res) => {
//   res.send("Server is ready");
// });

// get a list of 5 jokes

app.get('/jokes',(req,res) =>{
    const jokes = [
        {
            id:1,
            title:'A joke',
            content: 'This is a joke'
        },
        {
            id:2,
            title:'Another joke',
            content: 'This is Another joke'
        },
        {
            id:3,
            title:'Third joke',
            content: 'This is Third joke'
        },
        {
            id:4,
            title:'Fourth joke',
            content: 'This is Fourth joke'
        },
        {
            id:5,
            title:'Fifth joke',
            content: 'This is Fifth joke'
        },
    ];
    res.send(jokes)
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
