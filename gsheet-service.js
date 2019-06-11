const GoogleSpreadsheet = require('google-spreadsheet');
const { promisify } = require('util');

const creds = require('./credentials.json');

async function accessSpreadsheet(row) {
  try {
  
    const doc = new GoogleSpreadsheet('1twbezR_e-tmE8E6_zg5C2eZYjLepK4ntyiDuZ4bX-5k');
    await promisify(doc.useServiceAccountAuth)(creds);
    const info = await promisify(doc.getInfo)();
    const sheet = info.worksheets[0];
    await promisify(sheet.addRow)(row);

  } catch(err) {
    console.log('Something went wrong! Please try again later.');
  }
}

function EnterUser(name, phone, email) {
  const row = {
    Phone: phone,
    Name: name,
    Email: email
  }

  accessSpreadsheet(row);
}


function acceptUserDetails() {
  alert("Jai Gurudev!");

  name = document.getElementById("username"); console.log(name);
  phone = document.getElementById("phonenumber"); console.log(phone);
  email = document.getElementById("email"); console.log(email);

  EnterUser(name, phone, email);
}
