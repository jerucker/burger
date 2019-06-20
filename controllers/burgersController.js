const express = require("express");
const router = express.Router(); 


const burger = require("../models/burgerModel.js");



// Roiutes
router.get("/", function(req, res) {
    
    burger.selectAll((data) => {
      handlebarsObject = {
        burger: data
      };
      console.log("Diplayed Burgers");
      res.render("index", handlebarsObject);
    });

});
// Post Routes

router.post("/api/burger", function(req, res) {
  console.log("Succesfully Route");
  burger.insertOne(["burger_name","devoured"], [req.body["burger_name"], req.body.devoured], (result)=>{
   
    console.log(result);
    res.json(result);
  });
});

router.put("/api/burger/:id", function(req, res) {

  let burgerID = req.params.id
  let condition = "id = " + burgerID ;

  console.log("burger Route Hit. ID is "+ burgerID);
  console.log("Dev is " + req.body.devoured);

  burger.updateOne(["devoured"], [req.body.devoured], condition, (result)=>{
    
    
    res.json(result);
  });
});








// Export routes for server.js to use.
module.exports = router;








/////////////////////////////////////////////// /* */ //////////////////////////////////////////////////////////
