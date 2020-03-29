const stateModel = require("../models/stateModel.js");

function stateSelect(req, res){
  // TODO: check if book id or if topic id, and call the appropriate function...
  var state_id = req.query.state_id; // TODO: comes from the query

  stateModel.getState(state_id, function(error, results) {
    if (error || results == null || results.length != 1) {
      res.status(500).json({success:false, data: error});
    } else {
      console.log("Back from the Db with result: ", results);
     // var data = results[0];
      res.status(200).json(results);

    }


  });

function getFact(req, res) {


}

module.exports = {
  stateSelect: stateSelect,
//  getState: getState,
 // getStateList: getStateList

}
