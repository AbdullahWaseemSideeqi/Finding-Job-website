import logo from "./logo.svg";
import "./App.css";
import "./Upwork_list_for_array.css";
import "./UppestTaskbar.css";
import "./SignUpFirstPage.css";
import "./SignUpSecondPage.css";
import TopTaskbar from "./UppestTaskbar.jsx";
import UpworkListForArray from "./Upwork_list_for_array";

function App() {
  return (
    <div>
      {/* <uppest_tastbar></uppest_tastbar>
      <uppest_tastbar></uppest_tastbar> */}

      <TopTaskbar></TopTaskbar>

      <UpworkListForArray></UpworkListForArray>

      {/* <div ClassName="div_post_a_job">TU Kutta</div> */}
      {/* <div className="App">
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
        </div>
      </div> */}
    </div>
  );
}

export default App;
