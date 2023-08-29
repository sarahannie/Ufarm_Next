import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../../public/css/sigin.css';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

const page = () => {
    return (
        
          <div className="bg2">
            <article className="card-body mx-auto" style={{maxWidth: '400px'}}>
              <h4 className="card-title mt-3 text-center">Sign In</h4>
              <p className="text-center">Let Make Shopping Easier</p>
              <form id="regform" action="#" name="register" onsubmit="return validation()" method="POST">
                <div className="form-group input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">  <FontAwesomeIcon style={{ fontSize: '20px',  color: 'none', border: 'none' }}  icon={faEnvelope} /></span>
                  </div>
                  <input name className="form-control" placeholder="Email address" type="email" id="email" />
                  <small id="emailErr" />
                </div> 
                <div className="form-group input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><FontAwesomeIcon style={{ fontSize: '20px',  color: 'none', border: 'none' }}  icon={faLock} /> </span>
                  </div>
                  <input className="form-control" placeholder="Create password" type="password" id="password" />
                  <small id="passwordErr" />
                </div> {/* form-group// */}
                <div className="form-group">
                  <button type="submit" className="btn btn-color btn-block"> Create Account</button>
                </div> {/* form-group// */}      
                <p className="text-center">Doesn&apos;t Have an account? <a href="/signUp.html" className="login">Register</a> </p>                                                                 
              </form>
            </article>  
          </div>
        
      );
}

export default page