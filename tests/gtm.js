module.exports = {
	
	'GTM 1': function(client){

	client.url(client.launch_url + '/subscribe');

	client.page.homepage().verify(client, 'visit.geooLocationCounryCode', function(value){ console.log(value) })

	
	client.end();

	

	}
};




