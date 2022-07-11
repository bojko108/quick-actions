const { app } = require('electron');
const fs = require('fs');
const path = require('path');

/**
 * @type {Array<MenuItem>}
 */
const defaultItems = [{
    "beginGroup": true
}, {
    title: 'Exit',
    icon: 'quit',
    action: 'exit',
}];

/**
 * @returns {Array<MenuItem>}
 */
const getItemsFromConfig = () => {
    // get exe path
    // console.log(require('process').execPath);

    let result = [];
    try {
        let configPath = path.join(app.getPath('exe'), 'config.json');
        if (fs.existsSync(configPath) == false)
            configPath = path.join(app.getPath('userData'), 'config.json');

        const contents = fs.readFileSync(configPath, 'utf-8');
        result.push(...JSON.parse(contents));
    } catch {}

    result.push(...defaultItems);

    return result;
};

/**
 * @type {Array<MenuItem>}
 */
const menuItems = getItemsFromConfig() || [];


module.exports = menuItems;