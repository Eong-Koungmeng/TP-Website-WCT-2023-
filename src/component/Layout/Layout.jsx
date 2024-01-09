import React from 'react';
import Header from "../Header/Header";
// import Footer from "./Footer";
import {Container} from "react-bootstrap"

const Layout = ({children}) => {
  return (
      <>
        <Header/>
          <Container fluid className="bg-dar min-vh-100">
            <div className="row gx-3 gx-lg-4 justify-content-center">
                {children}
            </div>
          </Container>
        {/* <Footer/> */}
      </>
  );
}

export default Layout;
