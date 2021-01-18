import React, { Component } from 'react';
import PublicHead from "../../components/publicHead";
import DefaultLayout from "../../layouts";
import { Link } from "react-router-dom";
import ToDo from '../../components/ToDo';

class Cart extends Component {
	render(){
		const title = "პირადი გვერდი";
		// func()
	  
			return (
				<React.Fragment> 

                <DefaultLayout title={title} private>
                <PublicHead title={title} />

        		<nav className="main-nav">
          			<ul>
            			<li>
              				<Link to="/">{Cart}</Link>
            			</li>
          			</ul>
        		</nav>
            </DefaultLayout>
			<div id="toDoCntr"> <ToDo/> </div>

		</React.Fragment>
		)
	}
	
}
export default Cart;
