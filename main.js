const fs = require('fs');
const csv = require('csv-parser');

const FILENAMES = [
    "localisation",
    "localisedDialogue",
    "localisedIntel",
    "localisedSynopsis"
];

const readCSV = (path) => {
    return new Promise((resolve) => {
        const results = [];

        fs.createReadStream(path)
            .pipe(csv())
            .on('data', (data) => results.push(data))
            .on('end', () => {
                resolve(results);
            })
    });
};

const findUpdates = async () => {
    for (const filename of FILENAMES) {
        const oldData = await readCSV(`${filename}.txt`);
        const newData = await readCSV(`new/${filename}.txt`);
        
        for (const newDataEl of newData) {
            const newKey = newDataEl['id'];
            if (!oldData.find(el => el['id'] === newKey)) console.log(`[${filename}]: ${newKey}`);
        }
    }
};

findUpdates();
