function setup() {
    noCanvas();
    const video = createCapture(VIDEO);
    video.size(160, 120);
   
    const button = document.getElementById('submit');
    button.addEventListener('click', async event => {
      
      // Generate a random 4-digit number for the registration
      const randomRegistrationNumber = Math.floor(1000 + Math.random() * 9000);
  
      // Get the current year
      const currentYear = new Date().getFullYear();
  
      // Create the registration number with the specified format
      const regNumber = `BIRIA/${randomRegistrationNumber}/${currentYear}`;
  
      const name = document.getElementById('name').value;
      const year = document.getElementById('class').value;
      const address = document.getElementById('address').value;
      const section = document.getElementById('SECTION').value;
      const dob = document.getElementById('dob').value;
      const state = document.getElementById('state').value;
      const nextOfKin = document.getElementById('nextOfKin').value;
      const fatherPhone = document.getElementById('fatherPhone').value;
      const motherPhone= document.getElementById('motherPhone').value;
      const entryDate = document.getElementById('entryDate').value;
      const exitDate = document.getElementById('exitDate').value;
    
      video.loadPixels();
      const image64 = video.canvas.toDataURL();
      const data = { regNumber, name, year, address, section ,dob, state, nextOfKin, fatherPhone, motherPhone, entryDate, exitDate, image64 };
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      };
      const response = await fetch('/api', options);
      const json = await response.json();
      console.log(json);
    });
  
    
   // Assuming 'response' is the JSON response from the server
if (response.success) {
    // Trigger SMS confirmation for both father and mother
    sendSmsConfirmation(response.data.fatherPhone);  // Call a function to send SMS confirmation to father
    sendSmsConfirmation(response.data.motherPhone);  // Call a function to send SMS confirmation to mother
  }
  
  }
  