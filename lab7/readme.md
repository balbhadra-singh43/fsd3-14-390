# frontend - backend
1.
2.
3.
4.open frontend in to left side terminal
5.open backend into righ side terminal
6.in backend 
   a. initialize backend by `npm init -y`
   b. install nodemon by `npm i nodemon`
   c. open package.json from backend, update `type to module` and script
7. in frontend
   a. npm create vite@latest
   b. enter . as project name
   c. select framework as react from arrow key
   d. select variant as javascript from arrow key
   e. select eslist for linting from arrow key
   f. select install and start the frontend


   ## components
   1. simple js function return html directly.
   2. it must start with capital letter.
   3. it should be treated as html  tag.
   4. it must be closed.

   ##Object D structure

   does not depend on other
   if property is not available then it is initialised 
   any components include styles--
   1. external css = create class in index.css and use in components.
   2. Internal css = create property as object like 
   '''

   ''' 
   then apply style attribute and pass the object 

   3. In this method we use two curly bracket with style atribute all the css property must be single word. for example - text/align- textAlign(camel case)


   for making components from extention.
   rafce--- arrow.
   rfce-- function.

   app.js should be minimum code.
   bydefault button in html is submit button.

   # add tailwind to existing react project
 1. open terminal and go to project frontend folder.
 2. install tailwind by
 ` npm install tailwindcss @tailwindcss/vite`
 3. open vite.config.js
 4. add import tailwindcss from '@tailwindcss/vite' in first line
 5. add 'tailwindcss()'
 