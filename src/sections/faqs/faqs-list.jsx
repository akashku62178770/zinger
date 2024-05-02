import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import { _faqs } from 'src/_mock';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

// const _faqs = [...Array(8)].map((_, index) => ({
//   id: _mock.id(index),
//   value: `panel${index + 1}`,
//   heading: `Questions ${index + 1}`,
//   detail: _mock.description(index),
// }));
const _list = [
  {
  id: 1,
  question: "What is ZingerMeal?",
  answer: "ZingerMeal is a food delivery startup designed to bring your favourite meals directly to your doorstep. With ZingerMeal, you can easily browse through a wide variety of cuisines, place orders in just a few taps, and track your delivery in real-time. Our unique selling points include lightning-fast delivery, exclusive deals for our users, and a seamless ordering experience."
  },
  {
  id: 2,
  question: "How do I place an order?",
  answer: `
  Download the ZingerMeal app from the App Store or Google Play.
  Create an account or log in.
  Use the search function or browse through the categories to find your favourite combo or dish.
  Select your items and add them to your cart.
  Proceed to checkout, confirm your delivery address, choose your payment method, and place your order.
  You'll receive a confirmation and can track your order until it arrives.
  
  `
  },
  {
    id: 3,
    question: "What are the delivery charges?",
    answer: "Delivery charges vary based on the distance between the restaurant and your delivery location. However, ZingerMeal offers free delivery for orders over ₹300 and for select promotions. Please check the app for the most current delivery charges and offers."
    }, 
  {
  id: 4,
  question: "How can I avail the first 3 orders discount?",
  answer: "New users are welcomed with a 25% discount on their first three orders! To avail of this offer, simply sign up on ZingerMeal, and the discount will be automatically applied at checkout for your first three orders. Please note that terms and conditions apply, and this offer may vary based on your location."
  },
  {
  id: 5,
  question: "What payment methods are accepted?",
  answer: "ZingerMeal accepts a variety of payment methods for your convenience, including credit/debit cards, net banking, digital wallets, and cash on delivery (where available)."
  }, 
  {
  id: 6,
  question: "How can I contact customer service?",
  answer: `Our customer service team is here to help! You can reach us through the following methods:

  Email: contact@shuzan.in
  Phone: +91 8217782711
  In-app support: Navigate to the 'Help' section in the ZingerMeal app for live chat support.`
  }, 
  {
  id: 7,
  question: "What areas in Bangalore do you deliver to?",
  answer: "ZingerMeal serves a wide range of areas across Bangalore. Whether you're in Koramangala, Indiranagar, Whitefield, or beyond, we've got you covered. For a detailed list of serviceable areas, please check the app or contact our customer service for more information."
  }, 
  
]


export default function FaqsList() {
  return (
    <div>
      {_list.map((accordion) => (
        <Accordion key={accordion.id}>
          <AccordionSummary expandIcon={<Iconify icon="eva:arrow-ios-downward-fill" />}>
            <Typography variant="subtitle1">{accordion.question}</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography>{accordion.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
