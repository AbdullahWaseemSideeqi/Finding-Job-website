import React, { Component } from "react";
class TopTaskbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <div className="Main_page">
          <div className="div_uppest">
            <div className="div_upwork_and_searchbar">
              <img className="image_upwork" src="Images/upwork_image.PNG" />

              <div className="div_forSearch">
                <img className="Img_Search_icon" src="Images/search_icon.PNG" />
                <img
                  className="Img_Search_text_img"
                  src="Images/Search_text.PNG"
                />
              </div>
            </div>
            <div className="div_upwork_icon_and_categories">
              <div className="div_toHold_three_options">
                <div className="div_toHold_one_option">How it works</div>
                <div className="div_toHold_one_option">Log In</div>
                <div className="div_toHold_one_option">Sign up</div>
              </div>
            </div>

            <div className="div_upp_post_a_job">
              <div className="div_post_a_job">Post a Job</div>
            </div>
          </div>
          <Taskbar_Second></Taskbar_Second>
        </div>
      </div>
    );
  }
}

function Taskbar_Second(params) {
  return (
    <div className="div_main_2nd_taskbar">
      <div className="div_Web_dev">Web Dev</div>
      <div className="div_Mobile_dev">Mobile Dev</div>
      <div className="div_Design">Design</div>
      <div className="div_Writing">Writing</div>
      <div className="div_Admin_Support">Admin Support</div>
      <div className="div_Customer_Support">Customer Service</div>
      <div className="div_Marketing">Marketing</div>
      <div className="div_Accounting">Accounting</div>
      <div className="div_See_All_Categories">See All Categories</div>
    </div>
  );
}

export default TopTaskbar;
