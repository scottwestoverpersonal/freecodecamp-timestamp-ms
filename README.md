# API Basejump: Timestamp microservice

A NodeJS App that allows a user to pass a string as a parameter to the url and it check to see if is a unix timestamp or a natural date.

You can view the live demo here: https://freecodecamp-swestover.herokuapp.com/timestamp-ms

### The Web App Does the Following:
* I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).
* If it does, it returns both the Unix timestamp and the natural language form of that date.
* If it does not contain a date or Unix timestamp, it returns null for those properties.
 
### Example URLs:
* https://freecodecamp-swestover.herokuapp.com/timestamp-ms?date=January%201,%202016
* https://freecodecamp-swestover.herokuapp.com/timestamp-ms?date=1451606400
            
### Example output:
<code>
{
	"unix": 1451606400,
	"natural": "December 15, 2015"
}
</code>
