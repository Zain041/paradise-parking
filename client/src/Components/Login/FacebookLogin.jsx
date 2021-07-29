import React, { useContext } from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
// import FacebookLogin from 'react-facebook-login';
import { useToasts } from 'react-toast-notifications';
import { contextData } from '../../context/Provider';

const FacebookLogins = ({ message }) => {
  const { addToast } = useToasts()
  const context = useContext(contextData);
  console.log(context)

  const responseFacebook = (response) => {
    console.log(response);
    if (!response.email) {
      addToast('Email must Required', { appearance: 'error', autoDismiss: true })
      return null;
    } else {
      const userData = {
        name: response.name,
        email: response.email,
        imageUrl: response?.picture?.data?.url,
      };
      context.sociallogin(userData);
    }
  };

  return (
    // <FacebookLogin
    //   appId="501236481324896"
    //   // autoLoad={true}
    //   fields="name,email,picture"
    //   callback={()=>responseFacebook()}
    //   cssClass="my-facebook-button-class"
    //   icon="fa-facebook" />
    <FacebookLogin
      // appId='879751916309957'
      appId='203178948488528'
      clientSecret='4f6da209cf5bb046007f38b42981617e'
      // fields='name,email,picture'
      cssClass='btnFacebook'
      render={(renderProps) => (
        // <icon className="fas fa-facebook">
        <button className='btn btn-block' onClick={renderProps.onClick}>
          {message} with Facebook
        </button>
        // </icon>
      )}

      callback={responseFacebook}
      icon='fa-facebook'
    />
  );
};

export default FacebookLogins;
