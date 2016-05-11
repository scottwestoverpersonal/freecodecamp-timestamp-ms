var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/landing');
});

/* 
This is the url for the timestamp microsevice project from freecodecamp.com.
This service looks for a string that is passed as a parameter to check whether the the string contains a unix timestamp or a natural langauge date.
If it does, then it returns both the unix timestamp and teh natural date.
*/
app.get('/timestamp-ms',function(request, response) {
    var timestampDate = request.query.date;
    var isnum = /^\d+$/.test(timestampDate);
    console.log(isnum);
    //console.log(timestampDate);
    if(timestampDate == undefined) {
        response.render('pages/timestamp');
    }
    else{
        var unix = null;
        var natural = null;
        if(isnum == false) {
            //if date is in milliseconds
            var d = new Date(timestampDate).toUTCString();
            var tempd = new Date(timestampDate);
            if(d !== "Invalid Date"){
                console.log("Date is in milliseconds:" + d);
                natural = timestampDate;
                unix = tempd.getTime()/1000;
            }
        }
        else {
            timestampDate = parseInt(request.query.date);
             //if date is in seconds
             var d = new Date(timestampDate*1000).toUTCString();
             var tempd = new Date(timestampDate*1000);
             if(d !== "Invalid Date"){
                unix = timestampDate;
                console.log("Date is in seconds:" + d);
                var month = getMonth(tempd);
                natural = month + " " + tempd.getUTCDate() + ", " + tempd.getUTCFullYear();
            }
        }
        response.json({
            "unix": unix,
            "natural": natural
        });
    }
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


function getMonth(d){
    var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var n = month[d.getUTCMonth()];
return n;
}