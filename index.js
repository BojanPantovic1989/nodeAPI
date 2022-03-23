const express = require("express");
const bodyParser = require('body-parser');
const db = require("./data/db.js");
const app = express();
const authorize = require('./middleware/authorize')
const errorHandler = require('./middleware/error-handler');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/login', require('./controllers/user.controller'));

app.get("/fxRate", authorize(), async (req, response) => {
  const result = await db.from('currencies').select("currency_code", "rate");
  response.json({ result });
});

app.get("/fxRate/:target", authorize(), async (req, res) => {
  const result = await db.from('v_currencies')
                          .select("currency_code", "rate")
                          .where("currency_code", "=", req.params.target);
  res.json({ result });
});

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));