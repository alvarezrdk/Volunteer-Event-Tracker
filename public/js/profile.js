const newEventHandler = async (event) => {
  event.preventDefault();
  console.log("submit");

  const name = document.querySelector('#event-name').value.trim();
  const description = document.querySelector('#event-desc').value.trim();
  const date_start = document.querySelector('#event-start-date').value.trim();
  const date_end = document.querySelector('#event-end-date').value.trim();
  const time_start = document.querySelector('#event-start-time').value.trim();
  const time_end = document.querySelector('#event-end-time').value.trim();
  const picture = document.querySelector('#event-img').value.trim();
  console.log(name, description, date_start, date_end, time_start, time_end, picture)


  if (name && description && date_start && date_end && time_start && time_end && picture) {
    const response = await fetch(`/api/events`, {
      method: 'POST',
      body: JSON.stringify({ name, description, date_start, date_end, time_start, time_end, picture }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response);
    if (response.ok) {
      document.location.replace('/events');
    } else {
      alert('Failed to create event');
    }
  }
};

const delButtonHandler = async (event) => {
  console.log("delete")
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/events/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/events');
    } else {
      alert('Failed to delete event');
    }
  }
};

document
  .querySelector('.event-submit-btn')
  .addEventListener('click', newEventHandler);

document
  .querySelector('.event-remove-btn')
  .addEventListener('click', delButtonHandler);
