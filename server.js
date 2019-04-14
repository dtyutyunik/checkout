const express= require('express');
// const cors= require('cors');
// const axios= require('axios');
// const bodyParser= require('body-parser');

const PORT = process.env.PORT || 3001;
const app = express();

require('dotenv').config();
const keySecret = process.env.REACT_APP_Secret_key;

const stripe = require("stripe")(keySecret);


app.use(require("body-parser").text());

app.post("/charge/:amount", async (req, res) => {

  try {
    let {status} = await stripe.charges.create({
      amount: req.params.amount*100,
      currency: "usd",
      description: "Goods bought",
      source: req.body
    });

    res.json({status});
  } catch (err) {
    res.status(500).end();
  }
});


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
