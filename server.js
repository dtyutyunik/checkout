const express= require('express');
// const cors= require('cors');
// const axios= require('axios');
// const bodyParser= require('body-parser');
// const keyPublishable = process.env.REACT_APP_Publishable_key;
// const keySecret = process.env.REACT_APP_Secret_key;
// // const stripe = require("stripe")(keySecret);
//
const PORT = process.env.PORT || 3001;
const app = express();

require('dotenv').config();
const keySecret = process.env.REACT_APP_Secret_key;
// const app = require("express")();

const stripe = require("stripe")(keySecret);


app.use(require("body-parser").text());

app.post("/charge", async (req, res) => {

  // console.log(keySecret)
  try {
    let {status} = await stripe.charges.create({
      amount: 4000,
      currency: "usd",
      description: "Goods bought",
      source: req.body
    });

    res.json({status});
  } catch (err) {
    res.status(500).end();
  }
});


//

// app.listen(9000, () => console.log("Listening on port 9000"));
// // app.use(logger('dev'));
//
// const stripe = require("stripe")("sk_test_rHquUhhvJkSIGU4BaeNAcxNE00wfwHvCsR");
//
// app.use(require("body-parser").text());
// // app.use(bodyParser.json());
//
// app.use(cors());
// // app.use(express.json());
//
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
//
//
// // app.get('/checkout/:info', async(req,res)=>{
// //   try{
// //     let data=req.params.info;
// //     res.json(data);
// //
// //
// //
// //   }catch(e){
// //     console.log(e);
// //   }
// // });
//
// app.post("/charge", async (req, res) => {
//    console.log(req.body);
//
//   try {
//     let {status} = await stripe.charges.create({
//       amount: 2000,
//       currency: "usd",
//       description: "An example charge",
//       source: req.body
//     });
//
//     res.json({status});
//   } catch (e) {
//     // res.status(500).end();
//     console.log(e);
//   }
// });
