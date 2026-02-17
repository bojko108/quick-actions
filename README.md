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
        - `quig` - creates a new uuid (e.g. `abedb360-242c-444f-87d8-640f63f38432`) and copies it to the clipboard
        - `open` - runs the file specified with full path in the `value` property of the selected item
        - `website` - opens the website specified in the `value` property of the selected item
    - `value` {string} - value associated with this menu item
    - `icon` {string} - [icon name](#available-icons)
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

## Available Icons

Each item can have an icon set by `icon` property. Available icons are:

- ![arsenal](/src/assets/arsenal.png "arsenal") - `arsenal`
- ![bg](/src/assets/bg.png "bg") - `bg`
- ![code](/src/assets/code.png "code") - `code`
- ![csharp](/src/assets/csharp.png "csharp") - `csharp`
- ![database](/src/assets/database.png "database") - `database`
- ![eu](/src/assets/eu.png "eu") - `eu`
- ![excel](/src/assets/excel.png "excel") - `excel`
- ![file](/src/assets/file.png "file") - `file`
- ![git](/src/assets/git.png "git") - `git`
- ![github](/src/assets/github.png "github") - `github`
- ![gmail](/src/assets/gmail.png "gmail") - `gmail`
- ![ie](/src/assets/ie.png "ie") - `ie`
- ![javascript](/src/assets/javascript.png "javascript") - `javascript`
- ![opera](/src/assets/opera.png "opera") - `opera`
- ![password](/src/assets/password.png "password") - `password`
- ![pdf](/src/assets/pdf.png "pdf") - `pdf`
- ![quit](/src/assets/quit.png "quit") - `quit`
- ![ro](/src/assets/ro.png "ro") - `ro`
- ![server](/src/assets/server.png "server") - `server`
- ![word](/src/assets/word.png "word") - `word`
