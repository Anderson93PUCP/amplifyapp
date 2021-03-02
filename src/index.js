import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Amplify from 'aws-amplify';
import config from './aws-exports';

const awsmobile = {
  "aws_project_region": "us-east-1",
  "aws_cognito_identity_pool_id": "us-east-1:f51385ca-3716-4f73-a07e-3f7dd7a6fc02",
  "aws_cognito_region": "us-east-1",
  "aws_user_pools_id": "us-east-1_Up1LyjgKr",
  "aws_user_pools_web_client_id": "5uivmh1he3jgshq3qkt374i8jm",
  "oauth": {}
};

Amplify.configure(awsmobile); //config


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
