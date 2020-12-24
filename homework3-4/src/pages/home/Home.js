import React, { Component } from 'react';
import PublicHead from "../../components/publicHead";
import DefaultLayout from "../../layouts";
import { Link } from "react-router-dom";
import ProductList from './ProductList';

class Home extends Component {

	render(){
        const title = "Catalog of Plants";
			return (
				<React.Fragment>

                <DefaultLayout title={title} private>
                <PublicHead title={title} />
        		<nav>
          			<ul>
            			<li>
              				<Link to="/">{Home}</Link>
            			</li>
          			</ul>
        		</nav>
            </DefaultLayout>

			<ProductList />
			</React.Fragment>

					)
		}
	
}
export default Home;