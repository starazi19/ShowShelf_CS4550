## PROJECT OVERVIEW

# SERVER
- Our server is located in the file called "server.js"

- I created a package manager using npm - Node Package Manager

- In most applications nowadays, creating all the code a website needs from scratch is like reinventing the wheel. 

- Other developers around the world make their code publicly available through npm which other devs can install and use in their own projects.

- A great example of this is express, express is an npm package that makes creating servers as easy as 5 lines of code! Before you would have to deal with XML or http which is a real mess. Express was written by other devs to make servers as accessible as possible!

- The most complex part of web dev for most beginners and seasoned developers is dealing with servers. You could watch a 10-hour course on Youtube, take notes and still make very basic mistakes. However, for a simple website like this, our server can remain relatively simple

- The 3 most important things when thinking about servers for our project:

- Creating routes to handle requests from front-end using JSON responses.

- Retrieving and manipulating data from a database (in our case Mongo)

- Handling authentication by creating sessions for users who login, and protect certain pages from unauthenticated users.

# CLIENT
- This is the exact same create-react-app we made in class.
- I'll delve a bit into the file structure.
- The public file is where you keep content you want publicly available.
- Usually we keep stuff like images, videos and other media here
- The client has its own package tracker, this is the file called 
- "package.json". This keeps track of everything you install with npm install "name"
- The src file essentially contains the "content" of the website
- This includes pages, styles, and everything related to the front-end.
- I would highly recommend you go over the React.dev/learn website to understand the file structure and what each file is doing.
- It may seem scary at first but after a couple of days playing around you'll understand most of it.
