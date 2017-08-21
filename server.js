var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-two': {
        title: 'Article Two | Madhan',
        heading: 'Article Two',
        date: 'Jul 04, 2017',
        content: `
        <p>This is my content for Article Two This is my content for Article Two This is my content for Article Two This is my content for Article Two This is my content for Article Two This is my content for Article Two This is my content for Article Two This is my content for Article Two This is my content for Article Two This is my content for Article Two</p>
        
        <p>This is my content for Article Two This is my content for Article Two This is my content for Article Two This is my content for Article Two This is my content for Article Two This is my content for Article Two This is my content for Article Two This is my content for Article Two This is my content for Article Two This is my content for Article Two</p>
        
        <p>This is my content for Article Two This is my content for Article Two This is my content for Article Two This is my content for Article Two This is my content for Article Two This is my content for Article Two This is my content for Article Two This is my content for Article Two This is my content for Article Two This is my content for Article Two</p>
        
        <p>This is my content for Article Two This is my content for Article Two This is my content for Article Two This is my content for Article Two This is my content for Article Two This is my content for Article Two This is my content for Article Two This is my content for Article Two This is my content for Article Two This is my content for Article Two</p>`
    },
    'article-one': {
        title: 'Article One | Madhan',
        heading: 'Article One',
        date: 'Aug 21, 2017',
        content: `
        <p>This is my content for Article One This is my content for Article One This is my content for Article One This is my content for Article One This is my content for Article One This is my content for Article One This is my content for Article One This is my content for Article One This is my content for Article One This is my content for Article One</p>
        
        <p>This is my content for Article One This is my content for Article One This is my content for Article One This is my content for Article One This is my content for Article One This is my content for Article One This is my content for Article One This is my content for Article One This is my content for Article One This is my content for Article One</p>
        
        <p>This is my content for Article One This is my content for Article One This is my content for Article One This is my content for Article One This is my content for Article One This is my content for Article One This is my content for Article One This is my content for Article One This is my content for Article One This is my content for Article One</p>
        
        <p>This is my content for Article One This is my content for Article One This is my content for Article One This is my content for Article One This is my content for Article One This is my content for Article One This is my content for Article One This is my content for Article One This is my content for Article One This is my content for Article One</p>`
    },    
    'article-three': {
        title: 'Article Three | Madhan',
        heading: 'Article Three',
        date: 'May 13, 2017',
        content: `
        <p>This is my content for Article Three This is my content for Article Three This is my content for Article Three This is my content for Article Three This is my content for Article Three This is my content for Article Three This is my content for Article Three This is my content for Article Three This is my content for Article Three This is my content for Article Three</p>
        
        <p>This is my content for Article Three This is my content for Article Three This is my content for Article Three This is my content for Article Three This is my content for Article Three This is my content for Article Three This is my content for Article Three This is my content for Article Three This is my content for Article Three This is my content for Article Three</p>
        
        <p>This is my content for Article Three This is my content for Article Three This is my content for Article Three This is my content for Article Three This is my content for Article Three This is my content for Article Three This is my content for Article Three This is my content for Article Three This is my content for Article Three This is my content for Article Three</p>
        
        <p>This is my content for Article Three This is my content for Article Three This is my content for Article Three This is my content for Article Three This is my content for Article Three This is my content for Article Three This is my content for Article Three This is my content for Article Three This is my content for Article Three This is my content for Article Three</p>`
    }
};

function createTemplate(data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    
    var htmlTemplate = `
        <html>
            <head>
                <title>
                    ${title}
                </title>
                <meta name="viewport" content="width=device-width, initial-scale=1" /meta>
                <link href="/ui/style.css" rel"=stylesheet" />
            </head>
            </body>
                <div class="container">
                    <div>
                        <a href="/">Home</a>
                    </div>
                    <hr/>
                    <h3> ${heading} </hr>
                    <div> ${date} </div>
                    <div> ${content} </div>
                </div>
            </body>
        </html>
        `;
        
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/article-one', function(req, res){
    res.send(createTemplate(articles.article-one));
})

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
