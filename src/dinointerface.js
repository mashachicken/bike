export default class BikeIndex {
  async getBike(city) {
    try {
      let response = await fetch('http://bikeindex.org/api/v3/search/?stolenness=proximity&location='+city);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      $("#bikes").html("there was an error with your request:" + error.message);
      return false;
    }
  }
}
