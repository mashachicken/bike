import './styles.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import DinoService from "./dinointerface.js";
$(document).ready(function() {
  $('#submit').click(function() {
    const paras = $("#paras").val();
    const words = $("#words").val();

    (async () => {
      let dinoService = new DinoService();
      const response = await dinoService.getDinos(paras, words);
      getElements(response);
    })();

    const getElements = function(response) {
      console.log(response);
      $("#paragraphs").html("");
      response.forEach(function(paragraph) {
        $("#paragraphs").append("<p>"+paragraph.join(" ")+"</p>");
      });
    };
  });
});
