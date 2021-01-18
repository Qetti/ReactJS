import React from "react";
import * as service from "../../utils/services";
import {HeaderBox,HeaderContainer} from "./styles";
import PropTypes from "prop-types";

const handleMainPage = e =>{
    e.preventDefault();
    service.mainPage();
};

const adminPanelOpen = e =>{
    e.preventDefault();
    service.adminPanelOpen();
};

const handleLogOut = e =>{
    e.preventDefault();
    service.logOut();
};


const Header = props => {
    return (
        <HeaderBox>
            <HeaderContainer>
            <h1>{props.title}</h1>
            {props.btn
                &&
                <div className="btns">
                <button className="btn main" onClick={handleMainPage}>ქვიზი</button>
                </div>
                }

            {props.btn
                &&
                <div className="btns">
                    <button className="btn cart" onClick={adminPanelOpen}>პირადი გვერდი</button>
                </div>   
                }


            {props.btn
                &&
                <div className="btns">
                <button className="btn logout" onClick={handleLogOut}>გამოსვლა</button>
                </div>
                }
                
            </HeaderContainer>
        </HeaderBox>
    );
}
Header.propTypes = {
    title : PropTypes.string.isRequired,
    btn: PropTypes.bool
};
export default Header;