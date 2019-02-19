#!/bin/bash

 echo Enter MySQL username
read username

 echo Enter Database name
read database

 cat *.sql | mysql -u $username -p $database