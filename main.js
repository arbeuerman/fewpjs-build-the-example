// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorDiv = document.getElementById('modal');
//get the heart element
const hearts = document.querySelectorAll('.like-glyph');
//add an event listener to it and run mimic server call 
hearts.forEach(heart => {
  heart.addEventListener('click', updateHeart);
})

function updateHeart(event)
{
  mimicServerCall()
  .then(() => changeHeartIcon(event.target))
  .catch(handleError);
}

function changeHeartIcon(heart)
{
  heart.innerText = heart.innerText == EMPTY_HEART ? FULL_HEART : EMPTY_HEART;
  heart.classList.toggle('activated-heart');
}

function handleError(error)
{
  const errorParagraph = document.getElementById('modal-message');
  errorParagraph.innerHTML = error;
  errorDiv.classList.remove('hidden');
  setTimeout(hideError, 3000);
  // hideError();
}

function hideError()
{
  errorDiv.classList.add('hidden');
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
