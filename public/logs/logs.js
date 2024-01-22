getData();

async function getData() {
  const response = await fetch('/api');
  const data = await response.json();

  for (item of data) {
    const image = document.createElement('img');
    const root = document.createElement('div');
    const regNumber = document.createElement('p').value;
    const name = document.createElement('p').value;
    const year = document.createElement('p').value;
    const address = document.createElement('p').value;
    const dob = document.createElement('p').value;
    const state = document.createElement('p').value;
    const nextOfKin = document.createElement('p').value;
    const fatherPhone = document.createElement('p').value;
    const motherPhone= document.createElement('p').value;
    const entryDate = document.createElement('p').value;
    const exitDate = document.createElement('p').value;;
    const date = document.createElement('p');
    

    regNumber.textContent = `regNumber: ${item.regNumber}`;
    name.textContent = `name: ${item.name}`;
    year.textContent = `year: ${item.year}`;
    address.textContent = `address: ${item.address}`;
   dob.textContent = `dob: ${item.dob}`;
   state.textContent = `state: ${item.state}`;
    nextOfKin.textContent = `nextOFkin: ${item.nextOfKin}`;
   fatherPhone.textContent = `fatherPhone: ${item.fatherPhone}`;
    motherPhone.textContent = `motherphone: ${item.motherPhone}`;
    entryDate.textContent = `entryDate: ${item.entryDate}`;
   exitDate.textContent = `exitDate: ${item.exitDate}`;
    

    
    const dateString = new Date(item.timestamp).toLocaleString();
    date.textContent = dateString;
    image.src = item.image64;
    
root.innerHTML = `
      .note {
        background-color: yellow;
        color:red;
      }
    `;
document.head.appendChild(root);

    root.append( image, regNumber, name, year, address, dob, state, nextOfKin, fatherPhone, motherPhone, entryDate, exitDate, date );
    document.body.append(root);
  }
  console.log(data);
}
