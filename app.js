const express = require('express');
const bodyParser = require('body-parser');
var axios = require('axios');
const dotenv = require('dotenv');
const port = 3002;

// create a new Express application
// the object holds the entire API
// we're gonna design
const app = express();

// tranform the request object into json
// useful for handling application/json
// contentTypes in a simpler way
app.use(bodyParser.json());

app.get("/yes", 
    (requestObject, responseObject) => {
    // magic happens here
    responseObject.send("yesss")
});

// Add a post request
app.post("/postRequest", 
    async (req, res) => {
        console.log(req.body);      // your JSON
        res.send("Post request Completed!");

});


// Add a post request
app.post("/past6months", 
    async (req, res) => {
        // console.log(req.body);      // your JSON
        // res.send("Post request Completed!");

        // var axios = require('axios');
        var data = '';
        
        var config = {
          method: 'get',
          url: 'https://api.ocbc.com:8243/transactional/account/1.0/recentAccountActivity*?accountNo=201770161001&accountType=D',
          headers: { 
            'Authorization': 'Bearer c49dfeff-2324-35bd-946d-e49d72de01b2', 
            'Cookie': 'incap_ses_962_1634122=x2FJTg4fQgcpAhAYtLZZDW5tJGMAAAAA8cbnrz1OdRtHfZjathOh3A==; nlbi_1634122=e4p9Pal6LAUUqDSmZPv8YwAAAACI6eaVuM6DmSbV3xhsGhR1; visid_incap_1634122=FKPos96HTzmFJfbs2MCvjgcNJGMAAAAAQUIPAAAAAAAMwU3EXb/sUzAQWxl2Vf48'
          },
          data : data
        };
        
        axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          res.send(response.data)
        })
        .catch(function (error) {
          console.log(error);
          res.send(error)
        });


});

// app.listen(port, () => {
//     console.log("server started to listen on " + port);
// });


dotenv.config();
console.log(process.env.PORT)
app.listen(process.env.PORT || 5000, () => {
    console.log("server started to listen on " + port);
});
