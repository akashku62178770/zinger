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

export default function TermsView() {
  const { days, hours, minutes, seconds } = useCountdownDate(new Date('07/07/2024 21:30'));

  return (
    <>
    <Grid container justifyContent="center">
        <Grid item sm={8} p={10}>
          {/* <h1 >Terms and Conditions...</h1> */}
          <Typography variant="h1">Terms of Use</Typography>
          <Typography variant="p" fontStyle="italic">Last Updated on May 1st, 2024</Typography>
          <hr />
          <p>
          Welcome to ZingerMeal, your premier destination for online food ordering and delivery.
          By accessing and using the ZingerMeal app or website, you agree to be bound by these Terms of Use 
          ("Terms") and our Privacy Policy. Please read them carefully. If you do not agree to these Terms, 
          you must not use our services.
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
            <Typography variant="h4">Account Registration</Typography>
              <li className="list-group-item">
              To use ZingerMeal, you must register for an account by providing accurate, current, and complete information 
              as prompted. You are responsible for maintaining the confidentiality of your account and password and for 
              restricting access to your devices. You accept responsibility for all activities that occur under your account 
              or password.
              </li>
              <Typography variant="h4">Service Description</Typography>
              <li className="list-group-item">
              ZingerMeal provides a platform for users to order food from listed foods and combos. Service availability 
              may vary by location. We reserve the right to modify or discontinue the service (or any part thereof) without 
              notice at any time.
              </li>
              <Typography variant="h4">User Conduct</Typography>
              <li className="list-group-item">
              Users are expected to use ZingerMeal respectfully and responsibly. Prohibited behaviors include, but are not 
              limited to, using the service for any unlawful purpose, harassing or harming another person, or interfering 
              with the service's operation.
              </li>

              <Typography variant="h4">Payments and Billing</Typography>
              <li className="list-group-item">
              ZingerMeal accepts various forms of payment, including credit cards and digital wallets. Details of billing,
               refunds, and discounts will be communicated at the time of the transaction. New users may be eligible for
                discounts on their first three orders and free delivery under certain promotional conditions.
              </li>

              <Typography variant="h4">Intellectual Property</Typography>
              <li className="list-group-item">
              All content and trademarks associated with ZingerMeal, including but not limited to text, graphics, logos, 
              and software, are the property of ZingerMeal or its licensors and are protected by intellectual property laws.
              </li>  

              <Typography variant="h4">Limitation of Liability and Disclaimer</Typography>          
              <li className="list-group-item">
              ZingerMeal does not guarantee that the service will be uninterrupted or error-free. To the fullest extent 
              permitted by law, ZingerMeal excludes all liability for any loss or damage arising from your use of, or 
              reliance on, the service.
              </li>

              <Typography variant="h4">Governing Law</Typography>
              <li className="list-group-item">
              These Terms shall be governed and construed in accordance with the laws of Bharat, without regard to its 
              conflict of law provisions.
              </li>

              <Typography variant="h4">Amendments</Typography>
              <li className="list-group-item">
              We reserve the right to modify these Terms at any time. You agree to review the Terms periodically for changes. 
              Your continued use of the ZingerMeal app or website following the posting of revised Terms means that you accept
               and agree to the changes.
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
