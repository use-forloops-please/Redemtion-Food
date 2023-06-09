$(function() {
    $(".slider-link").on("click", function(e) {
      e.preventDefault();
      $(".slider-container").slideToggle();
    });
  
    $("#price-slider").slider({
      range: true,
      min: 10,
      max: 1000,
      values: [10, 1000],
      slide: function(event, ui) {
        $("#price-range").text("$" + ui.values[0] + " - $" + ui.values[1]);
      }
    });
  });
  $(function() {
    $("#contact-form").on("submit", function(e) {
      e.preventDefault();
      
      // Get form values
      var name = $("#name").val();
      var email = $("#email").val();
      var message = $("#message").val();
      
      // Create an object with the form data
      var formData = {
        name: name,
        email: email,
        message: message
      };
      
      // Simulate sending the form data to the server
      // Replace this with your actual form submission logic
      setTimeout(function() {
        alert("Form submitted successfully!\n\nName: " + formData.name + "\nEmail: " + formData.email + "\nMessage: " + formData.message);
        // Reset the form
        $("#contact-form")[0].reset();
      }, 1000);
    });
  });
  $(function() {
    var loggedInUser = null;
  
    $("#login-btn").on("click", function(e) {
      e.preventDefault();
      $(".login-page").toggleClass("show-login");
    });
  
    $("#signup-btn").on("click", function(e) {
      e.preventDefault();
      window.location.href = "signup.html";
    });
  
    $("#login-form").on("submit", function(e) {
      e.preventDefault();
  
      // Get form values
      var username = $("#username").val();
      var password = $("#password").val();
  
      // Perform login validation
      // Replace this with your actual login logic
      if (username === "Luke" && password === "1234") {
        // Set the logged-in user
        loggedInUser = username;
  
        // Reset the form
        $("#login-form")[0].reset();
        $(".login-page").removeClass("show-login");
  
        // Update the navigation bar with the logged-in user
        updateNavigationBar();
  
        // Redirect to the index (home) page
        window.location.href = "index.html";
      } else {
        alert("Invalid username or password. Please try again.");
      }
    });
  
    function updateNavigationBar() {
      var navItems = $("nav ul li");
      var loginBtn = $("#login-btn");
  
      if (loggedInUser) {
        // Display the logged-in user's name in the navigation bar
        var userNavItem = $("<li>").text(loggedInUser);
        navItems.last().before(userNavItem);
  
        // Remove the login button
        loginBtn.remove();
      } else {
        // Remove the user's name from the navigation bar
        navItems.last().prev().remove();
  
        // Add the login button
        navItems.last().before(loginBtn);
      }
    }
  });
  $(function() {
    $(window).on("scroll", function() {
      var scrollTop = $(window).scrollTop();
      var bannerText = $(".banner-text");
  
      if (scrollTop > 100) {
        bannerText.addClass("fade-out");
      } else {
        bannerText.removeClass("fade-out");
      }
    });
  });
  
  
  

 
  
    