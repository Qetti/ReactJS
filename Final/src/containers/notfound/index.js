import React from "react";
import {NavLink} from "react-router-dom";
import {Wrapper,TextWrapper} from "./styles";



const NotFound =() =>  {
    return (
        <Wrapper>
            <TextWrapper>
                <h1>404</h1>
                <h2>Not Found</h2>
                <NavLink  exact  to='/'><i className="fas fa-arrow-left"/>მთავარ გვერდზე დაბრუნება</NavLink>
            </TextWrapper>
        </Wrapper>
    );
}
export default NotFound;