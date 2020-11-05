import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import PublicHead from "../../components/publicHead";

import '../../App.css';
import DefaultLayout from "../../layouts";


class Post extends Component {
	constructor(){
		super();
		this.state = {
			title: 'პოსტი',
			post: {title: '', body: ''}, 
			loaded: false,
			user: {},
			photo: {},
		};
	}
	getPost(){
		axios.get('https://jsonplaceholder.typicode.com/posts/'+this.props.match.params.id).then(response => {
			if (response.data){
				this.setState({post: response.data});
				this.getUser();
				this.getPhoto();
			}
		})
	}
	getUser(){
		let userId = this.state.post.userId;
		axios.get('https://jsonplaceholder.typicode.com/users/'+userId).then(response => {
			if (response.data){
				this.setState({user: response.data, loaded: true});
			}
		})
	}
	getPhoto(){
		axios.get('https://jsonplaceholder.typicode.com/photos/'+this.props.match.params.id).then(response => {
			if (response.data){
				this.setState({photo: response.data, loaded: true});
				console.log(this.state.photo)
			}
		})
	}
	componentDidMount(){
		this.getPost();
	}
	
	render(){
		if (this.state.loaded){
			return (
				<DefaultLayout title={this.state.title} private>
                <PublicHead title={this.state.title} />
				<div className="post-wrapper">
					<nav className="main-nav">
          				<ul>
            				<li>
              					<Link to="/">მთავარი</Link>
            				</li>
          				</ul>
        			</nav>

        			<h4>პოსტის ავტორი - {this.state.user.name}</h4>
					<img src={this.state.photo.url} alt={this.state.user.name}/>

					<h4>პოსტის სათაური - <span className="post-header"> {this.state.post.title}</span> </h4>
					
					<h4>პოსტის შინაარსი: <span className="post-body">{this.state.post.body}</span></h4>
					

				</div>
				</DefaultLayout>

				);
		} else {
			return (<div className="loading">Loading ... </div>)
		}
	}
}
export default Post;
