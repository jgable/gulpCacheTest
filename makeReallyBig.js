var _ = require('lodash'),
	fs = require('fs');

var content = _.range(0, 20000).map(function (num) {
	return "function testFunction" + num + "(blah) {\n" +
	"  blah = blah + 42;\n" +
	"  return blah;\n" +
	"}\n\n";
}).join('');

fs.writeFileSync('js/really-big.js', content);