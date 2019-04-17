var googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyAEhjKYCKvP-XrYHx6bUqsAhvL8I0z_P-c'
});
googleMapsClient.geocode({
  address: '1600 Amphitheatre Parkway, Mountain View, CA'
}, function(err, response) {
  if (!err) {
    console.log(response.json.results);
  }
});