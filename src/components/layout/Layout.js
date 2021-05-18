import Footer from "./Footer";
import Header from "./Header";
import { Container } from "@material-ui/core";

const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
