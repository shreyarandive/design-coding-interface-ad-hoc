# design-coding-interface-ad-hoc

### Steps to run the tool on localhost:3000

**Setup**
1. Install the following if not already installed on the localhost.  

      i. Install [Git](https://git-scm.com/downloads)    
     ii. Download and install the recommended version of [node](https://nodejs.org/en/)    
    iii. Download and install [MySQL](https://dev.mysql.com/downloads/windows/installer/8.0.html)    
    
2. (Optional) Create a new database or you use an existing database. 

**Getting the project files locally and updating .env file**
1. Clone this repository locally  
2. Add .env file in root directory with your MySQL database credentials using the following format

```$xslt
MYSQL_USER=YOUR-USERNAME
MYSQL_PASSWORD=YOUR-PASSWORD
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_DB=YOUR-DATABASE  
```
```YOUR-DATABASE``` will be the name of the database which you will be using to create all the table in the next section  

3. Go to the project root directory in the terminal
4. Run ```npm install```    

**Creating Tables**
1. Go to db_scripts directory. Run ```cd db_scripts```  
2. Run ```db_setup.sh``` (Windows) or Run ```./db_setup.sh``` (Mac)  
3. Enter MySQL username (usually it is root)   
4. Enter the name of the database that you are using and is in the .env file as well  
5. Enter MySQL password   

Troubleshooting:   
1. If you get an error in step 2 saying ```permission denied```. Run ```chmod u+x ./db_setup.sh```
2. If the ```db_setup.sh``` script does not work for some reason, run the following queries one by one  

      ```mysql -u root YOUR-DATABASE -p < posts_ashdesign.sql```  
      ```mysql -u root YOUR-DATABASE -p < comments_ashdesign.sql```  
      ```mysql -u root YOUR-DATABASE -p < coding_ashdesign.sql```
3. If you need to drop all the existing tables, run ```npm run db:drop:tables```

**Running the tool**  
1. Run ```npm start```    
2. Open any browser and go to the url http://localhost:3000


### Gif showing the webtool in action

![](gifs/demo.gif) 
