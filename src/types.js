/** @typedef {'guid','copy'|'open'|'website'|'exit'} Action */

/**
 * @typedef ItemTag
 * @property {String} [value] - value associated with this menu item
 * @property {Action} [action] - action to execute when this menu item is clicked
 */

/**
 * @typedef MenuItem
 * @property {String} title - text shown in the menu
 * @property {Boolean} [beginGroup=false] - if `true` a separator is added before the menu item
 * @property {String} [value] - value associated with this menu item
 * @property {Action} [action] - action to execute when this menu item is clicked
 * @property {String} [icon] - file name inside `src/assets` directory
 * @property {Array<MenuItem>} [items] - list of sub items
 */