/* eslint-disable */
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { alpha } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';

import { useCountdownDate } from 'src/hooks/use-countdown';

import { _socials } from 'src/_mock';
import { ComingSoonIllustration } from 'src/assets/illustrations';

import Iconify from 'src/components/iconify';
import { NavLink } from 'react-router-dom'
import { Grid } from '@mui/material'

// ----------------------------------------------------------------------

export default function RefundPolicyView() {
  const { days, hours, minutes, seconds } = useCountdownDate(new Date('07/07/2024 21:30'));

  return (
    <>
    <Grid container justifyContent="center">
        <Grid item sm={8}>
          {/* <h1 >Terms and Conditions...</h1> */}
          <Typography variant="h1">Refund Policy</Typography>
          <Typography variant="p" fontStyle="italic">Last Updated on May 1st, 2024</Typography>
          <hr />
          <p>
          At ZingerMeal, we strive to ensure that every meal delivered through our platform is of the
           highest quality and arrives in the best condition. We understand that sometimes things don’t go as 
           planned, and we're here to help resolve any issues that may arise with your order.
          </p>
          {/* <Typography variant="h2">Outline:</Typography> */}
          <Box
            sx={{
              width: "100%",
              height: 400,
            //   maxWidth: 360,
              bgcolor: "background.paper",
            }}
          >
            <ul className="list-group list-group-numbered">
            <Typography variant="h4">Order Cancellations</Typography>
              <li className="list-group-item">
              {/* <Typography variant="p">Your information is used to:</Typography> */}
                <ol className='list-group list-group-numbered'>
                  <li className='list-group-item'>
                  Preparation Phase: If you need to cancel your order, you may do so without any charge within 5 minutes of
                   placing the order. This is because we aim to start preparing your food as soon as possible to ensure timely
                   delivery.
                  </li>
                  <li>
                  After Preparation Begins: Once the preparation of your food has commenced, typically  5 minutes after ordering,
                   we cannot accept cancellations as the food is already being made to your specifications.
                  </li>
                 
                </ol>
              </li>
              <Typography variant="h4">Refunds for Issues with Order</Typography>
              <li className="list-group-item">
              <ol className='list-group list-group-numbered'>
                  <li className='list-group-item'>
                  Quality Concerns: If you receive an order that is incorrect, damaged, or does not meet your quality expectations,
                   please contact us within 1 hour of receiving your order. You will be asked to provide proof (e.g., photos) of the
                    issue. If we verify the issue, you can choose to have a replacement sent at no additional charge, or a full 
                    refund issued to your original payment method.
                  </li>
                  <li>
                  Late Delivery: If your order arrives significantly later than the estimated delivery time causing inconveniences 
                  such as food safety concerns, please let us know. Depending on the situation, we may offer a discount or refund.
                  </li>
                 
                </ol>
              </li>
              <Typography variant="h3">Refunds Process</Typography>
              <li className="list-group-item">
                <ol className='list-group list-group-numbered'>
                  <li className='list-group-item'>
                  Contact Us: To request a refund or report any issues, please contact our customer service team through our app’s 
                  help section, by email, or by phone.
                  </li>
                  <li>
                  Investigation: Our team will investigate the matter promptly by reviewing order details, communicating with our 
                  delivery partners, and, where necessary, the restaurant involved.
                  </li>
                  <li>
                  Resolution: Once the claim is verified, we will initiate a refund to your original payment method within 7-10 
                  business days. Some refunds might be issued as credit for future orders at your preference.
                  </li>
                 
                </ol>
              </li>

              <Typography variant="h4">Exceptions</Typography>
              <li className="list-group-item">
              <Typography variant="p">Please note that we cannot provide refunds in the following situations:</Typography>
              <ol className='list-group list-group-numbered'>
                  <li className='list-group-item'>
                  Change of Mind: If an order is correctly prepared and delivered on time but you have changed your mind, 
                  refunds or returns cannot be provided.
                  </li>
                  <li>
                  Incorrect Order Details: If an incorrect delivery address or order details are provided by the customer, 
                  ZingerMeal is not responsible for the incorrect delivery or incorrect order preparation.
                  </li>
                 
                </ol>
              </li>

              <Typography variant="h4">Modifications to the Policy</Typography>
              <li className="list-group-item">
              ZingerMeal reserves the right to update or modify this refund policy at any time without prior notice.
               This policy is applicable to all orders placed through our platform.
              </li>  

              <br />
              <br />
              <Typography variant="h4" textAlign="center">Contact Information</Typography>
              <Typography variant='p'>
              For any legal concerns or questions regarding these Terms, please contact us at contact@shuzan.in.
              </Typography>

               <br />
               <br />
               <br />
            </ul>
          </Box>
          <Box display="flex" justifyContent="center" position="fixed" bottom="24px" width="100%">
        <Button component={NavLink} to="/" variant="contained" color="info">
          Back
        </Button>
        </Box>
        </Grid>
      </Grid>
       
    </>
  );
}

// ----------------------------------------------------------------------

function TimeBlock({ label, value }) {
  return (
    <div>
      <Box> {value} </Box>
      <Box sx={{ color: 'text.secondary', typography: 'body1' }}>{label}</Box>
    </div>
  );
}

TimeBlock.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
};
