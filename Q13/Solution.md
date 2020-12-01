### **APPROACH 1: (How we planned it)**

* Step 1: Looking into the console, we see key1 + key2 = CTF
* Step 2: Looking through sources, we find some clues
```
Clue 1: in Misc/clappers.js, we find 'ES2017' and 'ES3'
Clue 2: in Misc/logos.js, we find https://www.typescriptlang.org/play
Clue 3: in Toolbox/keyboard.css, looking carefully shows its written 'TSCONFIG'
Clue 4: in Toys/useless-jspp.css, we see some js kind of code is written and at the bottom it says 'make sure you copy the whole file'
Clue 5: In Toys/useless-jspp.css, line no. 21 gives us our key1 = M3Q_z4v66LD0
```
* Step 3: Open the https://www.typescriptlang.org/play
* Step 4: Copy paste the whole of Toys/useless-jspp.css in here.
* Step 5: Click on the top at 'TSConfig' and change ES2017 to ES3
* Step 6: Click on run, then select .JS at the right panel
* Step 7: Scroll down to the bottom where it says key2, and see that the format matches, with a semicolon at the end. 
* Step 8: We get our key2 = __extends(ConcreteContact, _super);
* Step 9: Combining key1 and key2 gives us our flag

### **APPROACH 2: (How winning team "Invincible Hunters" cracked it)**
Go to /Readme.md, answer is given there. We never realized this was also possible, but these guys cracked it.