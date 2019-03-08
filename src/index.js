const XMLParser = require('xmldoc');

const xml = module.exports = {
	getVal: function(parent, key, formatter, defaultVal){
		if(typeof formatter !== 'function'){
			defaultVal = formatter;
			formatter = undefined;
		}

		key = parent.childNamed(key);

		if(!key) return defaultVal;

		key = key.val;

		return formatter ? formatter(key) : key;
	},
	format: {
		parseBool: function(x){
			x = String(x).toLowerCase();

			return x === 'true' || x === '1';
		},
		toLowerCase: function(string){
			return string.toLowerCase();
		},
	},
	parse: function(xmlData){
		return new XMLParser.XmlDocument(xmlData);
	}
};