# Quick Actions

Win app for storing passwords and various shortcuts for quick access from the system tray.

## Config File

All items, available in the qucik actions menu are described in a JSON configuration file. THe configuration file is stored in either the application settings directory: `` or in the installation directory (where the exe file is located): 

### Item properties

You can define as many items as you want and you can create submenus as well! An item can have the following properties:



### Example 

Here is an example for a configuration file:

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

and it looks like this:

![IMAGE](https://)
