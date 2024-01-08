import React from 'react';
import Header from "../Header/Header";
// import Footer from "./Footer";
import {Container} from "react-bootstrap"

const Layout = ({children}) => {
  return (
      <>
        <Header/>
          <Container fluid>
            <div className="row gx-4 gx-lg-5 justify-content-center">
                {children}
            </div>
          </Container>
        {/* <Footer/> */}
      </>
  );
}

export default Layout;
