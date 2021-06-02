import React from "react";
import NavbarPage from "../components/navbarPage";
import FooterPage from "../components/footerPage";
import ContentPage from "../components/contentPage";
import { ToastContainer } from 'react-toastify';

class Layout extends React.Component{
    render (){
        return <div>
            <NavbarPage/>
            <ContentPage/>
            <FooterPage/>
            <ToastContainer/>
        </div>
    }
}
export default Layout;