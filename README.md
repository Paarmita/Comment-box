# Comment-box

[![Greenkeeper badge](https://badges.greenkeeper.io/Paarmita/Comment-box.svg)](https://greenkeeper.io/)

MERN stack application

## Installation
* Clone or download the repo. into any fresh temporary folder.
```
git clone https://github.com/Paarmita/Comment-box.git
```
* Cd into that root folder you just cloned locally.
```
cd Comment-box
```
* Open terminal in the current folder and to install all dependencies type and 
```
npm install
```
* and cd client folder add npm install in terminal for install dependencies for client 
* Modify the db.js file in backend folder according to the db name .
```
module.exports = {
  dbUri: 'mongodb://localhost:27017/myproject'
};
```
* Now typing to start client and server concurrently
```
 sudo fuser -k 8080/tcp 
 npm start
 ```
 For starting the client and backend separately 
 ```
 npm start:client
 npm start:server
 ```
 This will start the api server at http://localhost:8080  and client server at http://localhost:3000 
 * For testing the api use postman
 * For starting mongo server:- Open terminals and type
 ```
 mongod --dbpath local/mongodb-data
 mongo
 ```
 * And Open chrome in disable web security mode(for CORS)
 ```
 google-chrome-stable --disable-web-security --user-data-dir
 ```
![](https://github.com/Paarmita/Comment-box/blob/master/screenshot.png)
