const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Bot is Live!'));
app.listen(process.env.PORT || 3000, () => console.log('Port binded'));

bot.launch();
console.log("Ultimate Bulk Tracker Bot Running...");
