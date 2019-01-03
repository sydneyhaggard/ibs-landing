console.log('main.js is running');

let submitBtn = document.getElementById('submit');
let guests = document.getElementById('guests');
let max = document.getElementById('guests').max;
let error = document.getElementById('guestsError');
let theForm = document.getElementById('theForm');
let rsvp = document.getElementById('rsvpClick');

let onSubmitClick = function(){
    submitBtn.addEventListener('click', function(e){
        if(guests.value > max){
            e.preventDefault();
            error.innerHTML = 'Please enter a number between 0 and '  + max + '.';
        } else {
            theForm.innerHTML = 'Thank you.  Your RSVP has been submitted.';
        }
    });
}

let scrollToForm = function(){
    rsvp.addEventListener('click', function(e){
        document.getElementById('formInput').scrollIntoView({ 
            behavior: 'smooth' 
          });
    });
}

 document.addEventListener("DOMContentLoaded", function(event) {
    onSubmitClick();
    scrollToForm();
});