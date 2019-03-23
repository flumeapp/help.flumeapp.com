# Keyboard Shortcuts

All of Flume's features can be accessed via the keyboard, and there are countless keyboard shortcuts that you can use to speed up your browsing experience.

In addition to extensive keyboard shortcuts, Flume includes unique [hover shortcuts](hover-shortcuts.md) for even quicker access to common actions.

{% hint style="info" %}
If you have set Flume to [display its icon in the Menu Bar only](../preferences/general.md#show-icon-in), you will not see Flume's [Menu Bar](glossary.md#menu-bar) menu at all \(by macOS design\). As a result, not all of the keyboard shortcuts listed below will be possible to use. 

In order to see the Menu Bar items, the Dock icon must be enabled.
{% endhint %}

## Overriding Shortcuts

All of the shortcuts listed below can be manually overridden to your own preference. This also applies to items that do not currently have a keyboard shortcut assigned by default.

To learn how to create or override keyboard shortcuts in macOS, refer to [Apple's guide.](https://support.apple.com/guide/mac-help/create-keyboard-shortcuts-for-apps-mchlp2271/mac)

## General Shortcuts

| Key Combination | Explanation |
| :--- | :--- |
| `↑ / ↓` | In a [column-view](../views/feed.md#view-modes), this will "focus" your media selection. In a [grid-view](../views/feed.md#view-modes), this will move your current selection one row up/down.  In lists, such as [conversations](../views/conversations/), or [comments](../views/profile/settings/comments.md), this will "focus" your selection. |
| `← / →` | The behaviour of the left arrow will depend on your current navigation history. Normally, it will "pop" you one level back to where you previously where. If you have already made a selection in a [grid-view](../views/feed.md#view-modes), the selection will move one to the left. If you deselect \(using `⎋ (ESC)`\), then pressing left will "pop" you back as usual.  The right arrow is only used in [grid-view](../views/feed.md#view-modes) currently, and moves your selection one item to the right. |
| `J / K` | Selects the next item in the current view. Behaves similar to UP / DOWN / LEFT / RIGHT depending on the current view layout. |
| `⇞ (PAGE UP) / ⇟ (PAGE DOWN)` | Scrolls to the top / bottom of lists/content. |
| `↩ (RETURN)` | When selecting items with the keyboard, `↩ (RETURN)` will "push" to the relevant item. |
| `⎋ (ESC)` | If you have made a selection using the arrow keys, `⎋ (ESC)` will deselect your selection.  If you have no current selection, `⎋ (ESC)` will "pop" you one level back to where you previously where, if applicable. The window will "bounce" when you cannot "pop" any further.  If the "[large preview](../views/largepreview.md)" window is visible, `⎋ (ESC)` will close the window, but keep your current selection.  In "pop-up" windows and popovers, such as the in-built browser window, camera window, [upload locations](../views/upload.md#tagged-locations), `Go to User…` popover, as well as the automatic hashtag and user search popovers, ESC will close the window/popover. |
| `⇥ (TAB)` | In the [explore](../views/explore.md), [search](../views/search.md) and [profile](../views/profile/) views, the `⇥ (TAB)` key will switch between the sections of that view. In area where a text-entry area exists, `⇥ (TAB)` will switch focus between elements in that view \(for example, between the search field and the search results table in the [search](../views/search.md) view. |
| `⌘F` | Jumps to the [search](../views/search.md) view. If you are on [conversations](../views/conversations/) view, the search field will be put in focus if it wasn't previously. |
| `?` | Displays the [help documentation.](https://flumeapp.com/help/) |
| `⌘⌃Space` | When the keyboard focus is in a text-entry area, this will invoke macOS's default "Emoji and Symbols" picker window, allowing you to insert emoji characters. See this [Apple Support](https://support.apple.com/en-us/HT201586) article for more info. |

## Menu Shortcuts

{% hint style="info" %}
Not all menu items are listed below, only those with existing keyboard shortcuts.
{% endhint %}

An inbuilt-feature of macOS are keyboard shortcuts assigned to items in menus. Flume displays menus when the selection / item makes most sense. For instance, when you are viewing the [profile](../views/profile/) of a user, the `User` menu will appear in the menu. Similarly, when using keyboard selections for posts, comments, conversations and messages, their related menus will appear.

### File Menu Shortcuts

| Key Combination | Explanation |
| :--- | :--- |
| `⌘N` | Opens a [new post](../views/upload.md) window. |
| `⌘O` | Opens an file selection window in order to open `.flumedraft` saved [draft files.](../views/upload.md#drafts) |
| `⌘R` | Refreshes the current view's content. |
| `⌘W` | Closes the currently focused window. |

### Account Menu Shortcuts

| Key Combination | Explanation |
| :--- | :--- |
| `⌘⇧L` | When you use Flume with just a single account, this will logout your account, and delete all cached data and account information, presenting you with the login window.  If you use multiple accounts, this action is disabled. |
| `⌃[1-9]` | When using multiple accounts, pressing `⌃ (CTRL)` together with a corresponding number from `1..9` will quickly switch accounts. Click the `Accounts` menu to check the corresponding number \(accounts are sorted alphabetically\). |

### View Menu Shortcuts

| Key Combination | Explanation |
| :--- | :--- |
| `⌘0` | Opens the [upload window](../views/upload.md) to create a new post. |
| `⌘1-7` | Switches to the corresponding views that match with the order in your [menu preferences.](../preferences/menu/order.md#toggling-menu-items) |
| `⌘}`  / `⌘⇧]` | Switches to the next view in the [Flume menu.](../preferences/menu/) |
| `⌘{`  / `⌘⇧[` | Switches to the previous view in the [Flume menu.](../preferences/menu/) |
| `⌘[` | Moves to the previous post \(when viewing the [details](../views/detailview.md) from the [feed](../views/feed.md), [likes](../views/likes.md), [explore](../views/explore.md#posts), [hashtag](../views/hashtags.md), [location](../views/locations.md) or [profile](../views/profile/) views\). Will be disabled when you are at the beginning of the list. |
| `⌘]` | Moves to the previous post \(when viewing the [details](../views/detailview.md) from the [feed](../views/feed.md), [likes](../views/likes.md), [explore](../views/explore.md#posts), [hashtag](../views/hashtags.md), [location](../views/locations.md) or [profile](../views/profile/) views\). Will attempt to download more items if you reach the end of the list. |
| `⌘U` | Displays a popover to jump quickly to any user. Use the `⎋ (ESC)` or `↓ (Down Arrow)` key while typing a username to see suggestions. |
| `⌥⌘1` | In the [feed](../views/feed.md), [likes](../views/likes.md) and [explore](../views/explore.md) views, as well as on [profiles](../views/profile/), switches the view to display posts in a single column. |
| `⌥⌘2` | In the [feed](../views/feed.md), [likes](../views/likes.md) and [explore](../views/explore.md) views, as well as on [profiles](../views/profile/), switches the view to display posts in a 3x3 grid. |
| `⌘D / ⇧⌘D` | Toggles the currently selected or viewed [profile](../views/profile/), [hashtag](../views/hashtags.md) or [location](../views/locations.md) as a [search bookmark.](../views/search.md#search-bookmarks) These search bookmarks are visible from the [search](../views/search.md) view. |
| `⌘+` | [Increases the font size](../preferences/design.md#font-size) of the textual user interface elements. |
| `⌘-` | [Decreases the font size](../preferences/design.md#font-size) of the textual user interface elements. |

### Post Menu Shortcuts

The `Post` menu will appear when a keyboard selection has been made on a post, or when viewing the [details](../views/detailview.md) of a post.

| Key Combination | Explanation |
| :--- | :--- |
| `Space` | Opens a [larger preview](../views/largepreview.md) of the photo/video. |
| `D` | Displays the post's [details.](../views/detailview.md) |
| `A` | Displays the author's [profile.](../views/profile/) |
| `T` | Displays tagged posts at the same [location](../views/locations.md). |
| `L / U` | Likes / unlikes the post. |
| `C` | Opens the quick-add comment popover if not currently viewing the post's [details](../views/detailview.md), otherwise displays the compose comment text area. |
| `⌥⌘C` | Copies the post's link to the system clipboard. |
| `⌥⌘B` | Opens the post in your web-browser. |
| `⌥⌘U` | Opens the author's [profile](../views/profile/) in your web-browser. |
| `⇧⌘R` | [Reposts](../views/reposting.md) the photo/video/carousel post. |
| `⌥⇧⌘R` | [Reposts](../views/reposting.md) the currently visible photo/video in the carousel post \(visible only if the post is a carousel post\).  |
| `⌘E` | Displays the [editing window](../views/editing.md) \(visible only for posts you uploaded\). |
| `⌘S` | Saves the post to your chosen local folder destination. |
| `⌘⌫` | Deletes the post \(visible only for posts you uploaded\). |
| `H` | [Hides \(mutes\)](../preferences/feed/hiddenusers.md) all posts from the author appearing in your [Feed.](../views/feed.md) |

### User Menu Shortcuts

The `User` menu will appear when a keyboard selection has been made on a post, when viewing the [details](../views/detailview.md) of a post, on a user's [profile](../views/profile/), when selecting a comment, message, and in all user lists \(following/followers, [activity](../views/activity.md) notifications, etc\)

| Key Combination | Explanation |
| :--- | :--- |
| `F` | Follows the selected user. |

### Comment Menu Shortcuts

The `Comment` menu will appear when a keyboard selection has been made on a comment on the [details](../views/detailview.md) of a post.

| Key Combination | Explanation |
| :--- | :--- |
| `R` | Compose a reply to the selected comment's author. |
| `⌥L` | Likes / unlikes the selected comment. |
| `⌥A` | Displays the comment author's [profile.](../views/profile/) |
| `⌘⌫` | Deletes the selected comment \(visible only for comments you wrote\). |

### Conversation Menu Shortcuts

The `Conversation` menu will appear when a keyboard selection has been made on a conversation in the [conversation](../views/conversations/) list.

| Key Combination | Explanation |
| :--- | :--- |
| `M` | Toggles muting the conversation. |
| `⌘D / ⇧⌘D` | Toggles adding the selected conversation to your [search bookmarks.](../views/search.md#search-bookmarks) |
| `⌘E` | Exports the contents of the selected conversation. |
| `⌘⌫` | Deletes the selected conversation. |

### Message Menu Shortcuts

The `Message` menu will appear when a keyboard selection has been made on a message in a conversation. 

| Key Combination | Explanation |
| :--- | :--- |
| `L` | Toggles liking the message. |
| `⌘D / ⇧⌘D` | Toggles adding the selected conversation to your [search bookmarks.](../views/search.md#search-bookmarks) |
| `⌘E` | Exports the contents of the selected conversation. |
| `⇧⌘⌫` | Unsends \(deletes\) the selected message \(visible only for comments you wrote\). |

### Location Menu Shortcuts

The `Location` menu will appear when viewing the tagged posts at a [location.](../views/locations.md)

| Key Combination | Explanation |
| :--- | :--- |
| `⌘D / ⇧⌘D` | Toggles adding the location to your [search bookmarks.](../views/search.md#search-bookmarks) |

### Hashtag Menu Shortcuts

The `Hashtag` menu will appear when viewing the tagged posts of that [hashtag.](../views/hashtags.md)

| Key Combination | Explanation |
| :--- | :--- |
| `⌘D / ⇧⌘D` | Toggles adding the hastag to your [search bookmarks.](../views/search.md#search-bookmarks) |

### Activity Menu Shortcuts

The `Activity` menu will appear when a keyboard selection has been made on an activity notification in the [activity](../views/activity.md) view.

| Key Combination | Explanation |
| :--- | :--- |
| `⌘⌫` | Hides \(deletes\) the activity. |

### Upload Menu Shortcuts

The `Upload` menu will appear when the [upload](../views/upload.md) window is the front-most window. When a photo / video has been selected, the `⇥ TAB` key can switch focus between the caption text-input, and the other buttons.

| Key Combination | Explanation |
| :--- | :--- |
| `⇧+` | Displays the menu to select a photo/video from your Mac, take a photo, or remove a previously selected item. Arrow keys can be used to navigate your selection and `↩ (RETURN)` to confirm. |
| `⌥⌘L` | Displays the [location tagging window](../views/upload.md#tagged-locations), allowing you to search for a location to tag the post at. |
| `⌥⌘E` | Toggles displaying the [editing options.](../views/upload.md#editing) |
| `⌥⌘T` | Displays the [user tagging window](../views/upload.md#tagged-users), allowing you to add users to tag in the photo \(tagging users in videos is not currently available\). |
| `⌥⌘C` | Displays the [cropping window](../views/upload.md#cropping-resizing). |
| `⌥⌘R` | Resizes a cropped photo or video back to its original dimensions. |
| `⌥⌘F` | Displays the [cover image](../views/upload.md#cover-image) window, allowing you to select a specific frame to become the thumbnail image of your video \(not applicable when uploading a photo\). |
| `⇧⌘S` | [Syncs](../views/upload.md#sync-all-upload-windows) the caption, location, tagged users, sharing settings and advanced upload settings from the currently focused upload window to all other open upload windows. This menu item is disabled if only one upload window is visible. |
| `⌘↩` | Posts the current photo / video. |

