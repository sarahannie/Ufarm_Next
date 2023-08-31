import React from 'react'

const page = () => {
    return (

        <div className="bg1">
          <div className="bg2">
            <article className="card-body mx-auto" style={{maxWidth: '400px'}}>
              <h4 className="card-title mt-3 text-center">Create Account</h4>
              <p className="text-center">Let Make Shopping Easier</p>
              <form id="regform" action="#" name="register" onsubmit="return validation()" method="POST">
                <div className="form-group input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"> <i className="fa fa-user" /> </span>
                  </div>
                  <input name className="form-control" placeholder="Full name" type="text" id="fullName" />
                  <small id="fnameErr" />
                </div> {/* form-group// */}
                <div className="form-group input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"> <i className="fa fa-envelope" /> </span>
                  </div>
                  <input name className="form-control" placeholder="Email address" type="email" id="email" />
                  <small id="emailErr" />
                </div> {/* form-group// */}
                <div className="form-group input-group">
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
                <div className="form-group input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"> <i className="fa fa-phone" /> </span>
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
                <div className="form-group input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"> <i className="fa fa-lock" /> </span>
                  </div>
                  <input className="form-control" placeholder="Create password" type="password" id="password" />
                  <small id="passwordErr" />
                </div> {/* form-group// */}
                <div className="form-group input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"> <i className="fa fa-lock" /> </span>
                  </div>
                  <input className="form-control" placeholder="Repeat password" type="password" id="repassword" />
                  <small id="repasswordErr" />
                </div> {/* form-group// */}                                      
                <div className="form-group">
                  <button type="submit" className="btn btn-color btn-block"> Create Account</button>
                </div> {/* form-group// */}      
                <p className="text-center">Have an account? <a href className="login">Log In</a> </p>                                                                 
              </form>
            </article>  
          </div>
        </div>
      );
}

export default page