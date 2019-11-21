import './styles.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import BikeIndex from "./dinointerface.js";
$(document).ready(function() {
  $('#submit').click(function() {
    const city = $("#city").val();

    (async () => {
      let bikeIndex = new BikeIndex();
      const response = await bikeIndex.getBike(city);
      getElements(response);
    })();

    const getElements = function(response) {
      $("#bikes").html("");
      response.bikes.forEach(function(bike) {
        $("#bikes").append("<li class='list-group-item'>");
        $("#bikes").append("<ul class='list-group'>");
        $("#bikes").append("<li class='list-group-item'>ID:  "+bike.id+ "  Serial Number: " + bike.serial +"</li>");
        if (bike.description == null) {
          $("#bikes").append("<li class='list-group-item'>No Description On File</li>");
        } else {
          $("#bikes").append("<li class='list-group-item'>Description:  "+bike.description+"</li>");
        }
        $("#bikes").append("<li class='list-group-item'>Model: "+bike.title+"</li>");
        $("#bikes").append("</ul>");
        $("#bikes").append("</li>");
      });
    };
  });
});
