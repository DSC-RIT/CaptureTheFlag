* Step 1: On the homepage, in Elements, it says 'Jack Dorsey' who's the CEO of Twitter
* Step 2: Click on link 1. It takes you to '/dsc_ctf_121.html' in elements, you'll find w1=kiwi
* Step 3: Come home and click on link 2. It takes you to '/dsc_ctf_123.html'. In elements, you'll find w2 = caps_lock(decode(... -- .- .-. -))
* Step 4: Dashes and dots for encoding means its morse code. Decoding it gives us 'SMART'
* Step 5: Come back home and click link 3. It'll take you to '/dsc_ctf_124.html'.
* Step 6: Here, in the elements, it says w3 = base64decode(RFNDXw==)
* Step 7: Decoding this, we get 'DSC_'
* Step 8: Notice, we visited 121, 123 and 124 pages, so looks like we can try 122.
* Step 9: Go to '/dsc_ctf_122.html' and in the elements, you'll find combined = w1 + ' _ ' + ' _ " + w2 + " _ " + w3. 
* Step 10: This gives us kiwi_SMART_DSC_
* Step 11: It says checkout @combined. So we go to @kiwi_SMART_DSC_ on twitter, because we saw Jack Dorsey earlier. 
* Step 12: There's our flag