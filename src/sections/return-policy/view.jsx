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

export default function ReturnPolicyView() {
  const { days, hours, minutes, seconds } = useCountdownDate(new Date('07/07/2024 21:30'));

  return (
    <>
    <Grid container justifyContent="center">
        <Grid item sm={10}>
          {/* <h1 >Terms and Conditions...</h1> */}
          <Typography variant="h1">Return Policy</Typography>
          <Typography variant="p" fontStyle="italic">Last Updated on May 1st, 2024</Typography>
          <hr />
          <p>
            At ZingerMeal, our goal is to ensure that every meal delivered is fresh, delicious, and exactly what you ordered. Due to the perishable nature of food and to ensure health and safety, items cannot be returned once they are delivered. However, we are committed to ensuring your satisfaction with every order.
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
            <Typography variant="h4">Reporting Issues</Typography>
              <li className="list-group-item">
              {/* <Typography variant="p">Your information is used to:</Typography> */}
                <ol className='list-group list-group-numbered'>
                  <li className='list-group-item'>
                    Immediate Reporting: If there are any concerns with your order such as missing items, incorrect items, or unsatisfactory quality, please contact us within 30 minutes of delivery. Due to the perishable nature of our products, we are unable to address complaints received after this timeframe.
                  </li>
                  <li>
                    Documentation: When reporting an issue, please provide a detailed description and, if possible, photographic evidence via our app or customer service email. This will assist us in making things right.
                  </li>
                 
                </ol>
              </li>
              <Typography variant="h4">Resolution Options</Typography>
              <li className="list-group-item">
                <ol className='list-group list-group-numbered'>
                  <li className='list-group-item'>
                    Replacement: If your order is incorrect or did not meet your expectations, we will strive to replace the affected items as quickly as possible at no additional cost to you.
                  </li>
                  <li>
                    Credit: In cases where a replacement isn't possible, such as late-night orders or inventory limitations, we may offer a credit for the value of the unsatisfactory items on your next order.
                  </li>
                  <li>
                    Refund: If neither replacement nor credit is feasible, we may offer a refund to your original payment method or as app credit, depending on the situation and your preference.
                  </li>
                 
                </ol>
              </li>
              <Typography variant="h4">Conditions for Refund or Replacement</Typography>
              <li className="list-group-item">
                <ol className='list-group list-group-numbered'>
                  <li className='list-group-item'>
                    Quality Issues: Refunds or replacements can be processed when the food is found to be of unsatisfactory quality, damaged, or incorrect.
                  </li>
                  <li>
                    Delivery Issues: If the order is delivered late and this has caused you inconvenience, please report the delay immediately so we can address the situation appropriately.
                  </li>
                 
                </ol>
              </li>

              <Typography variant="h4">Exclusions</Typography>
              <li className="list-group-item">
                <Typography variant="p">The following situations are generally excluded from a refund or replacement:</Typography>
                <ol className='list-group list-group-numbered'>
                  <li className='list-group-item'>
                    Incorrect Delivery Information: Orders placed with incorrect delivery details provided by the customer will not qualify for a refund or replacement.
                  </li>
                  <li>
                    Failure to Report Promptly: Issues not reported within the designated timeframe of 30 minutes from delivery.
                  </li>
                  <li>
                    Non-Food Items: Any non-food items such as merchandise or special packaging once accepted upon delivery.
                  </li>
                 
                </ol>
              </li>

              <Typography variant="h4">Changes to Return Policy</Typography>
              <li className="list-group-item">
              ZingerMeal reserves the right to alter or amend this return policy at any time. Any changes will be effective immediately and communicated to our customers via our platform.
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


// Introduction
// At ZingerMeal, our goal is to ensure that every meal delivered is fresh, delicious, and exactly what you ordered. Due to the perishable nature of food and to ensure health and safety, items cannot be returned once they are delivered. However, we are committed to ensuring your satisfaction with every order.

// Reporting Issues
// Immediate Reporting: If there are any concerns with your order such as missing items, incorrect items, or unsatisfactory quality, please contact us within 30 minutes of delivery. Due to the perishable nature of our products, we are unable to address complaints received after this timeframe.
// Documentation: When reporting an issue, please provide a detailed description and, if possible, photographic evidence via our app or customer service email. This will assist us in making things right.

// Resolution Options
// Replacement: If your order is incorrect or did not meet your expectations, we will strive to replace the affected items as quickly as possible at no additional cost to you.
// Credit: In cases where a replacement isn't possible, such as late-night orders or inventory limitations, we may offer a credit for the value of the unsatisfactory items on your next order.
// Refund: If neither replacement nor credit is feasible, we may offer a refund to your original payment method or as app credit, depending on the situation and your preference.

// Conditions for Refund or Replacement
// Quality Issues: Refunds or replacements can be processed when the food is found to be of unsatisfactory quality, damaged, or incorrect.
// Delivery Issues: If the order is delivered late and this has caused you inconvenience, please report the delay immediately so we can address the situation appropriately.
// Exclusions
// The following situations are generally excluded from a refund or replacement:

// Incorrect Delivery Information: Orders placed with incorrect delivery details provided by the customer will not qualify for a refund or replacement.
// Failure to Report Promptly: Issues not reported within the designated timeframe of 30 minutes from delivery.
// Non-Food Items: Any non-food items such as merchandise or special packaging once accepted upon delivery.
// Changes to Return Policy
// ZingerMeal reserves the right to alter or amend this return policy at any time. Any changes will be effective immediately and communicated to our customers via our platform.