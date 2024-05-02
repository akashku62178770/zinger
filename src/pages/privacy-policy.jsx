import { Helmet } from 'react-helmet-async';
import PrivacyPolicyView from 'src/sections/privacy-policy/view'

// import PricingView from 'src/sections/pricing/view';

// ----------------------------------------------------------------------

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title> Privacy Policy</title>
      </Helmet>

      <PrivacyPolicyView />
    </>
  );
}
