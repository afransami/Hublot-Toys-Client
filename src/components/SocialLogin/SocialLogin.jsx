import React from 'react';

const SocialLogin = () => {
    const {googleSignIn}= useContext(AuthContext)
    const handleGoogleSignIn = ()=>{
        googleSignIn()
        .then (result =>{
            console.log(result);
        })
        .catch (error => console.log(error))
    }
  return (
    <div>
        <div className="divider">OR</div>
      <div className="text-center">
        <button onClick={handleGoogleSignIn} className="text-2xl btn btn-circle btn-outline">
          G
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;