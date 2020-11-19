## ☕ AntiSQLInjector
#### 🧐 How it works Sql Injection?

👉 Lets see a simple SQL
```sql
SELECT * FROM users_accounts WHERE username = '${req.body.username}'
```

🙄 Now, if the user types 'OR' 1 = 1;
```sql
    SELECT * FROM users_accounts WHERE username = ''OR 1 = 1''
```

😥 <span style="color:red"> This sql will always return true</span>

😍 But if we using placeholders we can end this

```js
    db.query("SELECT * FROM users_accounts WHERE username = ? ", [req.body.username], (err, res, fields))
```