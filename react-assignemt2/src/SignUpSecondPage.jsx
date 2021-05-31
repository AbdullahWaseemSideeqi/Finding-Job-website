import React, { Component } from "react";
import { GetProjects, PostAccout } from "./RESTAPI_CALLER";
class SignUpFinalPage extends Component {
  constructor(props) {
    super(props);
    this.state = { first_name: "", last_name: "", password: "", country: "" };
  }
  render() {
    return (
      <div className="div_SignUp_SecondPage_Main">
        <div className="div_uppest_signUp_upwork">
          <div className="div_inside_uppest_signUp_upwork">
            <img
              className="img_upwork_sign_up_image"
              src="Images/upwork_sign_up_image.PNG"
            />
          </div>
        </div>

        <div className="div_SignUp_second_page_second_main">
          <div className="div_SignUp_second_page_card_holder">
            <div className="div_Complete_your_free_account_setup">
              Complete your free account
            </div>
            <div className="div_setup">setup</div>
            <div className="div_your_email">l175254@lhr.nu.edu.pk</div>
            <div className="div_to_hold_first_and_last_name">
              <form>
                <input
                  className="input_first_name"
                  type="input"
                  placeholder=" First Name"
                  value={this.state.first_name}
                  onChange={(event) => {
                    this.setState({ first_name: event.target.value });
                  }}
                ></input>
              </form>

              <form>
                <input
                  className="input_last_name"
                  type="input"
                  placeholder=" Last Name"
                  value={this.state.last_name}
                  onChange={(event) => {
                    this.setState({ last_name: event.target.value });
                  }}
                ></input>
              </form>
            </div>
            <div className="div_create_a_password">
              <input
                className="input_create_a_password"
                type="input"
                placeholder=" Create a password"
                value={this.state.password}
                onChange={(event) => {
                  this.setState({ password: event.target.value });
                }}
              ></input>
            </div>

            <div className="div_select_a_country">
              <input
                className="input_select_a_country"
                type="input"
                placeholder=" Select a country"
                value={this.state.country}
                onChange={(event) => {
                  this.setState({ country: event.target.value });
                }}
              ></input>
            </div>
            <div className="div_content_plus_twotext_in_a_row">
              <div className="div_I_want_to">I want to:</div>
              <div className="div_hire_for_a_project_and_work_as_a_freelancer">
                <div className="div_hire_for_a_project">Hire for a project</div>
                <div className="div_work_as_a_freelancer">
                  Work as a freelancer
                </div>
              </div>
            </div>
            <button
              className="button_create_my_account"
              onClick={() => {
                alert("on click of button is spoken");
                PostAccout({
                  first_name: this.state.first_name,
                  last_name: this.state.last_name,
                  password: this.state.password,
                  country: this.state.country,
                }).then((response) => {
                  console.log(" Posted Account Information ==" + response.data);
                  alert(
                    "Response after posting in the form of Posted Account information ==>   id:" +
                      response.data.id +
                      " first_name == " +
                      response.data.first_name +
                      " last_name == " +
                      response.data.last_name +
                      " password == " +
                      response.data.password +
                      " country == " +
                      response.data.country
                  );
                });
              }}
            >
              Create My Account
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
    );
  }
}

export default SignUpFinalPage;
