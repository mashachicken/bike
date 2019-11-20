export default class BikeIndex {
  async getBike(paras, words) {
    try {
      let response = await fetch(`bikeindex.org/api/v3/search/?format=json&stolenness=proximity&location =Portland, OR`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      console.error("there was an error with your request:" + error.message);
      return false;
    }
  }
}
