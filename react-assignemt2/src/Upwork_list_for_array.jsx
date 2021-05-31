import React, { Component } from "react";
import ReactDOM from "react-dom";
import { GetProjects, PostAccout } from "./RESTAPI_CALLER";

class UpworkListForArray extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page_NO: 1,
      arr_projects: [],

      range_of_jobs_diplayed_on_screen: 10,
    };
  }

  DummY_function = (Page_Change_NO) => {
    this.setState({ page_NO: Page_Change_NO });
  };

  render() {
    return (
      <div className="div_outermost">
        <Display_MultipleObjects
          // projectsToDisplay={this.state.arr_projects}
          pageNO={this.state.page_NO}
          no_of_jobs_range={this.state.range_of_jobs_diplayed_on_screen}
        ></Display_MultipleObjects>
        <Display_paging_and_no_of_jobs
          onpagechange={(page_change_no) => {
            // alert(selection_staus + "dssadsasd    ");
            this.DummY_function(page_change_no);
          }}
          noOf_jobs_per_page={this.state.range_of_jobs_diplayed_on_screen}
          onpageRangeChange={(range_of_displayed_jobs) => {
            this.setState({
              range_of_jobs_diplayed_on_screen: range_of_displayed_jobs,
            });
          }}
        ></Display_paging_and_no_of_jobs>
        <div className="div_to_hold_two_divs_categories_and_All_Categories">
          <strong className="strong_Catogories_Heading">CATEGORIES</strong>
          <div className="div_All_Categories">All Categories</div>
        </div>
        <Display_Footer></Display_Footer>
      </div>
    );
  }


}

class Display_CheckBox_and_Label extends Component {
  constructor(props) {
    super(props);
    this.state = { Filiter_Label_Name: "default", checked: false };
  }
  render() {
    let updated_label = this.props.label_name;

    // this.setState({ Label_Name: updated_label });
    return (
      <div className="div_to_hold_checkBox_and_label">
        <label class="container label_COVID_19">
          <div className="div_label">{updated_label}</div>
          <input
            type="checkbox"
            defaultChecked={this.state.chkbox}
            onChange={() => {
              let updated_checked = !this.state.checked;
              this.setState({ checked: updated_checked });
              this.props.oncheckBoxSelection(updated_checked);

              // alert(this.state.checked);
            }}
          />
          <span class="checkmark"></span>
        </label>
        <div
          id="dummy_div"
          labelvalue={updated_label}
          check_staus={this.state.checked}
        ></div>
      </div>
    );
  }
}

class Display_MultipleObjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkbox_selected: false,
      Number_of_Jobs_found: 72,
      checkbox_selected_array: [
        {
          selection_status: false,
          previous_slection_status: false,
        },
        {
          selection_status: false,
          previous_slection_status: false,
        },
        {
          selection_status: false,
          previous_slection_status: false,
        },
        {
          selection_status: false,
          previous_slection_status: false,
        },

        {
          selection_status: false,
          previous_slection_status: false,
        },
        {
          selection_status: false,
          previous_slection_status: false,
        },
        {
          selection_status: false,
          previous_slection_status: false,
        },
        {
          selection_status: false,
          previous_slection_status: false,
        },

        {
          selection_status: false,
          previous_slection_status: false,
        },
        {
          selection_status: false,
          previous_slection_status: false,
        },
        {
          selection_status: false,
          previous_slection_status: false,
        },
        {
          selection_status: false,
          previous_slection_status: false,
        },
      ],
      // dummy_dummy: "mein hu jinga lala",
      range_of_page_no: 10,
      previous_array: [],
      arr: [],
      temp_duplicate_array: [], // for storing the data on frontend by getting from server for only once by using FetchProjects fubction
    };
  }

  Any_CheckBox_Selection = (Label_For_Filteing, Status_For_Filtering) => {
    // alert(
    //   "BKDAny Check Box Called  === " +
    //     Label_For_Filteing +
    //     "   " +
    //     Status_For_Filtering
    // );

    let i = 0;

    // let checkbox_selected_array = this.state.checkbox_selected_array;

    // let previuos_selected_No_of_check_boxes = this.state.checkbox_selected_array.map()(
    //   (previous) => previous.previous_slection_status === true
    // );

    let previuos_selected_No_of_check_boxes =
      this.state.checkbox_selected_array.filter(
        ({ previous_slection_status }) => previous_slection_status === true
      );

    i = previuos_selected_No_of_check_boxes.length;
    // alert("No of previous check box selected == " + i);

    if (i === 0 && Status_For_Filtering === true) {
      // for first checkbox selection
      this.state.previous_array = this.state.arr;

      // let leng = this.props.projectsToDisplay.length;

      // alert("lenght == ", leng);

      if (Label_For_Filteing === "Hourly") {
        this.state.checkbox_selected_array[1].selection_status =
          Status_For_Filtering;
        this.state.checkbox_selected_array[1].previous_slection_status =
          Status_For_Filtering;

        let updated_array2 = this.state.arr.filter(
          ({ Dummy_hours }) => Dummy_hours === Label_For_Filteing
        );

        let No_of_filtered_jobs = updated_array2.length;

        this.setState({
          arr: updated_array2,
          Number_of_Jobs_found: No_of_filtered_jobs,
        });
      }
      if (Label_For_Filteing === "Fixed-Price") {
        this.state.checkbox_selected_array[2].selection_status =
          Status_For_Filtering;
        this.state.checkbox_selected_array[2].previous_slection_status =
          Status_For_Filtering;

        // alert("Within if condition updating array 2 == " + Label_For_Filteing);
        let updated_array2 = this.state.arr.filter(
          ({ hours }) => hours === Label_For_Filteing
        );
        let No_of_filtered_jobs = updated_array2.length;

        this.setState({
          arr: updated_array2,
          Number_of_Jobs_found: No_of_filtered_jobs,
        });
      }
      if (Label_For_Filteing === "No hires") {
        this.state.checkbox_selected_array[3].selection_status =
          Status_For_Filtering;
        this.state.checkbox_selected_array[3].previous_slection_status =
          Status_For_Filtering;

        let updated_array2 = this.state.arr.filter(
          ({ no_of_hires }) => no_of_hires === 0
        );

        let No_of_filtered_jobs = updated_array2.length;
        this.setState({
          arr: updated_array2,
          Number_of_Jobs_found: No_of_filtered_jobs,
        });
      }
      if (Label_For_Filteing === "1 to 9 hires") {
        this.state.checkbox_selected_array[4].selection_status =
          Status_For_Filtering;
        this.state.checkbox_selected_array[4].previous_slection_status =
          Status_For_Filtering;

        let updated_array2 = this.state.arr.filter(
          ({ no_of_hires }) => no_of_hires < 10 && no_of_hires > 0
        );

        let No_of_filtered_jobs = updated_array2.length;
        this.setState({
          arr: updated_array2,
          Number_of_Jobs_found: No_of_filtered_jobs,
        });
      }
      if (Label_For_Filteing === "10+ hires") {
        this.state.checkbox_selected_array[5].selection_status =
          Status_For_Filtering;
        this.state.checkbox_selected_array[5].previous_slection_status =
          Status_For_Filtering;

        let updated_array2 = this.state.arr.filter(
          ({ no_of_hires }) => no_of_hires > 10
        );

        let No_of_filtered_jobs = updated_array2.length;
        this.setState({
          arr: updated_array2,
          Number_of_Jobs_found: No_of_filtered_jobs,
        });
      }
      if (Label_For_Filteing === "Less than 30 hrs/week") {
        this.state.checkbox_selected_array[6].selection_status =
          Status_For_Filtering;
        this.state.checkbox_selected_array[6].previous_slection_status =
          Status_For_Filtering;

        let updated_array2 = this.state.arr.filter(
          ({ hourse_needed }) => hourse_needed === "Less than 30 hrs/week"
        );

        let No_of_filtered_jobs = updated_array2.length;
        this.setState({
          arr: updated_array2,
          Number_of_Jobs_found: No_of_filtered_jobs,
        });
      }
      if (Label_For_Filteing === "More than 30 hrs/week") {
        this.state.checkbox_selected_array[7].selection_status =
          Status_For_Filtering;
        this.state.checkbox_selected_array[7].previous_slection_status =
          Status_For_Filtering;

        let updated_array2 = this.state.arr.filter(
          ({ hourse_needed }) => hourse_needed === "More than 30 hrs/week"
        );

        let No_of_filtered_jobs = updated_array2.length;
        this.setState({
          arr: updated_array2,
          Number_of_Jobs_found: No_of_filtered_jobs,
        });
      }
      if (Label_For_Filteing === "Less than 1 month") {
        this.state.checkbox_selected_array[8].selection_status =
          Status_For_Filtering;
        this.state.checkbox_selected_array[8].previous_slection_status =
          Status_For_Filtering;

        let updated_array2 = this.state.arr.filter(
          ({ duration }) => duration === "Less than 1 month"
        );

        let No_of_filtered_jobs = updated_array2.length;
        this.setState({
          arr: updated_array2,
          Number_of_Jobs_found: No_of_filtered_jobs,
        });
      }
      if (Label_For_Filteing === "1 to 3 months") {
        this.state.checkbox_selected_array[9].selection_status =
          Status_For_Filtering;
        this.state.checkbox_selected_array[9].previous_slection_status =
          Status_For_Filtering;

        let updated_array2 = this.state.arr.filter(
          ({ duration }) => duration === "1 to 3 months"
        );

        let No_of_filtered_jobs = updated_array2.length;
        this.setState({
          arr: updated_array2,
          Number_of_Jobs_found: No_of_filtered_jobs,
        });
      }
      if (Label_For_Filteing === "3 to 6 months") {
        this.state.checkbox_selected_array[10].selection_status =
          Status_For_Filtering;
        this.state.checkbox_selected_array[10].previous_slection_status =
          Status_For_Filtering;

        let updated_array2 = this.state.arr.filter(
          ({ duration }) => duration === "3 to 6 months"
        );

        let No_of_filtered_jobs = updated_array2.length;
        this.setState({
          arr: updated_array2,
          Number_of_Jobs_found: No_of_filtered_jobs,
        });
      }
      if (Label_For_Filteing === "More than 6 months") {
        this.state.checkbox_selected_array[11].selection_status =
          Status_For_Filtering;
        this.state.checkbox_selected_array[11].previous_slection_status =
          Status_For_Filtering;

        let updated_array2 = this.state.arr.filter(
          ({ duration }) => duration === "More than 6 months"
        );

        let No_of_filtered_jobs = updated_array2.length;
        this.setState({
          arr: updated_array2,
          Number_of_Jobs_found: No_of_filtered_jobs,
        });
      }
    } else if (Status_For_Filtering === false && i == 1) {
      // when all checkboxes are de selcted

      for (var no = 0; no < 12; no++) {
        this.state.checkbox_selected_array[no].selection_status =
          Status_For_Filtering;
        this.state.checkbox_selected_array[no].previous_slection_status =
          Status_For_Filtering;
      }

      this.setState({
        arr: this.state.temp_duplicate_array,
        Number_of_Jobs_found: 72,
      });
    } else if (Status_For_Filtering === false && i != 1) {
      // for deselection of checkbox when at least 1 check box is already selected

      if (Label_For_Filteing === "Hourly") {
        this.state.checkbox_selected_array[1].selection_status =
          Status_For_Filtering;
        this.state.checkbox_selected_array[1].previous_slection_status =
          Status_For_Filtering;

        let updated_array2 = this.state.previous_array.filter(
          ({ Dummy_hours }) => Dummy_hours != Label_For_Filteing
        );
        this.state.previous_array = updated_array2;

        let No_of_filtered_jobs = updated_array2.length;

        this.setState({
          arr: updated_array2,
          Number_of_Jobs_found: No_of_filtered_jobs,
        });
      }
      if (Label_For_Filteing === "Fixed-Price") {
        this.state.checkbox_selected_array[2].selection_status =
          Status_For_Filtering;
        this.state.checkbox_selected_array[2].previous_slection_status =
          Status_For_Filtering;

        // alert("Within if condition updating array 2 == " + Label_For_Filteing);
        let updated_array2 = this.state.previous_array.filter(
          ({ hours }) => hours != Label_For_Filteing
        );
        this.state.previous_array = updated_array2;
        let No_of_filtered_jobs = updated_array2.length;

        this.setState({
          arr: updated_array2,
          Number_of_Jobs_found: No_of_filtered_jobs,
        });
      }
      if (Label_For_Filteing === "No hires") {
        this.state.checkbox_selected_array[3].selection_status =
          Status_For_Filtering;
        this.state.checkbox_selected_array[3].previous_slection_status =
          Status_For_Filtering;

        let updated_array2 = this.state.previous_array.filter(
          ({ no_of_hires }) => no_of_hires != 0
        );
        this.state.previous_array = updated_array2;
        let No_of_filtered_jobs = updated_array2.length;

        this.setState({
          arr: updated_array2,
          Number_of_Jobs_found: No_of_filtered_jobs,
        });
      }
      if (Label_For_Filteing === "1 to 9 hires") {
        this.state.checkbox_selected_array[4].selection_status =
          Status_For_Filtering;
        this.state.checkbox_selected_array[4].previous_slection_status =
          Status_For_Filtering;

        let updated_array2 = this.state.previous_array.filter(
          ({ no_of_hires }) => no_of_hires > 10 || no_of_hires < 1
        );
        this.state.previous_array = updated_array2;
        let No_of_filtered_jobs = updated_array2.length;

        this.setState({
          arr: updated_array2,
          Number_of_Jobs_found: No_of_filtered_jobs,
        });
      }
      if (Label_For_Filteing === "10+ hires") {
        this.state.checkbox_selected_array[5].selection_status =
          Status_For_Filtering;
        this.state.checkbox_selected_array[5].previous_slection_status =
          Status_For_Filtering;

        let updated_array2 = this.state.previous_array.filter(
          ({ no_of_hires }) => no_of_hires < 10
        );
        this.state.previous_array = updated_array2;
        let No_of_filtered_jobs = updated_array2.length;

        this.setState({
          arr: updated_array2,
          Number_of_Jobs_found: No_of_filtered_jobs,
        });
      }
      if (Label_For_Filteing === "Less than 30 hrs/week") {
        this.state.checkbox_selected_array[6].selection_status =
          Status_For_Filtering;
        this.state.checkbox_selected_array[6].previous_slection_status =
          Status_For_Filtering;

        let updated_array2 = this.state.previous_array.filter(
          ({ hourse_needed }) => hourse_needed != "Less than 30 hrs/week"
        );
        this.state.previous_array = updated_array2;
        let No_of_filtered_jobs = updated_array2.length;

        this.setState({
          arr: updated_array2,
          Number_of_Jobs_found: No_of_filtered_jobs,
        });
      }
      if (Label_For_Filteing === "More than 30 hrs/week") {
        this.state.checkbox_selected_array[7].selection_status =
          Status_For_Filtering;
        this.state.checkbox_selected_array[7].previous_slection_status =
          Status_For_Filtering;

        let updated_array2 = this.state.previous_array.filter(
          ({ hourse_needed }) => hourse_needed != "More than 30 hrs/week"
        );
        this.state.previous_array = updated_array2;
        let No_of_filtered_jobs = updated_array2.length;

        this.setState({
          arr: updated_array2,
          Number_of_Jobs_found: No_of_filtered_jobs,
        });
      }
      if (Label_For_Filteing === "Less than 1 month") {
        this.state.checkbox_selected_array[8].selection_status =
          Status_For_Filtering;
        this.state.checkbox_selected_array[8].previous_slection_status =
          Status_For_Filtering;

        let updated_array2 = this.state.previous_array.filter(
          ({ duration }) => duration != "Less than 1 month"
        );
        this.state.previous_array = updated_array2;
        let No_of_filtered_jobs = updated_array2.length;

        this.setState({
          arr: updated_array2,
          Number_of_Jobs_found: No_of_filtered_jobs,
        });
      }
      if (Label_For_Filteing === "1 to 3 months") {
        this.state.checkbox_selected_array[9].selection_status =
          Status_For_Filtering;
        this.state.checkbox_selected_array[9].previous_slection_status =
          Status_For_Filtering;

        let updated_array2 = this.state.previous_array.filter(
          ({ duration }) => duration != "1 to 3 months"
        );
        this.state.previous_array = updated_array2;
        let No_of_filtered_jobs = updated_array2.length;

        this.setState({
          arr: updated_array2,
          Number_of_Jobs_found: No_of_filtered_jobs,
        });
      }
      if (Label_For_Filteing === "3 to 6 months") {
        this.state.checkbox_selected_array[10].selection_status =
          Status_For_Filtering;
        this.state.checkbox_selected_array[10].previous_slection_status =
          Status_For_Filtering;

        let updated_array2 = this.state.previous_array.filter(
          ({ duration }) => duration != "3 to 6 months"
        );
        this.state.previous_array = updated_array2;
        let No_of_filtered_jobs = updated_array2.length;

        this.setState({
          arr: updated_array2,
          Number_of_Jobs_found: No_of_filtered_jobs,
        });
      }
      if (Label_For_Filteing === "More than 6 months") {
        this.state.checkbox_selected_array[11].selection_status =
          Status_For_Filtering;
        this.state.checkbox_selected_array[11].previous_slection_status =
          Status_For_Filtering;

        let updated_array2 = this.state.previous_array.filter(
          ({ duration }) => duration != "More than 6 months"
        );
        this.state.previous_array = updated_array2;
        let No_of_filtered_jobs = updated_array2.length;

        this.setState({
          arr: updated_array2,
          Number_of_Jobs_found: No_of_filtered_jobs,
        });
      }
    } else if (
      this.state.checkbox_selected_array[1].previous_slection_status === true &&
      Label_For_Filteing === "Fixed-Price" &&
      Status_For_Filtering === true
    ) {
      // union of hourly with fixed price when fixed price is selected
      let Updated_Array = this.state.temp_duplicate_array;

      let updated_array2 = Updated_Array.filter(
        ({ hours }) => hours === Label_For_Filteing
      );
      Updated_Array = this.state.arr;

      this.state.checkbox_selected_array[2].previous_slection_status = true;

      let ultimate_updated_array = [...updated_array2, ...Updated_Array];
      this.state.previous_array = ultimate_updated_array;
      let No_of_filtered_jobs = ultimate_updated_array.length;

      this.setState({
        arr: ultimate_updated_array,
        Number_of_Jobs_found: No_of_filtered_jobs,
      });
    } else if (
      this.state.checkbox_selected_array[2].previous_slection_status === true &&
      Label_For_Filteing === "Hourly" &&
      Status_For_Filtering === true
    ) {
      // alert("coming to union whhen hourly is seleted aftwerwards.");
      // union of hourly with fixed price when hourly is selected
      let Updated_Array = this.state.temp_duplicate_array;

      let updated_array2 = Updated_Array.filter(
        ({ Dummy_hours }) => Dummy_hours === Label_For_Filteing
      );
      Updated_Array = this.state.arr;

      this.state.checkbox_selected_array[1].previous_slection_status = true;

      let ultimate_updated_array = [...updated_array2, ...Updated_Array];
      this.state.previous_array = ultimate_updated_array;

      let No_of_filtered_jobs = ultimate_updated_array.length;

      this.setState({
        arr: ultimate_updated_array,
        Number_of_Jobs_found: No_of_filtered_jobs,
      });
    } else if (
      (this.state.checkbox_selected_array[4].previous_slection_status ===
        true ||
        this.state.checkbox_selected_array[5].previous_slection_status ===
          true) &&
      Label_For_Filteing === "No hires" &&
      Status_For_Filtering === true
    ) {
      // alert("coming to union whhen hourly is seleted aftwerwards.");
      // union of No hires months with other hires no hire is selected
      let Updated_Array = this.state.temp_duplicate_array;

      let updated_array2 = Updated_Array.filter(
        ({ no_of_hires }) => no_of_hires === 0
      );
      Updated_Array = this.state.arr;

      this.state.checkbox_selected_array[3].previous_slection_status = true;

      let ultimate_updated_array = [...updated_array2, ...Updated_Array];
      this.state.previous_array = ultimate_updated_array;

      let No_of_filtered_jobs = ultimate_updated_array.length;

      this.setState({
        arr: ultimate_updated_array,
        Number_of_Jobs_found: No_of_filtered_jobs,
      });
    } else if (
      (this.state.checkbox_selected_array[3].previous_slection_status ===
        true ||
        this.state.checkbox_selected_array[5].previous_slection_status ===
          true) &&
      Label_For_Filteing === "1 to 9 hires" &&
      Status_For_Filtering === true
    ) {
      // alert("coming to union whhen hourly is seleted aftwerwards.");
      // union of 1 to 9 hires months with 1 to 9 hires no hire is selected
      let Updated_Array = this.state.temp_duplicate_array;

      let updated_array2 = Updated_Array.filter(
        ({ no_of_hires }) => no_of_hires < 10 && no_of_hires > 0
      );
      Updated_Array = this.state.arr;

      this.state.checkbox_selected_array[4].previous_slection_status = true;

      let ultimate_updated_array = [...updated_array2, ...Updated_Array];
      this.state.previous_array = ultimate_updated_array;

      let No_of_filtered_jobs = ultimate_updated_array.length;

      this.setState({
        arr: ultimate_updated_array,
        Number_of_Jobs_found: No_of_filtered_jobs,
      });
    } else if (
      (this.state.checkbox_selected_array[3].previous_slection_status ===
        true ||
        this.state.checkbox_selected_array[4].previous_slection_status ===
          true) &&
      Label_For_Filteing === "10+ hires" &&
      Status_For_Filtering === true
    ) {
      // alert("coming to union whhen hourly is seleted aftwerwards.");
      // union of No hires months with other hires no hire is selected
      let Updated_Array = this.state.temp_duplicate_array;

      let updated_array2 = Updated_Array.filter(
        ({ no_of_hires }) => no_of_hires > 10
      );
      Updated_Array = this.state.arr;

      this.state.checkbox_selected_array[5].previous_slection_status = true;

      let ultimate_updated_array = [...updated_array2, ...Updated_Array];
      this.state.previous_array = ultimate_updated_array;

      let No_of_filtered_jobs = ultimate_updated_array.length;

      this.setState({
        arr: ultimate_updated_array,
        Number_of_Jobs_found: No_of_filtered_jobs,
      });
    } else if (
      this.state.checkbox_selected_array[6].previous_slection_status === true &&
      Label_For_Filteing === "Fixed-Price" &&
      Status_For_Filtering === true
    ) {
      // union of less than 30 hrs /week with fixed price when fixed price is selected
      let Updated_Array = this.state.temp_duplicate_array;

      let updated_array2 = Updated_Array.filter(
        ({ hours }) => hours === Label_For_Filteing
      );
      Updated_Array = this.state.arr;

      this.state.checkbox_selected_array[2].previous_slection_status = true;

      let ultimate_updated_array = [...updated_array2, ...Updated_Array];
      this.state.previous_array = ultimate_updated_array;
      let No_of_filtered_jobs = ultimate_updated_array.length;

      this.setState({
        arr: ultimate_updated_array,
        Number_of_Jobs_found: No_of_filtered_jobs,
      });
    } else if (
      this.state.checkbox_selected_array[7].previous_slection_status === true &&
      Label_For_Filteing === "Fixed-Price" &&
      Status_For_Filtering === true
    ) {
      // union of more than 30 hrs /week with fixed price when fixed price is selected
      let Updated_Array = this.state.temp_duplicate_array;

      let updated_array2 = Updated_Array.filter(
        ({ hours }) => hours === Label_For_Filteing
      );
      Updated_Array = this.state.arr;

      this.state.checkbox_selected_array[2].previous_slection_status = true;

      let ultimate_updated_array = [...updated_array2, ...Updated_Array];
      this.state.previous_array = ultimate_updated_array;
      let No_of_filtered_jobs = ultimate_updated_array.length;

      this.setState({
        arr: ultimate_updated_array,
        Number_of_Jobs_found: No_of_filtered_jobs,
      });
    } else if (
      this.state.checkbox_selected_array[2].previous_slection_status === true &&
      Label_For_Filteing === "Less than 30 hrs/week" &&
      Status_For_Filtering === true
    ) {
      // alert("coming to union whhen hourly is seleted aftwerwards.");
      // union of Less than 30 hrs/week with Fixed Price when more than Less than 30 hrs/week is selected
      let Updated_Array = this.state.temp_duplicate_array;

      let updated_array2 = Updated_Array.filter(
        ({ hourse_needed }) => hourse_needed === "Less than 30 hrs/week"
      );
      Updated_Array = this.state.arr;

      this.state.checkbox_selected_array[6].previous_slection_status = true;

      let ultimate_updated_array = [...updated_array2, ...Updated_Array];
      this.state.previous_array = ultimate_updated_array;

      let No_of_filtered_jobs = ultimate_updated_array.length;

      this.setState({
        arr: ultimate_updated_array,
        Number_of_Jobs_found: No_of_filtered_jobs,
      });
    } else if (
      this.state.checkbox_selected_array[2].previous_slection_status === true &&
      Label_For_Filteing === "More than 30 hrs/week" &&
      Status_For_Filtering === true
    ) {
      // alert("coming to union whhen hourly is seleted aftwerwards.");
      // union of Less than 30 hrs/week with Fixed Price when more than Less than 30 hrs/week is selected
      let Updated_Array = this.state.temp_duplicate_array;

      let updated_array2 = Updated_Array.filter(
        ({ hourse_needed }) => hourse_needed === "More than 30 hrs/week"
      );
      Updated_Array = this.state.arr;

      this.state.checkbox_selected_array[7].previous_slection_status = true;

      let ultimate_updated_array = [...updated_array2, ...Updated_Array];
      this.state.previous_array = ultimate_updated_array;

      let No_of_filtered_jobs = ultimate_updated_array.length;

      this.setState({
        arr: ultimate_updated_array,
        Number_of_Jobs_found: No_of_filtered_jobs,
      });
    } else if (
      this.state.checkbox_selected_array[7].previous_slection_status === true &&
      Label_For_Filteing === "Less than 30 hrs/week" &&
      Status_For_Filtering === true
    ) {
      // alert("coming to union whhen hourly is seleted aftwerwards.");
      // union of Less than 30 hrs/week with other hours/week when more than Less than 30 hrs/week is selected
      let Updated_Array = this.state.temp_duplicate_array;

      let updated_array2 = Updated_Array.filter(
        ({ hourse_needed }) => hourse_needed === "Less than 30 hrs/week"
      );
      Updated_Array = this.state.arr;

      this.state.checkbox_selected_array[6].previous_slection_status = true;

      let ultimate_updated_array = [...updated_array2, ...Updated_Array];
      this.state.previous_array = ultimate_updated_array;

      let No_of_filtered_jobs = ultimate_updated_array.length;

      this.setState({
        arr: ultimate_updated_array,
        Number_of_Jobs_found: No_of_filtered_jobs,
      });
    } else if (
      this.state.checkbox_selected_array[6].previous_slection_status === true &&
      Label_For_Filteing === "More than 30 hrs/week" &&
      Status_For_Filtering === true
    ) {
      // alert("coming to union whhen hourly is seleted aftwerwards.");
      // union of More than 30 hrs/week with other hours/week when more than More than 30 hrs/week is selected
      let Updated_Array = this.state.temp_duplicate_array;

      let updated_array2 = Updated_Array.filter(
        ({ hourse_needed }) => hourse_needed === "More than 30 hrs/week"
      );
      Updated_Array = this.state.arr;

      this.state.checkbox_selected_array[7].previous_slection_status = true;

      let ultimate_updated_array = [...updated_array2, ...Updated_Array];
      this.state.previous_array = ultimate_updated_array;

      let No_of_filtered_jobs = ultimate_updated_array.length;

      this.setState({
        arr: ultimate_updated_array,
        Number_of_Jobs_found: No_of_filtered_jobs,
      });
    } else if (
      (this.state.checkbox_selected_array[8].previous_slection_status ===
        true ||
        this.state.checkbox_selected_array[9].previous_slection_status ===
          true ||
        this.state.checkbox_selected_array[10].previous_slection_status ===
          true ||
        this.state.checkbox_selected_array[11].previous_slection_status ===
          true) &&
      Label_For_Filteing === "Less than 30 hrs/week" &&
      Status_For_Filtering === true
    ) {
      // alert("coming to union whhen hourly is seleted aftwerwards.");
      // union of Less than 30 hrs/week with other months when Less than 30 hrs/week is selected
      // alert("wrong condition called");
      let Updated_Array = this.state.temp_duplicate_array;

      let updated_array2 = Updated_Array.filter(
        ({ hourse_needed }) => hourse_needed === "Less than 30 hrs/week"
      );
      Updated_Array = this.state.arr;
      // alert(
      //   "updated_array2 length == " +
      //     updated_array2.length +
      //     "    Updated_Array length === " +
      //     Updated_Array.length
      // );
      this.state.checkbox_selected_array[6].previous_slection_status = true;

      let ultimate_updated_array = [...updated_array2, ...Updated_Array];
      this.state.previous_array = ultimate_updated_array;

      let No_of_filtered_jobs = ultimate_updated_array.length;

      this.setState({
        arr: ultimate_updated_array,
        Number_of_Jobs_found: No_of_filtered_jobs,
      });
    } else if (
      (this.state.checkbox_selected_array[8].previous_slection_status ===
        true ||
        this.state.checkbox_selected_array[9].previous_slection_status ===
          true ||
        this.state.checkbox_selected_array[10].previous_slection_status ===
          true ||
        this.state.checkbox_selected_array[11].previous_slection_status ===
          true) &&
      Label_For_Filteing === "More than 30 hrs/week" &&
      Status_For_Filtering === true
    ) {
      // alert("coming to union whhen hourly is seleted aftwerwards.");
      // union of More than 30 hrs/week with other months when More than 30 hrs/week is selected
      // alert("wrong condition called");
      let Updated_Array = this.state.temp_duplicate_array;

      let updated_array2 = Updated_Array.filter(
        ({ hourse_needed }) => hourse_needed === "More than 30 hrs/week"
      );
      Updated_Array = this.state.arr;
      // alert(
      //   "updated_array2 length == " +
      //     updated_array2.length +
      //     "    Updated_Array length === " +
      //     Updated_Array.length
      // );
      this.state.checkbox_selected_array[7].previous_slection_status = true;

      let ultimate_updated_array = [...updated_array2, ...Updated_Array];
      this.state.previous_array = ultimate_updated_array;

      let No_of_filtered_jobs = ultimate_updated_array.length;

      this.setState({
        arr: ultimate_updated_array,
        Number_of_Jobs_found: No_of_filtered_jobs,
      });
    } else if (
      (this.state.checkbox_selected_array[6].previous_slection_status ===
        true ||
        this.state.checkbox_selected_array[7].previous_slection_status ===
          true) &&
      Label_For_Filteing === "Less than 1 month" &&
      Status_For_Filtering === true
    ) {
      // alert("coming to union whhen hourly is seleted aftwerwards.");
      // union of less than 1 months with other  hours/week when less than 1 month is selected
      let Updated_Array = this.state.temp_duplicate_array;

      let updated_array2 = Updated_Array.filter(
        ({ duration }) => duration === "Less than 1 month"
      );
      Updated_Array = this.state.arr;

      this.state.checkbox_selected_array[8].previous_slection_status = true;

      let ultimate_updated_array = [...updated_array2, ...Updated_Array];
      this.state.previous_array = ultimate_updated_array;

      let No_of_filtered_jobs = ultimate_updated_array.length;

      this.setState({
        arr: ultimate_updated_array,
        Number_of_Jobs_found: No_of_filtered_jobs,
      });
    } else if (
      (this.state.checkbox_selected_array[9].previous_slection_status ===
        true ||
        this.state.checkbox_selected_array[10].previous_slection_status ===
          true ||
        this.state.checkbox_selected_array[11].previous_slection_status ===
          true) &&
      Label_For_Filteing === "Less than 1 month" &&
      Status_For_Filtering === true
    ) {
      // alert("coming to union whhen hourly is seleted aftwerwards.");
      // union of less than 1 months with other months when less than 1 month is selected
      let Updated_Array = this.state.temp_duplicate_array;

      let updated_array2 = Updated_Array.filter(
        ({ duration }) => duration === "Less than 1 month"
      );
      Updated_Array = this.state.arr;

      this.state.checkbox_selected_array[8].previous_slection_status = true;

      let ultimate_updated_array = [...updated_array2, ...Updated_Array];
      this.state.previous_array = ultimate_updated_array;

      let No_of_filtered_jobs = ultimate_updated_array.length;

      this.setState({
        arr: ultimate_updated_array,
        Number_of_Jobs_found: No_of_filtered_jobs,
      });
    } else if (
      (this.state.checkbox_selected_array[6].previous_slection_status ===
        true ||
        this.state.checkbox_selected_array[8].previous_slection_status ===
          true) &&
      Label_For_Filteing === "1 to 3 months" &&
      Status_For_Filtering === true
    ) {
      // alert("coming to union whhen hourly is seleted aftwerwards.");
      // union of 1 to 3 months with other  hours/week when 1 to 3 month is selected
      let Updated_Array = this.state.temp_duplicate_array;

      let updated_array2 = Updated_Array.filter(
        ({ duration }) => duration === "1 to 3 months"
      );
      Updated_Array = this.state.arr;
      this.state.checkbox_selected_array[9].previous_slection_status = true;
      let ultimate_updated_array = [...updated_array2, ...Updated_Array];
      this.state.previous_array = ultimate_updated_array;

      let No_of_filtered_jobs = ultimate_updated_array.length;

      this.setState({
        arr: ultimate_updated_array,
        Number_of_Jobs_found: No_of_filtered_jobs,
      });
    } else if (
      (this.state.checkbox_selected_array[8].previous_slection_status ===
        true ||
        this.state.checkbox_selected_array[10].previous_slection_status ===
          true ||
        this.state.checkbox_selected_array[11].previous_slection_status ===
          true) &&
      Label_For_Filteing === "1 to 3 months" &&
      Status_For_Filtering === true
    ) {
      // alert("coming to union whhen hourly is seleted aftwerwards.");
      // union of 1 to 3 months with other months when 1 to 3 month is selected
      let Updated_Array = this.state.temp_duplicate_array;

      let updated_array2 = Updated_Array.filter(
        ({ duration }) => duration === "1 to 3 months"
      );
      Updated_Array = this.state.arr;
      this.state.checkbox_selected_array[9].previous_slection_status = true;
      let ultimate_updated_array = [...updated_array2, ...Updated_Array];
      this.state.previous_array = ultimate_updated_array;

      let No_of_filtered_jobs = ultimate_updated_array.length;

      this.setState({
        arr: ultimate_updated_array,
        Number_of_Jobs_found: No_of_filtered_jobs,
      });
    } else if (
      (this.state.checkbox_selected_array[6].previous_slection_status ===
        true ||
        this.state.checkbox_selected_array[7].previous_slection_status ===
          true) &&
      Label_For_Filteing === "3 to 6 months" &&
      Status_For_Filtering === true
    ) {
      // alert("coming to union whhen hourly is seleted aftwerwards.");
      // union of 3 to 6 months with other  hours/week when 3 to 6 month is selected
      let Updated_Array = this.state.temp_duplicate_array;

      let updated_array2 = Updated_Array.filter(
        ({ duration }) => duration === "3 to 6 months"
      );
      Updated_Array = this.state.arr;
      this.state.checkbox_selected_array[10].previous_slection_status = true;
      let ultimate_updated_array = [...updated_array2, ...Updated_Array];
      this.state.previous_array = ultimate_updated_array;

      let No_of_filtered_jobs = ultimate_updated_array.length;

      this.setState({
        arr: ultimate_updated_array,
        Number_of_Jobs_found: No_of_filtered_jobs,
      });
    } else if (
      (this.state.checkbox_selected_array[8].previous_slection_status ===
        true ||
        this.state.checkbox_selected_array[9].previous_slection_status ===
          true ||
        this.state.checkbox_selected_array[11].previous_slection_status ===
          true) &&
      Label_For_Filteing === "3 to 6 months" &&
      Status_For_Filtering === true
    ) {
      // alert("coming to union whhen hourly is seleted aftwerwards.");
      // union of 3 to 6 months with other months when 3 to 6 month is selected
      let Updated_Array = this.state.temp_duplicate_array;

      let updated_array2 = Updated_Array.filter(
        ({ duration }) => duration === "3 to 6 months"
      );
      Updated_Array = this.state.arr;
      this.state.checkbox_selected_array[10].previous_slection_status = true;
      let ultimate_updated_array = [...updated_array2, ...Updated_Array];
      this.state.previous_array = ultimate_updated_array;

      let No_of_filtered_jobs = ultimate_updated_array.length;

      this.setState({
        arr: ultimate_updated_array,
        Number_of_Jobs_found: No_of_filtered_jobs,
      });
    } else if (
      (this.state.checkbox_selected_array[6].previous_slection_status ===
        true ||
        this.state.checkbox_selected_array[7].previous_slection_status ===
          true) &&
      Label_For_Filteing === "More than 6 months" &&
      Status_For_Filtering === true
    ) {
      // alert("coming to union whhen hourly is seleted aftwerwards.");
      // union of more than 6 months with other hours/week when more than 6 month is selected
      let Updated_Array = this.state.temp_duplicate_array;

      let updated_array2 = Updated_Array.filter(
        ({ duration }) => duration === "More than 6 months"
      );
      Updated_Array = this.state.arr;

      this.state.checkbox_selected_array[11].previous_slection_status = true;

      let ultimate_updated_array = [...updated_array2, ...Updated_Array];
      this.state.previous_array = ultimate_updated_array;
      let No_of_filtered_jobs = ultimate_updated_array.length;

      this.setState({
        arr: ultimate_updated_array,
        Number_of_Jobs_found: No_of_filtered_jobs,
      });
    } else if (
      (this.state.checkbox_selected_array[8].previous_slection_status ===
        true ||
        this.state.checkbox_selected_array[9].previous_slection_status ===
          true ||
        this.state.checkbox_selected_array[10].previous_slection_status ===
          true) &&
      Label_For_Filteing === "More than 6 months" &&
      Status_For_Filtering === true
    ) {
      // alert("coming to union whhen hourly is seleted aftwerwards.");
      // union of more than 6 months with other months when more than 6 month is selected
      let Updated_Array = this.state.temp_duplicate_array;

      let updated_array2 = Updated_Array.filter(
        ({ duration }) => duration === "More than 6 months"
      );
      Updated_Array = this.state.arr;

      this.state.checkbox_selected_array[11].previous_slection_status = true;

      let ultimate_updated_array = [...updated_array2, ...Updated_Array];
      this.state.previous_array = ultimate_updated_array;
      let No_of_filtered_jobs = ultimate_updated_array.length;

      this.setState({
        arr: ultimate_updated_array,
        Number_of_Jobs_found: No_of_filtered_jobs,
      });
    } else if (
      this.state.checkbox_selected_array[1].previous_slection_status === true ||
      this.state.checkbox_selected_array[2].previous_slection_status === true ||
      this.state.checkbox_selected_array[3].previous_slection_status === true ||
      this.state.checkbox_selected_array[4].previous_slection_status === true ||
      this.state.checkbox_selected_array[5].previous_slection_status === true ||
      this.state.checkbox_selected_array[6].previous_slection_status === true ||
      this.state.checkbox_selected_array[7].previous_slection_status === true ||
      this.state.checkbox_selected_array[8].previous_slection_status === true ||
      this.state.checkbox_selected_array[9].previous_slection_status === true ||
      this.state.checkbox_selected_array[10].previous_slection_status ===
        true ||
      this.state.checkbox_selected_array[11].previous_slection_status === true
    ) {
      let Updated_Array = this.state.arr;
      this.state.previous_array = this.state.arr;

      if (Label_For_Filteing === "Hourly") {
        // alert("Within == " + Label_For_Filteing);
        this.state.checkbox_selected_array[1].selection_status =
          Status_For_Filtering;
      }
      if (Label_For_Filteing === "Fixed-Price") {
        this.state.checkbox_selected_array[2].selection_status =
          Status_For_Filtering;
      }
      if (Label_For_Filteing === "No hires") {
        this.state.checkbox_selected_array[3].selection_status =
          Status_For_Filtering;
      }
      if (Label_For_Filteing === "1 to 9 hires") {
        this.state.checkbox_selected_array[4].selection_status =
          Status_For_Filtering;
      }
      if (Label_For_Filteing === "10+ hires") {
        this.state.checkbox_selected_array[5].selection_status =
          Status_For_Filtering;
      }
      if (Label_For_Filteing === "Less than 30 hrs/week") {
        this.state.checkbox_selected_array[6].selection_status =
          Status_For_Filtering;
      }
      if (Label_For_Filteing === "More than 30 hrs/week") {
        this.state.checkbox_selected_array[7].selection_status =
          Status_For_Filtering;
      }
      if (Label_For_Filteing === "Less than 1 month") {
        this.state.checkbox_selected_array[8].selection_status =
          Status_For_Filtering;
      }
      if (Label_For_Filteing === "1 to 3 months") {
        this.state.checkbox_selected_array[9].selection_status =
          Status_For_Filtering;
      }
      if (Label_For_Filteing === "3 to 6 months") {
        this.state.checkbox_selected_array[10].selection_status =
          Status_For_Filtering;
      }
      if (Label_For_Filteing === "More than 6 months") {
        this.state.checkbox_selected_array[11].selection_status =
          Status_For_Filtering;
      }

      this.state.checkbox_selected = Status_For_Filtering;
      if (
        this.state.checkbox_selected_array[2].previous_slection_status ==
          false &&
        Label_For_Filteing === "Fixed-Price"
      ) {
        // const result = inventory.find( ({ name }) => name === 'cherries' );

        // let ageLessthan7_ALL = ages.filter( (age) => age < 7);
        // alert("Within if condition updating array 2 == " + Label_For_Filteing);
        let updated_array2 = this.state.arr.filter(
          ({ hours }) => hours === Label_For_Filteing
        );

        this.state.checkbox_selected_array[2].previous_slection_status = true;

        // let ultimate_updated_array = [...updated_array2, ...Updated_Array];
        let No_of_filtered_jobs = updated_array2.length;

        this.setState({
          arr: updated_array2,
          Number_of_Jobs_found: No_of_filtered_jobs,
        });

        // this.setState({ arr: updated_array });
      }
      if (
        this.state.checkbox_selected_array[1].previous_slection_status ==
          false &&
        Label_For_Filteing === "Hourly"
      ) {
        // alert(
        //   "Within new if condition updating array 1 == " + Label_For_Filteing
        // );
        let updated_array2 = this.state.arr.filter(
          ({ Dummy_hours }) => Dummy_hours === Label_For_Filteing
        );

        this.state.checkbox_selected_array[1].previous_slection_status = true;
        // let ultimate_updated_array = [...updated_array2, ...Updated_Array];

        let No_of_filtered_jobs = updated_array2.length;

        this.setState({
          arr: updated_array2,
          Number_of_Jobs_found: No_of_filtered_jobs,
        });
        // this.setState({ arr: updated_array1 });
      }
      if (
        this.state.checkbox_selected_array[3].previous_slection_status ==
          false &&
        Label_For_Filteing === "No hires"
      ) {
        // alert("Within if condition updating array 3 == " + Label_For_Filteing);
        let updated_array2 = this.state.arr.filter(
          ({ no_of_hires }) => no_of_hires === 0
        );

        this.state.checkbox_selected_array[3].previous_slection_status = true;

        // let ultimate_updated_array = [...updated_array2, ...Updated_Array];

        let No_of_filtered_jobs = updated_array2.length;

        this.setState({
          arr: updated_array2,
          Number_of_Jobs_found: No_of_filtered_jobs,
        });
        // this.setState({ arr: updated_array });
      }
      if (
        this.state.checkbox_selected_array[4].previous_slection_status ==
          false &&
        Label_For_Filteing === "1 to 9 hires"
      ) {
        // alert("Within if condition updating array 4 == " + Label_For_Filteing);
        let updated_array2 = this.state.arr.filter(
          ({ no_of_hires }) => no_of_hires < 10 && no_of_hires > 0
        );

        this.state.checkbox_selected_array[4].previous_slection_status = true;

        // let ultimate_updated_array = [...updated_array2, ...Updated_Array];

        let No_of_filtered_jobs = updated_array2.length;

        this.setState({
          arr: updated_array2,
          Number_of_Jobs_found: No_of_filtered_jobs,
        });

        // this.setState({ arr: updated_array });
      }
      if (
        this.state.checkbox_selected_array[5].previous_slection_status ==
          false &&
        Label_For_Filteing === "10+ hires"
      ) {
        // alert("Within if condition updating array 5 == " + Label_For_Filteing);
        let updated_array2 = this.state.arr.filter(
          ({ no_of_hires }) => no_of_hires > 10
        );

        this.state.checkbox_selected_array[5].previous_slection_status = true;

        // let ultimate_updated_array = [...updated_array2, ...Updated_Array];

        let No_of_filtered_jobs = updated_array2.length;

        this.setState({
          arr: updated_array2,
          Number_of_Jobs_found: No_of_filtered_jobs,
        });

        // this.setState({ arr: updated_array });
      }
      if (
        this.state.checkbox_selected_array[6].previous_slection_status ==
          false &&
        Label_For_Filteing === "Less than 30 hrs/week"
      ) {
        // alert("Within if condition updating array 6 == " + Label_For_Filteing);
        let updated_array2 = this.state.arr.filter(
          ({ hourse_needed }) => hourse_needed === "Less than 30 hrs/week"
        );
        console.log(
          "COndition such that intersection. Months already selected. Less than hours is selcted this time."
        );
        this.state.checkbox_selected_array[6].previous_slection_status = true;
        // let ultimate_updated_array = [...updated_array2, ...Updated_Array];

        let No_of_filtered_jobs = updated_array2.length;

        this.setState({
          arr: updated_array2,
          Number_of_Jobs_found: No_of_filtered_jobs,
        });
        // this.setState({ arr: updated_array });
      }
      if (
        this.state.checkbox_selected_array[7].previous_slection_status ==
          false &&
        Label_For_Filteing === "More than 30 hrs/week"
      ) {
        // alert("Within if condition updating array 7 == " + Label_For_Filteing);
        let updated_array2 = this.state.arr.filter(
          ({ hourse_needed }) => hourse_needed === "More than 30 hrs/week"
        );

        this.state.checkbox_selected_array[7].previous_slection_status = true;

        // let ultimate_updated_array = [...updated_array2, ...Updated_Array];

        let No_of_filtered_jobs = updated_array2.length;

        this.setState({
          arr: updated_array2,
          Number_of_Jobs_found: No_of_filtered_jobs,
        });

        // this.setState({ arr: updated_array });
      }
      if (
        this.state.checkbox_selected_array[8].previous_slection_status ==
          false &&
        Label_For_Filteing === "Less than 1 month"
      ) {
        // alert("Within if condition updating array 8 == " + Label_For_Filteing);
        let updated_array2 = this.state.arr.filter(
          ({ duration }) => duration === "Less than 1 month"
        );
        this.state.checkbox_selected_array[8].previous_slection_status = true;
        // let ultimate_updated_array = [...updated_array2, ...Updated_Array];

        let No_of_filtered_jobs = updated_array2.length;

        this.setState({
          arr: updated_array2,
          Number_of_Jobs_found: No_of_filtered_jobs,
        });

        // this.setState({ arr: updated_array });
      }
      if (
        this.state.checkbox_selected_array[9].previous_slection_status ==
          false &&
        Label_For_Filteing === "1 to 3 months"
      ) {
        // alert("Within if condition updating array 9 == " + Label_For_Filteing);
        let updated_array2 = this.state.arr.filter(
          ({ duration }) => duration === "1 to 3 months"
        );

        this.state.checkbox_selected_array[9].previous_slection_status = true;

        // let ultimate_updated_array = [...updated_array2, ...Updated_Array];

        let No_of_filtered_jobs = updated_array2.length;

        this.setState({
          arr: updated_array2,
          Number_of_Jobs_found: No_of_filtered_jobs,
        });

        // this.setState({ arr: updated_array });
      }
      if (
        this.state.checkbox_selected_array[10].previous_slection_status ==
          false &&
        Label_For_Filteing === "3 to 6 months"
      ) {
        // alert("Within if condition updating array 10 == " + Label_For_Filteing);
        let updated_array2 = this.state.arr.filter(
          ({ duration }) => duration === "3 to 6 months"
        );

        this.state.checkbox_selected_array[10].previous_slection_status = true;
        // let ultimate_updated_array = [...updated_array2, ...Updated_Array];

        let No_of_filtered_jobs = updated_array2.length;

        this.setState({
          arr: updated_array2,
          Number_of_Jobs_found: No_of_filtered_jobs,
        });

        // this.setState({ arr: updated_array });
      }
      if (
        this.state.checkbox_selected_array[11].previous_slection_status ==
          false &&
        Label_For_Filteing === "More than 6 months"
      ) {
        // alert("Within if condition updating array 11 == " + Label_For_Filteing);
        let updated_array2 = this.state.arr.filter(
          ({ duration }) => duration === "More than 6 months"
        );

        this.state.checkbox_selected_array[11].previous_slection_status = true;
        // let ultimate_updated_array = [...updated_array2, ...Updated_Array];

        let No_of_filtered_jobs = updated_array2.length;

        this.setState({
          arr: updated_array2,
          Number_of_Jobs_found: No_of_filtered_jobs,
        });
      }
    } else {
      let No_of_filtered_jobs = this.state.temp_duplicate_array.length;

      this.setState({
        arr: this.state.temp_duplicate_array,
        Number_of_Jobs_found: No_of_filtered_jobs,
      });
    }

    //___________________________________________________________________________________
  };

  render() {
    let new_page_no_range = this.props.no_of_jobs_range;
    let ending_element_of_array = this.props.pageNO;
    ending_element_of_array = ending_element_of_array * new_page_no_range;

    let starting_element_of_array = ending_element_of_array - new_page_no_range;

    let arr2 = this.state.arr
      .slice(starting_element_of_array, ending_element_of_array)
      .map((proj) => (
        <div className="div_array_main">
          <div className="div_array_one_element">
            <li className="list_array">
              <h4 className="div_title">{proj.title}</h4>
              <div className="div_hours_and_post_time">
                <div className="div_hours">{proj.hours}</div>
                <div className="div_post_time">{proj.post_time}</div>
              </div>
              <div className="div_hours_needed_and_duration_and_Experience_level">
                <div className="div_hours_needed">{proj.hourse_needed}</div>
                <div className="div_duration">{proj.duration}</div>
                <div className="div_Experience_level">
                  {proj.Experience_level}
                </div>
              </div>

              <div className="div_actual_hours_needed_and_duration_and_Experience_level">
                <div className="div_actual_hours_needed">
                  {proj.actual_hourse_needed}
                </div>
                <div className="div_actual_duration">
                  {proj.actual_duration}
                </div>
                <div className="div_actual_Experience_level">
                  {proj.actual_Experience_level}
                </div>
              </div>

              <div className="div_description">
                <p>{proj.description}</p>
              </div>

              <Display_Services
                service_array={proj.services_array}
              ></Display_Services>
            </li>
          </div>
        </div>
      ));

    return (
      <div className="div_outermost_for_Display_Multiple_Objects">
        <Display_Filteration
          Filtering_Dummy_Function={(
            label_for_filtering,
            status_for_filtering
          ) => {
            this.Any_CheckBox_Selection(
              label_for_filtering,
              status_for_filtering
            );
          }}
          updated_no_of_jobs={this.state.Number_of_Jobs_found}
        ></Display_Filteration>
        <ul className="list_array_id">{arr2}</ul>
      </div>
    );
  }

  componentDidMount() {
    console.log("project Display mounted");
    this.FetchProjects();
  }

  FetchProjects() {
    GetProjects().then((response) => {
      console.log("complete array data == ", response.data);
      this.setState({
        arr: response.data,
        previous_array: response.data,
        temp_duplicate_array: response.data,
      });
    });
    return [];
  }
}

class Display_Services extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("props = " + this.props);
    let arr = this.props.service_array;
    let i = 0;

    console.log("arr = " + arr);
    let inside_arr = arr
      .slice(0, 5)
      .map((proj) => <div className="div_single_service">{proj}</div>);

    return <div className="div_services">{inside_arr}</div>;
  }
}

class Display_Filteration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      no_of_jobs_found: 50,
      sort_basis: "Relevance",
      filter_button_pressed: true,
      form_Sorting_clicked: true,
      covid_19: "COVID-19",
      hourly: "Hourly",
      fixed_price: "Fixed-Price",
      no_hires: "No hires",
      one_to_9_hires: "1 to 9 hires",
      ten_plus_hires: "10+ hires",
      less_than_30hrs_week: "Less than 30 hrs/week",
      more_than_30hrs_week: "More than 30 hrs/week",

      less_than_one_month: "Less than 1 month",
      one_to_three_months: "1 to 3 months",
      three_to_six_months: "3 to 6 months",
      more_than_six_months: "More than 6 months",
      Selected_Category: "EG:Web ",
    };
  }

  Dummy_function = (label, status) => {
    this.props.Filtering_Dummy_Function(label, status);
  };

  render() {
    return (
      <div className="div_filteration_outermost">
        <div className="div_filteration_outermost_for_content">
          <div className="div_search_bar_and_filter_button">
            <div className="div_filter_search_bar">
              <img
                className="img_search_for_jobs"
                src="Images/Search_for_jobs.PNG"
              />
              <div className="div_for_search_icon">
                <i class="fas fa-search" id="id_search_icon"></i>
              </div>
            </div>

            <Filter_button
              Display_form={() => {
                if (this.state.filter_button_pressed) {
                  var new_div = document.getElementsByClassName(
                    "div_filteration_outermost_for_content"
                  );

                  const myelement = (
                    <div className="div_main_for_form_filling">
                      {/* __________________________________First Section of Form________________________________________ */}

                      <div className="div_ofForm_toHold_firstThree_headings">
                        <div className="div_Narrow_By">Narrow By</div>
                        <div className="div_COVID_19_Related_Jobs">
                          COVID-19 Related Jobs
                        </div>
                        <div className="div_Job_Type">Job Type</div>
                      </div>

                      <div className="div_ofForm_toHold_firstThree_coloumns_of_checkBoxes_buttons">
                        <div className="div_first_coloumn_input_field">
                          <Main_form
                            select_catogory={this.state.Selected_Category}
                            onInputInMainForm={(newInput) => {
                              this.setState({
                                Selected_Category: newInput,
                              });
                            }}
                          ></Main_form>
                        </div>
                        <div className="div_first_portion_second_coloumn_holiding_checkBoxes_buttons">
                          <Display_CheckBox_and_Label
                            label_name={this.state.covid_19}
                            oncheckBoxSelection={(selection_staus) => {
                              // alert(selection_staus + "     abc    ");
                              this.Dummy_function(
                                this.state.covid_19,
                                selection_staus
                              );
                            }}
                          ></Display_CheckBox_and_Label>
                        </div>

                        <div className="div_first_portion_third_coloumn_holiding_checkBoxes_buttons">
                          <Display_CheckBox_and_Label
                            label_name={this.state.hourly}
                            oncheckBoxSelection={(selection_staus) => {
                              // alert(selection_staus + "dssadsasd    ");
                              this.Dummy_function(
                                this.state.hourly,
                                selection_staus
                              );
                            }}
                          ></Display_CheckBox_and_Label>

                          <Display_CheckBox_and_Label
                            label_name={this.state.fixed_price}
                            oncheckBoxSelection={(selection_staus) => {
                              // alert(selection_staus + "dssadsasd    ");
                              this.Dummy_function(
                                this.state.fixed_price,
                                selection_staus
                              );
                            }}
                          ></Display_CheckBox_and_Label>
                        </div>
                      </div>
                      {/* __________________________________First Section of Form End Here________________________________________ */}

                      {/* __________________________________Second Section of Form________________________________________ */}

                      <div className="div_ofForm_toHold_firstThree_headings">
                        <div className="div_Narrow_By">Client History</div>
                        <div className="div_COVID_19_Related_Jobs">
                          Hours per week
                        </div>
                        <div className="div_Job_Type">Project length</div>
                      </div>
                      <div className="div_ofForm_toHold_firstThree_coloumns_of_checkBoxes_buttons">
                        <div className="div_first_portion_first_coloumn_holiding_checkBoxes_buttons">
                          <Display_CheckBox_and_Label
                            label_name={this.state.no_hires}
                            oncheckBoxSelection={(selection_staus) => {
                              // alert(selection_staus + "dssadsasd    ");
                              this.Dummy_function(
                                this.state.no_hires,
                                selection_staus
                              );
                            }}
                          ></Display_CheckBox_and_Label>

                          <Display_CheckBox_and_Label
                            label_name={this.state.one_to_9_hires}
                            oncheckBoxSelection={(selection_staus) => {
                              // alert(selection_staus + "dssadsasd    ");
                              this.Dummy_function(
                                this.state.one_to_9_hires,
                                selection_staus
                              );
                            }}
                          ></Display_CheckBox_and_Label>
                          <Display_CheckBox_and_Label
                            label_name={this.state.ten_plus_hires}
                            oncheckBoxSelection={(selection_staus) => {
                              // alert(selection_staus + "dssadsasd    ");
                              this.Dummy_function(
                                this.state.ten_plus_hires,
                                selection_staus
                              );
                            }}
                          ></Display_CheckBox_and_Label>
                        </div>
                        <div className="div_first_portion_second_coloumn_holiding_checkBoxes_buttons">
                          <Display_CheckBox_and_Label
                            label_name={this.state.less_than_30hrs_week}
                            oncheckBoxSelection={(selection_staus) => {
                              // alert(selection_staus + "dssadsasd    ");
                              this.Dummy_function(
                                this.state.less_than_30hrs_week,
                                selection_staus
                              );
                            }}
                          ></Display_CheckBox_and_Label>
                          <Display_CheckBox_and_Label
                            label_name={this.state.more_than_30hrs_week}
                            oncheckBoxSelection={(selection_staus) => {
                              // alert(selection_staus + "dssadsasd    ");
                              this.Dummy_function(
                                this.state.more_than_30hrs_week,
                                selection_staus
                              );
                            }}
                          ></Display_CheckBox_and_Label>
                        </div>

                        <div className="div_first_portion_third_coloumn_holiding_checkBoxes_buttons">
                          <Display_CheckBox_and_Label
                            label_name={this.state.less_than_one_month}
                            oncheckBoxSelection={(selection_staus) => {
                              // alert(selection_staus + "dssadsasd    ");
                              this.Dummy_function(
                                this.state.less_than_one_month,
                                selection_staus
                              );
                            }}
                          ></Display_CheckBox_and_Label>

                          <Display_CheckBox_and_Label
                            label_name={this.state.one_to_three_months}
                            oncheckBoxSelection={(selection_staus) => {
                              // alert(selection_staus + "dssadsasd    ");
                              this.Dummy_function(
                                this.state.one_to_three_months,
                                selection_staus
                              );
                            }}
                          ></Display_CheckBox_and_Label>
                          <Display_CheckBox_and_Label
                            label_name={this.state.three_to_six_months}
                            oncheckBoxSelection={(selection_staus) => {
                              // alert(selection_staus + "dssadsasd    ");
                              this.Dummy_function(
                                this.state.three_to_six_months,
                                selection_staus
                              );
                            }}
                          ></Display_CheckBox_and_Label>

                          <Display_CheckBox_and_Label
                            label_name={this.state.more_than_six_months}
                            oncheckBoxSelection={(selection_staus) => {
                              // alert(selection_staus + "dssadsasd    ");
                              this.Dummy_function(
                                this.state.more_than_six_months,
                                selection_staus
                              );
                            }}
                          ></Display_CheckBox_and_Label>
                        </div>
                      </div>

                      {/* __________________________________Second Section of Form End Here________________________________________ */}
                    </div>
                  );

                  ReactDOM.render(
                    myelement,
                    document.getElementById("div_for_form")
                  );

                  // var dummy_div_for_checkbox_status = document.getElementById(
                  //   "dummy_div"
                  // );

                  // var dummy_div_for_checkbox_label = dummy_div_for_checkbox_status.getAttribute(
                  //   "labelvalue"
                  // );
                  // console.log(
                  //   "abdullah Waseem ========",
                  //   dummy_div_for_checkbox_label
                  // );
                  // new_div.append(inner_new_div);
                  // alert("tu mein ham sab gkutta");
                } else {
                  // alert("f gkuta === " + this.state.filter_button_pressed);

                  const myelement = <div id="div_for_form"></div>;
                  ReactDOM.render(
                    myelement,
                    document.getElementById("div_for_form")
                  );
                }
                let new_filter_button_pressed =
                  !this.state.filter_button_pressed;
                this.setState({
                  filter_button_pressed: new_filter_button_pressed,
                });
              }}
            ></Filter_button>
          </div>
          <div id="div_for_form"></div>
          <div className="div_advanced_search">Advanced Search</div>

          <div className="div_main_third_filter">
            <div className="div_toHold_twoComponent_Jobs_found">
              <div className="div_dynamic_jobs_found">
                {this.props.updated_no_of_jobs}
              </div>
              <div className="div_jobs_found_label">jobs found</div>
            </div>
            {/* <div className="div_sort_label">Sort:</div> */}
            {/* ________________________________________________ */}
            {/* <Form_Sorting
              Sort_Basis={this.state.sort_basis}
              Display_Sort_Basis={() => {
                if (this.state.form_Sorting_clicked) {
                } else {
                  const myelement = (
                    <div id="div_for_sort_basis_form_opening"></div>
                  );
                  ReactDOM.render(
                    myelement,
                    document.getElementById("div_for_sort_basis_form_opening")
                  );
                }

                let new_form_Sorting_clicked = !this.state.form_Sorting_clicked;
                this.setState({
                  form_Sorting_clicked: new_form_Sorting_clicked,
                });
              }}
            ></Form_Sorting>
            <div id="div_for_sort_basis_form_opening"></div> */}
            <div className="form_Sorting">
              <div className="label_sort_heading">
                Sort:
                <button
                  className="input_for_sort_basis"
                  onClick={() => {
                    if (this.state.form_Sorting_clicked) {
                      const myelement = (
                        <div className="div_sorting_dop_down">
                          <button className="div_Relevance">Relevance</button>
                          <button className="div_Newest">Newest</button>
                        </div>
                      );

                      ReactDOM.render(
                        myelement,
                        document.getElementById(
                          "div_for_sort_basis_form_opening"
                        )
                      );
                    } else {
                      const myelement = (
                        <div id="div_for_sort_basis_form_opening"></div>
                      );
                      ReactDOM.render(
                        myelement,
                        document.getElementById(
                          "div_for_sort_basis_form_opening"
                        )
                      );
                    }
                    let new_form_Sorting_clicked =
                      !this.state.form_Sorting_clicked;
                    this.setState({
                      form_Sorting_clicked: new_form_Sorting_clicked,
                    });
                  }}

                  // onChange={(event) => {
                  //   console.log(event.target.value);
                  //   this.setState({ cityName: event.target.value });
                  // }}
                >
                  {this.state.sort_basis}
                  <div className="div_for_sort_base_icon">
                    <i className="fa fa-caret-down drop_down_icon3"></i>
                  </div>
                </button>
              </div>
            </div>

            {/* __________________________________________________ */}
          </div>
          <div id="div_for_sort_basis_form_opening"></div>
        </div>
      </div>
    );
  }
}

// _______________________________________

class Form_Sorting extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <form className="form_Sorting">
        <label className="label_sort_heading">
          Sort:
          <input
            className="input_for_sort_basis"
            type="text"
            value={this.props.Sort_Basis}
            // onClick={this.props.Display_Sort_Basis()}

            // onChange={(event) => {
            //   console.log(event.target.value);
            //   this.setState({ cityName: event.target.value });
            // }}
          ></input>
          <div className="div_for_sort_base_icon">
            <i className="fa fa-caret-down drop_down_icon3"></i>
          </div>
        </label>
      </form>
    );
  }
}
// ________________________________________

// _______________________________________

class Main_form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <form>
        <input
          className="input_for_Main_FOrm"
          type="text"
          value={this.props.select_catogory}
          onChange={(event) => {
            this.props.onInputInMainForm(event.target.value);
          }}
        ></input>
      </form>
    );
  }
}
// ________________________________________

class Filter_button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        className="button_filter"
        onClick={() => {
          this.props.Display_form();
        }}
      >
        <img
          className="img_buttonFilter_slider"
          src="Images/slider_filter.PNG"
        />
        <div className="div_filter">Filters</div>
      </div>
    );
    // onChange={(event) => {
    //   this.props.onInchesChanged(event.target.value);
    // }}
  }
}

class Display_paging_and_no_of_jobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page_button1_color: "#42a33a",
      page_button2_color: "black",
      page_button3_color: "black",
      page_button4_color: "black",
      page_button5_color: "black",

      margin_Bottom1: "20px",
      borderBottom1: "#42a33a 7px solid",

      margin_Bottom2: "0px",
      borderBottom2: " white solid",

      margin_Bottom3: "0px",
      borderBottom3: " white solid",

      margin_Bottom4: "0px",
      borderBottom4: " white solid",

      margin_Bottom5: "0px",
      borderBottom5: " white solid",
    };
  }

  handleClick() {}

  render() {
    return (
      <div className="div_main_for_NoofJobs_and_Paging">
        <div className="div_for_NoofJobs_form">
          <form className="form_noOf_jobs">
            <label className="label_jobs_per_page">Jobs Per Page:</label>
            <input
              className="input_for_jobs_per_page"
              type="text"
              value={this.props.noOf_jobs_per_page}
              onChange={(event) => {
                this.props.onpageRangeChange(event.target.value);
              }}

              // onChange={(event) => {
              //   console.log(event.target.value);
              //   this.setState({ cityName: event.target.value });
              // }}
            ></input>
            <div className="div_extra_for_dropDown_Icon">
              <i className="fa fa-caret-down drop_down_icon_for_jobs_per_page  "></i>
            </div>
          </form>
        </div>
        <div className="div_main_for_paging">
          <div className="div_for_First">First</div>
          <div className="div_for_previous_and_icon">
            <i class="fa fa-angle-left left_Facing_icon"></i>
            <div className="div_previous">Previous</div>
          </div>
          <div className="div_for_page_nos">
            <button
              className="div_page_1"
              onClick={(abc) => {
                this.props.onpagechange(1);
                this.setState({
                  page_button1_color: "#42a33a",
                  margin_Bottom1: "20px",
                  borderBottom1: "#42a33a 7px solid",

                  page_button2_color: "black",
                  margin_Bottom2: "0px",
                  borderBottom2: " white solid",
                  page_button3_color: "black",
                  margin_Bottom3: "0px",
                  borderBottom3: " white solid",
                  page_button4_color: "black",
                  margin_Bottom4: "0px",
                  borderBottom4: " white solid",
                  page_button5_color: "black",
                  margin_Bottom5: "0px",
                  borderBottom5: " white solid",
                });
              }}
              style={{
                color: this.state.page_button1_color,
                marginBottom: this.state.margin_Bottom1,
                borderBottom: this.state.borderBottom1,
              }}
            >
              1
            </button>
            <button
              className="div_page_2"
              onClick={(abc) => {
                this.props.onpagechange(2);
                this.setState({
                  page_button2_color: "#42a33a",
                  margin_Bottom2: "20px",
                  borderBottom2: "#42a33a 7px solid",

                  page_button1_color: "black",
                  margin_Bottom1: "0px",
                  borderBottom1: " white solid",
                  page_button3_color: "black",
                  margin_Bottom3: "0px",
                  borderBottom3: " white solid",
                  page_button4_color: "black",
                  margin_Bottom4: "0px",
                  borderBottom4: " white solid",
                  page_button5_color: "black",
                  margin_Bottom5: "0px",
                  borderBottom5: " white solid",
                });
              }}
              style={{
                color: this.state.page_button2_color,
                marginBottom: this.state.margin_Bottom2,
                borderBottom: this.state.borderBottom2,
              }}
            >
              2
            </button>
            <button
              className="div_page_3"
              onClick={(abc) => {
                this.props.onpagechange(3);
                this.setState({
                  page_button3_color: "#42a33a",
                  margin_Bottom3: "20px",
                  borderBottom3: "#42a33a 7px solid",

                  page_button1_color: "black",
                  margin_Bottom1: "0px",
                  borderBottom1: " white solid",
                  page_button2_color: "black",
                  margin_Bottom2: "0px",
                  borderBottom2: " white solid",
                  page_button4_color: "black",
                  margin_Bottom4: "0px",
                  borderBottom4: " white solid",
                  page_button5_color: "black",
                  margin_Bottom5: "0px",
                  borderBottom5: " white solid",
                });
              }}
              style={{
                color: this.state.page_button3_color,
                marginBottom: this.state.margin_Bottom3,
                borderBottom: this.state.borderBottom3,
              }}
            >
              3
            </button>
            <button
              className="div_page_4"
              onClick={(abc) => {
                this.props.onpagechange(4);
                this.setState({
                  page_button4_color: "#42a33a",
                  margin_Bottom4: "20px",
                  borderBottom4: "#42a33a 7px solid",

                  page_button1_color: "black",
                  margin_Bottom1: "0px",
                  borderBottom1: " white solid",
                  page_button2_color: "black",
                  margin_Bottom2: "0px",
                  borderBottom2: " white solid",
                  page_button3_color: "black",
                  margin_Bottom3: "0px",
                  borderBottom3: " white solid",
                  page_button5_color: "black",
                  margin_Bottom5: "0px",
                  borderBottom5: " white solid",
                });
              }}
              style={{
                color: this.state.page_button4_color,
                marginBottom: this.state.margin_Bottom4,
                borderBottom: this.state.borderBottom4,
              }}
            >
              4
            </button>
            <button
              className="div_page_5"
              onClick={(abc) => {
                this.props.onpagechange(5);
                this.setState({
                  page_button5_color: "#42a33a",
                  margin_Bottom5: "20px",
                  borderBottom5: "#42a33a 7px solid",

                  page_button1_color: "black",
                  margin_Bottom1: "0px",
                  borderBottom1: " white solid",
                  page_button2_color: "black",
                  margin_Bottom2: "0px",
                  borderBottom2: " white solid",
                  page_button3_color: "black",
                  margin_Bottom3: "0px",
                  borderBottom3: " white solid",
                  page_button4_color: "black",
                  margin_Bottom4: "0px",
                  borderBottom4: " white solid",
                });
              }}
              style={{
                color: this.state.page_button5_color,
                marginBottom: this.state.margin_Bottom5,
                borderBottom: this.state.borderBottom5,
              }}
            >
              5
            </button>
          </div>
          <div className="div_for_next_and_icon">
            <div className="div_next">Next</div>
            <i className="fa fa-angle-right right_Facing_icon"></i>
          </div>
          <div className="div_for_Last">Last</div>
        </div>
      </div>
    );
  }
}

function Display_Footer(params) {
  return (
    <div class="div_footer_at_last">
      <div class="div_first_container">
        <div class="div_container_item">
          <h3 className="heading_3">COMPANY</h3>
          <ul className="unordered_list_for_company">
            <li>
              <a className="Under_heading_3">About Us</a>
            </li>
            <li>
              <a className="Under_heading_3">Inventor Relations</a>
            </li>
            <li>
              <a className="Under_heading_3">Upwork Foundation</a>
            </li>
            <li>
              <a className="Under_heading_3">Press</a>
            </li>
            <li>
              <a className="Under_heading_3">Trust, Safety & Security</a>
            </li>
            <li>
              <a className="Under_heading_3">Terms of Service</a>
            </li>
            <li>
              <a className="Under_heading_3">Privacy Policy</a>
            </li>
            <li>
              <a className="Under_heading_3">Accessibility</a>
            </li>
          </ul>
        </div>

        <div class="div_container_item">
          <h3 className="heading_3">RESOURCES</h3>
          <ul className="unordered_list_for_resources">
            <li>
              <a className="Under_heading_3">Resources</a>
            </li>
            <li>
              <a className="Under_heading_3">Customer Support</a>
            </li>
            <li>
              <a className="Under_heading_3">Customer Stories</a>
            </li>
            <li>
              <a className="Under_heading_3">Business Resources</a>
            </li>
            <li>
              <a className="Under_heading_3">Payroll Servies</a>
            </li>
            <li>
              <a className="Under_heading_3">Upwork Reviews</a>
            </li>
          </ul>
        </div>
        <div class="div_container_item">
          <h3 className="heading_3">BROWSE</h3>
          <ul className="unordered_list_for_browsw">
            <li>
              <a className="Under_heading_3">Freelancers by Skill</a>
            </li>
            <li>
              <a className="Under_heading_3">Freelancers in USA</a>
            </li>
            <li>
              <a className="Under_heading_3">Freelancers in UK</a>
            </li>
            <li>
              <a className="Under_heading_3">Freelancers in Canada</a>
            </li>
            <li>
              <a className="Under_heading_3">Freelancers in Australia</a>
            </li>
            <li>
              <a className="Under_heading_3">Jobs in USA</a>
            </li>
            <li>
              <a className="Under_heading_3">Find Jobs</a>
            </li>
          </ul>
        </div>
      </div>
      {/* <hr /> */}
      <div class="div_container2">
        <div class="div_container2_item div_container2_item_again">
          <h3 className="heading3_followsUS">Follow us</h3>
          <ul className="un_ordered_list_for_last_icons">
            <li className="list_for_last_icons">
              <a>
                <i class="fa fa-facebook"></i>
              </a>
            </li>
            <li className="list_for_last_icons">
              <a>
                <i class="fa fa-linkedin"></i>
              </a>
            </li>
            <li className="list_for_last_icons">
              <a>
                <i class="fa fa-twitter"></i>
              </a>
            </li>
            <li className="list_for_last_icons">
              <a>
                <i class="fa fa-youtube-play"></i>
              </a>
            </li>
            <li className="list_for_last_icons">
              <a>
                <i class="fa fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
        <div class="div_container2_item text-right">
          <h3 className="heading3_Mobile_App">Mobile App</h3>
          <ul className="un_ordered_list_for_last_icons">
            <li className="list_for_last_icons">
              <a>
                <i class="fa fa-android"></i>
              </a>
            </li>
            <li className="list_for_last_icons">
              <a>
                <i class="fa fa-apple"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* <hr /> */}
      <div class="div_container3">
        <div class="div_container3_item">
          <ul className="last_unordered_list">
            <li className="last_list">
              <a>©2015-2021 Upwork Global Inc</a>
            </li>
            {/* <li>
              <a>Term of Service</a>
            </li>
            <li>
              <a>Privacy Policy</a>
            </li>
            <li>
              <a>Accessibility</a>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UpworkListForArray;
