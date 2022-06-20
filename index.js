import express, { json } from "express";
import cors from "cors";

const app = express()

app.use(cors());
app.use(json());

const users = [];
const tweets = [];

app.post("/sign-up", (req, res)=> {
    users.push(
    {
        username: req.body.username,
        avatar: req.body.avatar,
    });
    res.send("OK");
});

app.post("/tweets", (req, res) => {
    const tweet = req.body;
    tweets.push(tweet);
    res.send("OK");
  });
  
  app.get("/tweets", (req, res) => {
    const tenTT = [];

    if (tweets.length > 0) {
      for (let i = tweets.length - 1; i > tweets.length - 11 && i >= 0; i--) {

        const body = {
          username: tweets[i].username,
          avatar: users.find((item) => item.username === tweets[i].username).avatar,
          tweet: tweets[i].tweet,
        };
        tenTT.push(body);
      }
    }
    res.send(tenTT);
  });

app.listen(5000, () => console.log('server running - port 5000'));