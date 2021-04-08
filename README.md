# NewsFeed App

This project has been created using this technologies: React, Sass, JSON Server, Material-UI, Axios, react-infinite-scroll-component.
In src folder there is components folder, where all componets of the app are stored. In db.json fine there is data needed to run json-serever. 

## Steps to run the app


### 1) `npm install -g json-server` 
Install globally JSON server (on Linux use: sudo npm install -g json-server)

### 2) `npm install` 
thise should be done in the project folder (not globally)

### 3) `json-server --watch db.json --port 3004` 
In the new terminal window (in the project folder) run demo JSON webserver. The server will run on http://localhost:3004 and data on http://localhost:3004/posts Make sure to not change port 3004 otherwise the app will not work


### 4) `npm start` 
In the project folder. The app will be running on [http://localhost:3000]


### Make sure to have opened 2 terminal windows. One with JSON server on port 3004 and another with the app on port 3000. Should you close one of them, the app will be not runing any longer.


### Attention
If during JSON server installation there is  following error: "nodemon.ps1 cannot be loaded because running scripts is disabled on this system." follow the steps from this article: https://dev.to/thetradecoder/how-to-fix-error-nodemon-ps1-cannot-be-loaded-because-running-scripts-is-disabled-on-this-system-34fe 


