# Title: Marvel Character Full Stack Website

# Description:
This is a full-stack website with a MySQL database, API, and responsive front end. This website allows the user to view a set of Marvel characters, add characters, and edit them.

# Getting Started:

## Installs required:
- IDE
- Browser
- MySQL
- MySQL Workbench 8.0 CE
- Copy of this code base

## Create the Database and Run Server:
- Open a terminal inside of the backend folder
- While the terminal is open inside the backend folder, create a new virtual environment for your flask server
- Activate the virtual environment
- Inside your virtual environment, install all of the required packages contained in the provided requirements.txt file
- Open the backend folder inside of your IDE and take a look at server.py.  
- Find the `app.config['SQLALCHEMY_DATABASE_URI']` statement:
    - Make sure you put your password in this line:  `'mysql+mysqlconnector://root:YOUR_PASSWORD@localhost/marvel'`
- Find the `root_engine = create_engine("mysql+mysqlconnector://root:YOUR_PASSWORD_HERE@localhost")` statement:
    - Make sure you put your password in this line:  `'mysql+mysqlconnector://root:YOUR_PASSWORD@localhost/marvel'`
Save and run server.py 
    - This should automatically create a database called marvel, with a table called characters, and start up the Flask Server

## Populate the Characters Table in Marvel Database:
- Open up MySQL Workbench and log into your MySQL connection
- Download the provided marvel_characters.sql file into the backend folder 
- Open marvel_characters.sql inside of Workbench
    - You may need to reconnect to your DB by clicking on the Reconnect to DBMS button that is right under the tools menu
    - Then click ok
    - And login if prompted
- Make sure the marvel database and characters table were created when you ran server.py
- Right click marvel in the schemas view on the left hand side and select Set as Default Schema (double clicking marvel will do the same thing).  marvel should become bold
- Go back to the marvel_characters.sql file and run the SQL inside to populate the characters table
    - There should be 10 heroes and villains with multiple columns afterwards
- Test it - Open a browser and go to http://127.0.0.1:5000/characters you'll get all the characters back as JSON if it's working

## Setting up React Bootstrap Frontend:
- Open the frontend folder in your IDE
- Open the terminal
- Run the command `npm install` to make sure all the dependencies are installed
- With the server running, run the command `npm run dev`
- Then, press ctrl + click on the http link. This should launch the website

# Features:
- Responsive Layout
- API GET, POST, and PUT calls
- Conditional Rendering
- Animations
- Add character
- Edit character
- 404 Page
- Form Validation
- React Routing

# Technologies Used:
- HTML
- CSS
- JavaScript
- Python
- React
- React Bootstrap
- Vite
- react-select
- axios
- framer motion
- VS Code
- MySQL
- MySQL Workbench

# Contact:
Email - anthony7101@cox.net\
Project link: https://github.com/scrogdogJr/Marvel-Character-Full-Stack-Website.git
