import React from 'react';
import { refreshTokenSetup} from './utils/refreshToken'
import { GoogleLogin } from 'react-google-login';
import {useHistory } from 'react-router-dom'

const clientId = '272476288648-km8fne9ac14oek1rod26m9f9d4hrr8fo.apps.googleusercontent.com';

function Login(props) {
  const history=useHistory();
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    alert(
      `Logged in successfully welcome ${res.profileObj.name}`
    );
    refreshTokenSetup(res);
    props.handleLoggedIn();
    props.handleUserData("name",res.profileObj.name);
    props.handleUserData("email",res.profileObj.email);
    props.handleUserData("image",res.profileObj.imageUrl);
    history.push('/usn');
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
  };
  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;