import React from 'react';
import { GoogleLogout } from 'react-google-login';
import {useHistory } from 'react-router-dom'
const clientId =
  '826159293537-k697v1bi7ujm6omvjuu0tt4kga2ljam0.apps.googleusercontent.com';

function Logout() {
    const history=useHistory();
    const onSuccess = () => {
        alert('Logout made successfully ✌');
        history.push('/');
    };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;