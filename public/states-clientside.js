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
        result.append("<h3>" + "State Info: " + "</h3>" + "<li>" + "State: " + states.state_name + "</li>" + "<li>" + "Capital: " +
        states.capital + "</li>" + "<li>" + "Flower: " + states.flower + "</li>" + "<li>" +
        "Population: " + states.population + "</li>");



    }

  })

}

function insertData() {
  // console.log("Selecting fact...");
  //
 var fname = $("#fname").val();
 var lname = $("#lname").val();
 var email = $("#email").val();
 var funFact = $("#funFact").val();
 var state_id = $("#stateId").val();
   // console.log("User: " + user_id);

  $.post("/insertData", {fname:fname, lname:lname, email:email, funFact:funFact, state_id:state_id}, function(data) {
    console.log("Back from the server with:");
    console.log(data[0].success);


  })

  }

  function getFacts() {
    // console.log("Selecting fact...");
    //
     var state_id = $("#stateIdFact").val();
     // console.log("User: " + user_id);

    $.get("/getFact", {state_id:state_id}, function(data) {
      console.log("Back from the server with:");
      console.log(data);
      var result = $("#ulFacts");
      result.empty();

      for (var i = 0; i < data.length; i++) {
          var facts = data[i];

          result.append("<p>" + "<strong>" + "Fun Fact: " + "</strong>" + facts.facts + "<br>" + "Contributed by:  " + facts.email + "</p>");

        }

    })

    }

    function deleteLastFact() {


      $.post("/deleteFact", function(data) {
      alert(data[0].message);

      })

      }
