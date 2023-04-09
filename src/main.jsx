import React from 'react'
import ReactDOM from 'react-dom/client'
import { Auth0Provider } from "@auth0/auth0-react";
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-864dcfi04tp10oae.us.auth0.com"
    clientId="JYlEEGNmZHwJiN7Gylw4aNoDuiEHfgBF"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
)
