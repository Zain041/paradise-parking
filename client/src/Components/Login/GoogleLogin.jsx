import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import GoogleLogin from 'react-google-login';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { contextData } from '../../context/Provider';

const GoogleLogins = ({ message }) => {
  const { addToast } = useToasts()
  const context = useContext(contextData);
  
  const responseGoogle = (response) => {
    console.log(response)
    if (!response.profileObj.email) {
      addToast('Email must Required', { appearance: 'error', autoDismiss: true })
      return null;
    } else {
      const userData = {
        name: response.profileObj.name,
        email: response.profileObj.email,
        imageUrl: response.profileObj.imageUrl,
      };
      console.log(userData)
      context.sociallogin(userData);
    }
  };
  return (
    <div>
      <GoogleLogin
        clientId='116590966711-hhor3kk06ouf480i7upadf6uu2f8lh2t.apps.googleusercontent.com'
        render={(renderProps) => (
          <button className='btn btn-block' onClick={renderProps.onClick}>
            {message} with Google
          </button>
        )}
        fetchBasicProfile={true}
        isSignedIn={false}
        buttonText='Login'
        // scope="profile email"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
};

export default GoogleLogins;
