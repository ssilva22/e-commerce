const functions = require("firebase-functions");
const express= require("express");
const cors= require("cors");
const stripe = require('stripe')('pk_live_51JBqIgIqENf2a8fSU3g9uh8FSWq6QATcexn0XDLgbXaXLGTt7Q5aSOji4xdpxoTsjG9TIwCeXTxFnEt4aioWusIP004ubXzIA7');

//API


//App config
const app= express();

//Middlewares
app.use(cors({origin:true}));
app.use(express.json());

//API routes
app.get('/', (req,res)=>res.status(200).send("Hello World"))

app.post('/payments/create', async (req,res) => {
    const total=req.query.total;

    console.log('Payment request received fot this amount >>>',total)

    const paymentIntent = await stripe.paymentIntent.create({
        amount:total,
        currency: "usd",
    });

    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
});


//-listen command
exports.api = functions.https.onRequest(app);

//-Example endpoint
//http://localhost:5001/challenge-9205a/us-central1/api

//Start server
//firebase emulators:start