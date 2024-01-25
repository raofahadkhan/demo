const fs = require('fs');
const process = require('process');

// Function to select the correct environment variable
function setCorrectEnvVariable() {
    let envPrefix;

    switch (process.env.VERCEL_GIT_COMMIT_REF) {
        case 'main':
            envPrefix = 'MAIN_';
            break;
        case 'test':
            envPrefix = 'TEST_';
            break;
        default:
            envPrefix = 'DEV_';
    }

    const correctValue = process.env[`${envPrefix}NEXT_PUBLIC_DEMO`];
    process.env['NEXT_PUBLIC_DEMO'] = correctValue;

    // Write to .env.local file
    fs.writeFileSync('.env.local', `NEXT_PUBLIC_DEMO=${correctValue}\n`);
}

setCorrectEnvVariable();
