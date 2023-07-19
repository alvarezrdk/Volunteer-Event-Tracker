const signupButtonHandler = async (event) => {
  event.preventDefault();

  const eventId = event.target.id;
  
  if (eventId) {
    const response = await fetch('/api/signup', {
      method: 'POST',
      body: JSON.stringify({ eventId }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/events/3');
    } else {
      alert(response.statusText);
    }
  }
};


document
  .querySelector('.upcoming-Events')
  .addEventListener('submit', signupButtonHandler);
