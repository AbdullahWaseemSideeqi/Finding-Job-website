import React, { Component } from "react";
import { useHistory } from "react-router-dom";

import SignUpFinalPage from "./SignUpSecondPage";

class SignUpMainPage extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "" };
  }
  render() {
    return (
      <FuncSignUpMainPage current_email={this.state.email}></FuncSignUpMainPage>
    );
  }
}

function FuncSignUpMainPage(params) {
  let history = useHistory();
  return (
    <div className="div_Main_div">
      <div className="div_uppest_signUp_upwork">
        <div className="div_inside_uppest_signUp_upwork">
          <img
            className="img_upwork_sign_up_image"
            src="Images/upwork_sign_up_image.PNG"
          />
        </div>
      </div>
      <div className="div_second_Main">
        <div className="div_get_free_account_card">
          <div className="div_get_your_free_account">Get your free account</div>
          <div className="div_for_continue">
            <img className="img_for_continue" src="Images/continue.PNG" />
          </div>
          <div className="div_for_form">
            <form>
              <input
                className="input_email"
                type="text"
                placeholder="email"
              ></input>
            </form>
          </div>
          <div className="div_for_continue_with_Email_button">
            <button
              className="button_for_continue_with_Email_button"
              onClick={() => {
                // alert("continue with email on clicke called");
                history.push("/SignUpFinalPage");
              }}
            >
              Continue with Email
            </button>
          </div>
        </div>

        <div className="div_third_Main_as_footer">
          <div className="div_for_015_2021_Upwork_Global_Inc">
            © 2015 - 2021 Upwork® Global Inc
          </div>
          <div className="div_for_terms_for_service">Terms for Service</div>
          <div className="div_for_Privacy_Policy">Privacy Policy</div>
          <div className="div_for_Accesibility">Accessibility</div>
        </div>
      </div>
    </div>
  );
}

export default SignUpMainPage;
