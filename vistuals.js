document.addEventListener('DOMContentLoaded', function () {
  var textContainer = document.getElementById('main-content');
  var textContent = textContainer.textContent.trim();

  var halfwayIndex = Math.floor(textContent.length / 2);
  var firstHalf = textContent.slice(0, halfwayIndex + (length % 2));
  var secondHalf = textContent.slice(halfwayIndex + (length % 2));

  textContainer.innerHTML = '';

//   for (var i = 0; i < firstHalf.length; i++) {
//     var spanFirstHalf = document.createElement('span');
//     spanFirstHalf.textContent = firstHalf[i];
//     spanFirstHalf.classList.add('first-half');
//     textContainer.appendChild(spanFirstHalf);
//   }

//   for (var i = 0; i < secondHalf.length; i++) {
//     var spanSecondHalf = document.createElement('span');
//     spanSecondHalf.textContent = secondHalf[i] || ''; // Handle case where second half is shorter
//     spanSecondHalf.classList.add('second-half');
//     textContainer.appendChild(spanSecondHalf);
// }

  var spanFirstHalf = document.createElement('span');
  spanFirstHalf.textContent = firstHalf ;
  spanFirstHalf.classList.add('first-half');
  textContainer.appendChild(spanFirstHalf);

  var spanSecondHalf = document.createElement('span');
  spanSecondHalf.textContent = secondHalf ;
  spanSecondHalf.classList.add('second-half');
  textContainer.appendChild(spanSecondHalf);
});

