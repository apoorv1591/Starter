module.exports = {
  '@tags': ['run'],
'Tests 1' : function (browser) {
    browser
      .windowMaximize()
      .url('http://www.google.com')
       .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', 'nightwatch')
      .waitForElementVisible('button[name=btnG]', 1000)
      .click('button[name=btnG]')
      .pause(1000)
      .assert.containsText('#main', 'Night Watch')
      .end();

    },

    '@tags': ['second'],

    'Test 2' : function (browser) {
      browser
      .windowMaximize()
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', 'nightwatch')
      .waitForElementVisible('button[name=btnG]', 1000)
      .click('button[name=btnG]')
      .pause(1000)
      .assert.containsText('#main', 'Night Watch')
      .end();
  },


  'Test 3' :  function(client) {
    
    client.windowMaximize()
   client.page.homepage().navigate();
    client.page.homepage().click('@searchbutton');
    client.end();
  }
};