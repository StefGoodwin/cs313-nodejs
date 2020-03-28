const { Pool } = require("pg");

const connectionString = process.env.DATABASE_URL || "postgres://stateuser:user1@localhost:5432/stateinfo";
const pool = new Pool({connectionString: connectionString});


function getState(state_id, callback) {
  console.log("Getting state information.");

  console.log("Retrieving state with id: ", state_id);

  var sql = "SELECT state_name, capital, flower, population FROM states WHERE id = $1::int";
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

module.exports = {
  getState: getState
  
};
