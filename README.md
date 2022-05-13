# Final Project 

# Introduction 
The goal behind this final project was to create a fully functional website to further our knowledge in web development. This was the first ever website I ever made, and I did it in my Software Dev 2 class. This project helped understand the main elements of how most social media websites function with the help and guidance of Professor Gormanly. The final part of it we created a list of users that you can choose from and this is where they can post as that specific user.

To create this website we used html, css, and client and server side javascript, and a database using postgres. 


# License 
Distributed under the MIT License

# installation 
1. You have to install and clone your repository 

2. Then you use Node, the command,  npm start 

3. Once you installed your dependenices this where you start your database up using postgres. 
* psql -U postgres -f server/ db/create-
do.sql (mac users may not need to
write out the script)

4. Go back once more into your console and type out: npm start

5. The server will be running at that point this where you'll see the message saying "Listening on port1337!"




# How to use the site 

1. First you'll see the homepage, you have 3 choices. choose a user and Sign In. Additionally you have the option to read a terms and conditions.
<img width="1440" alt="Screen Shot 2022-05-12 at 10 03 19 PM" src="https://user-images.githubusercontent.com/79177105/168196684-c70f7998-e5c8-4108-a03a-e402dedba6ff.png"> 
2. After you choose a user you be prompted to this page. 
<img width="1440" alt="Screen Shot 2022-05-12 at 9 53 34 PM" src="https://user-images.githubusercontent.com/79177105/168195723-2f21c253-7c76-4176-af60-52179c63a6f3.png">
3. After you choose a user you'll be prompted to this screen, from there you can upload your message, I chose my nme for this demonstration. 
<img width="1440" alt="Screen Shot 2022-05-12 at 9 55 04 PM" src="https://user-images.githubusercontent.com/79177105/168195970-6ada3004-7728-4dd8-bc2c-6a416705dd0e.png">

4. After you post your message, the site  will update with their message being sent. 
<img width="1440" alt="Screen Shot 2022-05-12 at 10 04 22 PM" src="https://user-images.githubusercontent.com/79177105/168196797-5c0b644b-ac86-4d19-9bd8-60764701bcf2.png">

# Usage
git clone this repository
npm install
Visit localhost:1337 in your browser

# Database setup
psql -U postgres -f server/db/createTablesScript-base-example.sql
We created a database to keep track of the posts and the messenges. 

# Current Features 
1. Allows a user to pick a user to sign in and create certain posts

2. Highly advanced homepage 

3. Event feed API

4. Responsive webpage


# Problems I ran into 
Learning the material and then implenting it was the tricky part. I'm more of a hands on learner and need the guidence of peers and Professor to truly learn what I'm doing. 


