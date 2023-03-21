const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');

const stripe = require('stripe')(
    'sk_test_51MYkNdIy2aWgJDqBYtXz8tY6aIFkw8wA3u7BLyzwX6c8GcHyYhlbR1CGS6WfhGOeEzFasgs4S7ynhz9iV6y81nzv00tt27atUN'
);

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.get('/', (request, response) => response.status(200).send('hello world'));


app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log("Payment Request Recieved for this amount >>> ", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd",
    });

    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

exports.api = functions.https.onRequest(app);

// (http://127.0.0.1:5001/fir-2cb9c/us-central1/api)