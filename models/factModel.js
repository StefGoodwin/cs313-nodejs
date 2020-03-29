const { Pool } = require("pg");

const connectionString = process.env.DATABASE_URL || "postgres://stateuser:user1@localhost:5432/stateinfo";
const pool = new Pool({connectionString: connectionString});


function insertUser(id, callback) {
  console.log("Inserting User information.");

  console.log("Retrieving state with id: ", id);

  var sql = "INSERT fname, lname, email INTO users WHERE id = $1::int";
  var params = [id];

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
  insertUser: insertUser,
  insertFact: insertFact

};
