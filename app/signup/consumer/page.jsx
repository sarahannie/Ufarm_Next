import React from 'react';
import '../../../public/css/signup-consumer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './page.module.css';
import { faEnvelope, faLock, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';

const page = () => {
    return (

        <div className={style.body}>
          <div className={style.bg2}>
            <article className="card-body mx-auto" style={{maxWidth: '400px'}}>
              <h4 className="card-title mt-3 text-center">Create Account</h4>
              <p className="text-center">Let Make Shopping Easier</p>
              <form id="regform" action="#" name="register" onsubmit="return validation()" method="POST">
                <div className={`form-group input-group ${style.input}`}>
                  <div className="input-group-prepend">
                    <span className="input-group-text"> <FontAwesomeIcon style={{ fontSize: '20px',  color: 'none', border: 'none' }}  icon={faUser} /> </span>
                  </div>
                  <input name className="form-control" placeholder="Full name" type="text" id="fullName" />
                  <small id="fnameErr" />
                </div> {/* form-group// */}
                <div className={`form-group input-group ${style.input}`}>
                  <div className="input-group-prepend">
                    <span className="input-group-text"><FontAwesomeIcon style={{ fontSize: '20px',  color: 'none', border: 'none' }}  icon={faEnvelope} /> </span>
                  </div>
                  <input name className="form-control" placeholder="Email address" type="email" id="email" />
                  <small id="emailErr" />
                </div> {/* form-group// */}
                <div className={`form-group input-group ${style.input}`}>
                  <div className="input-group-prepend">
                    <span className="input-group-text"> <i className>Gender</i> </span>
                  </div>&nbsp;&nbsp;&nbsp;
                  <label className="label2">
                    <input name="gender" className="gender" type="radio" defaultValue="male" id="gmale" />
                    <span>Male</span>
                  </label>
                  <label>
                    <input name="gender" className="gender" type="radio" defaultValue="female" id="gfemale" />
                    <span>Female</span>
                    <small id="gfemaleErr" />
                  </label>
                </div> {/* form-group// */}
                <div className={`form-group input-group ${style.input}`}>
                  <div className="input-group-prepend">
                    <span className="input-group-text"> <FontAwesomeIcon style={{ fontSize: '20px',  color: 'none', border: 'none' }}  icon={faPhone} /> </span>
                  </div>
                  <select className="custom-select" style={{maxWidth: '120px'}} id="country-code">
                    <option selected>+256</option>
                    <option value={1}>+254</option>
                    <option value={2}>+255</option>
                    <option value={3}>+234</option>
                  </select>
                  <input name className="form-control" placeholder="Phone number" type="text" id="phoneInput" />
                  <small id="phonenumErr" />
                </div> {/* form-group// */}
                <div className={`form-group input-group ${style.input}`}>
                  <div className="input-group-prepend">
                    <span className="input-group-text"> <FontAwesomeIcon style={{ fontSize: '20px',  color: 'none', border: 'none' }}  icon={faLock} /> </span>
                  </div>
                  <input className="form-control" placeholder="Create password" type="password" id="password" />
                  <small id="passwordErr" />
                </div> {/* form-group// */}
                <div className={`form-group input-group ${style.input}`}>
                  <div className="input-group-prepend">
                    <span className="input-group-text"> <FontAwesomeIcon style={{ fontSize: '20px',  color: 'none', border: 'none' }}  icon={faLock} /> </span>
                  </div>
                  <input className="form-control" placeholder="Repeat password" type="password" id="repassword" />
                  <small id="repasswordErr" />
                </div> {/* form-group// */}                                      
                <div className={`form-group ${style.btn}`}>
                  <button type="submit" className={`btn  btn-block ${style.btnColor}`}> Create Account</button>
                </div> {/* form-group// */}      
                <p className="text-center">Doesn&apos;t Have an account? <a href="/signup" className={style.login}>Log In</a> </p>                                                                  
              </form>
            </article>  
          </div>
        </div>
      );
}

export default page