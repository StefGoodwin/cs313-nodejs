const factModel = require("../models/factModel.js");


function insertData(req, res) {
  console.log("Controller fields: "  + req.body.fname, req.body.lname, req.body.email, req.body.funFact, req.body.state_id);
  factModel.insertDataDb(req.body.fname, req.body.lname, req.body.email, req.body.funFact, req.body.state_id, function(error, results) {
    if (error || results == null || results.length != 1) {
      res.status(500).json({success:false, data: error});
    } else {
      console.log("Back from the Db with result: ", results);
     
     req.session.returnId = results[0].returnId;

      res.status(200).json(results);

    }


  });


}

function getFacts(req, res){
  // TODO: check if book id or if topic id, and call the appropriate function...
  var state_id = req.query.state_id; // TODO: comes from the query

  factModel.getFactDb(state_id, function(error, results) {
    if (error || results == null) {
      res.status(500).json({success:false, data: error});
    } else {
      console.log("Back from the Db with result: ", results);
     // var data = results[0];
      res.status(200).json(results);

    }


  });

}

function deleteFact(req, res) {
  console.log(req.session);
  factModel.deleteFactDb(req.session.returnId, function(error, results) {
    if (error || results == null) {
      res.status(500).json({success:false, data: error});
    } else {
      console.log("Back from the Db with result: ", results);

      res.status(200).json(results);

    }


  });


}

module.exports = {
  insertData: insertData,
  getFacts:getFacts,
  deleteFact:deleteFact
};
