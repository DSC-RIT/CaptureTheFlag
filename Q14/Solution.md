* Step 1: Exploring the homepage, under the 'Network' tab in developer pane, in 'Headers', we see a field called X-Disisdawae (This is the way).
* Step 2: It has an encoded string with it. Trying to decode it with some basic algorithms, we find it is base64 encoding.
* Step 3: Decoding it gives us 
```
{"service":"Atlas","collection":"users","url":"mongodb+srv://noobmaster69:12344321@cluster0.c6bhq.mongodb.net/userdata?retryWrites=true&w=majority"}
```
* Step 4: We see we have a database connection url for mongo.
* Step 5: Connecting to the same with MongoDB Compass or mongo cli, we enter the DB.
* Step 6: We see there is data in a database called 'userdata.users'. We see there are 20 records with username and passwords.
* Step 7: Observing these 20 records, 19 of them are AES encrypted which needs a decryption key to decrypt. 
* Step 8: But 1 record is caeser-13 ecrypted. Which can easily be decrypted.
* Step 9: We take the encrypted password, pass it through a caeser 13 decrypter and we get the decrypted password which is 'Welcome to the party pal'
* Step 10: We look back at the db and get the username of the same to be 'repulsive_chocolate_puffin'
* Step 11: using these as the username and password, we login to get the flag!