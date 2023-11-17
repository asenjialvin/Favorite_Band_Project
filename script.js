$(document).ready(function() {
    $("#feedbackForm").submit(function(event) {
      event.preventDefault();
  
      var formData = {
        name: $("#name").val(),
        email: $("#email").val(),
        subject: $("#subject").val(),
        message: $("#message").val()
      };
  
      $.ajax({
        url: "send_feedback.php",
        type: "POST",
        data: formData,
        dataType: "json",
        success: function(data) {
          if (data.status === "success") {
            $("#feedbackMessage").html("<p>Feedback sent successfully!</p>");
          } else {
            $("#feedbackMessage").html("<p>Error sending feedback: " + data.message + "</p>");
          }
        },
        error: function() {
          $("#feedbackMessage").html("<p>An error occurred while sending feedback.</p>");
        }
      });
    });
  });
  