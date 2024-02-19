async function sendEmail() {
  const serviceId = 'service_jl3i09j';
  const userId = 'm00UcJygD_2fN40CM'; // Make sure to use the correct API public key
  const templateParticular = 'template_ktoi11s';
  const emailForFormData = 'menumivucu33@gmail.com';

  const url = 'https://api.emailjs.com/api/v1.0/email/send';

  const requestData = {
      service_id: serviceId,
      template_id: templateParticular,
      user_id: userId,
      template_params: {
          namesurname: document.getElementById('name').value,
          email: document.getElementById('email').value,
          subject: document.getElementById('subject').value,
          message: document.getElementById('message').value,
          emailForFormData: emailForFormData
      },
  };

  try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
      });
    
      console.log('Response from server:', response);
      console.log(requestData);
    
      if (response.ok) {
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('text/plain')) {
          // Handle plain text response
          const responseData = await response.text();
          console.log('Plain text response:', responseData);
        } else {
          // Handle other types of responses
          const responseData = await response.json();
          console.log('JSON response:', responseData);
        }
      } else {
        // Handle error response
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('There was a problem with the request:', error);
    }
}
