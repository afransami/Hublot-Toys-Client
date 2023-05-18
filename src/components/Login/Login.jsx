import React from 'react';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';


const Login = () => {
  
    // const {signIn}= useContext(AuthContext);
    // const location= useLocation();
    // const navigate = useNavigate()
  
    // const from = location.state?.from?.pathname || '/';
    
    // const handleLogin= event =>{
    //       event.preventDefault();
    //       const form= event.target;
    //       const email= form.email.value;
    //       const password = form.password.value;
         
    //       signIn(email, password)
    //       .then (result=>{
    //         const user = result.user;
    //         console.log(user);   
    //         navigate(from, {replace: true})          
            
    //       })
    //       .catch (error => console.log(error))
          
    //   }
    return (
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row ">
        <div className='relative lg:w-1/2 '>
        <div className='w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96 '>                    
          <img src="https://i.ibb.co/4MbgKjJ/lf20-xlmz9xwm.png" alt="" />
        </div>
      </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gradient-to-r from-indigo-200 from-10% via-sky-200 via-30% to-emerald-200 to-90% ml-20 ">
          <h1 className="text-4xl p-5 font-bold">Login!</h1>
            <Form>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">              
                <input className="btn bg-gradient-to-r from-indigo-200 from-10% via-sky-500 via-30% to-emerald-200 to-90%" type= "submit" value="Login" />
                <p className="text-center mt-5 font-semibold">New to car doctor? Please <Link className="text-green-600 font-bold" to='/register'>register</Link></p>              
              </div>            
              {/* <SocialLogin></SocialLogin> */}
            </div>
            </Form>
          </div>
        </div>
      </div>
    );
  };

export default Login;