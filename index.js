const axios = require("axios");
const fs = require("fs");
const html = require("./htmlTemplates");
const inquirer = require("inquirer");
//const pdf = require("html-pdf");
const util = require("util");
const HTML5ToPDF = require("html5-to-pdf");
const path = require("path");
const CreateHtml = html.CreateHtml;
//user   chrisccerami

const writeFileAsync = util.promisify(fs.writeFile);

// const CreateHtml = function(color) {
//   this.color = color;

//   this.templateHtml = function(ans) {
//     let tempHtml = `<!DOCTYPE html>
//         <html class="bgc-white" lang="en">
//           <head>
//           <link href="https://fonts.googleapis.com/css?family=Quicksand&display=swap" rel="stylesheet">
//           <link rel="stylesheet" href="style.css" />
//           <title>Mini Git Profile</title>
//           </head>
//           <body class="bgc-light-${this.color} ff-quicksand m-a maw-80">
//             <div class="bgc-dark-${this.color} bdrs-5 d-f fld-c m-a maw-50  p-2">
//               <div class="d-f jc-c">
//                 <img class="bdrs-50 h-50vw" src="${ans.data.avatar_url}" />
//               </div>
//               <h1 class="d-f jc-c">${ans.data.name}</h1>
//               <p class="d-f jc-c"> ${ans.data.location} ${ans.data.company}</p>
//             </div>
//             <div class="d-f jc-c p-2">${ans.data.bio}</div>
//             <div class="d-f jc-se m-1">
//               <div class="bgc-dark-${this.color} bdrs-5 ta-c w-25">
//                 <h3>Public Repositories</h3>
//                 <p class="d-f jc-c"> ${ans.data.public_repos}</p>
//               </div>
//               <div class="bgc-dark-${this.color} bdrs-5 ta-c w-25">
//                 <h3>Followers</h3>
//                 <p class="d-f jc-c">${ans.data.followers}</p>
//               </div>
//             </div>
//             <div class="d-f jc-se m-1">
//               <div class="bgc-dark-${this.color} bdrs-5 ta-c w-25">
//                 <h3>GitHub Stars</h3>
//                 <p class="d-f jc-c">127</p>
//               </div>
//               <div class="bgc-dark-${this.color} bdrs-5 ta-c w-25">
//                 <h3>Following</h3>
//                 <p class="d-f jc-c">${ans.data.following}</p>
//               </div>
//             </div>
//           </body>
//         </html>
//         `;
//     return tempHtml;
//   };
// };

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
        if (style === "static") {
          style = html.staticHtml();
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
