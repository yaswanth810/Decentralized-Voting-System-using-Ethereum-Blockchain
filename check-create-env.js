// check-create-env.js
const fs = require('fs');
const path = require('path');

const envPath = path.join(__dirname, 'Database_API', '.env');
const envExamplePath = path.join(__dirname, 'Database_API', '.env.example');

const template = `MYSQL_USER="root"
MYSQL_PASSWORD="your_password"
MYSQL_HOST="localhost"
MYSQL_DB="voter_db"
SECRET_KEY="your_secret_key"
`;

if (!fs.existsSync(envPath)) {
  if (!fs.existsSync(envExamplePath)) {
    fs.writeFileSync(envExamplePath, template);
    console.log('.env.example created in Database_API. Please copy to .env and fill in your values.');
  } else {
    console.log('.env.example already exists.');
  }
} else {
  console.log('.env already exists.');
}
