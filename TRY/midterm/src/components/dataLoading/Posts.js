import React, { Component } from 'react';
import axios from 'axios';
import PublicHead from "../../components/publicHead";
import DefaultLayout from "../../layouts";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Home extends Component {
	constructor(){
		super();
		this.state = {
			posts: [],
			loaded: false,
		};
	}
	componentDidMount(){
		this.getPosts();
	}
	getPosts(){
  	axios.get('https://jsonplaceholder.typicode.com/posts').then(
  		response => {
              this.setState({posts: response.data, loaded: true});
              console.log(response)
  		})
  	}
	render(){
        const title = "მთავარი გვერდი";

		const {loaded, posts} = this.state;
		if (loaded){
			return (
                <DefaultLayout title={title} private>
                <PublicHead title={title} />

                <div className='posts'>
				<header>
        			<h1>{title}</h1>
        		</header>
        		<nav className="main-nav">
          			<ul>
            			<li>
              				<Link to="/">მთავარი გვერდი</Link>
            			</li>
          			</ul>
        		</nav>
				{posts.map(post => (<div key={post.id} className='post'><Link to={'/posts/'+post.id}>{post.title}</Link></div>))}
					</div>
            </DefaultLayout>
				
					)
		} else {
			return <div className="loading">Loading...</div>
		}
	}
}
export default Home;