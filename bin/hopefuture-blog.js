var debug = require('debug')('hopefuture-blog');
var app = require('../app');

app.set('port', process.env.PORT || 9005);

var server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
});
