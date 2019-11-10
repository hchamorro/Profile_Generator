const staticHtml = function() {
  let staHtml = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        <title>Mini Git</title>
      </head>
      <body>
        <div>
          <img src="./img.jpg" width="50" />
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
      <html lang="en">
        <head>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        <title>Mini Git</title>
        </head>
        <body>
          <div>
            <div>
              <img src="${ans.data.avatar_url}" width="50" />
            </div>
            <h1>${ans.data.name}</h1>
            <p> ${ans.data.location} ${ans.data.company}</p>
          </div>
          <div>about</div>
          <div>
            <div>
              <h3>Public Repositories</h3>
              <p> ${ans.data.public_repos}</p>
            </div>
            <div>
              <h3>Followers</h3>
              <p>${ans.data.followers}</p>
            </div>
            <div>
              <h3>GitHub Stars</h3>
              <p>3</p>
            </div>
            <div>
              <h3>Following</h3>
              <p>${ans.data.following}</p>
            </div>
          </div>
        </body>
      </html>
      `;
  return answerHtml;
};

module.exports = {
  staticHtml: staticHtml,
  ansHtml: ansHtml
};
