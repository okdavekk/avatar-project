const fs = require('fs');

// const generateLicense = (type) => {
//     let color;
//     if (type === "MPL") color = "red";
//     if (type === "GPL") color = "grey";
//     if (type === "Apache") color = "green";
//     if (type === "MIT") color = "blue";
//     if (type === "CC") color = "orange";
//     if (type === "BSD") color = "goldenrod";

//need the space between the header if I was to use this in a readme generator
//     return (
//         `
//         <h3>License</h3>
        
//         <img src="https://img.shields.io/badge/license-${type}-${color}" alt="badge-${type}" height="44" />
//         `
//     );

// };


const generatePage = ({
    managerName,
    managerID,
    managerEmail,
    managerOfficeNumber,
}) => {
    console.log('GENERATING PAGE...');

    const template = (
        `
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Profile Generator</title>
            <!-- Minified version -->
            <link rel="stylesheet" href="https://cdn.simplecss.org/simple.min.css">
        </head>
        
        <header> Team Profile Generator</header>
        
        <body>
            <section>
                <h4>Manager</h2>
                <p>Name: ${managerName}</p>
                <p>Employee ID: ${managerID}</p>p>
                <p>Email Address:
                    <a href="mailto:${managerEmail}">${managerEmail}</a>
                </p>
                <p>Office Number: ${managerOfficeNumber}<p>
            </section>
        
        </body>
        
        </html>
`

    );

    fs.writeFileSync('./output/index.html', template)
    console.log('TEMPLATE GENERATED!')
    process.exit();
};


module.exports = {
    generatePage
};

