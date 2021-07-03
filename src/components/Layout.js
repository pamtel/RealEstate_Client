import PropTypes from "prop-types";
import BackToTop from "./BackToTop";
import StartTop from "./StartTop";
import Navbar from "./Header/Navbar";
import SubHeader from "./Header/SubHeader";

const propTypes = {
  children: PropTypes.any.isRequired,
};

const Layout = ({ children }) => {
  return (
    <div>
      <SubHeader />
      <Navbar />
      <BackToTop />
      <StartTop />
      <main>{children}</main>
    </div>
  );
};

Layout.propTypes = propTypes;

export default Layout;
