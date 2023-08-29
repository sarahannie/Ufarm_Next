import React from 'react';
import '../../../public/css/signup-farmer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from './page.module.css'
import { faBuilding, faEnvelope, faLock, faPerson, faPhone } from '@fortawesome/free-solid-svg-icons';

const page = () => {
    return (
          <div className={style.body}>
            <div className={style.bg2}>
              <article className="card-body mx-auto" style={{maxWidth: '400px'}}>
                <h4 className="card-title mt-3 text-center">Create Account</h4>
                <p className="text-center">Let Work Together to Make Earning Easier</p>
                <form id="regform" action="#" name="register" onsubmit="return validation(event);" method="POST">
                  <div className={`form-group input-group ${style.input}`}>
                    <span className="input-group-text">  <FontAwesomeIcon style={{ fontSize: '20px',  color: 'none', border: 'none' }}  icon={faPerson} /> </span>
                    <input name="fullName" className="form-control" placeholder="Full name" type="text" id="fullName" />
                    <small id="fnameErr" />
                  </div> {/* form-group// */}
                  <div className={`form-group input-group ${style.input}`}>
                    <span className="input-group-text"> <i className="bi bi-envelope" /> <FontAwesomeIcon style={{ fontSize: '20px',  color: 'none', border: 'none' }}  icon={faEnvelope} /></span>
                    <input name className="form-control" placeholder="Email address" type="email" id="email" />
                    <small id="emailErr" />
                  </div> {/* form-group// */}
                  <div className={`form-group input-group ${style.input}`}>
                    <span className="input-group-text"> D.O.R </span>
                    <input name className="form-control" placeholder="Date Of Registeration" type="date" id="dor" readOnly />
                  </div> {/* form-group// */}
                  <div className={`form-group input-group ${style.input}`}>
                    <span className="input-group-text"> D.O.B </span>
                    <input name className="form-control" placeholder="Date Of Birth" type="date" id="dob" />
                    <small id="dobErr" />
                  </div> {/* form-group// */}
                  <div className={`form-group input-group ${style.input}`}>
                    <span className="input-group-text"> NIN </span>
                    <input name className="form-control" placeholder="NIN Number" type="text" id="nin" />
                    <small id="ninErr" />
                  </div> {/* form-group// */}
                  <div className={`form-group input-group ${style.input}`}>
                    <span className="input-group-text"> Unique </span>
                    <input name className="form-control" placeholder="FO-0984" type="text" id="unique" />
                    <small id="uniqueErr" />
                  </div> {/* form-group// */}
                  <div className={`form-group input-group ${style.input}`}>
                    <span className="input-group-text"> Gender </span>&nbsp;&nbsp;&nbsp;
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
                    <span className="input-group-text"> <FontAwesomeIcon style={{ fontSize: '20px',  color: 'none', border: 'none' }}  icon={faPhone} /> </span>
                    <select className="form-select" style={{maxWidth: '120px'}} id="country-code">
                      <option selected>+256</option>
                      <option value={1}>+254</option>
                      <option value={2}>+255</option>
                      <option value={3}>+234</option>
                    </select>
                    <input name className="form-control" placeholder="Phone number" type="text" id="phoneInput" />
                    <small id="phonenumErr" />
                  </div> {/* form-group// */}
                  <div className={`form-group input-group ${style.input}`}>
                    <span className="input-group-text"> Ward </span>
                    <input name className="form-control" placeholder="Ward Name" type="text" id="ward" />
                    <small id="wardErr" />
                  </div> {/* form-group// */}
                  <div className={`form-group input-group ${style.input}`}>
                    <span className="input-group-text"> <FontAwesomeIcon style={{ fontSize: '20px',  color: 'none', border: 'none' }}  icon={faBuilding} /> </span>
                    <select id="activities" className="form-select">
                      <option selected> Activites Undertaken</option>
                      <option>Crop Farming</option>
                      <option>Livestock Farming</option>
                      <option>Fruit Farming</option>
                      <option>seedline Farming</option>
                    </select>
                    <small id="activitiesErr" />
                  </div> {/* form-group end.// */}
                  <div className={`form-group input-group ${style.input}`}>
                    <span className="input-group-text"> <FontAwesomeIcon style={{ fontSize: '20px',  color: 'none', border: 'none' }}  icon={faLock} /> </span>
                    <input className="form-control" placeholder="Create password" type="password" id="password" />
                    <small id="passwordErr" />
                  </div> {/* form-group// */}
                  <div className={`form-group input-group ${style.input}`}>
                    <span className="input-group-text"> <FontAwesomeIcon style={{ fontSize: '20px',  color: 'none', border: 'none' }}  icon={faLock} /> </span>
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

export default page;
