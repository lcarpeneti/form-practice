
$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var firstNameInput = $("input#first-name").val();
    var lastNameInput = $("input#last-name").val();
    var dateInput = $("input#date").val();
    var timeInput = $("input#time").val();
    var addressLine1Input = $("input#address-line-1").val();
    var addressLine2Input = $("input#address-line-2").val();
    var cityInput = $("input#city").val();
    var stateInput = $("input#state").val();
    var zipInput = $("input#zip").val();

    $(".first-name").text(firstNameInput);
    $(".last-name").text(lastNameInput);
    $(".date").text(dateInput);
    $(".time").text(timeInput);
    $(".address-line-1").text(addressLine1Input);
    $(".address-line-2").text(addressLine2Input);
    $(".city").text(cityInput);
    $(".state").text(stateInput);
    $(".zip").text(zipInput);

    $("#confirmation").show();

    event.preventDefault();
  });
});
