const express = require('express');
const app = express();

app.get("/", function(req, res)
{
    res.cookie("name","Aayu");
    res.send("Hello Aayushi!!");
})

app.get("/read", function(req, res)
{
    //res.cookie("name","readcookie");              //if you send new cookie then only it will change otherwise not
    res.send("This is a read page!!");
})

app.listen(3000);

// you can use bcrypt to encrypt and decrypt te password. 
// Salt(A long string) is created by bcrypt and that is stored in DATABASE. 
// So, next time user want to login then pasword entered by him is compare with salt saved in database.
// If it matches, then user is authenticated. 