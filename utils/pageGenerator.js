const fs = require('fs');

const generateLicense = (type) => {
    let color;
    if (type === "MPL") color = "red";
    if (type === "GPL") color = "grey";
    if (type === "Apache") color = "grenn";
    if (type === "MIT") color = "blue";
    if (type === "CC") color = "orange";
    if (type === "BSD") color = "goldenrod";


    return (
        `
        <h3>License</h3>
        <img src="https://img.shields.io/badge/license-${type}-${color}" alt="badge-${type}" />
        `
    );

};


const generatePage = ({
    name,
    location,
    bio,
    linkedIn,
    gitHub,
    license
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
    <title>Document</title>
    <!-- Minified version -->
    <link rel="stylesheet" href="https://cdn.simplecss.org/simple.min.css">
</head>

<body>
    <h1>Avatar Generator</h1>
    <h2>${name}</h2>
    <img src='https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortFlat&accessoriesType=Prescription02&hairColor=Black&facialHairType=BeardLight&facialHairColor=Black&clotheType=ShirtCrewNeck&clotheColor=PastelRed&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light'
        alt="avatar" />
    <h3>${location}</h3>
    <p>${bio}</p>
    <a href="#${linkedIn}">Linkedin</a>
    <a href="#${gitHub}">Github</a>
    ${generateLicense(license)}
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

