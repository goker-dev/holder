var config = require('./libs/config')
    , express = require('express')
    , app = express()
    , path = require('path')
    , swig = require('swig');

app.set('views', path.join(__dirname, 'views'));
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('view cache', false);
swig.setDefaults({
    autoescape: false,
    cache: false // memory
});

app.use(express.static(path.join(__dirname, 'static')));

app.use('/:styles(*.svg)', function (req, res) {

    res.setHeader('Content-Type', 'image/svg+xml');
    //res.setHeader('Cache-control', 'max-age=31536000, public');

    var styles = req.params.styles.split('.', 2)[0].split(',', 6);
    styles[1] = styles[1] || styles[0];
    styles[1] = styles[1].split('|');
    styles[0] = styles[0].split('x', 2);
    console.log(req.params, styles);

    var svg = '<svg version="1.1" baseProfile="full" width="' + styles[0][0] + '" height="' + styles[0][1] + '" xmlns="http://www.w3.org/2000/svg">'
        + '<rect width="100%" height="100%" fill="#' + (styles[2] || 'ddd') + '" />'
        + '<text x="50%" y="50%" font-size="' + (styles[4] || 24) + '"'
        + ' font-family="' + (styles[5] || 'Helvetica') + '"'
        + ' text-anchor="middle" alignment-baseline="middle" fill="#' + (styles[3] || 333 ) + '">'
        + (styles[1][1] ? ' <tspan x="50%">' + styles[1][0] + '</tspan><tspan x="50%" dy="' + (styles[4] || 24) + '">'
        + styles[1][1] + '</tspan>' : styles[1][0])
        + '</text>'
        + '</svg>';

    return res.send(svg);
});

app.use('/', function (req, res) {
    return res.render('index');
});

app.set('port', config.get('port') || 8080);
app.listen(app.get('port'), function () {
    console.log('Listening on port %d', this.address().port);
});

