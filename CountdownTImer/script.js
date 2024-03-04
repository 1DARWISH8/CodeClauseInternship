document.getElementById('countdownForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get the selected date and time from the form
    const selectedDate = document.getElementById('date').value;
    const selectedTime = document.getElementById('time').value;
    const selectedDateTime = new Date(selectedDate + 'T' + selectedTime).getTime();
    
    // Update the countdown every second
    const timer = setInterval(function() {
      // Get the current date and time
    const now = new Date().getTime();
    
      // Calculate the time remaining
    const remainingTime = selectedDateTime - now;
    
      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
      const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
    
      // Display the countdown timer
    document.getElementById('days').innerHTML = formatTime(days);
    document.getElementById('hours').innerHTML = formatTime(hours);
    document.getElementById('minutes').innerHTML = formatTime(minutes);
    document.getElementById('seconds').innerHTML = formatTime(seconds);
    
    //  // Show the countdown timer
    // document.getElementById('timer').style.display = 'block';
    
      // If the countdown is finished, display a message
      if (remainingTime < 0) {
        clearInterval(timer);
        alert('THE COUNTDOWN IS COMPLETE, A NEW COUNTDOWN CAN BE STARTED AFTER 5 SECONDS')
        document.getElementById('timer').innerHTML = `THE COUNTDOWN IS COMPLETE`;

        setTimeout(()=>
        {
          location.reload();
        },5000);
      }
    }, 1000);
  });
  
  // Add leading zeros to single digit numbers
  function formatTime(time) {
    return time < 10 ? '0' + time : time;
  }
