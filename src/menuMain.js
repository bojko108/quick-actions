const { app, Menu, clipboard, shell } = require('electron');
const { v4: uuidv4, } = require('uuid');
const path = require('path');
const items = require('./items');
const { spawn } = require('child_process');

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
            tag: { value: item.value, action: item.action, params: item.params },
            click: ( /**@type {ItemTag}*/ item) => {
                switch (item.tag.action) {
                    case 'open':
                        // If params are provided, spawn the executable with arguments
                        if (item.tag.params) {
                            // parse params string into argv-like array (handles quoted parts)
                            const parseArgs = (str) => {
                                const re = /[^\s"]+|"([^"]*)"/g;
                                const args = [];
                                let m;
                                while ((m = re.exec(str)) !== null) {
                                    args.push(m[1] ? m[1] : m[0]);
                                }
                                return args;
                            };

                            const args = typeof item.tag.params === 'string' ? parseArgs(item.tag.params) : (Array.isArray(item.tag.params) ? item.tag.params : []);
                            try {
                                const child = spawn(item.tag.value, args, { detached: true, stdio: 'ignore' });
                                child.unref();
                            } catch (e) {
                                // fallback to openPath if spawn fails
                                shell.openPath(item.tag.value);
                            }
                        } else {
                            shell.openPath(item.tag.value);
                        }
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