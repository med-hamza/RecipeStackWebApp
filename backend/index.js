const cheerio = require('cheerio');
const axios = require('axios')
const fs = require('fs')
const url = 'https://www.imdb.com/chart/top/';
const recipeData = {};

async function getHTML() {
  const { data: html } = await axios.get(url)
  return html
};
getHTML().then((res) => {
  const $ = cheerio.load(res);
  $('lister-list>tr').each((i, recipe) => {
    const title = $(recipe).find('titleColumn a').text()
    const rating = $(recipe).find('ratingColumn strong').text()
    recipeData[title] = rating
  });
  fs.writeFile('reciedata.json', JSON.stringify(recipeData), (err) => {
    if (err) throw err
    console.log("data succfully")
  });
});