# Comment-box
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
* and cd client folder add npm install in termianl for install dependencies for client 
* Modify the db.js file in backend folder according to the db name .
```
module.exports = {
  dbUri: 'mongodb://localhost:27017/myproject'
};
```
* Now typing to start client and server concurrently
```
 sudo fuser -k 8080/tcp 
 yarn start:dev
 ```
 For starting the client and backend separately 
 ```
 yarn start:client
 yarn start:server
 ```
 This will start the api server at http://localhost:8080  and client server at http://localhost:3000 
 * For testing the api use postman
 * For starting mongo server:- Open terminals and type
 ```
 mongod --dbpath local/mongodb-data
 mongo
 ```
 * And Open chrome iin disable web security ode
 ```
 google-chrome-stable --disable-web-security --user-data-dir
 ```
![]()