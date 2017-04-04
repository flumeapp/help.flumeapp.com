# URL Scheme

Flume uses the <kbd>flumeapp://</kbd> URL scheme, which allows you to create links to jump directly to various areas of the application. Like with all macOS URL schemes, the links will also open Flume if it is not currently open.

Additionally, all the shortcuts below can be opened via a HTTP link to our website, using the prefix <kbd>https://flumeapp.com/?redirect=SHORTCUT</kbd> eg. https://flumeapp.com/?redirect=pro

## General Shortcuts

| URI | Explanation |
|-------------------|
| <kbd>flumeapp://media/:id</kbd> | Jumps to the Detail View of the media with the corresponding ID. If the ID is invalid or does not exist, the Flume window will shake. |
| <kbd>flumeapp://shortcode/:shortcode</kbd> | Jumps to the Detail View of the media with the corresponding short code. A ```shortcode``` is the series of numbers and letters found on the Instagram website eg. in the URL https://www.instagram.com/p/-Bw_YOEcrW, the shortcode is ```-Bw_YOEcrW```. If the short code is invalid or does not exist, the Flume window will shake (available in Flume 2.4.3 and above). |
| <kbd>flumeapp://user/:username</kbd> | Jumps to the Profile of the user with the corresponding username. If the username is invalid or does not exist, the Flume window will shake. |
| <kbd>flumeapp://userid/:id</kbd> | Jumps to the Profile of the user with the corresponding user ID. If the user ID is invalid or does not exist, the Flume window will shake (available in Flume 2.4.3 and above). |
| <kbd>flumeapp://location/:id</kbd> | Jumps to the tagged posts at the location with the corresponding ID. If the ID is invalid or does not exist, the Flume window will shake. |
| <kbd>flumeapp://tag/:tagname</kbd> | Jumps to the posts tagged with the corresponding hashtag. If the hashtag is invalid or does not exist, the Flume window will shake. |
| <kbd>flumeapp://feed</kbd> | Switches to the Feed view. |
| <kbd>flumeapp://pending_conversations</kbd> | Displays the current pending conversations. |
| <kbd>flumeapp://pro</kbd> | Displays the ```Pro``` tab of the Preferences window. |
| <kbd>flumeapp://log</kbd> | Displays the debugging log. |
| <kbd>flumeapp://logfile</kbd> | Opens Finder to the current debugging log file. |

## Preferences Shortcuts

| URI | Explanation |
|-------------------|
| <kbd>flumeapp://preferences/</kbd> | Opens the Preferences window with the last selected tab. |
| <kbd>flumeapp://preferences/general/</kbd> | Opens the Preferences window to the General tab. |
| <kbd>flumeapp://preferences/design/</kbd> | Opens the Preferences window to the Design tab. |
| <kbd>flumeapp://preferences/accounts/</kbd> | Opens the Preferences window to the Accounts tab. |
| <kbd>flumeapp://preferences/Feed/</kbd> | Opens the Preferences window to the Feed tab. |
| <kbd>flumeapp://preferences/Upload/</kbd> | Opens the Preferences window to the Upload tab. |
| <kbd>flumeapp://preferences/Notifications/</kbd> | Opens the Preferences window to the Notifications tab. |
| <kbd>flumeapp://preferences/pro/</kbd> | Opens the Preferences window to the Pro tab. |
