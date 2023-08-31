import React from 'react';
import '../../public/css/signUp.css';

const page = () => {
    return (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 ">
              <div className="card">
                <div className="signup">SignUp</div>
                <div className="card-body bdy ">
                  <button className="bg1 bt"><a href="/signup/farmer" className="label">Farmers</a></button>
                  <button className="bg1 bt1"><a href="/signup/consumer" className="label">Consumer</a></button>
                </div>
                <div className="account"> Already have an Acount?<a href="../page/login.html" className="login">Log In</a></div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default page