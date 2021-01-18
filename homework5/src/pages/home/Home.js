import React, { Component } from 'react';
import PublicHead from "../../components/publicHead";
import DefaultLayout from "../../layouts";
import { Link } from "react-router-dom";
import Quiz from '../Quiz';


class Home extends Component {

	render(){
        const title = "ქვიზი";
			return (
				<React.Fragment>

                <DefaultLayout title={title} private>
                <PublicHead title={title} />
        		<nav className="main-nav">
          			<ul>
            			<li>
              				<Link to="/">{Home}</Link>
            			</li>
          			</ul>
        		</nav>
            </DefaultLayout>

				<Quiz />
			</React.Fragment>

					)
		}
	
}
export default Home;
