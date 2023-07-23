const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/member/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const first_name = document.querySelector('#first-name-signup').value.trim();
  const last_name = document.querySelector('#last-name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const phone_number = document.querySelector('#phone-number-signup').value.trim();
  const location = document.querySelector('#location-signup').value.trim();
  const about_me = document.querySelector('#about-me-signup').value.trim();
  const birthday = document.querySelector('#birthday-signup').value.trim();
  const profile_picture = document.querySelector('#image-input-signup').value.trim();


  if (first_name && last_name && email && password && phone_number && location && about_me && birthday && profile_picture) {
    const response = await fetch('/api/member/register', {
      method: 'POST',
      body: JSON.stringify({ first_name, last_Name, email, password, phone_number, location, about_me, birthday, profile_picture }),
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
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
