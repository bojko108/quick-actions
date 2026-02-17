const { app, Menu, clipboard, shell } = require('electron');
const { v4: uuidv4, } = require('uuid');
const path = require('path');
const items = require('./items');

const menuItems = items.map((item) => {
    /**
     * Creates and returns a menu item
     * @param {MenuItem} item 
     * @returns 
     */
    const createMenuItem = (item) => {
        if (item.beginGroup) {
            return {
                type: 'separator'
            };
        }

        return {
            label: item.title,
            icon: item.icon ? path.join(__dirname, `./assets/${item.icon}.png`) : undefined,
            type: item.items ? 'submenu' : 'normal',
            submenu: item.items ? item.items.map(i => createMenuItem(i)) : undefined,
            tag: { value: item.value, action: item.action },
            click: ( /**@type {ItemTag}*/ item) => {
                switch (item.tag.action) {
                    case 'open':
                        shell.openPath(item.tag.value);
                        break;
                    case 'copy':
                        clipboard.writeText(item.tag.value, 'clipboard')
                        break;
                    case 'guid':
                        const guid = uuidv4();
                        clipboard.writeText(guid, 'clipboard')
                        break;
                    case 'website':
                        shell.openExternal(item.tag.value);
                        break;
                    case 'exit':
                        app.quit();
                        break;
                }

            }
        };
    }

    return createMenuItem(item);
});

const mainMenu = Menu.buildFromTemplate(menuItems);

module.exports = mainMenu;