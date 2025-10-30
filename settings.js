require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIACMTXltVfN5wUwQAAHAHAAAKAAAAY3JlZHMuanNvbpVU2bKiSBD9l3rVaDZZNOJGDCAirii4TsxDCQUUsllVqNjhv0*g7du3H2Z67vBUZFVknjznZH4HRYkpmqIGDL6DiuArZKg9sqZCYACMOooQAV0QQgbBANymaY4T6yhN185ldac3XjJOhzTVJ+e9aJLdORptxlfTi7b8G3h2QVWfMhz8JiEuqRXo054qNMJp6Nd75u4jTpQ2N2VG8aaODJ8T+LTKdrc38GwzQkxwEVtVgnJEYDZFjQsx+Rp8fprMjoHNp4pk7CdKLk7veXIczpWJJYeWfx1a*nm3uBmqRb8Gv7NactxZ7DUlnDsCt9LUy05IVhVSSp4esjuU5d0Y9ayrr7*DpzguUOiEqGCYNV*mHeuzejNa4KLcHifLY6NH2djOkOunsLIf8Wiu6Ild1fBu6V8DbnjDUk8sdrnldwntqHZB7HCfz1d9TkouerGRueoeH2R16PwK3CUfXjn*H96hWSwclKfkRPucFsnLBTk4fMfx5q6GTyN0H4aBZF8Tx9p8kXd+cpY5fWv7Xu7Wi9X26HLLZnPsjSYjfZJaM5pvp+b0vBbjT*iQ1eR3KGej6kEmff2+T+RaMbYXd8Pd7WbSm4nao9OBDnQTWlaja2xoV9meB6Fdz7l173gORWFFvOO1kczH2PbVpLk8HkkxHmMjfnt1dEaNE4KB8OwCgmJMGYEMl8UrJoldAMOrhwKC2IteUJkyrI*xehItdF32yS53A1jOMnNo7bc32DOlUnJLj6y93hvogoqUAaIUhWNMWUmaOaIUxoiCwZ9*dUGB7uxduLacInRBhAllm6KushKGH6p+XMIgKOuCeU0RmO0BETDgP8OIMVzEtOWxLiAJEnxFZgIZBYMIZhT97BARFIIBIzX6ObVmGbbE++OjIM36HuiC*CUIDsEAiIKo8n1F5PtKb9Dj*6Dfbm1aWFXfCsRAF2SvZ31NVYW+JqkiL0v99mEbf*4E2OYLEYM4o2AATGdZZvLcspYPDdPYtg091s1YB58NfTjjnfnpHEHter0tDHWSS8wQ5aTZB6XposWM93unrWMtSi8mvaJ8+4ckYACGo3HqaYq9L5b7jBtJ88iRHnU96p8qOdiFB3PWKXZ+fDntt6LvGU6xLk660Yn5sxps0sXMv8wXR3JP81DpZHVzsZJ1NdTf2mohuuIA*VoswqtLR*VySw8fK*FshzgOz*nekdJ4q*SG+yT2ovFlP*EcUeqc13W5j8cpZMSjElfdM67JptJR1txEEnS6u1ENjXL99u7Z18xkP3YVfrmplar9jTB6jX4BWwH*W7p34K3D+Gf3lxw*lsm*Lql0nF9nqjZcoebI1FVYH4JMmuqplHp9q2MLnjGEVjntTBTwfP7VBVUGWVSSvN05RUhKHIIuIGXdWtYpovI3xUydd6wf05pByvTPMfBxjiiDeQUGgqoIqqbKfO*9lUvKagxpAgbA3Z1lo7V0o1eVxyD7GCqgt9*ynoLn31BLAQIUAxQAAAgIACMTXltVfN5wUwQAAHAHAAAKAAAAAAAAAAAAAACkgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAAHsEAAAAAA==',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '212709620964',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'Zakzak17',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 11223344,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
