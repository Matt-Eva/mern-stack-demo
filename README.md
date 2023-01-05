# mern-stack-demo

## Installation

first, we'll run `npm init`.

next, we'll install express - `npm i express@4.18.2`.

now, we'll install the mongodb node driver - `npm install mongodb@4.13.0`

finally, we'll install the dotenv package, which helps us out with environment variables (more on that later) - `npm install dotenv@16.0.3`.

Please be sure to install the versions listed above - the code in this lesson uses these versions. Newer or older versions may require different code than that present in this app. 

Note: This is just the backend for our MERN stack. We will be connecting it to a React frontend, but we'll be creating and hosting that part of our app in a separate repository. This allows us to separate our backend code from our frontend code, which is a general best practice, in part because it lets us deploy our frontend to a separate server than our backend (separation of concerns).

## Building out files

### .gitignore

Before we start adding any files or running any commits, we're going to create a `.gitignore` file. The `.gitignore` file allows us to prevent certain files and directories from being included in git adds, commits, and pushes. Some of the files and folders we want git to ignore will include sensitive pieces of information - like our database connection string - or extraneous code that we don't want included in our repository - like our node_modules folder.

Let's create that .gitignore file - `touch .gitignore`.

In that file, we're going to add our node_modules folder to our list of files and folders we want git to ignore. We can do that by simply typing `node_modules/` in our .gitignore file. (Note: to include directories in a .gitignore, you'll need to write the directory name followed by a `/`).

If you've already told git to track certain files or folders, you won't be able to add them to your .gitignore file. If you've found that you've done something like that, you should do a hard reset to a previous commit (particularly if those files or folders contained sensitive information). 

This is a good motivator to commit often - that way, if you have to do a git revert or a git reset, you won't have to write so much code all over again (I've learned this lesson by making this mistake).

While we're at it, let's add a `config.env` file to our .gitignore as well, just so we don't forget to do it later. We can add it to the .gitignore simply by writing `config.env`. Your .gitignore file should now look like this:

```
node_modules/
config.env
```

Let's create our `config.env` file now too - `touch config.env`. We won't be adding anything to it just yet, but we will later.

### index.js

The first file we'll create will be our `index.js` file, which is going to be the access point for our express app. (Note: if you've been following along and haven't run any commits yet, you should make one now.)

We'll start out by simply getting our express server up and running.

Within our `index.js` file, we're going to include the following code:

```
const express = require('express')
const app = express()

const port = 3000

app.listen(port, () =>{
    console.log(`server is running on port: ${port}`)
})
```

Let's break down what's going on here. First, we're importing the `express` module into our file - `const express = require("express")`. This gives us access to all of the functionality contained within `express`.

Next, we create a new instance of our express application - `const app = express()`. 

Then, we'll specify the port we want our new express application to run on - `const port = 4000`

Finally, we'll tell our new express app to listen to the port we've specified upon startup. We've also passed in a function that will print a message to our console letting us know the server has started.

```
app.listen(port, () =>{
    console.log(`server is running on port: ${port}`)
})
```

Once this is set up, we can start our server by running `node index.js` from our command line. You should see `server is running on port: 4000` printed out in the terminal.

Congrats! You've officially created your first express web server!