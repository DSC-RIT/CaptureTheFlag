* Step 1: Going into index.js in sources, we find prime2 = 43
* Step 2: Looking at the network tab, in 'headers' we find 'Clue: /primes/1.txt'
* Step 3: Going to /primes/1.txt, we get prime1 = 3
* Step 4: Looking at the question carefully, we see its "Mr. Bean". Googling the real name of Mr. Bean, we get "Rowan Sebastian Atkinson" whose first characters gives us "RSA" which tells us its encrypted with RSA algorithm.
* Step 5: Looking at the home page html, we get ```C^31%129=(```
* Step 6: Reading a bit about how to decrypt RSA, we find that we need to find a private key 'd' for which we need 'e' which is what C's power is, p and q, which are the prime numbers
* Step 7: So, e=31, p=3, q=43
* Step 8: We use these to calculate d, here we will use wolfram alpha rsa decryption, you can use any tool to calculate d.
* Step 9: With this, we get d=19
* Step 10: We know its encrypted element by element, so we convert the characters to ascii to get [40, 78, 118, 123, 59, 60, 106, 105, 83, 105, 83, 105, 52, 34, 55, 105, 60, 40, 54, 65]. This can be done using python's ```ord()```
* Step 11: To decrypt each element, raise that number to d(19) and mod it with 129.
* Step 12: Convert these numbers back to ascii and join them to form a string.
* Step 13: We get our flag to be koL0n0n0gpj0oCf

#### **Shoutout to team 'Invincible Hunters' and team 'Chhole Dosa' for cracking this question**
