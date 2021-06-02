# Finding-Job-website
 Upwork like job finding website


# Front-End
 Front End of this website is developed using react framework. Along with the help of html, CSS and Java-Script for styling of different pages.
 
# Back-End
 Back end of this site is being developed using various modules of Node-js. A point to be noted here is that, yet the complete data of website is kept on the server side as  
 connection with database is not established yet. This connection is expected to be established in near future.
 
# FLow of Information on website
 The complete data which is displayed in the form of jobs available is coming from the server side using get functionality of axious service. On the other hand if users sign up, 
 then his or her personal information (email, first name, last name, password and country) is going on backend i.e server side when the user click create account using post 
 functionality of axious service. 
 Another point to be noted is that there is function named fetchProjects which will be called componentDidMount function written 
 Upwork_list_for_array.jsx file. Actual implementation of fetchProjects function is in RESTAPI_CALLER.js file. The fectProjects is the actual function from where get function of
 server side will be called using axious service for getting complete information of jobs displayed to the user.
 Similarly when the user wants to sign up then he or she has to redirect to the url "http://localhost:3001/SignUP", reaching the specified url he or she enters his or her email
 and then click on the button continue with email as a result of which moves to another page where he or she enters his or her personal account information including first name, 
 last name, passsword and country name and then click on create account. Resultantly PostAccount function is called from the SignUpSecondPage.jsx file, PostAccount function actual 
 implementation is in RESTCALLER_API.js file which uses post function using axoius service to send the user account information to server side.
 
# Functionality offered to Users of Website

 1) User can sign up using his email id.
 2) User can display different job types on the basis of hourly, fixed-price, no of hires required, no of hours to work per week and no of months required to complete the project.
 3) User can filter the search results on the basis of various categories i.e no of hires required, hourly, fixed-price,  no of hours to work per week and no of months required to 
    complete the project.
## Snaps of Working Project

#### Display Different Kind of Jobs
![image](https://user-images.githubusercontent.com/61907137/120474381-9290ce00-c3c1-11eb-98f6-868f141e2dd3.png)

![image](https://user-images.githubusercontent.com/61907137/120474354-89076600-c3c1-11eb-9899-7b311e26ddac.png)


#### FIlteration on Jobs Found
![image](https://user-images.githubusercontent.com/61907137/120474335-80169480-c3c1-11eb-9108-3f260320bdbb.png)

#### Continue with email for Sign Up
![image](https://user-images.githubusercontent.com/61907137/120474294-77be5980-c3c1-11eb-8204-3e922b55da01.png)


#### Complete the process of creating account for sign up
![image](https://user-images.githubusercontent.com/61907137/120474263-6e34f180-c3c1-11eb-9c3b-0e14759ac652.png)



## Important Note
 Server side code is in web-assignment3 folder.
 React js frontend code is in react-assignemt2 folder.


## What to Install
In order to run the project you have to install visual studio code as editor of code. Then you have to install react js and node js at your device.
