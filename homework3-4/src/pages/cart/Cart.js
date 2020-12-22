import React, { Component } from 'react';
import PublicHead from "../../components/publicHead";
import DefaultLayout from "../../layouts";
import { Link } from "react-router-dom";

import CartComp from "./CartComp"

class Cart extends Component {

	render(){
        const title = "თქვენი კალათა";
			return (
				<React.Fragment> 

                <DefaultLayout title={title} private>
                <PublicHead title={title} />

                <div className='posts'>

        		<nav className="main-nav">
          			<ul>
            			<li>
              				<Link to="/">{Cart}</Link>
            			</li>
          			</ul>
        		</nav>
					</div>
            </DefaultLayout>
				
			<CartComp />	
				
			</React.Fragment>
					)
		}
	
}
export default Cart;