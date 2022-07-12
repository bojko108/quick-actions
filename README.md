# Quick Actions

Win app for storing passwords and various shortcuts for quick access from the system tray.

## Config File

All items, available in the qucik actions menu are described in a JSON configuration file - `config.json`. The configuration file is stored in the application settings directory: `C:\Users\<username>\AppData\Roaming\Quick Actions`.

### Item properties

You can define as many items as you want and you can create submenus as well! An item can have the following properties:

- MenuItem object:
    - `title` {string} - text shown in the menu
    - `action` {'copy'|'open'|'website'} - action to run when the menu item is clicked:
        - `copy` - copies the `value` property of the selected item to the clipboard
        - `open` - runs the file specified with full path in the `value` property of the selected item
        - `website` - opens the website specified in the `value` property of the selected item
    - `value` {string} - value associated with this menu item
    - `icon` {string} - file name inside `src/assets` directory
    - `beginGroup` {boolean} - if `true` a separator is added before the menu item (default is `false`)
    - `items` {MenuItem[]} - list of submenu items

### Example 

Here is an example for a configuration file (`config.json`):

```json
[
    {
        "title": "Web",
        "icon": "opera",
        "items": [
            {
                "title": "Forum Arsenal Bulgaria",
                "icon": "arsenal",
                "value": "https://arsenal-bulgaria.com",
                "action": "website"
            }, {
                "title": "Romania new server",
                "icon": "ro",
                "value": "https://web-site-url",
                "action": "website"
            }
        ]
    }, {
        "title": "Passwords",
        "icon": "password",
        "items": [
            {
                "title": "Some Email",
                "icon": "gmail",
                "value": "password1",
                "action": "copy"
            },
            {
                "title": "Some User Name",
                "value": "password2",
                "action": "copy"
            }
        ]
    }
]
```

and the resulting menu looks like this:

![example](/docs/image1.png "example")
