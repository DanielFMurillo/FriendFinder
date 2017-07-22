module.exports = function(app) {
var friendsData = require("../data/friends");
app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

app.post("/api/friends", function(req, res) {
      //friendsData.push(req.body);
      res.json(req.body);
      console.log("ajax post");
        var scoreCheck = []
        //sums the scores for each 'score' array
        for (i= 0; i < friendsData.length; i++){
            var sum = friendsData[i].scores.reduce(add, 0);
             function add(sum) {
               scoreCheck.push(sum);
            //return a + b;
        }
        } 
   });
};
