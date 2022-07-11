const { app, Menu } = require('electron');
const path = require('path');

const commands = [{
    label: 'Exit',
    icon: path.join(__dirname, `./assets/quit.png`),
    type: 'normal',
    click: () => app.quit(),
}, ];

const menuCommands = Menu.buildFromTemplate(commands);

module.exports = menuCommands;