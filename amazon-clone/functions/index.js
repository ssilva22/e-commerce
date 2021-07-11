const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const stripe= require('stripe') ('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');


//API

//- App config
const app= express();

//-Middlewares
app.use(cors({origin: true}));
app.use(express.json());


//-API routes
app.get('/',(request,response) => response.status(200).send('Hello World'))

app.post('/payments/create',async (request,response) => {
    const total = request.query.total;

    console.log('Payment request Received Bpoom!!! for this amount',total)

    const paymentIntent = await stripe.paymentIntent.create({
        amount:total,
        currency:"usd",
    });

    response.status(201).send({
        clientSecret:paymentIntent.client_secret,
    })
})




//-Listen command

exports.api = functions.https.onRequest(app);

