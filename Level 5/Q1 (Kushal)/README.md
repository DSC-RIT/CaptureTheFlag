# Steps

- Check headers. You'll find base64 string
- Convert it to ascii
- Find credentials for atlas
- See data in database
- 4 properties in each - user_id, username, hashed_password, encryption_method
- For all encryption_method is AES except 1 for which it is Caesar
- Decrypt hashed_password using Caesar
- Found username and password. Enter in website and done
