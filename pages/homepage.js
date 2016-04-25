var ccommands = {

	verify: function(client, variablename, callback){

	client.execute("return dataLayer[0].visit.geoLocationCountryCode", function(t){ callback(t);})
}   
};


module.exports = {

	commands : [ccommands],

	url: function(parameters){
		return this.api.launch_url;
	},
	
	elements : {

	searchbutton: 'span[class="input-group-btn"] button[type="submit"]'
	}
};