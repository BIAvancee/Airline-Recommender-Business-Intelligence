var express = require('express');
var router = express.Router();
const neo4j_calls = require('./../neo4j_calls/calls');
const spawn= require('child_process').spawn;


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/neo4j_get', async function (req, res, next) {
  let result = await neo4j_calls.get_num_nodes();
  console.log("RESULT IS", result)
  res.status(200).send({ result })    //Can't send just a Number; encapsulate with {} or convert to String.     
  return { result };
})

router.get('/py', async function (req, res, next) {
var dataToSend;
// spawn new child process to call the python script
const python = spawn('python', ['hh.py']);
// collect data from script
python.stdout.on('data', function (data) {
 console.log('Pipe data from python script ...');
 dataToSend = data.toString();
});
// in close event we are sure that stream from child process is closed
python.on('close', (code) => {
console.log(`child process close all stdio with code ${code}`);
// send data to browser
//res.send(dataToSend)
res.status(200).send({ dataToSend })    //Can't send just a Number; encapsulate with {} or convert to String.     
  return { dataToSend };
});
})
module.exports = router;
