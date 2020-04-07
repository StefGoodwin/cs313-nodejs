const { Pool } = require("pg");

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({connectionString: connectionString});


function insertDataDb(fname, lname, email, funFact, state_id, callback) {
  console.log("Inserting User information.");

  console.log("Retrieving data: ", fname, lname, email, funFact, state_id);

  var sql = "INSERT INTO users (first_name, last_name, email) VALUES ($1, $2, $3) RETURNING id";
   var params = [fname, lname, email];

  pool.query(sql, params, function(err, result) {
    if (err){
      console.log("An error with the DB occurred");
      console.log(err);
      callback(err, null);
     }
     console.log(result.rows);
     var returnId = result.rows[0].id;
     var sql2 = "INSERT INTO fun_facts (user_id, state_id, facts) VALUES ($1, $2, $3)";
     var params2 = [returnId, state_id, funFact];
     pool.query(sql2, params2, function(err, result) {
       if (err){
         console.log("An error with the DB occurred");
         console.log(err);
         callback(err, null);
        }
        console.log("Found DB result: " + JSON.stringify(result.rows));

        callback(null, [{success:true, returnId:returnId}]);
     });

  });

}


function getFactDb(state_id, callback) {
  console.log("Getting facts from db.");

  console.log("Retrieving facts with stateid: ", state_id);

  var sql = "SELECT users.email, fun_facts.facts FROM fun_facts INNER JOIN users ON users.id = fun_facts.user_id WHERE fun_facts.state_id = $1::int";
  var params = [state_id];

  pool.query(sql, params, function(err, result) {
    if (err){
      console.log("An error with the DB occurred");
      console.log(err);
      callback(err, null);
     }
     console.log("Found DB result: " + JSON.stringify(result.rows));

     callback(null, result.rows);
  });
}

function deleteFactDb(returnId, callback) {

  var sql = "DELETE FROM fun_facts WHERE user_id = $1";
   var params = [returnId];

  pool.query(sql, params, function(err, result) {
    if (err){
      console.log("An error with the DB occurred");
      console.log(err);
      callback(err, null);
     }
     else if (result.rowCount == 0) {
      var message = "No last fact";
      callback(null, [{message:message}]);
    }
    else {
      var message = "Last fact deleted";
      console.log(result);
      callback(null, [{message:message}]);
    }
     });

  }


module.exports = {
  insertDataDb: insertDataDb,
  getFactDb: getFactDb,
  deleteFactDb:deleteFactDb
};
