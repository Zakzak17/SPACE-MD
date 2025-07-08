require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIABo36FqUEExxsgQAAI4IAAAKAAAAY3JlZHMuanNvbq1U247iOBD9F7+CpnO*ILU0SQgQIEC4w2ofTOIkzh3bIaRH*e+rNN07I+3sTK+0fnJsp+qcU6fqGyhKTNEMtWDwDVQE3yBD3Za1FQIDYNZhiAjogwAyCAbAXVzD03F*kfglIdMc58NC4e25uqYJX7xss3OOj1aP1CjVnsFrH1T1JcP+LwLm8Boz4Ti2h0EsDXtrPKX7JJqk1HdXnDCxJvWLOFzSK907z+C1iwgxwUVkVzHKEYHZDLUriMnn4DfjhHc8LqSc2vpmtjXD5Vy15c1CKoONnY5lNxXK7CI2++hz8P0mzQXHFbS1l8ULQaBmAM0XAbNGVAN+nfizUpXiNJCw+4BPcVSgwAlQwTBrP617zz7dz0Eje70CsuzFr3OrWZYOl96s*bY+TeKF7hzJcsKJxueAHyaH*ewJ6mm7P983WtOo81oLovowjEaJFw3TzWnLe2pvYkY*Al+RD6+k*0X3zcIxtnkkKGox0ni6fyqu5m3GAvtQFSPmaHkD5zy3FzPb*hz86H7xjxl2T8lS1fVru+XNgwBjjJdeGaBFXIuBvGqSC97Q7*Ahq8mvUObTOMxCajuGcz*GeD0Je*P1SBaaoZM0bEYuy1V5O2v32ovXczu8TyJOQOK46NUJHO348c4dz7DRirvry3oWVx6On26x9*zGKEWtE4AB*9oHBEWYMgIZLovuTNL6AAa3DfIJYm*qgirPRktnHS1buop6TpZaPVZldRSarn0uq307CoSbMjXDVfoM+qAipY8oRcEEU1aS1kWUwghRMPjjrVAdZ4LykqEpDsAACLygcroicLoifaVfmhgyCqvqS4EY6IOQlLmLwICRGvXB4wfL4u2hKAqiIcuyYQxlXVN0Th1JI1O0Db1jmD+SbnGOKIN5BQa8KvO6rGq88Nr*f3DYw5ExUiTO1MQhL*HiUOdUSedUxRRlQ+GU3+L4sw8KdGcPG3fii3wfhJhQtivqKith8OHxj0vo+2VdsE1b+Fa3QQQMfjhGjOEioh2zuoDEj*ENWR0PMAhhRtHf9UYEBR9c3meYVQadDccnyThsphrosHeB*qHN4CfqZG+vdE1VeV0TVYGTRX0gfe2O+6CAXSRwht1K07TT5R1xlyBADOKMggGwXCzJZ2rZs55FNXc8NuzIsCIDfGf40TgPZ27rLU3yZR3cX8Rb1FZEuexyLlkka6lspabVc35IglPqjbXnnwQBA6CGwwx6i7jS7xzpRWs2Poua54Wnfe8Uz6vpelQ9EfWyux*nvqfQITzIpoBHSSTIPTo*kvNkf6zb9unMO*7M0DxXaUKjee6yBeiGffRjMm7YvswXq+nYW1aCoujntJjutrNTfFU0ZFgZ7+drE+NKlYqkErZc4ibHJSpnYzU8J9v7atolviVpPmeBm88n2sXRcfNo6beRkr2PcvzebfjtM8TobTK+1+F3tXzg7hzHvfZ*CPE+av9lXJk7NVUdOSGF7+uq5F5hL+enzHk5cWjm1q57OzNPEQ9T27yB1876VQZZWJIcDAAsAlK+eYWUdWdhpwjLXySzDM6xjAfxDFJmfG+Ln3Ua93i1ImU1gTQGA7A6pLLZWbw1qmrDIPtoMmB0axQtwetfUEsBAhQDFAAACAgAGjfoWpQQTHGyBAAAjggAAAoAAAAAAAAAAAAAAKSBAAAAAGNyZWRzLmpzb25QSwUGAAAAAAEAAQA4AAAA2gQAAAAA',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '254712345678',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || '',
  
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
