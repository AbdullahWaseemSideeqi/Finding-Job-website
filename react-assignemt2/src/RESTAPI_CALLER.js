import axios from "axios";

function GetProjects(params) {
  return axios({ method: "GET", url: "http://localhost:3000/projects" });
}
function PostAccout(params) {
  alert("Post accout function called in RestCaller Api");
  alert(
    "Posted Account First Name  == " +
      params.first_name +
      "   Posted Account last Name == " +
      params.last_name +
      "  Posted Account password == " +
      params.password +
      "   Posted Account country == " +
      params.country
  );

  const new_account = {
    first_name: params.first_name,
    last_name: params.last_name,
    password: params.password,
    country: params.country,
  };

  return axios({
    method: "POST",
    url: "http://localhost:3000/addaccount",
    data: new_account,
  });
}
export { GetProjects, PostAccout };
