# Earth, Space and Science

## I created this project as a practice, it doesn't have any purpose except for some general facts about Earth, Space etc.

With this project I learned a lot about programming, and all those mistaked that I did and hard problems that I solved taught me something about persistence.
I know there is some unnecessary code inside, I know that there is a lot of code that can be improved.
But all that unnecessary and wrong code taught me a lot as well as how to avoid some of the unnecessary coding.

With this project I learned a great deal about JavaScript, HTML and CSS and also React.
Also about Node.js and Express.js coupled with postgreSQL.

There are some things that needs to be improved and added like bcrypt for hashing ans salting the user password which I didn't use for simplicity reasons.

### This project is hopefully just the beginning and I hope that anybody who comes across this project leaves a contribution.


# Description
On this project you can make your own profile, change your profile and background picture. Share a post with an image or just text, or even just share a picture.
There are some facts about Earth, Space and Science and also some links to other websites.

For the Frontend I used **JavaScript** with **React** and **HTML/CSS**, for the Backend I used **node.js** and **express.js** with some other techs. And for the database I used **postgreSQL**.

# How to run it
In order to run this project and to test it you need the API that i made and uploaded it on a repository called **server**. 
->  https://github.com/cybzuty/server  <-
Inside of that server create 2 folders like -> root/**public/images**

And with postgreSQL you need to *create 4 tables*:
1. ## *profile*
**id**   (integer)
**first_name**   (text)
**last_name**    (text)
**e_mail**  (text)
**password**   (char)

2. ## *profile_details*
**id**   (integer)
**certificate**  (char)
**school**  (char)
**place**  (char)
**about_me**  (char)
**links**  (char) 
**profile_pic**  (char)
**profile_background**  (char)

3. ## *profile_images*
**id** (integer)
**image** (char)
**date** (char)
**images_id** (integer)

4. ## *profile_posts*
**id** (integer)
**post** (char)
**pics** (char)
**date** (char)
**posts_id** (integer)

Link *profile* and *profile_details* id, *profile_details* with *profile_images* id and *profile_images* with *profile_posts* id. And also when creating write ON DELETE CASCADE so when a profile gets deleted
everything with that id will be deleted from all tables.

*Here is a link to a youtube video on how the site looks and works*.
https://www.youtube.com/watch?v=fobrzSteYDc

Hopefully there won't be problems, could be I forgot something to tell. :D
