# NPM Project

1. Create project folder
2. right click on project folder and select open integrated terminal
3. type in terminal `npm init -y` press enter
open package.json file from project folder
4. update type as `module` in package.json
5. type in terminal `npm i nodemon -D` to install nodemon, which restarts server while file changes. -D flag indicate install in dev dependency.
6. it creates node_modules folder and package-lock.json
7. update .gitignore file and write project-folder/node-modules
8. update package.json to run the project, update script propery as below
'''
"scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
  },
  '''
  9. now you can start the server by typing `npm run dev` in the terminal of project folder.