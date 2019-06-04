$(function() {
  $(".create-form").on("submit", function(event) {
    event.preventDefault();
    let burgerName = $("#burger-name")
      .val()
      .trim();
    console.log(burgerName);
    if (burgerName === "") {
      return;
    }
    $.ajax("/", {
      type: "POST",
      data: { burger: burgerName }
    }).then(function() {
      location.reload();
    });
  });

  $(".eat-burger").on("click", function(event) {
    event.preventDefault();
    let burgerID = $(this)
      .val()
      .trim();

    $.ajax("/", {
      type: "PUT",
      data: { burger: burgerID }
    }).then(function() {
      location.reload();
    });
  });
});
