/*
import { express } from 'express';
1. URL :  localhost:8000/payment/pay
2. Fields:
3. Method : Post
4. Access Type : Private
*/
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const express = require('express');
const router = express.Router();


router.post('/pay', (req,res)=>{
    const {}
    stripe.customers.create({customer => stripe.charges.crate({})}).then().then().catch(err=>console.log(err))
})

module.exports = router;