const signupButtonHandler = async (event) => {
  event.preventDefault();

  const eventId = document.querySelector('#id').value.trim();
  console.log(eventId);
  const memberId = req.session.memberID;
  console.log(memberId);
  if (eventId) {
    const response = await fetch('/api/signup', {
      method: 'POST',
      body: JSON.stringify({ eventId, memberId }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};


document
  .querySelector('.event-details')
  .addEventListener('submit', signupButtonHandler);
