#!/bin/bash

echo Enter MySQL username
read username

mysql -u $username -p asshole_design < comments_assholedesign_40.sql