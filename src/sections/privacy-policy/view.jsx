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

export default function PrivacyPolicyView() {
  const { days, hours, minutes, seconds } = useCountdownDate(new Date('07/07/2024 21:30'));

  return (
    <>
    <Grid container justifyContent="center">
        <Grid item sm={10}>
          {/* <h1 >Privacy Policy</h1> */}
          <Typography variant="h1">Privacy Policy</Typography>
          <Typography variant="p" fontStyle="italic">Last Updated on May 1st, 2024</Typography>
          <hr />
          <p>
          Welcome to ZingerMeal. We are committed to protecting the privacy and security of our user's information. 
          This Privacy Policy outlines how we collect, use, share, and safeguard your personal information when you use the
           ZingerMeal app or website.
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
            <Typography variant="h4">Information Collection</Typography>
              <li className="list-group-item">
              We collect information that identifies you ("personal information") in various ways:
                <ol className='list-group list-group-numbered'>
                  <li className='list-group-item'>
                  Personal Details: This includes your name, email address, and telephone number that you 
                  provide when registering an account or placing an order.
                  </li>
                  <li>
                  Payment Information: We collect payment details such as credit card numbers and billing 
                  addresses to process payments through our service.
                  </li>
                  <li>
                  Order Details: Information related to the orders you place, including your delivery 
                  address and order history.
                  </li>
                  <li>
                  Collection Methods: Information is collected directly from you when you provide it to us and indirectly, for example, through our website
                   technology or through third parties when you use integrated services.
                  </li>
                </ol>
              </li>
              <Typography variant="h4">Use of Information</Typography>
              <li className="list-group-item">
                <Typography variant="p">Your information is used to:</Typography>
                <ol className='list-group list-group-numbered'>
                  <li className='list-group-item'>
                  Process and fulfill your orders.
                  </li>
                  <li>
                  Communicate with you about your orders, account, and our services.
                  </li>
                  <li>
                  Improve and personalize your experience with ZingerMeal.
                  </li>
                  <li>
                  Conduct research and analysis to enhance our service.
                  </li>
                  <li>
                  Provide promotions and offers, with your consent.
                  </li>
                </ol>
              </li>
              <Typography variant="h4">Sharing of Information</Typography>
              <li className="list-group-item">
              <Typography variant="p">We may share your information with:</Typography>
                <ol className='list-group list-group-numbered'>
                  <li className='list-group-item'>
                  Restaurant partners to fulfill your orders.
                  </li>
                  <li>
                  Service providers who perform services on our behalf.
                  </li>
                  <li>
                  Law enforcement or other government entities if required by law or to protect our rights and the rights of our users.
                  </li>
                </ol>
              </li>

              <Typography variant="h4">Data Security</Typography>
              <li className="list-group-item">
              We implement a variety of security measures to maintain the safety of your personal information. 
              Despite these measures, the security of information transmitted over the internet or stored electronically 
              cannot be guaranteed.
              </li>

              <Typography variant="h4">User Rights</Typography>
              <li className="list-group-item">
              You have certain rights regarding the personal information we hold about you, including the right to access, correct,
               or request deletion of your personal information.
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
