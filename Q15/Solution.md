* Step 1: Looking at the code given, we find s and t should be of the same length but shouldn't be the same.
* Step 2: Also, there's salt appended to it and put through md5 and this hash must be the same.
* Step 3: At first glance this looks impossible, but after some thinking out of the box, we realize that if we send empty arrays to s and t, all the conditions would be satisfied,
and appending salt will just convert it to string and they both will be the same, but the s===t condition would be false because 2 arrays will be initialized seperately.
* Step 4: Sending '[]' in the boxes still does not solve it.
* Step 5: Soon we realize, that the stuff from input box is taken as string, not as an empty array.
* Step 6: Looking further, in the cookies it says 'Try postman'
* Step 7: So we use Postman or Postwoman to make our api request to the /eval route, with s and t defined in the body as follows
```
{
    "s": [],
    "t": []
}
```
Step 8: We get our flag