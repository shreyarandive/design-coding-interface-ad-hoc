#!/bin/bash

echo Enter MySQL username
read username

mysql -u $username -p asshole_design < posts_assholedesign_40.sql