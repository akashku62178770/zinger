import { Helmet } from 'react-helmet-async';

import RefundPolicyView from 'src/sections/refund-policy/view';

// ----------------------------------------------------------------------

export default function RefundPolicy() {
  return (
    <>
      <Helmet>
        <title> Refund Policy</title>
      </Helmet>

      <RefundPolicyView />
    </>
  );
}
