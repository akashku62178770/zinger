import { Helmet } from 'react-helmet-async';

import ReturnPolicyView from 'src/sections/return-policy/view';

// ----------------------------------------------------------------------

export default function ReturnPolicy() {
  return (
    <>
      <Helmet>
        <title> Return Policy</title>
      </Helmet>

      {/* <PricingView /> */}
      <ReturnPolicyView/>
    </>
  );
}
 