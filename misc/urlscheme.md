# URL Scheme

Flume uses the `flumeapp://` URL scheme, which allows you to create links to jump directly to various areas of the application. Like with all macOS URL schemes, the links will also open Flume if it is not currently open.

Additionally, all the shortcuts below can be opened via a HTTP link to our website \(eg. [https://flumeapp.com/?redirect=pro](https://flumeapp.com/?redirect=pro)\)

{% hint style="info" %}
If you are a Flume Beta user, substitute `flumeapp://` with `flumeapp-beta://` for all links. There is currently no ability to use the HTTP redirect shortcut to open Flume Beta.
{% endhint %}

## General Shortcuts

| URI | Explanation |
| :--- | :--- |
| `flumeapp://media/:id` | Jumps to the [Detail View](../views/detailview.md) of the media with the corresponding ID. If the ID is invalid or does not exist, the Flume window will shake. |
| `flumeapp://shortcode/:shortcode` | Jumps to the [Detail View](../views/detailview.md) of the media with the corresponding short code. A "shortcode" is the series of numbers and letters found on the Instagram website eg. in the URL [`https://www.instagram.com/p/-Bw_YOEcrW`](https://www.instagram.com/p/-Bw_YOEcrW), the shortcode is `-Bw_YOEcrW`. If the short code is invalid or does not exist, the Flume window will shake. |
| `flumeapp://user/:username` | Jumps to the [Profile](../views/profile/) of the user with the corresponding username. If the username is invalid or does not exist, the Flume window will shake. |
| `flumeapp://userid/:id` | Jumps to the [Profile](../views/profile/) of the user with the corresponding user ID. If the user ID is invalid or does not exist, the Flume window will shake. |
| `flumeapp://location/:id` | Jumps to the [Location view](../views/locations.md) view at the location with the corresponding ID. If the ID is invalid or does not exist, the Flume window will shake. |
| `flumeapp://tag/:tagname` | Jumps to the [Hashtag view](../views/hashtags.md) with the corresponding hashtag. If the hashtag is invalid or does not exist, the Flume window will shake. |
| `flumeapp://feed` | Switches to the [Feed](../views/feed.md) view. |
| `flumeapp://likes` | Switches to the [Likes](../views/likes.md) view. |
| `flumeapp://explore` | Switches to the [Explore](../views/explore.md) view. |
| `flumeapp://search` | Switches to the [Search](../views/search.md) view. |
| `flumeapp://activity` | Switches to the [Activity](../views/activity.md) view. |
| `flumeapp://conversations` | Switches to the [Conversations](../views/conversations/) view. |
| `flumeapp://profile` | Switches to the [Profile](../views/profile/) view. |
| `flumeapp://pending_conversations` | Displays the current [pending conversations](../views/conversations/). |
| `flumeapp://pro` | Displays the [Flume Pro](../preferences/flumepro.md) tab of the Preferences window. |
| `flumeapp://log` | Displays the debugging log. |
| `flumeapp://logfile` | Opens Finder to the current debugging log file. |

## Preferences Shortcuts

| URI | Explanation |
| :--- | :--- |
| `flumeapp://preferences/` | Opens the [Preferences](../preferences/preferences.md) window with the last selected tab. |
| `flumeapp://preferences/general/` | Opens the Preferences window to the [General](../preferences/general.md) tab. |
| `flumeapp://preferences/design/` | Opens the Preferences window to the [Design](../preferences/design.md) tab. |
| `flumeapp://preferences/accounts/` | Opens the Preferences window to the [Accounts](../preferences/accounts.md) tab. |
| `flumeapp://preferences/feed/` | Opens the Preferences window to the [Feed](../preferences/feed/) tab. |
| `flumeapp://preferences/upload/` | Opens the Preferences window to the [Upload](../preferences/upload/) tab. |
| `flumeapp://preferences/notifications/` | Opens the Preferences window to the [Notifications](../preferences/notifications.md) tab. |
| `flumeapp://preferences/pro/` | Opens the Preferences window to the [Flume Pro](../preferences/flumepro.md) tab. |

