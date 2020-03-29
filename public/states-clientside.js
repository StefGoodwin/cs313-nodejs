function stateSelect() {
  console.log("Selecting state...");

  var state_id = $("#state_id").val();
  console.log("State: " + state_id);

  $.get("/getState", {state_id:state_id}, function(data) {
    console.log("Back from the server with:");
    console.log(data);

    for (var i = 0; i < data.length; i++) {
        var states = data[i];
        var result = $("#ulStates");
        result.empty();
        result.append("<h3>" + "State Info:" + "</h3>" + "<li>" + "State: " + states.state_name + "</li>" + "<li>" + "Capital: " +
        states.capital + "</li>" + "<li>" + "Flower: " + states.flower + "</li>" + "<li>" +
        "Population: " + states.population + "</li>");



    }

  })

}
