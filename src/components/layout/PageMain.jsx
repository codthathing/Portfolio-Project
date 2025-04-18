import { Helmet } from "react-helmet-async";

const PageMain = ({ children, className }) => {
  return (
    <section className={className}>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://codthathing-dev.vercel.app" />
      </Helmet>
      {children}
    </section>
  );
};

export default PageMain;