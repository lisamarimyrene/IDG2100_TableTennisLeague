const fs = require("fs");

const envFilePath = ".env";

// Check if the .env file exists
if (!fs.existsSync(envFilePath)) {
  // Create the .env file and set its content
  const envContent = `PORT=5005
DB_URI="mongodb+srv://lisamarimyrene:cutecloud@cluster0.mub535i.mongodb.net/TableTennisLeague"
JWT_SECRET="auth-secret-key"
REFRESH_TOKEN_SECRET="refresh-secret-key"`;
  // Create file and add the content
  fs.writeFileSync(envFilePath, envContent);
}

// Run npm install
const { execSync } = require("child_process");
execSync("npm install", { stdio: "inherit" });

// Run the server script and display in console
execSync("npm run server", { stdio: "inherit" });
