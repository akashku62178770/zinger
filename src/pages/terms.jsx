import { Helmet } from 'react-helmet-async';
import TermsView from 'src/sections/terms-of-use/view';

// import PricingView from 'src/sections/pricing/view';

// ----------------------------------------------------------------------

export default function Terms() {
  return (
    <>
      <Helmet>
        <title> Terms of Use</title>
      </Helmet>

      <TermsView />
    </>
  );
}
