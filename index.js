var LaunchDarkly = require('ldclient-node');
ldclient = LaunchDarkly.init('sdk-74e9cd2f-1966-45fe-bb4b-139df9b0f9ed');

ldclient.once('ready', function () {
  ldclient.variation('add-tax-to-prices', { key: 'jamil.lawrence@gmail.com' }, false, function (err, showFeature) {
    if (err) {
      console.log('err', err);
    } else {

      if (showFeature) {
        // application code to show the feature
        console.log('On!');
      } else {
        // the code to run if the feature is off
        console.log('Off!');
      }
    }
  });
});
