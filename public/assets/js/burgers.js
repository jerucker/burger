$(document).ready(function() {

  // Add Burger 
  $("#addBurger").on("click", function(){
    console.log("Burger Added");

    
    let burger = {
      "burger_name": $(burgerName).val(),
      "devoured": $(burgerName).data("eaten")
    };

    $.post("/api/burger", burger).done((response)=>{
      console.log("New Burger Created");
     
      location.reload();
    });

  }); 

  // Update Burger Database 

  $(".burgerBlock").on("click", function(){
    console.log("Button Clicked");

    const burgerID = $(this).data("id");
    const devoured = $(this).data("eaten");

    const burgerUpdate = {
      "devoured": devoured
    };

    console.log("button id is " + burgerID);

    $.ajax("/api/burger/" + burgerID, {
      type: "PUT",
      data: burgerUpdate
    }).done((response)=>{
      console.log("Burger Updated");
      location.reload();
    });

  }); // End of Devour it Button

});
