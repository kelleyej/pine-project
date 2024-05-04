# PINE 🌲

## 🐻 Abstract
Introducing PINE! It is your ultimate guide to all 63 National Parks in the United States. You can explore parks by region and filter parks by state. Click on a park to view the current weather, general weather for certain times of the year, operating hours, entrance fees, and links to both directions to the park and the official park site. Do you have a goal to visit all National Parks in your lifetime? You can track how many parks you have already visited using the Park Tracker. The application was created using React and data is fetched from a few different APIs, including the OpenWeather and National Park Service public API and a server built using Express. Happy adventuring! 

## 🏕️ Contributors 
[Erin Kelley](https://github.com/kelleyej)

## 🏔️ App Preview 
https://github.com/kelleyej/pine-project/assets/120286689/f74601cd-935a-4757-a0a8-4b827d37b995

## 🦌 Installation Instructions
### **Frontend**
  - Visit PINE [here](https://pine-project.vercel.app) *or*
1. Fork and clone this repo: https://github.com/kelleyej/pine-project
2. cd into pine-project in your terminal
3. Run `npm install` in your terminal to install all dependencies
4. Run `npm start` to start up the frontend
5. Run Cypress E2E testing: `npm run cypress`
6. Click E2E Testing
7. Click Start E2E Testing in Chrome

### **Backend**
   - Visit: https://github.com/kelleyej/national-park-api for GET request instructions. 
   - There is no setup to use this API! The API does **not** need to be run locally as it is hosted on Heroku.
   - BASE URL: https://national-park-ce3a01ee1a6f.herokuapp.com/api/v1

### **Environment Variables**
- Create a `.env` file in the root directory.
- Copy and paste REACT_APP_API_KEY=myNPSKey into the `.env` file. 
- Copy and paste REACT_APP_API_SECRET_KEY=myOpenWeatherKey into the `.env` file. 
- Replace `myNPSKey` and `myOpenWeatherKey` with your API key from [get NPS API key](https://www.nps.gov/subjects/developer/get-started.htm) and [get OpenWeather API key](https://openweathermap.org/current), respectively, *or* feel free to message me and I can provide you with my API key information.
- Create a `cypress.env.json` file in your root directory.
- Copy and paste `{ "env": { "REACT_APP_API_KEY": "myNPSKey", "REACT_APP_API_SECRET_KEY": "myOpenWeatherKey" } }` into the `cypress.env.json` file. 
- Replace `myNPSKey` and `myOpenWeatherKey` with your API keys from above. 

## 🫎 Technologies Used 
![React Badge](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=flat) ![React Router Badge](https://img.shields.io/badge/React%20Router-CA4245?logo=reactrouter&logoColor=fff&style=flat) ![Cypress Badge](https://img.shields.io/badge/Cypress-69D3A7?logo=cypress&logoColor=fff&style=flat) ![Express Badge](https://img.shields.io/badge/Express-000?logo=express&logoColor=fff&style=flat) ![Vercel Badge](https://img.shields.io/badge/Vercel-000?logo=vercel&logoColor=fff&style=flat) ![Heroku Badge](https://img.shields.io/badge/Heroku-430098?logo=heroku&logoColor=fff&style=flat)

## 🌵 Context 
- Goals:
  - Create a React application with mutiple pages via Router.
  - Build a robust E2E testing suite using Cypress.
  - Deploy application. 
- Wins:
  - Updating state with multiple checkboxes and varying the checkbox display based on state.
  - Consistently updating the GitHub project board with user stories and bugs.
  - Utilizing multiple public APIs and an API created using Express and deploying with Heroku.
  - Making application responsive across all breakpoints.
  - Utilizing localStorage to persist state on the Park Tracker page. 
- Challenges:
  - While having an API return a robust repsonse body, it was initially challenging figuring out what information I actually wanted to utilize in the application.
  - Correctly updating state with use of multiple checkboxes, user interaction, and change in state with the Park Tracker page!
    
## 🐿️ Future Improvements 
- Add routing pages from the specific park page to show more details, such as camping sites, activities, accessibility, and information on entrance passes.
- Add a maps feature, possibly utilizing the Google Maps API.
- Be able to show only visited parks versus non-visited parks on the Park Tracker page. 
