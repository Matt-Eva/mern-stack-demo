const express = require('express')
const app = express()

const port = 4000

app.listen(port, () =>{
    console.log(`server is running on port: ${port}`)
})

app.get('/', function(req, res){
    res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head> 
    <body>
        <h1 id="first-header">Hello, world!</h1>
        <h2>Welcome to my website</h2>
        <script>
            document.querySelector("#first-header").textContent = "Hi, world!"
        </script>
    </body>
    </html>
    `)
})