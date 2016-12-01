import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import LoginForm from './LoginForm';

ReactDOM.render(
	<App />, 
	document.getElementById('app')
)

ReactDOM.render(
	<LoginForm />, 
	document.getElementById('LoginForm')
)