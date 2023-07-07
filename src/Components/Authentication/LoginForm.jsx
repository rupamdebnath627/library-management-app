import "./LoginForm.css";

import email_icon from "../../assets/email_icon.png";
import pass_icon from "../../assets/pass_icon.png";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../../Store/login-slice";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [inputs, setInputs] = useState({});

  const dispatch = useDispatch();

  const accounts = useSelector((state) => state.account.accounts);

  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const submitHandler = () => {
    // console.log(inputs);
    const currentAccount = accounts.find(
      (account) => account.email === inputs.emailfield
    );
    sessionStorage.setItem("userId", currentAccount.userId);
    dispatch(loginActions.setLoginState(true));
    navigate("/" + currentAccount.userId);
  };

  return (
    <div className="loginform-container">
      <div className="login-heading">Log into Library Management Sysytem</div>
      <div className="loginform">
        <label htmlFor="emailfield">Email Id</label>
        <input
          name="emailfield"
          id="emailfield"
          type="email"
          value={inputs.emailfield || ""}
          onChange={handleChange}
        />
        <img src={email_icon} alt="user_icon" />
        <label htmlFor="passfield">Password</label>
        <input
          name="passfield"
          id="passfield"
          type="password"
          value={inputs.passfield || ""}
          onChange={handleChange}
        />
        <img src={pass_icon} alt="pass_icon" />
      </div>

      <div className="login-form-submit" onClick={submitHandler}>
        Submit
      </div>
    </div>
  );
};

export default LoginForm;
