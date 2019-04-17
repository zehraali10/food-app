var publicConfig = {
  key: 'AIzaSyAEhjKYCKvP-XrYHx6bUqsAhvL8I0z_P-c',
  stagger_time:       1000, // for elevationPath
  encode_polylines:   false,
  secure:             true, // use https
  proxy:              'http://127.0.0.1:9999' // optional, set a proxy for HTTP requests
};
var gmAPI = new GoogleMapsAPI(publicConfig);
 
// or in case you are using Google Maps for Work
var enterpriseConfig = {
  google_client_id:   '<YOUR-CLIENT-ID>', // to use Google Maps for Work
  google_private_key: '<YOUR-PRIVATE-KEY>', // to use Google Maps for Work
  google_channel:     '<YOUR-CHANNEL>' ,// to use Google Maps for Work application usage tracking
  stagger_time:       1000, // for elevationPath
  encode_polylines:   false,
  secure:             true, // use https
  proxy:              'http://127.0.0.1:9999' // optional, set a proxy for HTTP requests
};
var gmAPI = new GoogleMapsAPI(enterpriseConfig);
 
// geocode API
var geocodeParams = {
  "address":    "121, Curtain Road, EC2A 3AD, London UK",
  "components": "components=country:GB",
  "bounds":     "55,-1|54,1",
  "language":   "en",
  "region":     "uk"
};
 
gmAPI.geocode(geocodeParams, function(err, result){
  console.log(result);
});
 
// reverse geocode API
var reverseGeocodeParams = {
  "latlng":        "51.1245,-0.0523",
  "result_type":   "postal_code",
  "language":      "en",
  "location_type": "APPROXIMATE"
};
 
gmAPI.reverseGeocode(reverseGeocodeParams, function(err, result){
  console.log(result);
});