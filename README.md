# design-coding-interface

### Steps to run the tool on localhost:3000

**Setup**
1. Install the following if not already installed on the localhost.  

      i. Install [Git](https://git-scm.com/downloads)    
     ii. Download and install the recommended version of [node](https://nodejs.org/en/)    
    iii. Download and install [MySQL](https://dev.mysql.com/downloads/windows/installer/8.0.html)    
    
2. (Optional) Create a new database or you use an existing database. 

**Getting the project files locally and updating .env file**
1. Clone this repository or download the zip file and unzip it    
2. Open and edit the .env file according to your MySQL credentials 

```$xslt
MYSQL_USER=YOUR_USERNAME
MYSQL_PASSWORD=YOUR-PASSWORD
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_DB=YOUR-DATABASE  
```
```YOUR-DATABASE``` will be the name of the database which you will be using to create all the table in the next section  

3. Go to the project directory in the command prompt/terminal. You can use the command ```cd design-coding-interface```  
4. Run ```npm install```    

**Creating Tables**
1. Go to db_scripts directory. Run ```cd db_scripts```  
2. Run ```./db_setup.sh```  
3. Enter MySQL username (usually it is root)   
4. Enter the name of the database that you are using and is in the .env file as well  
5. Enter MySQL password   

Troubleshoot: If you get an error in step 2 saying ```permission denied```. Run ```chmod u+x ./db_setup.sh```   

**Running the tool**  
1. Run ```npm start```    
2. Open any browser and go to the url http://localhost:3000
