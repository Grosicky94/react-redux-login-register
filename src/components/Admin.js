import React, {Component, Fragment} from 'react';
import axios from 'axios';
import {getProtected, logout} from '../api/auth';
import setAuth from '../utils/setAuth'

class Admin extends Component {
  
  state = {
  	message: ''
  }

  componentWillMount() {
  	// const token = JSON.parse(localStorage.getItem('token'));
  	// axios.get('http://localhost:8000/api/protected', {
  	// 	headers: {
  	// 		'Authorization': `Bearer ${token}`
  	// 	}
  	// })
  	// axios.get('http://localhost:8000/api/protected')
  	// 	.then((res) => {
  	// 		console.log(res);
  	// 		this.setState({
  	// 			message: res.data.message
  	// 		})
  	// 	}, (err) => {
  	// 		console.log(err.response);
  	// 	})

  	getProtected()
  		.then((res) => {
  			console.log(res);
  			this.setState({
  				message: res.data.message
  			})
  		}, (err) => {
  			console.log(err.response);
  		})

  }

  handleLogout = () => {
  	logout()
  		.then((res) => {
  			console.log(res);
        // setAuth(false); 			
  			this.props.history.push('/login');
  			// localStorage.removeItem('token'); 
  		}, (err) => {
  			console.log(err.response);
  		}) 

  	// const token = JSON.parse(localStorage.getItem('token'));
  	// axios.post('http://localhost:8000/api/auth/logout', null, {
  	// 	headers: {
  	// 		'Authorization': `Bearer ${token}`
  	// 	}
  	// })
  	// 	.then((res) => {
  	// 		console.log(res);
  	// 		this.props.history.push('/login');
  	// 		localStorage.removeItem('token');
  	// 	},(err) => {
  	// 		console.log(err.response);
  	// 	})
  }

  render() {
  	const {handleLogout} = this;

    return (
      <Fragment>
        <p>Admin Dashboard</p>
        <hr/>
        <p>{this.state.message}</p>
        <button onClick={handleLogout} >Logout</button>
      </Fragment>
    );
  }

}

export default Admin;
