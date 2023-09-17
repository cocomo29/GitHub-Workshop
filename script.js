document.addEventListener("DOMContentLoaded", function () {
  const list = document.getElementById("list");
  let attendees = []; 

  fetch('https://raw.githubusercontent.com/cocomo29/GitHub-Workshop/main/attendees.JSON')
      .then(response => response.json()) 
      .then(data => {
          attendees = data.attendees; 
          displayAttendees(attendees); 
      })
      .catch(error => {
          console.error('Error fetching JSON file:', error);
      });

  function displayAttendees(attendees) {
      attendees.forEach((attendee, index) => {
          const listItem = document.createElement('div');
          listItem.classList.add('col-md-3', 'mt-3');

          const card = document.createElement('div');
          card.classList.add('card', 'text-center');

          const cardLink = document.createElement('a');
          cardLink.href = `https://github.com/${attendee.username}`;
          cardLink.target = '_blank'
          cardLink.classList.add('card-link'); 

          const cardHeader = document.createElement('div');
          cardHeader.classList.add('card-header');

          const cardNumber = document.createElement('small');
          cardNumber.textContent = `${index + 1}`;
          cardNumber.classList.add('card-number');

          const cardBody = document.createElement('div');
          cardBody.classList.add('card-body');

          const cardTitle = document.createElement('h5');
          cardTitle.classList.add('card-title');
          cardTitle.textContent = attendee.name;

          const universityName = document.createElement('small');
          universityName.textContent = attendee.university;
          universityName.classList.add('university-name')

          cardHeader.appendChild(cardNumber); 
          cardBody.appendChild(cardTitle);
          cardBody.appendChild(universityName);
          card.appendChild(cardHeader); 
          card.appendChild(cardBody);
          cardLink.appendChild(card);
          listItem.appendChild(cardLink); 
          list.appendChild(listItem);
      });
  }
});
