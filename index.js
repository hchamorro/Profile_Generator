const axios = require("axios");
const fs = require("fs");
const html = require("./htmlTemplates");
const inquirer = require("inquirer");
const pdf = require("html-pdf");
const util = require("util");
//user   chrisccerami

const writeFileAsync = util.promisify(fs.writeFile);

inquirer
  .prompt({
    message: "Enter your GitHub username",
    name: "username"
  })
  .then(({ username }) => {
    const queryUrl = `https://api.github.com/users/${username}`;

    axios.get(queryUrl).then(res => {
      if (res.data.company === null) {
        res.data.company = "";
      }
      const repoNum = res.data.public_repos;
      //console.log(res);
      return writeFileAsync("index.html", html.ansHtml(res));
    });
  })
  .then(() => {
    /* read from file system */
    const htmlFile = fs.readFileSync("./index.html", "utf8");
    const options = { format: "Letter" };
    /* convert to pdf */
    pdf
      .create(htmlFile, options)
      .toFile("./git_profile.pdf", function(err, res) {
        if (err) return console.log(err);
        console.log(res);
      });
  });
