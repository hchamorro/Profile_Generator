const staticHtml = function() {
  let staHtml = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Mini Git</title>
      </head>
      <body>
        <div>
          <div>
             <img src="./img.jpg" width="50" />
          </div>     
          <h1>NAME</h1>
          <p>add info</p>
        </div>
        <div>about</div>
        <div>
          <div>
            <h3>Public Repositories</h3>
            <p>1</p>
          </div>
          <div>
            <h3>Followers</h3>
            <p>2</p>
          </div>
          <div>
            <h3>GitHub Stars</h3>
            <p>3</p>
          </div>
          <div>
            <h3>Following</h3>
            <p>4</p>
          </div>
        </div>
      </body>
    </html>
    `;
  return staHtml;
};

const ansHtml = function(ans) {
  let answerHtml = `<!DOCTYPE html>
      <html class="bgc-white" lang="en">
        <head>
        <link href="https://fonts.googleapis.com/css?family=Quicksand&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css" />
        <title>Mini Git Profile</title>
        </head>
        <body class="bgc-D4EDF7 ff-quicksand m-a maw-80">
          <div class="bgc-6f9fd8 bdrs-5 d-f fld-c m-a maw-50  p-2">
            <div class="d-f jc-c">
              <img class="bdrs-50 h-50vw" src="${ans.data.avatar_url}" />
            </div>
            <h1 class="d-f jc-c">${ans.data.name}</h1>
            <p class="d-f jc-c"> ${ans.data.location} ${ans.data.company}</p>
          </div>
          <div class="d-f jc-c p-2">${ans.data.bio}</div>
          <div class="d-f jc-se m-1">
            <div class="bgc-6f9fd8 bdrs-5 ta-c w-25">
              <h3>Public Repositories</h3>
              <p class="d-f jc-c"> ${ans.data.public_repos}</p>
            </div>
            <div class="bgc-6f9fd8 bdrs-5 ta-c w-25">
              <h3>Followers</h3>
              <p class="d-f jc-c">${ans.data.followers}</p>
            </div>
          </div>
          <div class="d-f jc-se m-1">  
            <div class="bgc-6f9fd8 bdrs-5 ta-c w-25">
              <h3>GitHub Stars</h3>
              <p class="d-f jc-c">3</p>
            </div>
            <div class="bgc-6f9fd8 bdrs-5 ta-c w-25">
              <h3>Following</h3>
              <p class="d-f jc-c">${ans.data.following}</p>
            </div>
          </div>
        </body>
      </html>
      `;
  return answerHtml;
};

const themeHtml = function(ans) {
  let themeHtml = `<!DOCTYPE html>
        <html class="bgc-white" lang="en">
          <head>
          <link href="https://fonts.googleapis.com/css?family=Quicksand&display=swap" rel="stylesheet">
          <link rel="stylesheet" href="style.css" />
          <title>Mini Git Profile</title>
          </head>
          <body class="bgc-var-lgt ff-quicksand m-a maw-80">
            <div class="bgc-var-main bdrs-5 d-f fld-c m-a maw-50  p-2">
              <div class="d-f jc-c">
                <img class="bdrs-50 h-50vw" src="${ans.data.avatar_url}" />
              </div>
              <h1 class="d-f jc-c">${ans.data.name}</h1>
              <p class="d-f jc-c"> ${ans.data.location} ${ans.data.company}</p>
            </div>
            <div class="d-f jc-c p-2">${ans.data.bio}</div>
            <div class="d-f jc-se m-1">
              <div class="bgc-var-main bdrs-5 ta-c w-25">
                <h3>Public Repositories</h3>
                <p class="d-f jc-c"> ${ans.data.public_repos}</p>
              </div>
              <div class="bgc-var-main bdrs-5 ta-c w-25">
                <h3>Followers</h3>
                <p class="d-f jc-c">${ans.data.followers}</p>
              </div>
            </div>
            <div class="d-f jc-se m-1">  
              <div class="bgc-var-main bdrs-5 ta-c w-25">
                <h3>GitHub Stars</h3>
                <p class="d-f jc-c">3</p>
              </div>
              <div class="bgc-var-main bdrs-5 ta-c w-25">
                <h3>Following</h3>
                <p class="d-f jc-c">${ans.data.following}</p>
              </div>
            </div>
          </body>
        </html>
        `;
  return themeHtml;
};

const ColoredHtml = function(color, ans) {
  this.color = color;
  this.changeColor = function(value) {
    if (value === "blue") {
      this.color = {
        light: "bgc-D4EDF7",
        dark: "bgc-6f9fd8"
      };
      return color;
    }
    if (value === "green") {
      this.color = {
        light: "#e7f7d4",
        dark: "darkgreen"
      };
      return color;
    }
  };

  this.templateOoc = function(ans) {
    let temp = `<!DOCTYPE html>
        <html class="bgc-white" lang="en">
          <head>
          <link href="https://fonts.googleapis.com/css?family=Quicksand&display=swap" rel="stylesheet">
          <link rel="stylesheet" href="style.css" />
          <title>Mini Git Profile</title>
          </head>
          <body class="${this.color.light} ff-quicksand m-a maw-80">
            <div class="${this.color.dark} bdrs-5 d-f fld-c m-a maw-50  p-2">
              <div class="d-f jc-c">
                <img class="bdrs-50 h-50vw" src="${ans}" />
              </div>
              <h1 class="d-f jc-c">${ans}</h1>
              <p class="d-f jc-c"> ${ans} ${ans}</p>
            </div>
            <div class="d-f jc-c p-2">${ans}</div>
            <div class="d-f jc-se m-1">
              <div class="${this.color.dark} bdrs-5 ta-c w-25">
                <h3>Public Repositories</h3>
                <p class="d-f jc-c"> ${ans}</p>
              </div>
              <div class="${this.color.dark} bdrs-5 ta-c w-25">
                <h3>Followers</h3>
                <p class="d-f jc-c">${ans}</p>
              </div>
            </div>
            <div class="d-f jc-se m-1">
              <div class="${this.color.dark} bdrs-5 ta-c w-25">
                <h3>GitHub Stars</h3>
                <p class="d-f jc-c">3</p>
              </div>
              <div class="${this.color.dark} bdrs-5 ta-c w-25">
                <h3>Following</h3>
                <p class="d-f jc-c">${ans}</p>
              </div>
            </div>
          </body>
        </html>
        `;
    return temp;
  };
};

// const test = new ColoredHtml();

// test.changeColor("green");

// let car = test.templateHtml();
// console.log(car);

const CreateHtml = function(color) {
  this.color = color;

  this.templateHtml = function(ans) {
    let tempHtml = `<!DOCTYPE html>
        <html class="bgc-white" lang="en">
          <head>
          <link href="https://fonts.googleapis.com/css?family=Quicksand&display=swap" rel="stylesheet">
          <link rel="stylesheet" href="style.css" />
          <title>Mini Git Profile</title>
          </head>
          <body class="bgc-light-${this.color} ff-quicksand m-a maw-80">
            <div class="bgc-dark-${this.color} bdrs-5 d-f fld-c m-a maw-50  p-2">
              <div class="d-f jc-c">
                <img class="bdrs-50 h-50vw" src="${ans.data.avatar_url}" />
              </div>
              <h1 class="d-f jc-c">${ans.data.name}</h1>
              <p class="d-f jc-c"> ${ans.data.location} ${ans.data.company}</p>
            </div>
            <div class="d-f jc-c p-2">${ans.data.bio}</div>
            <div class="d-f jc-se m-1">
              <div class="bgc-dark-${this.color} bdrs-5 ta-c w-25">
                <h3>Public Repositories</h3>
                <p class="d-f jc-c"> ${ans.data.public_repos}</p>
              </div>
              <div class="bgc-dark-${this.color} bdrs-5 ta-c w-25">
                <h3>Followers</h3>
                <p class="d-f jc-c">${ans.data.followers}</p>
              </div>
            </div>
            <div class="d-f jc-se m-1">
              <div class="bgc-dark-${this.color} bdrs-5 ta-c w-25">
                <h3>GitHub Stars</h3>
                <p class="d-f jc-c">127</p>
              </div>
              <div class="bgc-dark-${this.color} bdrs-5 ta-c w-25">
                <h3>Following</h3>
                <p class="d-f jc-c">${ans.data.following}</p>
              </div>
            </div>
          </body>
        </html>
        `;
    return tempHtml;
  };
};

module.exports = {
  staticHtml: staticHtml,
  ansHtml: ansHtml,
  themeHtml: themeHtml,
  ColoredHtml: ColoredHtml,
  CreateHtml
};

// const test = new CreateHtml("red");

// let show = test.templateHtml();
// to use outside after require html.staticHtml
//console.log(CreateHtml);
