const axios = require("axios");
const fs = require("fs");
const html = require("./htmlTemplates");
const inquirer = require("inquirer");
const util = require("util");
const HTML5ToPDF = require("html5-to-pdf");
const path = require("path");
const CreateHtml = html.CreateHtml;
//user   chrisccerami

const writeFileAsync = util.promisify(fs.writeFile);

const run = async () => {
  const html5ToPDF = new HTML5ToPDF({
    inputPath: path.join(__dirname, "index.html"),
    outputPath: path.join(__dirname, "great.pdf"),
    include: [path.join(__dirname, "style.css")],
    options: { printBackground: true }
  });

  await html5ToPDF.start();
  await html5ToPDF.build();
  await html5ToPDF.close();
  console.log("DONE");
  process.exit(0);
};

inquirer
  .prompt([
    {
      message: "Enter your GitHub username?",
      name: "username"
    },
    {
      message: "What color theme do you want?",
      name: "style"
    }
  ])
  .then(({ username, style }) => {
    const queryUrl = `https://api.github.com/users/${username}`;
    axios
      .get(queryUrl)
      .then(res => {
        if (res.data.company === null) {
          res.data.company = "";
        }
        const makeHtml = new CreateHtml(style);

        const initHtml = makeHtml.templateHtml(res);
        return writeFileAsync("index.html", initHtml);
      })
      .then(() => {
        return run();
      });
  })
  .catch(err => {
    console.log(err);
  });
