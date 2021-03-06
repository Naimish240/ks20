import React, {Component} from 'react';
import './Navbar.css';

class Navbar extends Component {
	constructor() {
		super();
		this.state = {
			active: ''
		}
	}

	componentDidMount() {
		this.setState({active: document.getElementById('home-link')})
	}

	changeActive = (e) => {
		this.state.active.classList.remove('active');
		e.target.parentNode.classList.add('active');
		this.setState({active: e.target.parentNode});
	}
	
	render() {
		return (
			<nav className="my-nav navbar navbar-expand-sm navbar-dark bg-dark">
			  <a className="navbar-brand" href="/#">
			    <img src="https://i.ibb.co/ygdSQqJ/cropped-ks20.png" className="img img-fluid logo" height="75" alt="KS Logo" />
			  </a>
			  <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			  </button>
			  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
			    
			    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
			      <li className="nav-item active my-nav-item" id="home-link">
			        <a className="nav-link" href="/#" onClick={(e)=>this.changeActive(e)}>Home <span className="sr-only">(current)</span></a>
			      </li>
			      <li className="nav-item">
			        <a className="nav-link" href="/#events" onClick={(e) => this.changeActive(e)}>Events</a>
			      </li>
				  <li className="nav-item">
			        <a className="nav-link" href="/#contact-us" onClick={(e) => this.changeActive(e)}>Contact Us</a>
			      </li>
			    </ul>
			  </div>
			</nav>
		)
	}
}

export default Navbar;