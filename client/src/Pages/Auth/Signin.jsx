import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './auth.css'


const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:9010/user/signin", formData, {
        withCredentials: true,
      });
      if (response.data.message) {
        console.log("Response from server : " + response.data.message)
        window.alert(response.data.message)
        window.location.href = '/'
      }

    } catch (error) {
      console.error("Error logging in:", error.response?.data || error.message);
    }
  };

  function showpassword() {
    const passwordInput = document.getElementById('password');
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  }



  return (

    <div className="signinpage">
      <div>
        <div className="authbox">
          {/* <div className="crossicon">
            <svg onClick={handlecross} xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 32 32" viewBox="0 0 32 32" id="cross">
              <path d="M31.5,2.42828c0-0.51752-0.20148-1.00427-0.56763-1.36987c-0.73224-0.73224-2.00751-0.73224-2.73975,0L16,13.25104L3.80737,1.05841c-0.73224-0.73224-2.00751-0.73224-2.73975,0C0.70154,1.42401,0.5,1.91077,0.5,2.42828c0,0.51746,0.20154,1.00421,0.56763,1.36987l12.19263,12.19263L1.06763,28.18341C0.70154,28.54901,0.5,29.03577,0.5,29.55328c0,0.51746,0.20154,1.00421,0.56763,1.36987c0.73224,0.73224,2.00751,0.73224,2.73975,0L16,18.73053l12.19263,12.19263c0.36615,0.36609,0.85242,0.56763,1.36987,0.56763c0.51752,0,1.00378-0.20154,1.36987-0.56763C31.29852,30.5575,31.5,30.07074,31.5,29.55328c0-0.51752-0.20148-1.00427-0.56763-1.36987L18.73975,15.99078L30.93237,3.79816C31.29852,3.4325,31.5,2.94574,31.5,2.42828z"></path>
            </svg>
          </div> */}
          <form id="signinform" onSubmit={handleSubmit}>
            <div id="signinforminsidediv">

              <h1 id="signinheading">SIGN IN</h1>
              <input
                id="username"
                type="text"
                name="username"
                placeholder="Username......"
                value={formData.username}
                onChange={handleChange}
                required
              />

              <input
                id="password"
                type="password"
                name="password"
                placeholder="Password......"
                value={formData.password}
                onChange={handleChange}
                required
              />

              <div className="checkboxes">
                <div id="showpassword"><input type="checkbox" onClick={showpassword} />Show Password</div>

                <div id="checkbox">
                  <input type="checkbox" id="checkboxpolicy" name="checkbox" required />
                  <label htmlFor="checkbox">Accept terms & policy of the company.</label>
                </div>
              </div>

              <button id="signinbutton" type="submit">SIGN IN</button>
            </div>
            <div className="signup">
              <p>new user ? <Link id="signup" to='/signup'>signup here</Link></p>
            </div>
          </form>

        </div>


      </div>
    </div>
  );
};

export default LoginForm;
