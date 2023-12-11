import express from 'express'
import { renderToString } from './hydrate/index.js';
import { readFileSync } from 'fs';

const app = express()
const port = 3000

const HTML_TEMPLATE = String(readFileSync("./src/index.html"));

app.get('/', async (req, res) => {
  const renderedHTML = await renderToString(HTML_TEMPLATE, {
    prettyHtml: true
  })
  res.send(renderedHTML.html)
})

app.listen(port, () => {
  console.log('example hydrate app! 🚀');
  console.log('rendering template:\n');
  console.log(HTML_TEMPLATE);
  console.log(`listening at http://localhost:${port} 👂`)
})
