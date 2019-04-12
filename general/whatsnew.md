---
search: false
---

# What's New in Flume

## 2.8.6.3

[Release Date: April 12th 2019.](https://flume.link/2863)

* FIXED: A stalling issue if an account had 1 new notification from a user that required an avatar to be downloaded and a desktop notification to be displayed.
* FIXED: Multiple new follower requests are now properly batched into a single notification.
* FIXED: Clicking on search results in the conversation search wasn’t possible.
* FIXED: An issue when sharing to linked accounts with captions that include special characters, that appear as question marks on the Facebook Lite Android app.
* FIXED: A edge-case crashing issue when clicking on the avatar of the author in the detail view.
* FIXED: The follow requests list of users didn't update after accepting/ignoring the request.
* FIXED: Force the Dock icon to remove its badge if you log out of all accounts, and it was previously badged.
* FIXED: The @ symbol prefix for usernames is gone from various places / notifications.
* FIXED: Consistent menu appearance/disappearance behaviour/logic in all areas.
* FIXED: Updated missing localisations.

## 2.8.6.2

[Release Date: April 10th 2019.](https://flume.link/2862)

* NEW: Flume will now handle adding newlines \(including multiple new lines\) in captions.
* NEW: Added a "Message user" menu item to the contextual menus on posts.
* IMPROVED: Switching accounts / quitting Flume should occur quicker.
* IMPROVED: Preview thumbnails for shared location / hashtag messages will now load quicker.
* IMPROVED: The pending conversation header \(eg. X wants to send you a message\) is now a sticky header so it's always visible when scrolling.
* IMPROVED: The action buttons in the activity view have been reordered to avoid accidentally deleting / hiding notifications.
* IMPROVED: The "User" macOS Menu Bar will now display the username the actions are related to \(message/follow/unfollow\).
* IMPROVED: Pull-down-to-refresh behaviour / animation has been tweaked and hopefully improved for all scrolling methods \(not available with legacy scroll-wheel mice\)
* FIXED: A potential fix for invisible content / Flume windows for some users. 
* FIXED: Hashtags with underscores or non-latin characters were not detected.
* FIXED: A long-standing issue with Facebook login windows and EU cookie consent which could result in Facebook login forms that disappear.
* FIXED: The debug window will now show the last 10000 characters only to speed up opening/display. The log file on disk will still retain the full log entries.
* FIXED: When creating a new conversation from a search, clearing the search might not have ordered it correctly at the top of the list if you had conversation bookmarks.
* FIXED: When deleting a conversation while looking at the message list, avoid listening for changes to the messages that would cause the log file to show multiple warnings.
* FIXED: When hovering the mouse over linked entities in comments/captions/messages \(eg. username mentions, URLs, and hashtags\), the macOS cursor will no longer flicker between the "IBeam" and "pointing hand" cursor.
* FIXED: The like hover shortcut did not work if there was no keyboard selection due to recent changes with keyboard shortcuts.
* FIXED: The unlike keyboard shortcut has been switched back to "L" instead of "U". This behaviour mimics the toggling of saving an item with the "S" key.
* FIXED: The large preview window will display the inline media controls again, allowing manual scrubbing.
* FIXED: The new profile settings menu would show "Switch back to Personal account" even if you hadn't switched to a business profile.
* FIXED: Miscellaneous fixes to the switch to business profile window.
* FIXED: Multiple scrolling / deselection behaviour fixes for the Logitech MX mice that override macOS smooth-scrolling behaviour.
* FIXED: When creating a new conversation \(sending the first message\), you could end up sometimes having the current conversation disappear and display "no messages".
* FIXED: When the activity overlay is displayed, writing more messages, navigating between views, or doing anything "desctructive" \(eg. logout or switch accounts\) will now be disabled until the overlay has disappeared.
* FIXED: After importing search bookmarks, the "View" button will force a switch on the Search view to the Bookmarks section \(in case it was still showing Recent Searches or Suggested Searches\).
* FIXED: A crash when trying to add user tags on a carousel post.
* FIXED: When a location search included more than 1 search result that has the exact same geographic coordinates \(as determined by Instagram\), it was not possible to select that item correctly.
* FIXED: The insets on the window when viewing a pending conversation stretch to the visible content area instead of leaving an invisible gap towards the bottom of the window.
* FIXED: Multiple improvements when bulk deleting comments \(selection, refresh\).
* FIXED: After deleting all the comments on a post, the comment icon in the title bar would not update to clear.
* FIXED: Increased padding on popover search results labels.
* FIXED: Numerical hashtags are supported once again eg. \#030
* FIXED: Scroll-wheel mice will handle deselections faster than before.
* FIXED: Resizing the window in a grid-view layout won’t hide the placeholder images if the thumbnails still haven’t downloaded.
* FIXED: When sharing a profile in a message, the profile would show empty thumbnails due to an Instagram API bug. 
* FIXED: If a carousel post had tagged users, viewing the tagged posts of that user from their profile \(or your own\) would cause the ordering of that carousel post to be reversed.
* FIXED: Added a background and fixed some borders on the tagged post section header on profiles.
* FIXED: Hastags written without spaces will now be properly detected, as well as detecting of duplicates eg. \#you\#should\#really\#use\#spaces\#you\#know
* FIXED: Added linking of mentions/links/hashtags in the comment compose text area.
* FIXED: The comment icon in detail view title bar did not refresh the correct "commented" status.
* FIXED: Selection of a single character username/tag search result eg. \#a
* FIXED: Improved the scrolling behaviour and animations of profile header collapsing/expansion.
* FIXED: The profile suggestions cards would not re-enable interaction if you first scroll to collapse the header, then expanded it, then clicked on the suggestions button.
* FIXED: The animation of the profile suggestions button when collapsing the profile header.
* FIXED: Nicer profile suggestions card collapsing behaviour.
* FIXED: Reporting of media/comments/messages/users that would open a browser window, would result in a Facebook "oops an error occurred" message.
* FIXED: Reporting of ads uses a slightly different reporting flow as regular posts.
* FIXED: Missing thumbnails on shared messages of locations/hashtags.
* FIXED: Speed up the performance of refreshing content for shared messages of locations/hashtags.
* FIXED: The saved/liked/video/carousel icons are now indicated on the sample posts on the suggested user lists.
* FIXED: Fade-in suggested post thumbnails.
* FIXED: Show placeholders icons on suggested media while they are downloading.
* FIXED: Double borders on the top of the first section header in the activity view.
* FIXED: Faster internal notification sending.
* FIXED: Multiple improvements to the hiding/autohiding/show behaviour of the main menu \(when not set to always show\).
* FIXED: The title bar \(if set to autohide\) will do so after it appeared if the mouse is moved away from the main Flume menu. Previously it would only disappear once you began scrolling.
* FIXED: Added ellipsis marks to to the profile contact options \(call/message/get directions\).
* FIXED: Flume's custom scrollbars didn't appear on text areas \(captions / debug log window\).
* FIXED: Alignment improvements for shared profiles/hashtags/locations.
* FIXED: When someone sends a "like" message, the conversation list will use an image instead of the ❤️ emoji.
* FIXED: When there are no FB friends to follow, the placeholder was displayed \(regression\).
* FIXED: The first section in the activity view will always draw the top border if a private profile.
* FIXED: Some misc issues displaying and populating the "\#" character when choosing recently used hashtags from the search popover.
* FIXED: The filter editing options could align incorrectly sometimes when toggling between carousel posts if you already had a filter selected.
* FIXED: The border at the bottom of the title bars will transition much more smoothly.
* FIXED: Potential fix for a rare issue when trying to scroll / flick on a gesture-based mouse/trackpad while another gesture was still being recorded.
* FIXED: Misc edge-case crash fixes.

## 2.8.6.1

[Release Date: March 23rd 2019.](https://flume.link/2861-update)

* IMPROVED: Full-screen now uses an extended blurred background as opposed to a solid colour.
* IMPROVED: Caption pre-filling is now configurable per-account.
* IMPROVED: EXIF/IPTC descriptions are now localized in Upload Preferences.
* IMPROVED: Added placeholders and a retry button when a feed fails to download and there is no content to display.
* IMPROVED: Images used in desktop notifications are higher quality, and avatars are now used for new comments/messages.
* IMPROVED: Added a more visible cancel button during uploads.
* IMPROVED: The profile settings menu has been reorganised to match the IG apps.
* IMPROVED: If there's cached conversation messages and there's no connection when opening the conversation, the cached messages are displayed as a fallback.
* IMPROVED: The profile header collapsing/expanding behaviour has been improved.
* IMPROVED: The default reposting caption format has been updated to ensure Instagram does not strip the new-lines.
* IMPROVED: Saved sharing options are now re-used on the Share window.
* IMPROVED: Background colours on messages are a little more consistent.
* IMPROVED: The filter intensity slider and "apply to all items" button will only appear in the upload window when necessary.
* IMPROVED: The Touch Bar and "View" menu will display unread indicators to match the main Flume menu.
* FIXED: Some text labels \(with links\) would flicker when hovering on macOS Yosemite.
* FIXED: Composing a comment was not possible via the "C" keyboard shortcut.
* FIXED: A crash when converting the colour space of a photo on the upload window.
* FIXED: Grid-view mode would show stray liked/video/carousel/saved icons when deleting your oldest posts from your profile.
* FIXED: The timestamp on the conversations list was misaligned in some languages.
* FIXED: An issue handling the color space of photos/videos during upload.
* FIXED: A crashing issue handling wide-colour photos/videos on macOS versions older than macOS 10.12
* FIXED: When replying to comments, the window will no longer scroll to the top.
* FIXED: The large preview window would float on top of all windows from all applications. It will now float on top of all Flume windows only.
* FIXED: An edge-case issue that could result in edits/adjustments not being saved before an upload begins.
* FIXED: An edge-case crashing issue when trying to invoke a mouse scroll while the upload window was generating the first preview.
* FIXED: Preview views would abruptly disappear when initiated from long-pressing on links in the caption of the upload window and typing quickly.
* FIXED: Avoid a race condition where it was possible to momentarily action buttons on the upload window right before an upload would begin.
* FIXED: The next/previous buttons in the detail view title bar would re-enable incorrectly if a profile/hashtag/location preview was displayed.
* FIXED: Consistency of the behviour of video playback in the upload/edit/share windows.
* FIXED: The sharing popover and location / user tagging buttons will now hide when video playback begins in the edit window.
* FIXED: Video playback will stop in the edit/share window when the window loses front-focus.
* FIXED: An issue with the default Flume draft file-extension.
* FIXED: An issue where scrolling an item that is outside the permitted aspect-ratio limits would result in the cropped version of the file being deleted unnecessarily.
* FIXED: When reposting posts from the currently active user, the repost banner and user tag are deactivated by default.
* FIXED: The recent hashtags popover was searching for hashtags created by all accounts added to Flume instead of the currently active account.
* FIXED: The full-screen window background colour did not adhere to the current design mode.
* FIXED: Some header views were misaligned when entering/exiting full-screen mode.
* FIXED: Some default positioning behaviour when using the large preview feature in full-screen mode.
* FIXED: EXIF pre-filling of the shutter speed did not correctly handle values greater than 1s.
* FIXED: Archive menu items will now display "Archive Post/Video/Carousel Post" instead of "Archive Post".
* FIXED: The close button on the comment reply bar did not dismiss the bar and cancel the comment reply.
* FIXED: Added exact counts to the tooltips on the posts/following/followers buttons on profile headers.
* FIXED: When logging in with a second account right after logging in with the first account, the Accounts menu did not correctly update the localization for the "Logout All Accounts" menu item.
* FIXED: An edge-case crash related to using the undo feature in the message recipients text area.
* FIXED: The tagged post options popover will use consistent appearance \(left of window\).
* FIXED: The location/user tagging/video trim/cropping sheets would not close correctly if the main window had to reset \(eg. when emptying the local caches\).
* FIXED: A crash when using the right-arrow key when selecting items in lists of users.
* FIXED: Emptying the caches will not be possible if an upload/edit/share window is currently open.
* FIXED: Updating tagged users on photos would not update correctly unless all users had their tag positions altered \(due to remote changes by Instagram\).
* FIXED: The Menu Preferences labels would not update localized values after changing language.
* FIXED: The "Post" button would not correctly enable/disable if reposting a post which had a caption that would exceed the 2200 character limit.
* FIXED: Loading a document will not proceed if it is not possible to switch to the account that the draft file was initially created under.
* FIXED: An edge-case issue with the resize-to-fit behaviour not being applied to all subsequent items by default in a carousel post.
* FIXED: An issue with security checkpoints when presented with the choice of method for receiving the login security code.
* FIXED: Updated "entfernen" to "löschen" in various German translations.
* FIXED: When deleting conversations from another device, Flume would not correctly remove the conversation on next refresh.
* FIXED: When deleting posts from another device, Flume would not correctly remove the posts on the next refresh of the profile view.
* FIXED: The automatic refresh timer didn't refresh the currently visible feed/view in addition to the home feed.
* FIXED: The following/unfollowing status of users from the Activity view wasn't immediately reflected after changing the status.
* FIXED: When pushing to the detail view of media that was removed already \(either from another device, or by Instagram\), always ensure the view is popped back and the author's post counts are correctly decremented.
* FIXED: Items that were previously cached but no longer visible are removed from the local storage.
* FIXED: Jumping around on caption text view when scrolled all the way to the bottom of the text view and pressing the Spacebar \(a lot of head-scratching with this one\).
* FIXED: After a new post was uploaded, the feed view was force a scroll to the top incorrectly.
* FIXED: A crash related to unsupported colour spaces on macOS 10.10 and 10.11 when trying to apply a filter.
* FIXED: Jumping around on caption text view when scrolled all the way to the bottom of the text view and pressing the Spacebar.
* FIXED: After a new post was uploaded, the feed view was forcing a scroll to the top incorrectly.
* FIXED: New activity will be refreshed when the feed timer interval passes.
* FIXED: The caption area was not editable after losing window focus on the share window.
* FIXED: The Facebook share pop-up button would not disable correctly if you don’t admin any Pages, but you’ve got an Instagram business profile.
* FIXED: Handle line-break issue if there's a space right before the newline which causes paragraph breaks to disappear when IG strips them out.
* FIXED: The Command+Delete keyboard shortcut can now be used to delete comments/messages/posts/conversations/saved collections and activity notifications.
* FIXED: The detail view will immediately update the liked/saved status.
* FIXED: The large preview window did not close when waking the Mac from sleep and the main window reloads.
* FIXED: An issue with the initial selection in conversations when using the arrow keys.
* FIXED: An issue when logging in with additional account that could cause duplicate code to execute, resulting in empty feeds and all kinds of other strange issues.
* FIXED: Removing user tags from a post did not delete the user tag locally, thus appearing as if the deletion did not succeed.
* FIXED: Spaces are stripped when pasting into the "Go to User…" text field.
* FIXED: Hashtag / mention detection in captions has been improved to avoid detecting "\#\#" as a used caption.
* FIXED: Avoid making searches for invalid hashtags in the caption text areas.
* FIXED: A flickering of dimmed grid-view items when navigating with the keyboard quickly.
* FIXED: Handled an edge-case where an Instagram business profile might have an "unclaimed Facebook Page", which results in a Facebook permissions error appearing.
* FIXED: Handling of redirects on the security code pop-up is improved, to avoid cases of infinite login loops.
* FIXED: Added additional logging for pop-up web-browsers to help debug future issues.
* FIXED: Much more robust recovery attempts when dealing with race-conditions that resulted in ignored duplicate database entries.
* FIXED: Selections would not be deselected when scrolling with a scroll-wheel mouse.
* FIXED: Lots of under-the-hood improvements to keyboard navigation and selection and consistency.
* FIXED: Keyboard-based selections will no longer deselect when hitting the end of lists.
* FIXED: Keyboard-based selections will no longer be lost, or flicker on/off when older content is refreshed.
* FIXED: A long-standing issue with scroll-jumping when loading older messages in conversations.
* FIXED: A long-standing issue with scroll-jumping when scrolling after having selected the first or last item in column-view mode. 
* FIXED: A long-standing issue with media details not appearing when using the keyboard to quickly navigate back and forth between the same posts in column-view mode.
* FIXED: An issue using the J/K navigation keys in the saved collections list.
* FIXED: An inability to trigger loading older messages in a conversation when using keyboard navigation.
* FIXED: When using the "Next / Prev Post" feature in the detail view, the previously selected comment, or previously composed comment would not deselect/disappear.
* FIXED: A workaround for an issue with duplicate browser redirections in the login security checkpoint window.
* FIXED: Using Cmd+Up/Down arrow will no longer select the first/last item, but scroll only to top/bottom.
* FIXED: The TAB key will correctly switch focus from the search text field to the tabs/list on the search view.
* FIXED: Some misc. flickering issues when first displaying some lists.
* FIXED: Updated the edit Saved Collection touch bar asset.
* FIXED: The large preview window will no longer close prematurely when using keyboard arrow navigation, and more content is being loaded/reloaded.
* FIXED: Keyboard selections \(when there was no prior selection\) would not always select the correct top/bottom visible item.
* FIXED: The Tumblr login window would not display correctly on macOS 10.13.
* FIXED: When waking from sleep, any attached sheets / additional windows didn't close on reappearance.
* FIXED: The muted conversation icon didn't appear in the correct position on initial appearance.
* FIXED: Selecting messages in conversations will now use the default highlight colour in both light/dark design mode.
* FIXED: After viewing comments in a comment thread, they would appear in addition to the preview comments on the main detail view when popping back.
* FIXED: A visible scroll jump if the title bar was always visible and you pushed to the detail view.
* FIXED: Carousel posts won't reset their current page when reloading in column-view.
* FIXED: The position of the video duration and carousel page labels was incorrect in column-view mode when post details were set to All or Compact.
* FIXED: Various improvements to handling of comment replies in the detail view.
* FIXED: When using the keyboard arrows to load older messages, the last selection is kept as the list of messages reloads.
* FIXED: When replying to a comment, the newly inserted comment would be pre-selected for replying.
* FIXED: The comment/activity actions panel could get stuck and not appear in some edge-cases.
* FIXED: When replying to a comment in the detail view, and older comments are loaded, avoid scrolling back to the selected comment, but maintain the selection highlight.
* FIXED: Detect edge-case failures with background data processing, and assume the entire request has failed if so.
* FIXED: When deleting a child comment, it didn't disappear immediately, only after the network request succeeded.
* FIXED: When replying to a new comment, update the "Replying to X" label correctly.
* FIXED: When processing data fails, an appropriate error message will be displayed when necessary.
* FIXED: An issue with the "… more" button not appearing in captions based on subpixel rendering calculations.
* FIXED: The next/previous/list buttons in the profile suggestions area didn't correct enable/disable when the profile header collapsed/expanded.
* FIXED: Truncated captions in column-view will also resize as you resize the window.
* FIXED: Added some missing accessibility/VoiceOver labels to some buttons on the upload window.
* FIXED: Using the right-arrow key to select different filters would move between the last filter and the filter intensity slider.
* FIXED: The large preview window wouldn’t close when you selected a message with the arrow keys that wasn’t some kind of photo/video message.
* FIXED: The resend button wasn’t aligned correctly when a message failed to send.
* FIXED: When clicking the cancel button after selecting a video to upload, the next time you choose a photo/video and close the window, the wrong discard alert text would display.
* FIXED: The detail view actions button menu didn't have any keyboard shortcuts displayed.
* FIXED: Some invalid delete keyboard shortcuts in contextual menus.
* FIXED: After cropping a photo, clicking the resize to original button would sometimes not cause the overlay to disappear, depending on speed of your Mac and file-size of the image.
* FIXED: When cropping a video, the cropped image preview would be deleted accidentally, resulting in the wrong preview being displayed.
* FIXED: Multiple edge-case issues with upload window sizes when cropping and resizing into different formats consecutively.
* FIXED: When switching to a carousel post, a photo that exceeded the aspect ratio limits didn't force a crop to be made before continuing.
* FIXED: A rounding-error in the photo/video cropping window which resulted in the CROP button having inconsistent state between itself and the red overlay.
* FIXED: Improved the behaviour of listening for database changes when items are being deleted which would cause some errors to appear in the log.
* FIXED: Restored the extra 250ms duration buffer on video uploads.
* FIXED: Removed the flickering that would occur when switching between items in the large preview window, that would require the window to change in size.
* FIXED: Added a lot more keyboard shortcuts for various menu items, and made sure contextual menus and the macOS menu bar menu have consistent positions of items and shortcuts.
* FIXED: When another user "unsent" the only visible message in a conversation you were currently looking at, the conversation message list would disappear and show random messages instead of the "No Messages" placeholder.
* FIXED: Ensure we no longer care about listening for object changes in the database when we're deleting that object.
* FIXED: If push notifications are disabled, receiving a new message for a new conversation would not immediately display any desktop notification or refresh the list of conversations.
* FIXED: You can use the ENTER/RETURN key to move between licence verification and activation steps.
* FIXED: When opening drafts in the upload window, the preview image didn't animate it's size/position correctly until the entire draft had finished loading.
* FIXED: Replying to new comments and new messages via the desktop notification didn't work correctly. In addition, if there's a error sending the comment/message, a visible error alert will now display.
* FIXED: If the sending of the first message in a new conversation failed, the activity indicator overlay would not disappear.
* FIXED: If the sending of the first, and subsequent messages in a new conversation failed, it was not possible to resend the other messages after the first resends successfully.
* FIXED: If a message in a conversation was selected, and an alert was displayed and then dismissed \(eg. delete the conversation\), the "Message" menu bar item would not reappear in the menu bar.
* FIXED: If you searched for a user at the top of the conversations list, then proceeded to create a new 1-1 conversation with them, when you popped back to the search and the previous search lists were still displayed, clicking on the same user would not take you to the newly created conversation.
* FIXED: After creating a new conversation via the search at the top of the conversations list, clearing the search text did not display the newly created conversation.
* FIXED: Resending a failed video message didn't work correctly.
* FIXED: The conversation name \(username\) of a new conversation did not always appear correctly in the header area.
* FIXED: Rearranged the block/report menu items on the profile actions button menu.
* FIXED: Added keyboard shortcuts to the conversation actions button menu.
* FIXED: Show errors and the retry button on video message upload failures.
* FIXED: The posts/followers/following numbers were displayed in the tooltip of private profiles that you don't follow.
* FIXED: An edge-case deadlocking issue which could be triggered if the debug log window was open and it was attempting to display and log lots of data right when the RESET button was pressed.
* FIXED: Allow toggling of hide/unhide of posts from a user's profile actions menu.
* FIXED: Right-clicking on items with contextual menus will no longer deselect the selection after the menu disappears.
* FIXED: Added more logging in "Verbose" mode to aide in future development issues.
* FIXED: Alignment issues of the "liked by" label when resizing the window.
* FIXED: Misc. edge-case crash fixes.
* FIXED: Updated some various localizations.

## 2.8.6

[_Release Date: February 1st, 2019._](https://flume.link/286)

* NEW: Completely redesigned automatic caption pre-filling that uses a template syntax offering the ability to allows you to include IPTC and EXIF information, or simply a list of common hashtags.
* NEW: Completely redesigned cropping behaviour, with the ability to quickly switch between common photo/video frame aspect-ratios.
* NEW: Switching between posts in a carousel post is now simpler and uses the position of the mouse cursor to determine the action \(previous / details / next\).
* NEW: The upload, edit, and share windows can now be resized \(vertically\) to allow more space to write and edit your captions.
* NEW: Reposting has been vastly improved, allowing you to add visual banners, toggling including the original caption, and whether you wish to tag the original author. Reposting is now permitted on all posts from profiles that are not private, however some form of attribution is mandatory \(banner, mention in the caption, and/or user tag\).
* NEW: You can now toggle through posts in carousel posts in the Large Preview window, including when viewing from Grid-View Mode using the position of the mouse cursor.
* NEW: Hover-Shortcuts can now have their shortcuts overridden.
* NEW: Flume now supports upload and handling of wide-gamut \(Display P3\) images, including editing with filters.
* NEW: You can now view tagged users in videos.
* NEW: Added an option to download higher quality grid-view thumbnails.
* NEW: Profile view counts in the profile header are now displayed \(business profiles only\).
* NEW: Added a banner when sharing posts in a conversation from a private profile to indicate only followers of the private profile will be able to see the post.
* NEW: Separated follower/following/follow requests lists.
* NEW: Split activity into new/today/yesterday/this week/this month/earlier sections.
* NEW: New search history and account privacy views.
* NEW: Added "liked by" avatars in column feed view. 
* NEW: Language changes no longer require an application restart.
* NEW: Added option to pre-set location from EXIF data.
* NEW: Split out post likes from the detail view.
* NEW: Added new likes and views list for videos.
* IMPROVED: Switching between tabs on the Flume menu will no longer force a reload, allowing you to switch between views without losing your previous position.
* IMPROVED: Massively improved Large Preview performance when opening, closing, and moving between posts via the keyboard.
* IMPROVED: Window resizing / redrawing performance has been massively improved.
* IMPROVED: The text-entry area in conversations now increases as you type to make more room for your message.
* IMPROVED: Carousel posts will now be created faster by removing the need to choose the cropping region for subsequent items that match the initial item.
* IMPROVED: Videos that contain no audio will make it clearer that it cannot be muted/unmuted.
* IMPROVED: Edits made in the upload window \(filters and adjustments\) will be immediately displayed in the thumbnails of the carousel items.
* IMPROVED: Faster loading of draft files, especially those where the items had edits applied.
* IMPROVED: On relaunch, Flume will resume from last selected view.
* IMPROVED: Faster creation of backup file on uploads. 
* IMPROVED: Faster saving / editing on uploads.
* IMPROVED: Larger baseline font size, increasing readability everywhere.
* IMPROVED: Updated to the latest pending message request headers.
* IMPROVED: Redesigned conversation info view to match latest mobile layout.
* IMPROVED: Updated profile settings area to match latest mobile app options.
* IMPROVED: Larger welcome window \(so that more release notes can be read\).
* IMPROVED: Added blurred version of thumbnails in details view while higher resolutions are downloaded.
* IMPROVED: Added long-press support to caption text view links \(for previews\)
* IMPROVED: Replying to comment notifications uses the quick-reply popover instead of jumping to the details view.
* IMPROVED: Sponsored post indicator icon in grid-view.
* IMPROVED: Vastly improved scroll position behaviour in column view mode when using the keyboard \(to ensure the post is visible\).
* IMPROVED: Long captions are now truncated by default and can be expanded.
* FIXED: Added an explicit check to confirm acceptance of the Flume Term's of Use.
* FIXED: Improved the image cropping resizing performance on Macs with a Touch Bar.
* FIXED: An issue where the previous post selection would jump to an incorrect position when using the keyboard to move back/forward.
* FIXED: Video controls are now hidden on the Large Preview window.
* FIXED: A rounding issue that could cause 1px solid colours to appear in an upload when manually cropping.
* FIXED: Multiple improvements to update the macOS Menu Bar correctly when using contextual-menus.
* FIXED: An issue that could cause strange scrolling behaviour for views that did not have a pull-down-to-refresh control.
* FIXED: The preloading indicator has been redesigned for consistency.
* FIXED: When using the keyboard to scroll items in Column-View Mode, the table will no longer force a scroll to the middle, and only ensure the item is visible.
* FIXED: Added more support links to the About window.
* FIXED: When using the Go to User… search window, the search text field would not be re-enabled in case of a network failure that occurred during the search.
* FIXED: An issue where a security checkpoint window would not appear on the login window, if it was the very first account you were trying to add.
* FIXED: An issue where the unread conversations/messages indicator would not disappear.
* FIXED: Improved reliability of ignoring duplicate database objects due to simultaneous network requests and conditions.
* FIXED: A crash when the real-time messaging service failed to send a message on macOS Yosemite 10.10.
* FIXED: Critical errors related to writing files to the file-system will now add entries to the Flume log, and visibly display to the user.
* FIXED: Any potential database object error is now written to the Flume log file for help diagnosing rare and difficult to produce issues.
* FIXED: A potential crash when logging out / logging in on macOS Yosemite if the Flume Preference window was visible.
* FIXED: Hashtags that are added to captions via IPTC keywords pre-fill will now correctly remove spacing for multi-word keywords.
* FIXED: The current keyboard text-focus would be lost when the main window was moved.
* FIXED: When writing a message to a user from their profile, a "Search…" placeholder would appear unnecessarily.
* FIXED: When writing a message to a user not previously messaged, the "done" button would appear in the title bar area unnecessarily.
* FIXED: A crash that could occur when trying to update the tags on a post.
* FIXED: A regression where it was not possible to type the + character when logging in via email address.
* FIXED: A workaround for a crash on macOS Yosemite related to loading new windows.
* FIXED: A crash when trying to send an invalid / corrupt image in a conversation.
* FIXED: Before rendering a video for upload, confirm that the desired options are valid to ensure non-corrupt video/audio tracks.
* FIXED: Every label / text area has been refactored to use less memory, reduce the chance of crashes on older macOS versions, handle font-size changes and alignment better, and provide faster resize performance.
* FIXED: Pressing the ESC key when typing a message in a conversation would pop the view back before it tried to deactivate the keyboard focus first.
* FIXED: After selecting the last visible item in Grid-View Mode with the keyboard, the next attempt to select the last \(bottom\) item would instead select the top visible item.
* FIXED: A workaround for a macOS bug where multiple files dragged to a Dock icon will not be batched into a single group, causing the option to create a carousel post to disappear.
* FIXED: When a failure to link to Twitter or Odnoklassniki occurred via the upload sharing options popover, the failure would not be correctly detected and the activity indicator would remain indefinitely.
* FIXED: The in-app web-browser window would not correctly clip long titles of websites.
* FIXED: The in-app help documentation viewer is now slimmer by default, to allow side-by-side reading and operation.
* FIXED: The list of Facebook Pages/locations to share to could appear incorrectly if a network failure occurred when asking Facebook for the current list of managed Facebook Pages.
* FIXED: Multiple memory and speed improvements via increased caching of common configuration settings \(font size, design mode, etc\).
* FIXED: An animation issue when switching between items in a carousel post.
* FIXED: Force the upload window to close in the rare case that an Instagram API issue returns a video upload failure despite the upload succeeding.
* FIXED: The follow request button in the Touch Bar will correctly update if the profile is private and a request is pending.
* FIXED: Video exporting / rendering errors will now display a more descriptive error.
* FIXED: A rare crash that could occur when trying to view a profile preview popover.
* FIXED: Added a gap between posts in Column-View mode when Post Details is set to None or Hover, so that it is easier to determine edges when multiple subsequent posts contain the same edge/border colours.
* FIXED: An alignment issue with the verified badge when the verified profile contains an emoji in the name.
* FIXED: Reply avatars in threaded comments are smaller to improve readability.
* FIXED: Profile placeholders have been updated to the latest Instagram versions.
* FIXED: The upload editing Touch Bar buttons are bolder and easier to see.
* FIXED: If macOS is currently in Do-Not-Disturb mode, Flume will not play audio alerts.
* FIXED: When switching between posts in a carousel post, the video play/pause button would appear/disappear momentarily at the wrong time.
* FIXED: Transitions and switching between views in the Flume menu is now faster.
* FIXED: Some buttons incorrectly assigned the same key equivalent to Command + Enter on the upload / login windows.
* FIXED: An issue when trying to repost videos that are in fact longer than 60.0 seconds by a few hundred milliseconds.
* FIXED: Touch Bar scrubbers will correctly scroll to the newly selected values when using the mouse/keyboard to make selections.
* FIXED: Further improved handling of session time outs, by ensuring that Flume can handle the case where a log-out request fails.
* FIXED: When upload, edit, or share windows are open, switching accounts or adding a new account is now prohibited.
* FIXED: When viewing the un-viewed posts that you have been tagged in, the badge may not have disappeared immediately.
* FIXED: An edge-case where multiple requests to pre-fetch carousel post items could fail to display on first load.
* FIXED: The avatar of the logged in user might not have updated in the macOS Menu Bar in certain cases.
* FIXED: If audio alerts are disabled in System Preferences &gt; Notifications &gt; Flume, this will override whatever notification preferences are set for audio alerts.
* FIXED: Flume Beta will no longer expire if it's not older than the last publicly available release.
* FIXED: Wider timestamp label on conversations.
* FIXED: Update account list in Preferences when avatar/name changes.
* FIXED: Update account names/avatars on upload window when changes detected.
* FIXED: When changing usernames, the "accounts" menu, accounts preference pane, accounts menus did not update immediately.
* FIXED: Some usernames with dots were detected incorrectly as URLs \(though they are valid URLs/domains\).
* FIXED: The profile header will refresh after popping back from the edit profile view.
* FIXED: An issue with profile headers not updating correctly when adding/removing content eg. biography/website. 
* FIXED: Some missing button clicks. 
* FIXED: Play video on hover if post details mode was no compact or all.
* FIXED: An issue where long-press actions might be accidentally triggered.
* FIXED: A long-standing issue with recommended media in similar account suggestion feeds causing missing thumbnails on the subsequent profiles.
* FIXED: Use "none" not "off" for the Feed &gt; Hide preference.
* FIXED: Ability to disable all menu items.
* FIXED: Faster larger preview window appearance on the details view.
* FIXED: The back button was not working from the similar accounts view.
* FIXED: Immediately hide posts when archiving them.
* FIXED: Live resizing positioning of carousel/video indicators on explore / suggested user rows.
* FIXED: Disabled quick-comment and hover-commenting on media that has commenting disabled.
* FIXED: Added slightly darker backgrounds to blurred areas to improve readability everywhere.
* FIXED: An issue where "See translation" links might appear incorrectly after you change languages.
* FIXED: Don't show usernames of unpublished accounts \(sponsored posts\).
* FIXED: After making edits to posts, the feed/profile is immediately refreshed to ensure new captions/locations are displayed.
* FIXED: Faster account switching.
* FIXED: Show loading indicators for comments list immediately on appearance.
* FIXED: Various issues related to changes in comment threads.
* FIXED: Videos did not stop on the upload window when an upload or other action in progress.
* FIXED: Don't check video length or size on a repost.
* FIXED: Added an option to open and clear the recently opened documents.
* FIXED: Don't show desktop notifications when looking at the pending message requests.
* FIXED: Pull-down-to-refresh triggering on previous views.
* FIXED: Incorrect accessibility tooltip on search fields. 
* FIXED: Missing image previews/blurred images in message requests.
* FIXED: Activity indicator not disappearing on a profile preview if there's 0 posts from the user \(non-private\).
* FIXED: Muted icon and section header images not refreshing to the changed design mode when popping back.
* FIXED: Increase max conversation group size to 32.
* FIXED: Private profile previews not showing any thumbnails if we hadn't yet cached any media for the private user.
* FIXED: Updated formatted count styles to the latest mobile app logic.
* FIXED: upload window preview not using a cropped image if present.
* FIXED: Improved visibility of activity indicator on preview profile/hashtag/location views.
* FIXED: "Show author" preference causing a loop when trying to view the details of a post from a profile.
* FIXED: ESC key not popping back on tagged posts options.
* FIXED: Allow arbitrary video/photo aspect-ratios in conversation messages.
* FIXED: Batch carousel "resize to fit" creating invalid images. 
* FIXED: Batch carousel not resizing/compressing output files. 
* FIXED: Flicker of content when popping back views.
* FIXED: Restrict height of preview images in messages.
* FIXED: Closing the large preview window on messages didn't use the correct thumbnail.
* FIXED: Next/previous buttons not showing the correct enabled/disabled stated when pushing from the saved collection or archived posts lists. 
* FIXED: Saved collections posts not appearing.
* FIXED: Hover-shortcuts not checking current media liked value.
* FIXED: Added more errors for fatal issues on the upload window.
* FIXED: Animate alpha changes on buttons.
* FIXED: Avoid animating the wrong image in when switching items quickly in detail view.
* FIXED: Missing avatars in accounts menu after emptying caches.
* FIXED: Allows hover-shortcuts to work if the current table selection is the view the mouse is over.
* FIXED: Dock contextual menu will match Flume's menu ordering/enabled sections.
* FIXED: Speed up background processing of long user lists \(eg. followers/following/post likes\).
* FIXED: Added touch bar support on various user lists.
* FIXED: Defaulted design mode to dark rather than System Appearance.
* FIXED: Assume videos have audio if not present in API data.
* FIXED: Handle comment area visible on push, which was causing jumping in details view.
* FIXED: Profile header labels disappearing when changing font size and header is collapsed.
* FIXED: Immediately show save/like status on column view buttons, and immediately update frame height \(if first like on a post\). 
* FIXED: Fade changes to save/like buttons.
* FIXED: Disable login sheet being detachable in Accounts preferences.
* FIXED: Adjust the pending request counts when ignore or accepting a follow request.
* FIXED: Handle resizing of detail header when first like is added/removed.
* FIXED: Multiple rare crash fixes.

## 2.8.5.3

[_Release Date: October 3rd, 2018._](http://flume.link/2853)

* IMPROVED: Application launch will be delayed in order to ensure any crashes that occur on launch have their reports submitted.
* IMPROVED: Added additional URL schemes to jump to the likes, conversations, explore and profile views. See [https://help.flumeapp.com/misc/urlscheme](https://help.flumeapp.com/misc/urlscheme) for more.
* FIXED: A concurrency issue that could cause duplicate posts to appear.
* FIXED: An issue where tagged photos would not appear on profiles.
* FIXED: An issue when trying to verify/activate/deactivate a Flume Pro licence and you had not logged into any Instagram account/s.
* FIXED: A crash in the conversations area when trying to create a message header with an invalid date.
* FIXED: A launch crash issue when the database is routinely pruned.
* FIXED: When a database save fails, the database could have ended up in an inconsistent state leading to "session timed out" errors that weren't actually session time outs.
* FIXED: Accounts that need to perform a newer security checkpoint workflow did not show the pop-up browser due to a bug on Instagram's API.
* FIXED: A crash when clicking on the first item in the "Top", "Suggested" or "Recent" search results.
* FIXED: An issue calculating the height of some labels when they contained emoji characters.
* FIXED: It was possible to use the "Select Next/Prev Tab" menu item to switch to views in the main menu that you had hidden in Menu Preferences.
* FIXED: A crash when dragging files to upload that reported invalid filenames.
* FIXED: When typing hashtags in caption text areas, the currently typed hashtag would be omitted from the popover search results.
* FIXED: The text entry areas no longer have contextual menu options to change the font or change the layout direction.
* FIXED: The follower/following list search text field was hidden.
* FIXED: A crash when trying to upload or share a video that was too small in dimensions.
* FIXED: Added a warning about launching Flume outside of the /Applications folder.
* FIXED: A potential crash when the preferences window resizes.
* FIXED: A crash when trying to update a selection when there are no search results in popovers \(locations, users, tags\).
* FIXED: The "Follows you" label will be displayed when viewing the followers of other users that are not you.
* FIXED: The "Spread the word" button did not appear with the correct background colour directly after Flume Pro activation.
* FIXED: A crash when receiving a push notification about a new comment received on one of your posts while you were viewing a conversation.
* FIXED: The Command+F global search shortcut will not show the search view if it's been disabled from the main menu.
* FIXED: When logging out all accounts, the database is reset to avoid issues where future saving continues to fail.
* FIXED: Multiple various miscellaneous crash fixes.

## 2.8.5.2

[_Release Date: September 23rd, 2018._](http://blog.flumeapp.com/post/177901500771/flume-for-mac-2852)

* NEW: Added an option to autoplay videos on hover \(in column view\).
* NEW: Support for adhering to system appearance on 10.14 Mojave. When using the "System Appearance" design mode, all controls will adjust to use the selected "accent colour".
* NEW: Likes will no longer default to be enabled in the main Flume menu, and can be found in the Profile area settings.
* IMPROVED: Huge improvements to scrolling stutter and performance during reloading.
* IMPROVED: Faster launching by performing database cleanup duty on app termination.
* IMPROVED: Animations of buttons and the Flume logo in the titlebar are smoother.
* IMPROVED: Reposts now set the location if there was one.
* IMPROVED: When reposting your own posts, the "\#repost" prefix text is no longer added to the caption.
* IMPROVED: Text substitution / smart-dash / spell checking preferences have all been simplified and are saved automatically.
* IMPROVED: Multiple improvements to VoiceOver on checkbox buttons.
* IMPROVED: Shared images fade-in in conversations.
* IMPROVED: Emptying the caches will now wipe all caches, including cached media from conversations, avatars, etc.
* IMPROVED: Faster performance displaying the cache size in preferences.
* IMPROVED: Since Instagram sends incredibly low thumbnail images for videos, we’ll now create them manually using the higher resolution still image. This results in better quality video thumbnails in grid-view.
* IMPROVED: The Touch bar buttons will now highlight to indicate any adjustments you've made on uploads.
* IMPROVED: The Touch bar now uses system-designed red/green/blue colours, and the upload button will also respect the accent colour on macOS 10.14 Mojave.
* IMPROVED: Unread "dots" will now use the accent control colour on macOS 10.14 Mojave.
* IMPROVED: When using the "resize to fit" function or scale adjustment on uploads, the previous background color is saved and automatically set.
* IMPROVED: Updated the suggestions button image in the profile header to make it look less like the following button image.
* FIXED: When changing the accent colour on macOS 10.14 Mojave, any adjustments/filters made on any currently open upload windows appeared as if they had been reset.
* FIXED: A potential crash when adding user tags on the upload window.
* FIXED: Disabled option+ENTER when searching to tag users on uploads from entering a newline.
* FIXED: Improved some incorrect Italian translations.
* FIXED: A crash if you tried to send a photo/video in a DM that was below 160x160px.
* FIXED: Potential fix for merged conversation history when searching for a user to compose a new DM.
* FIXED: When using filters on items in a carousel post upload, clicking on the thumbnails in the list could end up applying the wrong filter.
* FIXED: When toggling enabled filters in Preferences, the upload window wouldn't always immediately reflect the correct selections.
* FIXED: "New Post" notifications weren't working correctly if there was 1 new post between automatic feed refreshes.
* FIXED: A potential fix for getting stuck with the preloader when reposting items.
* FIXED: An issue getting stuck on login when receiving Instagram security checkpoints on the login window.
* FIXED: Rewrite of internal database saving to resolve extremely odd/rare database inconsistency issues.
* FIXED: Multiple issues with editing tags on existing media.
* FIXED: Fixed updating media tags when they are only moved in position.
* FIXED: Touch bar buttons were not highlighting when user tags / sharing / disabling comments.
* FIXED: An error uploading / updating posts if you tagged a location that contains a quote character in its address.
* FIXED: A rare edge-case where it becomes impossible to log out of an account if Flume crashed during a session time out and left the database in an inconsistent state.
* FIXED: A potential fix for an issue with the large preview window not being destroyed correctly.
* FIXED: An issue when using the scale adjustment on photos that exceed the IG aspect ratio requirements.
* FIXED: The headers in activity and profiles didn't appear correctly in Split-View mode.
* FIXED: Menus from buttons in the titlebar area would not appear in the correct position when in Split-View.
* FIXED: An edge-case where two titlebars could appear together when you clicked to push new content, but at the same time clicked a tab button in the menu to switch to a new view.
* FIXED: The conversation title bar would flicker when sending messages.
* FIXED: Improved performance when pruning / empty caches.
* FIXED: An issue where the titlebars could not show after pruning / emptying caches.
* FIXED: Improved some visual issues with headers losing their blurred backgrounds when push/popping.
* FIXED: A bug in profiles that made it impossible to click content towards the top when the header was collapsed.
* FIXED: An issue that caused erratic behaviour when popping back for the first time \(eg. scrolling to top of the profile\)
* FIXED: Drag-and-drop support of posts for macOS 10.14 Mojave.
* FIXED: The header on the pending conversations list wasn't aligned correctly.
* FIXED: The remove search bookmark button didn't appear for saved profiles.
* FIXED: A memory leak that could occur when logging out / session time outs.
* FIXED: The actions button on the pending conversations list won't appear if there are 0 pending conversations.
* FIXED: The save, URL and share options now adjust correctly for your archived posts to match the behaviour on the mobile apps \(you cannot view them in your browser or save them, though you can share them in a DM\).
* FIXED: Visual improvements to title bar borders, especially when changing design mode.
* FIXED: An issue where avatars could appear dimmed in the conversation headers.
* FIXED: A visual issue where the previous titlebar is hidden during the pop-back animation.
* FIXED: The translate bio button didn't hide when showing the suggested users drop-down.
* FIXED: The activity spinner could appear when showing the suggested users drop-down again.
* FIXED: The loading indicator could appear on the detail view for carousel posts even when the images/videos were downloaded already.
* FIXED: A concurrency issue when fetching the feed.
* FIXED: When an activity notification contained a link to the same user more than once \(eg. "username commented on a post that username tagged you in", it didn't highlight all the appearances.
* FIXED: The borders on the saved collection buttons didn't update when changing the design mode.
* FIXED: Ignored parsing of comments for ads and carousel ads \(this will remove "expected NSDictionary but receive NSArray" errors you would have seen in Flume's log file\).
* FIXED: The alignment and size of the follower/following search icons.
* FIXED: The view as grid/column menu items could appear even when on the login window.
* FIXED: An issue where all the liked posts didn't appear in column-view mode if you had less than 18 likes \(this is the default amount Instagram displays you on initial appearance\).
* FIXED: Long group chats with that weren't renamed would not clip in the conversation header.
* FIXED: Tilt-shift adjustment wasn't working correctly, and would also crash on Mojave if you tried to set the level down to &lt; 1.0.
* FIXED: A crash issue that could occur when updating the menu while switching between carousel posts.
* FIXED: The "pop" sound wouldn't always play when pull-down-to-refreshing.
* FIXED: An issue with messages being clipped if they included an emoji at the end of the sentence.
* FIXED: The older likes on a post didn't load due to Instagram API changes.
* FIXED: The search text could be clipped in the Go to User… search window when using the largest font size.
* FIXED: An issue where desktop notifications might not have appeared for newly received messages.
* FIXED: Clicking URLs on profiles would open the URL twice.
* FIXED: A bizarre issue with sound effects not playing on macOS Mojave if they are mono and less than a certain ms duration.
* FIXED: When searching conversations/participants, the „requested“ label would show erroneously for profiles you had requested to follow.
* FIXED: When playing videos in column view on a carousel post, clicking next/previous would make the play button reappear in the center.
* FIXED: Added error alerts and proper usage of the camera APIs on 10.14 Mojave.
* FIXED: Added error alerts when location services are disabled or access for Flume is denied.
* FIXED: Enabled the "hardened runtime", a new feature of 10.14 Mojave to verify software is free of malware.
* FIXED: When processing multiple video or invalid items in a carousel post, failure behaviour is much better and will ignore invalid items while continuing to process valid items.
* FIXED: If a video contained different length audio/video tracks, cropping that video might have shown an error during compression/rendering.
* FIXED: When opening multiple files in the upload window via the "Select" dialog, selected files were sorted in reverse alphabetical order.
* FIXED: When adding more videos to an existing carousel post in creation, the progress label did not factor in the previously added items into the progress count label eg. "3/2".
* FIXED: Emptying the cache is much faster than before, and much more reliable.
* FIXED: An edge-case issue where you wouldn't see the high resolution images after emptying the cache, because of some Instagram changes to URLs.
* FIXED: An edge-case issue where the content could be inset from the bottom even when the menu is set to appear on hover and is not visible.
* FIXED: When using the contextual menu to edit / share / repost a video \(or a carousel post that included a video\) from a grid-view \(eg. your profile\), and the high resolution still image had never been downloaded, the edit / share / repost window would show an empty preview image as it wouldn’t check it had been downloaded before opening the new window.
* FIXED: Multiple various miscellaneous crash fixes.

## 2.8.5.1

[_Release Date: July 31st, 2018._](http://blog.flumeapp.com/post/176480119491/flume-for-mac-2851)

* NEW: Added an ability to "sync" currently open upload windows, copying the caption, location, user tags, sharing settings, and advanced settings between other open windows.
* NEW: Added preferences in Upload Preferences to toggle pre-filling of caption from IPTC info.
* FIXED: A crash when saving user tagging edits.
* FIXED: The height of the user tagging window on the edit window wasn’t adapting to the actual image/video size.
* FIXED: The user tagging button was missing on carousel post editing.
* FIXED: Menu items didn’t work immediately after switching user accounts.
* FIXED: Restored clicking on avatar buttons to load the profile in the web browser.
* FIXED: Added the share icon to the top of profiles title bars when viewing your own profile.
* FIXED: Added link highlighting in the share window \(hashtags/usernames/urls\)
* FIXED: A crash when trying to show the error alert after getting a session time out.
* FIXED: When using the resize to fit button, the image preview in the upload window could have appeared blurry \(on the first try\).
* FIXED: An issue cropping secondary items in a carousel post that needed to be locked to a certain aspect-ratio.
* FIXED: Allow captions, bios, comments, messages to be selectable again.
* FIXED: Right-click menus on captions, bios, comments, messages, now include the custom menu items \(which is why selection was disabled in the first place\).
* FIXED: The private profile indicator wasn’t showing on profile previews immediately.
* FIXED: The translate menu item doesn’t appear if there’s a translation available from Instagram \(for captions and biographies\)
* FIXED: The Flume main window won’t force itself to reappear if you wake from sleep and it was closed or minimized before sleeping.
* FIXED: The actions button was missing on sponsored posts in the feed.
* FIXED: Loads of workarounds and potential fixes for some really rare and odd crashes on older macOS versions.
* FIXED: An edge-case where the existing user tags might not appear on first appearance.
* FIXED: An issue when reposting carousel videos that would get stuck if a transcode timeout occurred.
* FIXED: An issue with the titlebars when using the Cmd+Shift+F "global" Flume shortcut to jump to the search field.

## 2.8.5

[_Release Date: July 24th, 2018._](http://blog.flumeapp.com/post/176228638006/flume-for-mac-285)

* NEW: Carousel posts can be swiped with a mouse gesture when in column view mode or on the detail view.
* NEW: Video uploads can have their volume adjusted \(or muted entirely\).
* NEW: Videos can now be muted/unmuted when playing. The preference is saved for future use and persists between app relaunches.
* NEW: Live-previews of border colour changes and appearance when resizing photos to fit in the cropping window.
* NEW: Added a preference to enable macOS' automatic spell checking \(for captions, comments, and messages\)
* NEW: Flume Pro users can export edits to their photos/videos without posting or creating a draft.
* NEW: Profiles now collapse headers, providing more height for content as you scroll down.
* NEW: You can now trim videos in the upload window. The 3-60 second selection limit still applies, however you are able to fine-tune and trim your video selections.
* NEW: Added support for Little Snitch's Internet Access Policies. If you have Little Snitch installed, more information will be provided about the purpose of each remote server that Flume communicates with, and what will occur if you decline the connection.
* NEW: Support for HEIC \(iPhone X\), TIF and TIFF photos.
* NEW: More IPTC information will be pre-filled on uploads: titles and descriptions of videos, keywords will be converted into \#hashtags, and tagged people in photos will be also listed in the caption.
* NEW: The number of tagged users in a photo post are now marked \(max. 20\)
* NEW: Hashtags from previous uploads are now displayed in groups in the upload/edit/comment popovers. This allows you to reuse all the hashtags from your previous uploads much faster.
* NEW: Added a tagged posts filter to activity notifications.
* NEW: Added like/unlike animations on shared photos/videos/posts/hashtags/locations.
* NEW: You can now double-click shared photos/videos/posts/hashtags/locations.
* NEW: Conversation headers now show avatars.
* NEW: Shared media posts now show the caption preview to be consistent with the mobile IG apps.
* NEW: You can toggle bookmarks of conversations from the contextual menu, macOS menu bar, and Touch Bar \(from the conversations list\).
* NEW: When loading more comments, the newest comment is highlighted briefly so you can tell which comments just loaded.
* NEW: Support for link messages that don’t have image previews. Test it out by sharing a Google Maps link in a conversation.
* NEW: You can double click to like text messages \(if Instagram has enabled it for your account\).
* IMPROVED: Draft files will now store cropped versions of photos and restore accordingly when opened. Carousel post draft files with photos will no longer require re-cropping upon open resulting in much faster opening times.
* IMPROVED: You can now open multiple draft files \(max 10 at a time\).
* IMPROVED: Hashtags, usernames, and links when writing captions are now highlighted and clickable.
* IMPROVED: Duplicate hashtags and usernames are highlighted when writing captions.
* IMPROVED: A massive internal refactor to improve multi-threaded performance throughout.
* IMPROVED: You can now choose a much more refined cover image for video uploads.
* IMPROVED: The layout of the login window when entering the 2FA SMS code in German.
* IMPROVED: Added support for more push notification alerts.
* IMPROVED: Enforcing a square crop no longer requires holding the SHIFT key and can be toggled via a button.
* IMPROVED: Multiple improvements to the VoiceOver and accessibility behaviour.
* IMPROVED: You can now use the default 1Password browser extension keyboard shortcut \(Command + Backslash\) on the login window.
* IMPROVED: The readability of messages with links in dark mode.
* IMPROVED: Hiding an activity notification, deleting media, deleting saved collections and deleting conversations will refresh the table immediately instead of blocking the app while waiting for the success/failure of the network request.
* IMPROVED: The licence activation process no longer displays your name/email field until you verify your licence code. Your currently activated name and email address are displayed also.
* IMPROVED: A warning will display if you have installed multiple versions of Flume \(direct and Setapp\).
* IMPROVED: A warning will display if you try to activate a Flume Pro licence, but you have the Setapp version of Flume installed.
* IMPROVED: Reduced the volume and delay of the button click sound effect.
* IMPROVED: Full-screen is now disabled, while still allowing Split-View on macOS 10.11 and later. To continue using Split-View, hold the OPTION key while long-pressing on the zoom \(maximize\) button.
* IMPROVED: Maximum video size increased to 400MB to accomodate a 60-second video encoded with an average 5.5mbps bit rate.
* IMPROVED: The "Resize to Fit" button will now work with carousel posts, making it much easier to quickly mix portrait/landscape items together, and will force any image to resize to the correct dimensions.
* IMPROVED: Tagged users in a photo will be marked when searching for more users to tag in a photo.
* IMPROVED: Moved the "Take a Photo" to the contextual menu to speed up the upload process with one less click.
* IMPROVED: You can click anywhere above a shared post/hashtag/location to view the shared content.
* IMPROVED: Profile, location, and hashtag previews now have borders around image sections.
* IMPROVED: When reposting a carousel post that needs to generate previews, more indication as to the progress is provided \(eg. „2/8“\)
* IMPROVED: Link messages now show more text in the title/summary and are resizable with the message.
* IMPROVED: The large preview window content will update as you navigate with the keyboard on the activity view.
* IMPROVED: The push notification status now uses icons as well as colour for colour-blind users.
* FIXED: Extremely wide or tall images/videos can be cropped / tagged correctly on smaller resolution displays.
* FIXED: The resize to original button appeared incorrectly on the upload window, or sometimes did not appear after cropping an item.
* FIXED: The tagging window will now correctly use the currently cropped region of the photo \(if applicable\).
* FIXED: Email addresses containing hyphens can now be used for log in.
* FIXED: An issue that would cause tagged user information and tagged locations to get lost in draft files between app relaunches or database resets, thus causing an upload failure.
* FIXED: The pending message indicator wasn’t the right colour based on design mode.
* FIXED: When sending a message, the entire table of messages no longer reloads when the message is successfully delivered.
* FIXED: When a message failed to send via real-time chat, the retry button didn’t appear.
* FIXED: The appearance of the switch to business profile window didn’t animate correctly.
* FIXED: When switching from a business to personal profile, the profile menu would not update to reflect the change.
* FIXED: The list of managed FB Pages didn’t appear when trying to switch to a business profile.
* FIXED: An issue where multiple "Session timed out" alerts could appear.
* FIXED: An issue that could cause the feed to load incorrect items after multiple subsequent refreshes.
* FIXED: Improved the behaviour of activity cells, including hover and click-throughs.
* FIXED: Support for 1Password 7 on the login window.
* FIXED: The pending message indicator didn’t fade in/out nicely.
* FIXED: The unread conversation indicator would appear for conversations where the last message was a story/temp message, which you can’t see yet as Stories / temp. messages aren’t supported.
* FIXED: Handle an edge-case where the upload window could become stuck when uploading carousel posts.
* FIXED: An issue where videos that were taken with a device that was rotated when filming would cause Flume to incorrectly assume the correct orientation.
* FIXED: The "Crop" button in the cropping window will update to "Done" if you have selected the entire area of the source photo/video.
* FIXED: A display issue when sending a URL link as a message.
* FIXED: Fixed sharing using the Share Extension in Photoshop CC 2018.
* FIXED: An issue where the Share Extension could get stuck when trying to share from another app with a file type that it doesn't support.
* FIXED: A scrolling issue when replying to threaded comments.
* FIXED: Restored the "follows you" label when viewing lists of following users.
* FIXED: Search bookmarks are no longer lost when pruning the internal database.
* FIXED: The "Details" heading could appear for chats that aren't group chats.
* FIXED: When cancelling bookmark imports, a success message would still appear.
* FIXED: The list of bookmarks will no longer jump to the top when scrolling to the bottom of search bookmarks.
* FIXED: Pagination for follower lists.
* FIXED: Removed the potential flickering of images when loading older content.
* FIXED: Users already tagged in a photo are highlighted when searching to tag another user.
* FIXED: The position of the unread message indicator for conversations with multiple participants.
* FIXED: Previously failed / empty messages are no longer displayed.
* FIXED: An issue when trying to play videos from the feed in the large preview window.
* FIXED: A memory issue / hang that could occur if a network error failed when trying to download the high resolution version of a video  via the large preview window.
* FIXED: An issue where the app would not respect the "Hide" checkbox for apps that launch at login, if you were using Flume in "Menu Bar only" mode.
* FIXED: Error messages that occurred during video upload weren't displayed.
* FIXED: A hanging issue when trying to create a carousel post.
* FIXED: Video container files that contained a mismatch of audio/video tracks would cause cropping to fail.
* FIXED: An issue where the conversations activity indicator and Dock icon would remain badged despite no unread messages.
* FIXED: The reply comment field resets correctly after sending a comment.
* FIXED: A bug that could cause "\(null\)" comments to be posted when clicking on desktop notification alerts.
* FIXED: Dragging multiple files will now sort by filename \(alphabetically and numerically sorted\), rather than creation date.
* FIXED: The profile suggestions section would appear when unfollowing a user instead of only when following.
* FIXED: Related tag feeds that contained non-ASCII characters would not load.
* FIXED: The posts count will update immediately when deleting a post from your Profile.
* FIXED: An issue where some times would not appear in your feed if you unarchived them.
* FIXED: An issue where you could try to repeatedly request older content multiple times.
* FIXED: The conversations list is refreshed after accepting a pending message request and popping back.
* FIXED: Security checkpoints will no longer display a confusing alert, and will also detect when you've completed the security checkpoint and close the pop-up browser window automatically.
* FIXED: An issue where the saved sharing options would not restore after a relaunch on the first upload window.
* FIXED: An issue where failed messages sent via real-time did not indicate they failed to send, nor show a retry button.
* FIXED: Clicking on the avatar in the user search results popover did nothing.
* FIXED: An issue where the loading indicator could appear incorrectly on the large preview window.
* FIXED: The colour of the scrollbar scrollers will adjust based on the design mode \(light/dark\).
* FIXED: If disconnecting from the messaging server takes too long when quitting, Flume will force an app termination.
* FIXED: An issue where the default cover image frame of a video would not be chosen.
* FIXED: An incorrect placeholder was displayed when you responded to all pending follow requests from your profile.
* FIXED: A missing placeholder when viewing a profile that has no tagged posts.
* FIXED: An edge-case issue that would not show pending message requests in your Activity feed if you had no activity \(for new accounts\).
* FIXED: The menu will be forced to hide / show when you change your menu visibility preferences.
* FIXED: When saving a draft but cancelling the save dialog, the current contents could not be saved until another change was made.
* FIXED: Multiple miscellaneous memory leaks and performance improvements.
* FIXED: Added support for loading older comments after an API change by Instagram.
* FIXED: A memory issue that affected macOS Yosemite.
* FIXED: An issue where top post insights would not show thumbnails of carousel posts.
* FIXED: An issue where the gender percentage pie chart would clip the value labels.
* FIXED: When uploading a carousel post, the desktop notification will now show the correct text and a thumbnail preview.
* FIXED: Missing filter names when scrolling through upload filter preferences.
* FIXED: Progress indicators animate in/out smoothly when sending messages.
* FIXED: An issue where a conversation could scroll to the bottom twice when another user in the conversation switched between typing and not typing.
* FIXED: Failed uploads of photo/video in a conversation if no media had previously been shared in that conversation before.
* FIXED: A database issue when trying to reduce count/view values below 0.
* FIXED: An issue when dragging user tag buttons on the upload / edit windows that would remove the tag instead of adjusting the position.
* FIXED: An incorrect large preview window size when opening/closing.
* FIXED: An issue where headers might not update their design style \(light/dark mode\) on reappearance.
* FIXED: The remove saved search button did not adjust when changing design mode.
* FIXED: Added a verified profile badge to profile previews and adjusted position of usernames when no name exists.
* FIXED: Update the comment count on a post immediately when deleting comments.
* FIXED: An issue where deleting the last comment on a post would not reduce the comment count to 0.
* FIXED: The "Delete Comments" menu item will only appear if there's comments, or if comments are enabled.
* FIXED: The following status on a blocked account might appear as if it was being followed. 
* FIXED: The follow button would show on blocked profiles when it should be hidden. 
* FIXED: A crash when the profile suggestions view tries to display a user with no username.
* FIXED: The profile view is immediately refreshed when unblocking a user.
* FIXED: Multiple visual improvements to shared media, photos, videos, hashtags, locations and user profiles in conversations.
* FIXED: Refresh the "View" menu after toggling a saved search bookmark via the buttons in the titlebar area, as opposed to menu or keyboard shortcut.
* FIXED: When receiving a new message via real-time messaging and viewing the conversation list, the timestamp on the conversation didn't update.
* FIXED: The unread message indicator did not show if you were sending messages to an account that has both the sender and recipient added as accounts in Flume.
* FIXED: Improved memory usage and animation of title bar views, and various issues in refreshing current like/saved status.
* FIXED: Missing thumbnail/preview images when consecutive and identical shared posts/hashtags/locations are sent.
* FIXED: Safeguards around all API parsing, to avoid unexpected situations when Instagram API results are changed to invalid or strange values.
* FIXED: The load more row would randomly drawing a large circle when scrolling quickly to the bottom of the feed.
* FIXED: Fixed clipping of the "Help spread the word" button in Russian.
* FIXED: Typing diacritics via the macOS long-press popover would cause double characters to be typed.
* FIXED: The message section headers could sometimes disappear when resizing the window.
* FIXED: Previously deleted one-on-one conversations could reappear if that user is considered by Instagram a "recommended" recipient. 
* FIXED: Added support to handle security checkpoints where you must confirm if a log-in from a certain location was you or not.
* FIXED: An edge-case where multiple security checkpoint alert dialogs could appear.
* FIXED: Activity notifications wouldn’t always filter correctly for "likes".
* FIXED: Handle and workaround for an Instagram API bug for displaying the reason certain media cannot be promoted \(eg. too low resolution\).
* FIXED: The items in an pop-up button \(eg. share to facebook\) would appear grey instead of black.
* FIXED: An issue where newlines would appear as „\n“ when sharing posts to Facebook.
* FIXED: An issue where the user search popover in the upload window would not re-appear in certain edge-cases after pressing backspace.
* FIXED: Usernames that looked like websites \(eg. username.org\) would appear as blue in activity notifications instead of white.
* FIXED: When switching between accounts on the activity tab, the activity from the previous account would appear momentarily.
* FIXED: Dates would not use the language Flume is set to, and would default to the current user’s locale resulting in potential mixes between languages.
* FIXED: An edge-case issue when switching between accounts where conversations could show the wrong avatars in a group conversation in the conversations list.
* FIXED: The position of the avatars wasn’t consistent, notable when searching for conversations/recipients.
* FIXED: Filter out the current user from user search results to workaround a strange API issue \* for some reason Instagram lets you message yourself if you search for your own profile.
* FIXED: The ESC key didn’t behave consistently in the search header, and in the conversations search header.
* FIXED: Alignment of the verified badge in the profile header view, when a profile had an emoji in the name.
* FIXED: You can long-press avatars in shared posts.
* FIXED: "Shared a link" labels are removed for consistency with the mobile IG apps.
* FIXED: "Shared a photo/video" labels are now „Shared a post“ for consistency with the mobile IG apps.
* FIXED: When someone unliked a text message, the avatar was not removed.
* FIXED: The send button in the compose message area was enabled by default even when there is no current message.
* FIXED: Some audio files were missing from the app \(easter egg…\)
* FIXED: If scrolled up in a conversation and someone liked an item in the conversation, the unread avatar indicator would appear as if a new message had been received.
* FIXED: The up/down arrows in the detail view title bar would not work correctly if you were viewing media from your saved feed.
* FIXED: Added support for push to reveal \(swipe gesture\) for explore feeds \(in column view\) and profile feeds \(in column view\).
* FIXED: You couldn't push to reveal \(swipe gesture\) more content when you were deeper in the view hierarchy.
* FIXED: When a message has been selected by the keyboard, and then sending a new message, the previous selection was not deselected, meaning the next arrow key press would jump you back to where you were last.
* FIXED: The like/unlike contextual menu action wasn’t choosing the correct action.
* FIXED: When liking a text message that causes a change in the row’s height, the table didn’t redraw immediately.
* FIXED: When using the keyboard to select a message, and liking it via the menu, menu bar, or Touch Bar, the next arrow up/down selection would be incorrect.
* FIXED: Some edge-cases where messages could clip text, especially if emoji’s are being used.
* FIXED: When unfollowing a private user, a network failure would cause the user to be re-added as a „requested“ following.
* FIXED: The download insights button would not re-enable if a network failure occurred further down the insights hierarchy.
* FIXED: An issue where network failures for content loading in popovers might not allow the error alert dialog to appear.
* FIXED: Usernames tagged in „Paid partnership with X“ in the detail view would not load the profile when clicked.
* FIXED: An issue where usernames like look like URLs would not correctly display the right formatting in comments.
* FIXED: The profile preview popover would not display any thumbnails for private profiles that you were following, or your own profile if you had it set to private.
* FIXED: Activity notifications that displayed 2 avatars might have changed the user’s in the avatars on subsequent refreshes/reloads.
* FIXED: Some scrolling and selection issues when jumping to a specific comment in the detail view.
* FIXED: Shared photos/videos in messages might not have have the correct preview dimensions.
* FIXED: The conversations view would sometimes not correctly scroll all the way to the bottom after you sent a new message.
* FIXED: Added lots more visible errors for network failures: liking/unliking posts, saving/unsaving media, following/unfollowing users, editing profile, editing password, editing tagging options, editing comment options, translation failures, accepting/ignoring follower requests, ignoring suggestions, hiding activity notifications, hiding search suggestions, inviting a Facebook user, linking/unlinking the addressbook, muting/unmuting conversations, leaving group conversations, failing to login with Tumblr, liking/unliking comments, setting profile privacy, updating conversation names and many more.
* FIXED: The comment resend button now matches the like comment button in size.
* FIXED: An issue editing a profile if the bio included a new-line.
* FIXED: Logout is disabled entirely if there’s an open upload window, as opposed to only checking if an upload is in progress.
* FIXED: An edge-case where multiple upload windows could appear when reposting a carousel post that we did not yet have all downloaded media for.
* FIXED: Cancelling a video in a carousel post repost that was rendering would not completely stop the process.
* FIXED: You could still interact and type or click in caption text view when a blocking operation \(upload, save, load, configure, export, render etc\) is in progress.
* FIXED: Highlighting a newly added comment might have flickered on/off.
* FIXED: When reposting a post that already had a long caption, it’s possible the caption would go beyond 2200 characters when the \#repost @username text was added to the caption. Typing when in this situation would cause an exception to occur, and the caption count label to not appear red.
* FIXED: The caption max character count of 2200 was not being applied correctly on the edit window.
* FIXED: When adding a secondary account, the close button could appear on hover unnecessarily.
* FIXED: Logging out is allowed even if there’s upload windows open, as long as there’s still 1 account added.
* FIXED: Sina Weibo was still visible in the Linked Accounts menu.
* FIXED: The „User“ macOS menu bar item didn’t always appear when viewing profiles.
* FIXED: The large preview window animation frame didn’t work correctly on the activity view if you were a business user, or if you had a pending friend request.
* FIXED: An issue when editing profiles if the biography contained \(or you added\) a newline character.
* FIXED: In grid-view, it was possible that the like/save indicator would still animate in/out when the network request had actually failed.
* FIXED: When viewing the feed with no media details, it was possible to click the username / location / sponsor label even though you couldn’t see it. 
* FIXED: A crash on Yosemite when adding an account from the Preferences panel.
* FIXED: Disabled keyboard interaction in the upload window when something is in progress \(upload, load, save, etc\). You could get into a state when uploading a video if you pressed F or spacebar that the video would play. This also caused a crash on macOS 10.10 when the upload completed.
* FIXED: Any playing video will now pause if a preview profile/hashtag/location overlay \(long-press\) is shown.
* FIXED: Verified account indicators appear in conversations, conversation headers and similar account profile suggestions.
* FIXED: An issue when typing Korean in comment popovers.

## 2.8.4.2

[_Release Date: May 7th, 2018._](http://blog.flumeapp.com/post/173682359281/flume-for-mac-2842)

* FIXED: A remote change by Instagram would cause Flume to crash if your feed contained a specific type of sponsored post.

## 2.8.4.1

[_Release Date: April 22nd, 2018._](http://blog.flumeapp.com/post/173191884271/flume-for-mac-2841)

* FIXED: A remote change by Instagram would cause Flume to crash if an account has 1 pending message request. 

## 2.8.4

[_Release Date: January 24th, 2018._](http://blog.flumeapp.com/post/170072215851/flume-for-mac-284)

* FIXED: A remote change by Instagram would cause video uploads to time-out and fail during the transcode process. 

## 2.8.3

[_Release Date: November 17th, 2017._](http://blog.flumeapp.com/post/167593354386/flume-for-mac-283)

* NEW: Support for RAW, ARW, DNG, RAF, ORF and MRW photo files.
* IMPROVED: If there’s a database corruption, a visible alert will now be displayed to warn the user.
* IMPROVED: Activity shows multiple avatars for activity with multiple users.
* IMPROVED: Sharing options are now saved per user-account.
* IMPROVED: Sponsored posts will use the respective colour chosen by the author for the ad link.
* FIXED: Extra padding for „liked by“ labels in the feed view \(when Post Details set to „All“\)
* FIXED: Received pushed notifications are only logged when set to ‚Debug‘ level.
* FIXED: A crash when photos have invalid GPS coordinates.
* FIXED: An edge-case crash when selecting an invalid recipient.
* FIXED: Messages with no image previews for links are now displayed as regular text messages.
* FIXED: Search locations for non-latin characters.
* FIXED: Sharing to wrote Facebook Pages should be finally resolved.
* FIXED: Portrait photos / videos were resized to 1080px max height instead of 1080px max width.
* FIXED: The security checkpoint did not appear when having to confirm your last login.
* FIXED: Long-press large previews on activity fields didn’t download the correct resolution image.
* FIXED: Cancelling a download did not remove the activity indicator from the main window.
* FIXED: An issue which could cause the pull-down-to-refresh to be disabled if you selected the first item in the feed with your keyboard, then scrolled to deselect.

## 2.8.2

[_Release Date: November 7th, 2017._](http://blog.flumeapp.com/post/167249881366/flume-for-mac-282)

* FIXED: Sharing to Facebook Pages when you are an admin of multiple Pages could result in sharing to the wrong Facebook Page.
* FIXED: When scrolling through the feed, the order of items could rearrange as more content was loaded.
* FIXED: The "Logout all accounts" menu item in the Profile menu performed the wrong action.
* FIXED: The overlay when liking items with Post Details set to "All" was slightly incorrect.
* FIXED: The version label in the About window was clipped when using larger font sizes.

## 2.8.1

[_Release Date: November 6th, 2017._](http://blog.flumeapp.com/post/167202986591/flume-for-mac-281)

* FIXED: A database corruption issue due to accounts that aren’t switched to the new activity notification API. 
* FIXED: Push Notifications about Live are not displayed, since they can’t be viewed in Flume yet.
* FIXED: More Push Notification types are displayed.
* FIXED: Push Notifications encoding issue for non-latin languages.
* FIXED: An edge-case crash when trying to enable launch at login.
* FIXED: A bunch of rare misc. crashes
* FIXED: Pasting of captions which contained tab characters failed. They’re now stripped from the paste.
* FIXED: Clicking on desktop notifications didn’t do anything except for new messages.
* FIXED: The „@„ sign is permitted on the login window username field again.
* FIXED: When popping back, the table could scroll to the first item in the grid-view list.
* FIXED: Some Macs have invalid serial numbers \(logic board replacements etc\). Activating licences on these Macs will no longer cause a crash.
* FIXED: A hanging issue when editing large images \(20MP, 300DPI etc\).
* FIXED: Re-selection issues in some instances \(eg. after deleting a conversation\).
* FIXED: The „Liked By“ label was clipped on Yosemite sometimes.
* FIXED: An edge-case crash when logging out after having a corrupted database.
* FIXED: When cropping a photo then trying to edit, the crop was lost.
* FIXED: When typing multiple messages, the text field would clear when a pending message was successfully sent.
* FIXED: The initial GPS EXIF location wasn’t correctly displayed on the upload location window.
* FIXED: A crash could occur when the coordinates of a location are invalid.
* FIXED: The video cover image and camera windows have been redesigned to remove the overlapping controls.
* FIXED: When clicking Flume Pro activation links, the „benefits“ info didn’t disappear even though the licence code had been verified.
* FIXED: A few small memory leaks.

## 2.8

[_Release Date: October 31st, 2017._](http://blog.flumeapp.com/post/flume-for-mac-28)

**Important: This update of Flume moves to the secure macOS Sandbox. Please see the** [**Support Portal**](http://support.flumeapp.com/customer/en/portal/articles/2892460-flume-2-8-update-removed-my-accounts-data) **on what this means to your previous data.**

* NEW: Push Notifications \(opt-in\).
* NEW: Real-time conversations and messages.
* NEW: Comment threads.
* NEW: Favourites.
* NEW: Support for non-square carousel posts.
* NEW: Upload directly from Photos, Finder, and other apps that support the macOS Share menu \(must be enabled manually from System Preferences &gt; Sharing\).
* NEW: Bulk-delete comments.
* NEW: Customisable Flume main menu.
* NEW: Push Notification settings.
* NEW: Email and SMS notification settings.
* NEW: Launch Flume at login preference.
* NEW: View comment likes.
* NEW: Promotable media feed.
* NEW: Support for the updated "Discover Users" feeds.
* NEW: Shared photos/videos in pending conversations are now concealed by default to avoid unwanted content.
* NEW: A notifications badge will now appear when there are new activity notifications, listing the counts of new likes, comments, followers, tagged posts, and more.
* NEW: Support for blocked commenters.
* NEW: Support for commenting controls.
* NEW: Branded Content Approvals \(Business Profiles only\)
* NEW: Business Partners tagging \(select Business Profiles only\).
* NEW: Support for hiding activity notifications.
* NEW: One-click login.
* NEW: Hide \(mute\) users in your Feed without unfollowing them.
* NEW: Bulk-allow/decline pending conversations.
* NEW: Export conversations.
* NEW: Scale adjustment and custom border colour \(for photos only\).
* NEW: Repost Carousel posts.
* NEW: Download your own Carousel posts \(to a folder\).
* NEW: Editing user tags on Carousel posts.
* NEW: Inline commenting, via the "C" Hover Shortcut, contextual-menus, or Touch Bar.
* NEW: Hide photos from the Feed.
* NEW: Search nearby locations.
* NEW: Hide suggested searches.
* IMPROVED: Conversation searching now uses a remote instead of local search.
* IMPROVED: Switching accounts on the upload window is much easier.
* IMPROVED: Account data is locally encrypted for additional security.
* IMPROVED: Newly added comments are momentarily highlighted.
* IMPROVED: Readability of messages on non-retina displays.
* IMPROVED: Branded content \(paid partnerships\) are now displayed.
* IMPROVED: Large Emoji messages.
* IMPROVED: Sending multiple messages in a conversation no longer requires waiting for the previous message to be successfully sent.
* IMPROVED: Sent comments now display as they are pending and can be re-sent in case of failure.
* IMPROVED: Paste support for uploads.
* IMPROVED: Captions and profile biographies can now be translated directly.
* IMPROVED: Added an option to hide the "PRO" menu item.
* IMPROVED: Updated to latest media insights.
* IMPROVED: Photos with IPTC caption data will now pre-fill the caption.
* IMPROVED: When a post is not promotable, a reason is now provided.
* IMPROVED: Added Touch Bar support for cancel/approve actions.
* IMPROVED: Switching accounts / quitting is cancelled if there are existing uploads in progress.
* IMPROVED: Logging can now be configured dynamically \(for troubleshooting\).
* IMPROVED: Typing while searching is much faster.
* IMPROVED: More search results can now be viewed when scrolling to the end of the list.
* IMPROVED: Text legibility on non-retina displays.
* IMPROVED: All locations are displayed when tagging a post, allowing easier selection.
* IMPROVED: Tagged location feeds will zoom in, to help give context to the geographic location.
* IMPROVED: Added an actions menu to the upload window \(replicates the "Upload" menu bar menu\).
* IMPROVED: Added an actions button to the Feed view.
* IMPROVED: Added an option to resend a 2FA code on the login window.
* IMPROVED: Downloads of your own posts are now performed in the background.
* IMPROVED: Pending conversations list is reloaded after allowing/cancelling a conversation.
* IMPROVED: Unread messages while viewing a conversation will now show avatar indicators that new messages are available and not force scrolling to the latest messages.
* IMPROVED: Switching design mode now animates smoothly.
* IMPROVED: Tagged business partners can remove themselves from tagged posts.
* FIXED: Quitting while upload windows are visible will no longer cancel termination.
* FIXED: Uploads and shared photos in conversations will no longer remove ICC color profile information.
* FIXED: Re-activations of Flume Pro licences on the same Mac no longer decrease the remaining activations.
* FIXED: Multiple issues related to Facebook login.
* FIXED: Recently used hashtags are correctly displayed as soon as the "\#" character is typed in captions and comments.
* FIXED: When switching accounts and upload windows were visible, the pre-existing sharing options were not cleared.
* FIXED: When logging in to an Instagram Business Profile account with a Facebook account that doesn't have the right permissions to share to the Instagram account's linked Facebook Page, a permissions error is now displayed.
* FIXED: Profile previews didn't display carousel post thumbnails, or indicate private profiles.
* FIXED: Profile, hashtag, and location previews did not scale thumbnails correctly.
* FIXED: Performance improvements after prolonged use of Flume.
* FIXED: "challenge\_required" login / upload errors are now handled.
* FIXED: Uploads would fail if captions were pasted with a TAB character.
* FIXED: The Flume Pro preferences panel wasn't always selected from the "PRO" menu bar item.
* FIXED: "Liked by" didn't update when changing the design mode.
* FIXED: Holding down the SHIFT key in the image cropper will update the drag-handles to indicate square aspect-ratio cropping is active.
* FIXED: The width of messages containing links would appear incorrect if the link was short.
* FIXED: Display issues when viewing the Feed in "Compact" post details mode.
* FIXED: Desktop notifications will no longer repeat, if Instagram still considers it a "New" notification and the activity feed refreshes.
* FIXED: The logged in user's avatar could switch to a play button momentarily when a specific activity notification was viewed.
* FIXED: A crash when trying to crop an image that is corrupt or missing.
* FIXED: Timestamps no longer display negative amounts.
* FIXED: You can now indicate you would like to opt-in for Stories Insights \(Business Profiles only\).
* FIXED: A crash when saving drafts on macOS Yosemite and El Capitan.
* FIXED: A crash when selecting consecutive  carousel posts in the Feed.
* FIXED: Tooltips now correctly appear on all accessible items.
* FIXED: An issue with readability of text buttons during hover.
* FIXED: A crash related to carousel posts with multiple videos.
* FIXED: Removed deprecated Flickr, Swarm, Sina Weibo and Mixi sharing options.
* FIXED: Added the Facebook Page terms link to the business profile convert flow and improved the behaviour of the continue button.
* FIXED: An issue with the height of edit / share windows on small resolution displays.
* FIXED: Non-square carousel posts no longer display stretched.
* FIXED: The Facebook Invite/Follow friends view did not appear after connecting with Facebook.
* FIXED: Added information regarding "sentry\_block" bans.
* FIXED: "Sent messages" are now sent to conversation recipients only when the message has been scrolled into view.
* FIXED: You can now login with the @ symbol in the username.
* FIXED: 8-digit backup 2FA codes can now be used.
* FIXED: Pasting of 2FA codes with spaces now strips the spaces out.
* FIXED: Various issues related to closing the large preview window.
* FIXED: The large preview window will ensure it's not displayed off-screen.
* FIXED: Improved re-selection of media in feed view after pop. 
* FIXED: Improved copying of text in comments. 
* FIXED: Timestamps no longer display on sponsored posts.
* FIXED: Removed the ability to report your own comments/messages/posts.
* FIXED: The login window can no longer be closed while login is in progress.
* FIXED: A crash when cancelling a video upload, or the network connection fails during upload.
* FIXED: Session timed out errors when trying to log-in to another account while an upload or refresh was in progress.
* FIXED: Comments can be disabled on promoted posts.
* FIXED: Messages related to Story mentions are correctly displayed.
* FIXED: Saved sharing options are not re-used between different accounts.
* FIXED: Logging in with a Facebook account that didn't have permission to share to the Instagram Business Profile now displays an error.
* FIXED: "Pull down to refresh" could be triggered on empty feeds.
* FIXED: Drag-and-drop from Photos is now supported.
* FIXED: Square-carousel posts did not crop videos correctly.
* FIXED: Large portrait photos/videos could display off-screen when cropping.
* FIXED: An issue that could result in a "blank" Flume Pro preference panel.
* FIXED: The Explore feed no longer refreshes twice after your location is determined.
* FIXED: Release notes on new versions will also appear if not logged in when updating.
* FIXED: The J/K keyboard shortcuts would interfere with a Dvorak keyboard layout.
* FIXED: Misc fixes related to keyboard/mouse selections and menu items.
* FIXED: Hundreds of other bits and bytes.

## 2.7

[_Release Date: July 27th, 2017._](http://blog.flumeapp.com/post/flume-for-mac-27)

* NEW: Carousel \(multi-post\) uploads! Additions to the Touch Bar, drafts, as well as opening multiple files/folders to support carousel posts.
* NEW: Saved collections! You can long-click the save button to quickly save posts to a new or existing saved collection, as well as via the Touch Bar.
* NEW: Two-factor authentication settings. Enable/disable two-factor authentication and retrieve backup codes.
* NEW: Archived posts.
* NEW: A new "PRO" macOS Menu Bar item with quick access to Flume Pro licence features.
* NEW: Login via email and phone number is now supported.
* NEW: New comment activity now includes an actions menu, for quick access to reply/delete/report new comments.
* NEW: The top likers on posts are displayed when using "All" for the "Media Details" preference setting.
* NEW: A "Copy to Clipboard" option added to the Share menus.
* NEW: Added a subscribe to mailing-list option.
* FIXED: In-progress video exporting, video compressing, and uploads, can now be cancelled.
* FIXED: Video upload reliability improved.
* FIXED: Multiple edit and share windows can be opened at the same time.
* FIXED: Reliability improvements to automatic background refreshes.
* FIXED: A crash that could occur during mouse swipe gestures.
* FIXED: An issue that could cause profiles to hide or quickly refresh content.
* FIXED: Improved the speed of opening and closing Large Preview windows.
* FIXED: The search indicator and icon didn't always reflect the search status when searching for locations to tag.
* FIXED: The image cropping window would not fit on low resolution displays.
* FIXED: The Flume Pro preferences panel now displays the licence code button outside of the actions menu.
* FIXED: An issue with an incorrect user tagging window size on uploads.
* FIXED: The photo cropping tool can now crop freely and not just 1:1 \(holding shift while resizing will a force 1:1 aspect ratio cropping region\).
* FIXED: The upload window title will display draft filenames if opened.
* FIXED: Cmd+S and File &gt; Save Draft… support for uploads.
* FIXED: An issue with dimmed feed items when using Page Up/Down keys.
* FIXED: Support for carousel items that have multiple captions \(ads\).
* FIXED: Movie playback issue when moving quickly between feed and detail views.
* FIXED: Don't show the follow button for posts when all media details are display.
* FIXED: "Media" is now referred to as "Post/s".
* FIXED: User tags on carousel posts correctly updated.
* FIXED: Slide animations when navigating carousel posts improved.
* FIXED: An issue that could make the "Username" text-field not clickable.
* FIXED: The typing speed in the upload / edit windows is improved.
* FIXED: Messages that contain newlines no longer display "\n".
* FIXED: Messages that contain links correctly include and display link previews.
* FIXED: An issue with cropping videos.
* FIXED: An issue that could cause video previews in upload windows to continue playing with no ability to stop/pause.
* FIXED: Multiple issues related to reliability of non-realtime messaging in Instagram Direct.
* FIXED: Updated placeholders and empty content styles.
* FIXED: Empty upload windows are re-used, when dragging files onto Flume's Dock icon or using the Open command.
* FIXED: A memory-leak related to pop-up "sheets".
* FIXED: Carousel posts now indicate the current "page" briefly.
* FIXED: An issue with detecting certain email addresses as clickable links.
* FIXED: Corrupt/invalid Flume draft files will now display errors.
* FIXED: Improved filter chooser for Touch Bar.
* FIXED: Improvements to location searching display when no results are found.
* FIXED: Display and handle errors when temporary blocked by Instagram for performing too many actions too quickly.
* FIXED: Upload caches are removed on launch/quit.
* FIXED: The App Store Licence Migrator Tool will no longer create a backup of Flume on the desktop.
* FIXED: Purchasing a Flume Pro licence will now open the default browser instead of the in-app window.
* FIXED: A potential fix for rare crashes related to text input.
* FIXED: Reduced the scrolling threshold to trigger a "pull-down-to-refresh".
* FIXED: New version notifications won't appear the next launch after you reset Flume.

## 2.6.1

[_Release Date: June 17th, 2017._](http://blog.flumeapp.com/post/161925446846/flume-for-mac-261)

* FIXED: A launch crash due to Instagram switching off their previous real-time messaging servers.
* FIXED: An issue that did not correctly refresh all feed sources when the automatic refresh timer triggered.

## 2.6

[_Release Date: April 17th, 2017._](http://blog.flumeapp.com/post/159654069151/flume-for-mac-26)

* NEW: Flume is no [longer distributed via the Mac App Store.](http://blog.flumeapp.com/post/159273138716/flume-leaves-the-mac-app-store)
* NEW: Added a new Flume Pro section, with licence verification, activation/deactivation, and a Mac App Store Licence Migrator \(direct version only\)
* NEW: An improved help documentation viewer, and all new extensive help documentation. Also available at [https://help.flumeapp.com](https://help.flumeapp.com)
* NEW: Edited captions will indicate they've been edited.
* NEW: Added support for opening directories \(with photos and videos inside\). Max limit of 10 files within.
* NEW: You can resize to fit any non-square photo, not just those that were beyond the aspect ratio requirements.
* FIXED: Improved the translation support and right-click behaviour for captions, comments and messages.
* FIXED: Added a 20 character group name limit.
* FIXED: An issue that could cause invalid user tags to be added to uploads, causing upload errors.
* FIXED: Improved hashtag/user/location search popover behaviour.
* FIXED: Appearance of buttons and dropdown buttons in popovers was greyed-out.
* FIXED: Clipped text on the two-factor authorisation explanation label when using the largest font size.
* FIXED: Contextual-menu issues when right-clicking bookmarked conversations.

## 2.5

[_Release Date: March 31st, 2017 \(Setapp\)._](http://blog.flumeapp.com/post/158945007616/flume-for-mac-25)

* NEW: Editing and filters! This is a huge change to Flume’s upload support with 23 Instagram filters \(replicated\) and 38 custom Flume filters, in addition to complete editing support. Filters and edits can be applied to photos as well as videos \(video edits cannot be made on macOS Yosemite however\). In addition, Touch Bar support has been added for all these features, and there is a new preference panel for configuring filters and adjustments.
* NEW: Drafts! You can now save all edits to a photo or video, the location, the caption, the tagged users, the cover image position for video uploads, which sharing networks to post to, and whether to disable comments. You can save drafts when closing the upload window after making changes, and open them by double-clicking .flume files, or dragging them onto Flume like a photo/video. Drafts will also switch you to the correct account that you saved the draft under, in case you are logged into another. Better yet, since these .flume files include all the information Flume needs to upload your post, you can share these files with colleagues.
* NEW: Support for multi-posts \(carousels\)! Viewing, editing, deleting and sharing is supported, with upload support coming in a future update.
* NEW: Repost support! Note that reposting of content from private profiles is not allowed unless you manage/own that account in Flume.
* NEW: Hashtag, location and profile previews! Simply long-press anywhere you see an avatar, hashtag or location to see quick previews.
* NEW: Profile suggestions! View accounts similar to ones you just followed or are viewing.
* NEW: Revamped search, including top search results.
* NEW: View recent and suggested searches in the Search view. You can also clear your recent search history from your Profile.
* NEW: Added hashtag, character and mention counts to upload and editing windows.
* NEW: Added two new viewing options in Column-View: Compact and Hover.
* NEW: Import and export your bookmarks.
* NEW: Sorting options for bookmarks \(Date Added, Date Added \(Reverse\), Alphabetically, Frequency\)
* NEW: Filter conversations to people you follow only, or only unread conversations.
* NEW: Filter activity to people you follow, comments, likes, mentions or new followers.
* NEW: Send and display “typing…” indicators in conversations.
* NEW: Search followers and following lists.
* NEW: Multiple upload windows can now be opened much more easily.
* NEW: Added a “flumeapp://userid/:id” URI scheme.
* NEW: Choose to view dates in relative or absolute formats.
* NEW: You can now use the J and K keys in addition to the arrow keys to move through content.
* NEW: Support for Instagram’s sensitive content flagging as well as displaying help/support options for users considering self-harm / suicide.
* NEW: Added a new Help menu, with all new documentation. This is also available at [https://help.flumeapp.com](https://help.flumeapp.com)
* NEW: A larger upload window, with completely revamped cropping tools that also allow for custom background colors, crop-to-fit.
* NEW: You can report posts, and they are no longer displayed.
* NEW: Sync the previously blocked media on login.
* NEW: Added an option to block one-on-one conversations from the conversation info view.
* NEW: Report carousel posts.
* NEW: Hide labels for Touch Bar items preference option. This allows you to see more buttons in the Touch Bar that might be otherwise hidden.
* NEW: Insights added for Stories.
* NEW: You can now double-click \(or right-click\) to like shared messages.
* NEW: Turn on/off post notifications. Only your phones can actually receive the push notifications, but you can still enable/disable them from Flume.
* NEW: Support for “Try Business Instagram Tools” and declaring your profile “Not a Business”
* NEW: The position of the Large Preview is remembered so you can position it where you like.
* NEW: Added Norwegian localization.
* FIXED: A crash that could occur on macOS Yosemite when a database migration fails.
* FIXED: Dismissing suggested users did not always work.
* FIXED: An issue that could cause duplicate desktop notifications when a recipient read your message.
* FIXED: An issue with posting images to new conversations.
* FIXED: An issue with Page Up/Down keys not deselecting the current selection.
* FIXED: Improved keyboard support when adding locations using the arrow keys.
* FIXED: Reduced photo size restrictions of 640x640px to 160x160px. Photos will be resized to a minimum size of 320x320px.
* FIXED: Display password reset dialogs when Instagram recommends you update your password.
* FIXED: Multiple issues related to cropping and uploading non-square vertical videos.
* FIXED: Improved QuickLook behaviour on upload windows.
* FIXED: Desktop notification and badging settings will now ignore new sponsored posts.
* FIXED: Listening for location updates did not stop when closing the upload window.
* FIXED: When selecting a shared post of a user, hashtag, location or media, you can now access all the relevant keyboard shortcuts for that item.
* FIXED: Placeholder text in the comment/message area was clipped instead of truncated \(for long languages such as German\).
* FIXED: An issue that could require you to press ESC twice to deselect selections in Grid-View.
* FIXED: An issue with selection flickering when using the keyboard to delete items in the Feed / Profile.
* FIXED: Added an explicit „Change Profile Photo“ button in profile editing because someone left a review saying it’s not possible. Hint: Press the avatar.
* FIXED: An issue with stuck large preview windows when repeatedly opening/closing large previews in conversations.
* FIXED: An issue when pressing ESC to try and close the avatar image picker that instead popped the view back.
* FIXED: Copy support for all cell types, and improved text selection for captions, messages and comments.
* FIXED: Engagement counts in business profile insights did not display.
* FIXED: Following and follower ordering is corrected.
* FIXED: A crash that could occur when deleting comments, posts, conversations, or messages.
* FIXED: Improved behaviour for “shortcode” URI links.
* FIXED: flumeapp:// links will now go to the correct area if Flume was not open.
* FIXED: “Main window” menu item is hidden when not logged in.
* FIXED: Login errors are now displayed rather than only being hidden in the log file.
* FIXED: A crash for macOS Yosemite users with multiple accounts.
* FIXED: A crash when trying to edit a post when the post is deleted while the edit window is open.
* FIXED: The payments window did not load correctly.
* FIXED: A crash when trying to edit promotions.
* FIXED: When deleting a promotion, Flume will jump back to the list of promotions correctly.
* FIXED: An incorrect label in menu’s for saving videos.
* FIXED: An issue that didn’t keep all windows on top when the option was enabled.
* FIXED: Flume will now report “unseen” and “seen” content to Instagram.
* FIXED: The Share panel will pop-up when using the Menu Bar to initiate sharing on an upload.
* FIXED: Removed click-and-drag for cropping photos that go beyond Instagram’s approved aspect ratio. You can still use mouse scrolling to position the cropping area.
* FIXED: The contextual “Copy” menu item didn’t do anything since the last change to enable the macOS Edit &gt; Copy menu item.
* FIXED: Various issues related to carousel posts display.
* FIXED: Workaround for Instagram’s latest API changes that broke thumbnails \(squashed or missing\) in grid layouts for Flume.
* FIXED: An issue when compressing certain videos.
* FIXED: The Large Preview window now remains in front of all other Flume windows.
* FIXED: Shared carousel posts will now appear in messages.
* FIXED: Profile headers no longer jump when loading in the biography details.
* FIXED: Allow line-breaks in comments.
* FIXED: An issue that caused unnecessary scrolling when replying to comments.
* FIXED: If Instagram is overloaded and reports HTTP 503 Service Unavailable errors, Flume will display this particular error, as it’s not Flume’s fault 😎
* FIXED: An issue that could have caused duplicate items to appear in a user’s feed, if they were recommended to you previously.
* FIXED: Removed app ratings prompt from Setapp versions.
* FIXED: An issue that could have caused accounts to be non-selectable in Preferences &gt; Accounts.
* FIXED: Text rendering on popovers improved, as well as the quick „Go to user“ window.
* FIXED: An issue with stuck large preview windows when repeatedly opening/closing large previews in conversations.
* FIXED: An issue when pressing ESC to try and close the avatar image picker that instead popped the view back.
* FIXED: Lots of asset updates and bits of UI polish, and tons of other little hidden behind the scenes fixes and memory improvements.

## 2.4.2

[_Release Date: January 21st, 2017_](http://blog.flumeapp.com/post/156030916356/flume-for-mac-241)

Re-release of Flume 2.4.1 with minor adjustments for Setapp release.

## 2.4.1

[_Release Date: January 22nd, 2017_](http://blog.flumeapp.com/post/156030916356/flume-for-mac-241)

* NEW: Respond to comments directly from notifications.
* NEW: Directly jump to comments from the notifications in the Activity tab.
* NEW: Save sharing options for Linked Accounts.
* NEW: You can now switch Facebook sharing options easily and more directly on the Upload window as opposed to the Profile &gt; Settings &gt; Linked Accounts &gt; Facebook menu.
* NEW: Disable commenting on uploads.
* NEW: Progress is displayed when compressing videos and uploading photos and videos.
* NEW: The title bar now animates leaving more space for buttons on the Detail View.
* NEW: Export your Insights data.
* FIXED: Downloading posts is removed for accounts you do not manage, in order to comply with Instagram’s copyright terms.
* FIXED: A crash when un-liking items in Grid View mode.
* FIXED: An issue that would cause conversations to display the wrong timestamp and move to the top of the conversations list.
* FIXED: An issue that would cause media that had failed to download be un-clickable.
* FIXED: An issue that would cause media that had failed to download to never re-appear, even after relaunch.
* FIXED: The profile switcher on the Touch Bar has been improved when using multiple accounts.
* FIXED: Multiple issues that could result in a crash when a menu had an invalid or empty selection.
* FIXED: An issue that could cause double video playback when using the Large Preview window from the Detail View.
* FIXED: An issue that could cause hashtag/user search popovers to appear even after typing a space character.
* FIXED: An issue that could cause button presses to still be performed even when click-and-dragging outside the bounds of the button.
* FIXED: An issue that would cause the first image/video selected in the Upload window to upload even when overwriting the selection with another.
* FIXED: When logging out, the main window is disabled with a progress indicator.
* FIXED: When deleting media from the Detail View, the content is immediately refreshed to remove the newly deleted item.
* FIXED: The Large Preview window on the Upload window is much faster at displaying/hiding for very large images.
* FIXED: An issue when uploading / editing a post with a location that included quote characters in the name.
* FIXED: Editing / deleting of posts that have been promoted or are currently promoted is now disabled.
* FIXED: An issue that caused the Services &gt; Upload with Flume menu item to not work.
* FIXED: Copyright takedown notices are handled in the Activity tab.
* FIXED: An issue that would display 4 rows instead of 3 under “Top Posts” sections.
* FIXED: Alignment issues with videos and buttons in Column-View mode when you are an Instagram Business user.
* FIXED: Multiple issues with the height of activity rows.
* FIXED: The bookmark \(save\) icon did not disappear when editing tagged posts on your profile.
* FIXED: The display position of the tagged posts menu was incorrect.
* FIXED: The “Learn More” button did not work on the tagged post options view.
* FIXED: An issue with sharing to Facebook Pages for Instagram Business profiles.
* FIXED: An issue with sharing to Facebook Pages for Instagram Business profiles when your Facebook account is an editor and not an admin.
* FIXED: An issue displaying thumbnails of shared profiles when the profile is a private user, or does not have more than 6 posts yet.
* FIXED: A crash when allowing or declining pending message requests from the message request list as opposed from the pending conversation itself.
* FIXED: A crash when a long video download operation completes some time in the future.
* FIXED: The group name placeholder text colour did not respect the Design Mode setting.
* FIXED: An issue where multiple similar notifications would replace the previous notification in Notification Center.
* FIXED: The poster frame slider on the Touch Bar did not correctly reflect the initial position.
* FIXED: Comments are updated to Instagram’s latest security methods.
* FIXED: Comments, captions, messages and biographies would fail to send/update when using “dumb quotes”.
* FIXED: Captions that use “invisible spaces” to space out captions will no longer remove these characters.
* FIXED: Video upload quality increased.
* FIXED: An issue that would cause video uploads to fail if navigating in the main window while a video was still uploading.
* FIXED: An issue that would cause video uploads to fail if the resulting compressed file size was too large for Instagram to accept.
* FIXED: An issue that would cause video uploads to fail due to a “transcode timeout” error.
* FIXED: Alignment of the video icon for shared videos in messages.
* FIXED: The Large Preview window for messages overlaid an empty video player.
* FIXED: Backslashes in passwords caused login to fail.
* FIXED: Avatar borders in the Touch Bar are always white, regardless of Design Mode setting.
* FIXED: The “Customize Touch Bar” menu item appeared for Macs that don’t have a Touch Bar.
* FIXED: Mentions in captions, messages and comments to usernames that were longer than 20 characters did not work.
* FIXED: An issue with the security checkpoint browser loading a “404 Bad Request”.
* FIXED: An issue that would cause the placeholder text to appear on the pending conversations list incorrectly.
* FIXED: Video uploads in conversations failed.
* FIXED: The pause button would not show when hovering over videos.
* FIXED: The view mode switcher has been removed from the Touch Bar when viewing a profile.
* FIXED: Added share to Facebook / Twitter options to help spread the word.
* FIXED: View the conversation info in a one-on-one conversation so you can click through to the other member’s profile.
* FIXED: An issue when linking accounts with Tumblr and Flickr.
* FIXED: Many more minor tweaks and improvements.

## 2.4

[_Release Date: December 24th, 2016_](http://blog.flumeapp.com/post/154810435611/flume-for-mac-24-update)

NEW: The new Touch Bar and Flume are a match made in heaven! Comprehensive support for all functions, and completely customisable, and localised in all languages.

* NEW: Flume now speaks a whopping 25 languages! Arabic, Chinese \(Traditional\), Danish, Dutch, French, Greek, Indonesian, Italian, Malay, Portuguese \(and BR\), Swedish, Thai, Turkish and Vietnamese speakers can now enjoy Flume in their native tongue.
* NEW: Get insights on your posts and followers. For the first time ever, now available on a desktop!
* NEW: Create Instagram Adverts and view your promotion results.
* NEW: Edit your profile, change your password, convert to a Business account \(and back to Personal\), configure your comment filters and edit your business contact information.
* NEW: Support for “Saved” posts including via our handy “Hover Shortcuts” - simply hover your mouse over items and tap “S” to save them! See our Support Portal for more info about our Hover Shortcuts.
* NEW: Like comments, and turn commenting on/off for your posts.
* NEW: Edit your tagged posts and remove them from your profile.
* NEW: View blocked users.
* NEW: Added a quick “Logout All Users” shortcut.
* NEW: Related hashtags are now shown when viewing the posts of another hashtag.
* NEW: Support for “Videos you might like”.
* NEW: Hover menu actions on comments - simply move your cursor to the edge of the comment to have quick access to reply/report/like/delete actions.
* FIXED: A crash when using the hashtag / user search popover in a comment / message on macOS Yosemite.
* FIXED: A crash when a video upload failed to post.
* FIXED: A crash when cropping videos on macOS Yosemite.
* FIXED: A crash related to specific types of content in the Activity &gt; Following tab.
* FIXED: A potential crash for messages that contained a shared hashtag or location.
* FIXED: A crash when deleting media from the Detail View.
* FIXED: A crash when switching between tabs quickly in the Activity View.
* FIXED: A crash when deleting a conversation via the contextual menu and there were pending message requests in the conversations list.
* FIXED: A crash when switching accounts while viewing a conversation.
* FIXED: A crash when downloading a video and switching to a new view before it completed downloading.
* FIXED: Various visual issues in conversations with lots of shared content.
* FIXED: Improved performance and fixed missing images in Activity.
* FIXED: Added a reset option in rare cases of needing to reset all Flume’s data - hold the OPTION key when launching Flume to use it.
* FIXED: Improved photo and video upload quality and stability.
* FIXED: Contextual-menus on labels are much improved, providing easier access to comment / message actions, and regular text \(copy / translate\) actions.
* FIXED: Added an emoji button to comment / message areas for quick access to the macOS Character Picker.
* FIXED: An issue that would cause Wacom tablets to handle clicks as drags instead.
* FIXED: An issue when writing captions/comments/messages with slashes.
* FIXED: Improved visibility of current keyboard selection.
* FIXED: Various video playback issues.
* FIXED: Improvements to not deselect selections when new content is reloaded.
* FIXED: An issue that could cause batch upload windows to not close.
* FIXED: An issue where menu’s could appear multiple times.
* FIXED: An issue with content scrolling to the top despite disabling the option in Preferences &gt; Feed.
* FIXED: An issue when trying to login with a password that contained a “ character.
* FIXED: An issue with photos not handling EXIF rotation tags resulting in 90º rotated photo uploads.
* FIXED: An issue where new message notifications could be duplicated.
* FIXED: An issue when sharing content to a conversation.
* FIXED: An issue when trying to close the QuickLook window and the main window was closed or minimised.
* FIXED: An issue where multiple notifications could fire all at once when multiple new media is downloaded.
* FIXED: An issue that could cause flickering of images in conversations.
* FIXED: An issue where the info button in group conversations didn’t align when resizing the window.
* FIXED: Now everyone can see what the upload features are, with the "PRO” badge removed from the menu.
* FIXED: An issue with an incorrect filename extension when trying to save a video.
* FIXED: An issue when quickly switching tabs in Preferences.
* FIXED: An issue with updating the avatar failing.
* FIXED: An issue when trying to edit the location on previously uploaded media.
* FIXED: An issue on macOS Yosemite that caused the Facebook login window to appear incorrectly.
* FIXED: An issue where Cmd+W would not close the QuickLook window.
* FIXED: An issue that would cause the last saved search bookmark to not be removable.
* FIXED: When viewing the followers / followings of a profile, the correct “Follows You” status is displayed.
* FIXED: An issue when blocking a profile that you used to follow.
* FIXED: An issue that could cause the QuickLook window to not close.
* FIXED: An issue when trying to send an empty comment or message.
* FIXED: Improved the placeholder message content when viewing an account that you’ve blocked.
* FIXED: Removed Facebook, Twitter and Flickr share options from the macOS system “Share” list. Use Instagram’s “Linked Accounts” feature to share posts, not macOS’s sharing feature.
* FIXED: An issue when trying to share an item without a message not being able to send.
* FIXED: An issue if you logged in with a Facebook account as the second account, linking it to the first account.
* FIXED: Sharing content will now use the ranked recipients correctly.
* FIXED: Added confirmations when “unsending” messages.
* FIXED: Comments now load in the same order and fashion as the official apps.
* FIXED: Support message types for shared media that was deleted, or if the shared content comes from a private profile that the recipient does not follow.
* FIXED: A scrolling issue with Logitech MX mice that would cause older content to never load.
* FIXED: Added a keyboard shortcut to switch to the main window.
* FIXED: Preferences and profile headers have much improved text rendering on non-retina displays.
* FIXED: Support for macOS Sierra’s window-snapping feature.
* FIXED: Added timestamps when selecting messages in conversations.
* FIXED: When exiting full-screen mode on macOS Yosemite, the main window would display nothing.
* FIXED: Message replies to Instagram Stories appear in conversations.
* FIXED: Avatar borders adjust if using macOS’ dark menu bar.
* FIXED: Sponsored posts now display similarly to the official apps.
* FIXED: Notifications will attempt to display the media /  user avatar before being displayed.
* FIXED: Display connection issues when trying to login.
* FIXED: An issue when trying to share to Sina Weibo / Odoklassniki.
* FIXED: When deleting the last item in a table, the placeholder will appear afterwards instead of an empty table.
* FIXED: Unlinking a business account from Facebook is now restricted.
* FIXED: Show permissions issues if trying to share to a Facebook Page that you’re no longer the admin of.
* FIXED: Errors are displayed if there is an issue with Facebook access.
* FIXED: Popovers correctly adjust the scrollbar area when switching Design Mode.
* FIXED: The last view is restored when relaunching.
* FIXED: An issue when quickly switching between Views causing incorrect content to appear for a different View.
* FIXED: While a video is compressing, you cannot try to select a new file.
* FIXED: Uploads that are cropped to square, but were zoomed out, will now display more clearly that they will upload with a white \(default\) border. Please use the cropping tool only if you wish to upload a square post.
* FIXED: Various clipped labels in different languages.
* FIXED: Various fixes for keyboard selections, scrolling via keyboard arrows, menu bar updates, and missing “click” sounds.
* FIXED: The Facebook location that posts will share to is now clearly indicated on the upload/share windows.
* FIXED: Notifications that were delivered are removed on relaunch, to make sure Notification Centre doesn’t get too messy.
* FIXED: Reduced the required minimum height for the Flume main window, for those on 11" screens.
* FIXED: An issue with long conversation names \(unnamed\) not clipping properly in the conversations header.
* FIXED: An issue that would not allow you to send media you wish to share after typing an optional message, then deleting it.
* FIXED: An issue with loading follower/followings lists.
* FIXED: An issue with saved bookmark searches disappearing after switching accounts.
* FIXED: An issue when trying to add an account you already added.
* FIXED: An issue when trying to upload an image that you then deleted / moved from its locations.
* FIXED: An issue that could have allowed simultaneous posting to occur.
* FIXED: Added easy access to open and search for Instagram logins in 1Password for Mac \(if present\).
* FIXED: An issue that would never allow you to see “Recent” Activity as it was refreshed twice.
* FIXED: Added support for “feedback\_required” issues - when Instagram believes your account is being used for spam etc.
* FIXED: Profiles now display addresses.
* FIXED: An issue with translations not updating.
* FIXED: Removed support for maps on profiles.
* FIXED: An issue where new conversations would not refresh after sending the first message.
* FIXED: An issue when uploading a post with a location that contained quote characters.
* FIXED: An issue where location searching did not always find the correct results.
* FIXED: An issue that would cause older messages in conversations to not load.

## 2.3

[_Release Date: September 15th, 2016_](http://blog.flumeapp.com/post/150462881826/flume-for-mac-23-update)

* NEW: Videos can now be uploaded in 1:1 square format, and also cropped in original format should they be too wide or tall.
* NEW: “Hover shortcuts”. Quickly like, comment, or zoom media using the L, C or Spacebar while hovering the mouse over items.
* NEW: “Show Media Details” now displays captions and likes/comment counts in Column-View mode.
* NEW: Added support for Ukrainian.
* NEW: Long-press support. Hold down the left-mouse on Media to toggle the Large Preview window.
* NEW: You can now browse items directly from the Detail View.
* FIXED: Sharing to a Facebook page from the Upload window now correctly shares to the correct page, rather than the Timeline.
* FIXED: High resolution images in portrait orientation did not upload correctly.
* FIXED: A crash that could occur randomly in the future, after viewing the location tagged posts of a user.
* FIXED: A crash that would occur when typing the \# character in the Upload caption.
* FIXED: A crash that could occur after pasting text in the caption text area.
* FIXED: A crash that could occur when using multiple accounts and pressing the “Post” button.
* FIXED: A crash that could occur when trying to deselect a selection.
* FIXED: Video duration labels were clipped and not always center-aligned.
* FIXED: Older conversations did not always load.
* FIXED: Avatars and labels would flicker when loading new content in user lists.
* FIXED: Conversation search results with a single match did not show the results.
* FIXED: A crash that could occur when following a user.
* FIXED: An issue that would sometimes cause avatars to not appear on first load.
* FIXED: A rare but potential crash that could occur when popping a view.
* FIXED: Shared media activity posts now show the preview of the image shared.
* FIXED: A fix for a potential crash, after trying to download the same avatar twice.
* FIXED: Clicking on the \(+\) button when trying to add recipients to a new conversation did not actually toggle their participation.
* FIXED: Timestamps were sometimes clipped in the conversations list, depending on language / time.
* FIXED: Searching conversations with 0 matches no longer shows a spinning indicator.
* FIXED: Some some rare crashes related to viewing the followers/following/requested followers on the Profile tab.
* FIXED: A potential crash that could occur when clicking on the tagged profile posts of a user.
* FIXED: A potential crash that could occur when trying to switch quickly between tabs.
* FIXED: You can now click anywhere in the “Your report has been updated” activity notifications, to view the report.
* FIXED: The menu on the avatar button on the Upload window showed the checkmark on the wrong account after switching accounts.
* FIXED: Removed the elasticity \(bounce-scrolling\) in the Welcome window change-log.
* FIXED: Fixed missing background on the Upload button when not a Flume Pro user. 
* FIXED: Replaced the missing emoji for 10.10 Yosemite in the “Upgrade to Flume Pro” dialog.
* FIXED: Pasting of text in the caption should now paste up until the maximum length properly \(2200 characters\).
* FIXED: A crash when trying to request content and the session had timed-out \(potentially from a previous crash\).
* FIXED: A potential crash when pressing the “Clear Caches” button and new content was being downloaded/updated.
* FIXED: An issue that could result in duplicated items in Profiles.
* FIXED: A crash related to emoji-hashtags you had composed as a comment or caption
* FIXED: The “Explore Instagram” button was not center-aligned.
* FIXED: Followers/following lists did not display all results.
* FIXED: Hashtags or locations that don’t have a “Popular” section, showed an empty header.
* FIXED: Left/Right arrows in Grid-View now wrap to the next/previous row.
* FIXED: The “Flume Pro” modal dialog has been removed.
* FIXED: The “Delete Comment” menu item appear for comments you didn’t author.
* FIXED: Translating will now translate into the app’s language, if overridden from the System Default language.
* FIXED: You can now create new Posts using Cmd+N.
* FIXED: The Poster Frame window did not display correctly in “Light” Design Mode.
* FIXED: Hashtag search popovers now show the post counts.
* FIXED: Disabled system text suggestions \(ESC\) on text-entry areas.
* FIXED: Locations are searched progressively and results now display addresses.
* FIXED: Lots of fixes related to Sponsored Posts.
* FIXED: Support for uploading extra wide images \(eg. panorama’s\)
* FIXED: Tagged location posts are no longer visible on user profile’s except your own.
* FIXED: Bookmarks are no longer lost on logout.
* FIXED: Emoji’s can be used for searching.
* FIXED: Session timeouts did not correctly display the Login window.
* FIXED: Hashtag search results containing emoji’s were clipped.
* FIXED: The Feed will display more content initially if set to Grid-View.
* FIXED: The “pop” sound played when switching to the Conversations tab.
* FIXED: The Detail View like/comment counts update more reliably.
* FIXED: After accepting a pending conversation, the message text area did not appear immediately.
* FIXED: Improved swiping gesture support.
* FIXED: Compatibility with macOS Sierra.

## 2.2.1

[_Release Date: Unreleased, was merged with the Flume 2.3 update_](https://flumeapp.tumblr.com/post/149716825616/flume-for-mac-221-update)

* NEW: Shared media activity posts now show the preview of the image shared.
* FIXED: A crash that could occur when following/unfollowing a profile.
* FIXED: A fix for a potential crash, after trying to download the same avatar twice \(race-condition\).
* FIXED: Searching conversations did not show results if there was just a single match.
* FIXED: An issue that would sometimes cause avatars to not appear on first load.
* FIXED: A rare but potential crash that could occur when popping a view.
* FIXED: Clicking on the \(+\) button when trying to add recipients to a new conversation did not actually toggle their participation.
* FIXED: Timestamps were sometimes clipped in the conversations list, depending on language / time.
* FIXED: Searching conversations with 0 matches no longer shows a spinning indicator.
* FIXED: Some some rare crashes related to viewing the followers/following/requested followers on the Profile tab.
* FIXED: Older conversations were not always downloaded and displayed.
* FIXED: A potential crash that could occur when clicking on the tagged profile posts of a user.
* FIXED: A potential crash that could occur when trying to switch quickly between tabs.
* FIXED: You can now click anywhere in the “Your report has been updated” activity notifications, to view the report.
* FIXED: A crash that results after you’ve logged in with a secondary account, due to an incorrectly parsed cookie.
* FIXED: The menu on the avatar button on the Upload window showed the checkmark on the wrong account after switching accounts.
* FIXED: Removed the elasticity \(bounce-scrolling\) in the Welcome window change-log.
* FIXED: Potentially fixed the crash affecting 10.10 users when typing newlines and \# or @ characters.
* FIXED: Fixed missing background on the Upload button when not a Flume Pro user.
* FIXED: Replaced the missing emoji for 10.10 Yosemite in the “Upgrade to Flume Pro” dialog.
* FIXED: Pasting of text in the caption should now paste up until the maximum length properly \(2200 characters\).
* FIXED: A potential crash related to pasting text.
* FIXED: A potential crash that would occur when the username/hashtag search popover displayed \(on 10.10 mostly\).
* FIXED: A crash when trying to request content and the session had timed-out \(potentially from a previous crash\).
* FIXED: A potential crash when pressing the “Clear Caches” button and new content was being downloaded/updated.

## 2.2

[_Release Date: August 27th, 2016_](http://blog.flumeapp.com/post/149339016961/flume-for-mac-22-update)

* NEW: Editing posts! Full support to edit captions, add/remove locations, and add/edit user tags \(for photos\).
* NEW: An all new Light Mode.
* NEW: Customisable font-size preference.
* NEW: Added support for Japanese, Korean, Polish, Czech and French.
* NEW: An improved login window, with support for Facebook account login and easy access to get Help.
* NEW: Link your profile to social media accounts! Support for Facebook, Twitter, Tumblr, Flickr, Weibo, Ameba, Mixi, VKontakte and Odnoklassniki.
* NEW: Share your media to your Facebook Page, or to your Timeline.
* NEW: Find and follow friends from Facebook and your Contacts.
* NEW: Support for overriding the System Default language.
* NEW: Portrait photos that are beyond the acceptable aspect ratio, can now be cropped during click-and-drag or scrolling, and do not need to be cropped to a 1:1 square ratio.
* NEW: You can now drag-and-drop or select up to 9 photos/videos and upload successively.
* NEW: Timestamps are now relative in the detail view.
* NEW: You can report user profile’s for spam.
* NEW: The Activity tab handles updated user profile reports.
* NEW: Complete support for business profiles contact information \(email, directions and calling\).
* NEW: Profile’s now display tagged location posts.
* NEW: Support for editing posts you are tagged in \(removing tags, or hiding from your profile\).
* NEW: Support for editing posts you’ve tagged at locations \(removing locations\).
* NEW: Profile’s now support tagged location posts.
* NEW: Support for profile’s flagged as requiring age-verification \(over 18\)
* NEW: Searches now show “X new posts”
* NEW: Edit / remove your avatar.
* NEW: Set your profile to private/public.
* NEW: Profile headers display the context and business category.
* NEW: You can indicate to “Show Fewer Posts Like These” for media that appears in the Explore tab.
* NEW: You can clear the image caches from Preferences.
* NEW: An “Upload” menu is displayed when the Upload window is front-most.
* NEW: Conversation cells now show image previews.
* NEW: You can now bookmark conversations and they are displayed first.
* NEW: Support for profile’s that disallow commenting on their media.
* FIXED: Double-click to like animation did not appear in grid-view when there was a section header.
* FIXED: Desktop Notifications will only show for new media that is downloaded from the Feed.
* FIXED: The comment count in the detail view was always 1 less than the correct amount.
* FIXED: Clicking on a Desktop Notification for multiple new posts did not bring Flume above all other windows.
* FIXED: A crash when clicking in empty feeds.
* FIXED: The preview images in the Activity tab did not always appear on the first load.
* FIXED: Sponsored Posts are now indicated in Grid-View.
* FIXED: Sponsored Post actions are now displayed in the contextual menu.
* FIXED: The “Media” menu would disappear when pressing the “Help” menu.
* FIXED: When a comment started with an emoji character, the font would display incorrectly.
* FIXED: The Acknowledgements button would not display on the About window.
* FIXED: An issue with encoding non-Latin characters in comments.
* FIXED: Clicking on the tabbed buttons in Search did not always work.
* FIXED: Clicking on a Desktop Notification will remove it correctly from Notification Center.
* FIXED: Popovers now have their arrows styled correctly.
* FIXED: The previously used hashtag list did not correctly detect all your previously used hashtags.
* FIXED: An issue that would not display all the comments in the Detail View.
* FIXED: User preferences are no longer removed when logging out.
* FIXED: The activity indicator did not always disappear after submitting a comment.
* FIXED: The ESC key deselected your selection in Grid-View when the QuickLook window was visible.
* FIXED: Clicking on Desktop Notifications when Flume was closed did not correctly load the appropriate view.
* FIXED: The main window is positioned in the previously visible position when logging in again.
* FIXED: Liking an item from the Detail View before the thumbnail or high resolution image had downloaded, did not actually like the item.
* FIXED: Various issues related to images not always downloading in Grid View.
* FIXED: A crash that would occur after successfully uploading an item with the main window viewing a conversation.
* FIXED: Many improvements to the networking layer, keyboard navigation and selection, and menu bar updates.
* FIXED: A crash when typing the @ or \# character on OS X 10.10 Yosemite.
* FIXED: An issue uploading captions when pasting text from Microsoft Word that included line-breaks.
* FIXED: An issue that would show placeholder images in Grid View when resizing.
* FIXED: Various fixes to drag-and-drop saving of media.
* FIXED: Tagged users are no longer displayed on hover in the Detail View.
* FIXED: Liking items in Grid View via the contextual menu did not work.
* FIXED: Various issues with the badge counts for unseen items.
* FIXED: An issue that caused the View Mode switch to show the wrong background colour.
* FIXED: The video duration label was not center-aligned.
* FIXED: The close button was visible on QuickLook windows when the “Always Show Title Bar” option was enabled.
* FIXED: Closing the QuickLook window through the close button did not animate the window out.
* FIXED: Conversation searching did not find all results.
* FIXED: Pressing Cmd+F on the Conversations tab now jumps to the Conversation search text field, not the Search tab.
* FIXED: The logout keyboard shortcut was missing after removing all but one account.

## 2.1

[_Release Date: July 6th, 2016_](http://blog.flumeapp.com/post/146894777981/flume-for-mac-21-update)

* NEW: Improved scrolling performance and behaviour.
* NEW: Improved memory usage.
* NEW: The new sorting algorithm for user feed’s is now enabled. This fixes the issue of not being able to view more than 13 posts in the current version.
* NEW: A new preference option is available to display the username, avatar and location in column view by default.
* NEW: The activity tab is completely new - it is no longer a WebView and has support for displaying pending follower requests.
* NEW: Videos now display a small run-down counter to indicate the video duration.
* NEW: Support for Instagram’s Sponsored Posts.
* FIXED: Images in higher DPI \(240dpi, 300dpi\) no longer cause a blurry upload.
* FIXED: A crash that would occur when trying to upload on 10.10 Yosemite, either by selecting a file or dragging one onto the window.
* FIXED: A crash that would occur if you tried to type an invisible character.
* FIXED: An issue posting photos/videos when using the hashtag / username search popover.
* FIXED: When pasting in text that contains an ASCII quote, we replace it with an opening/closing quote character. This fixes issues when trying to post captions, messages or comments with pasted quotation marks.
* FIXED: Trying to compose new conversation with new user/s did not work. 
* FIXED: You can now remove accounts from Preferences &gt; Accounts even when you have just one account logged in.
* FIXED: When changing your password from another device / website, we handle session timeouts correctly and prompt you to log in again.
* FIXED: The verified badge image was misaligned.
* FIXED: The translation of the Service menu item was missing.
* FIXED: Liked animations on grid view cells is improved.
* FIXED: Desktop notifications for new posts did not show if Flume was on another virtual desktop/screen.
* FIXED: When switching the options for the menu bar visibility, hidden Finder windows would display.
* FIXED: Video’s would not play if the low and standard resolution were pointing to the same URL.
* FIXED: Video’s would show the thumbnail “stuck” behind as they played.
* FIXED: Cmd+Up/Down arrow behaves better.
* FIXED: Profile headers now include the context.
* FIXED: Cmd+Ctrl+F toggles full-screen mode again instead of switching to the Search tab.
* FIXED: The Flume Pro “trial” has been removed, due to confusion.
* FIXED: Scroll-wheel mice don’t show the old style scrollbars.
* FIXED: The QuickLook preview in the Upload window would zoom in too far for very large images.
* FIXED: When adding too many hashtags to a comment or caption, we display an error.
* FIXED: When pasting text that exceeds the maximum allowed amount, we paste up until the maximum amount instead of disallowing the paste entirely.
* FIXED: The Preferences &gt; Accounts window was resizable.
* FIXED: Improved behaviour in grid view for loading older content.
* FIXED: Infinite scrolling behaviour improved, in order to fetch new content earlier.
* FIXED: Various issues related to the last line of text getting clipped.
* FIXED: A crash on login if you had no internet connection, or the initial request failed.
* FIXED: Scroll-wheel mice did not pre-fetch content and relied on scrolling all the way to the bottom.
* FIXED: When switching tabs, the wrong title bar could appear.
* FIXED: Sending a like as the first message of a new conversation did nothing.
* FIXED: A crash when sending a photo/video as the first message of a new conversation.
* FIXED: If a user previously had a biography, website, or profile context, and later deleted them, the profile header view did not reflect the latest info.
* FIXED: A crash when trying to push to the detail view from a profile with an invalid keyboard selection.
* FIXED: A crash when pressing up/down/left/right arrow keys on private profiles, or when the profile had no posts.

## 2.0

[_Release Date: June 1st, 2016_](http://blog.flumeapp.com/post/145212126271/introducing-flume-20-and-flume-pro)

* NEW: Flume Pro.
* NEW: Upload support.
* NEW: Instagram Direct support.
* NEW: Curated recommendations
* NEW: Improved notification preferences.

## 1.2.2

[_Release Date: December 22nd, 2015_](http://blog.flumeapp.com/post/135435777181/flume-122-changelog)

* FIXED: Commenting, the Activity and Popular tabs failed to load due to changes from Instagram
* FIXED: Some inconsistencies with menu’s. Follow/unfollow state is correctly updated in the menu also.
* FIXED: An issue that could cause video’s to play in the QuickLook window as well as the main window.
* FIXED: An issue where audio from a previously playing video could still be heard despite no QuickLook window visible.
* FIXED: A bunch of very rare crashes reported by users.

## 1.2.1

[_Release Date: December 3rd, 2015_](http://blog.flumeapp.com/post/134286761751/flume-121-changelog)

* FIXED: An issue that caused the Activity stream to not load. Please log-out and log-in to make this work again.
* FIXED: An issue that caused the same account to be added when trying to add a different account. Please log-out and log-in to make this work again.
* FIXED: Fixed text legibility on non-retina displays.
* FIXED: An issue that caused the following status of a user to display incorrectly when clicking on their Followers.
* FIXED: A crash that occurred when long-pressing the back button in full-screen/split-screen mode.
* FIXED: A rare crash that could occur when trying to load the shortcut recorder control in Preferences.
* FIXED: A rare crash that could occur when opening the QuickLook window.
* FIXED: Improvements to the French localisation.

## 1.2

[_Release Date: November 25th, 2015_](http://blog.flumeapp.com/post/133540475551/flume-12-changelog)

* NEW: Added Spanish, French and Russian localisations.
* NEW: The popular tab infinitely loads from the bottom.
* FIXED: Videos would not play in the QuickLook window.
* FIXED: An issue that could cause some images in very rare cases to not appear in Column view.
* FIXED: Scrolling performance improvements.
* FIXED: A crash that could occur when using the keyboard to scroll to the last row in Grid View.
* FIXED: A crash that could occur in rare occurrences when updating the previously downloaded avatar of a user.
* FIXED: When liking a photo or video in column view, quickly scrolling away could cause the “liked” image to appear on the wrong media.

## 1.1

[_Release Date: November 15th, 2015_](http://blog.flumeapp.com/post/132692260871/flume-for-mac-11-update)

* NEW: Added Chinese \(Simplified\) localisation.
* NEW: Added a preference to always display the title bar.
* NEW: Added a preference to change the display behaviour of the menu bar \(always show, show on hover, show when scrolling up\)
* NEW: Support for full-screen and split-view on El Capitan \(10.11\)
* NEW: Added a preference to allow mouse hovering to “focus” media in column-view.
* NEW: Content now “infinitely” scrolls when reaching towards the end of the existing content without the need to trigger a scrolling threshold.
* NEW: You can now use keyboard shortcuts to add/remove bookmarks, follow/unfollow users, switch to avatar/biographies in profiles and between multiple accounts.
* FIXED: Images no longer morph to their correct size after displaying, as we now know the correct size of the image ahead of download time.
* FIXED: The quick user search search field did not allow “.” character to be typed.
* FIXED: The “Go to User…” label was clipped in German localisation.
* FIXED: Comments would sometimes fail to send when containing certain characters.
* FIXED: Scroll-wheel mice would not dismiss the focussed view when scrolling.
* FIXED: Incorrect accessibility localisations in the Activity tab.
* FIXED: Numerous improvements to fading-in of content.
* FIXED: Some memory leaks and improved retina scrolling performance.
* FIXED: Scrolling “knob” is now a little easier to notice, especially on darker images.
* FIXED: Sometimes a blurred image would appear above the content after resizing the window, or new content appearing.
* FIXED: Loading older content in content tagged with a location or a hashtag would not load more than ~20 items.
* FIXED: An issue with being unable to scroll profile headers.
* FIXED: An issue when the wrong title bar would appear when switching from/away from the Activity tab.
* FIXED: An issue where the wrong title bar would appear when switching to the Profile tab.
* FIXED: An issue that would cause blurry text labels on non-retina displays.
* FIXED: Focus mode animations are improved, especially with keyboard navigation.
* FIXED: An issue when saving videos that would assume they were photos.
* FIXED: An issue when dragging content from a profile overwriting the previous file.
* FIXED: Dragging a photo/video now requests the high resolution version and saves that to your drag location, instead of the thumbnail or lower quality resolution.
* FIXED: The video and liked icons were missing in grid view cells.
* FIXED: Saved Searches are now named “Bookmarks” and use a new icon.
* FIXED: “View as Column/Grid” appeared unnecessarily on the Activity tab.
* FIXED: An issue that stopped older content from loading after waking from sleep.
* FIXED: Improved and explained the rate limiting error from Instagram.
* FIXED: Media tagged in the Popular tab would all show the same, incorrect location.
* FIXED: Comments with nested \#hashtags\#with\#no\#spaces\#like\#this\#can\#now\#be\#clicked
* FIXED: The View menu item would not show the correct selection in certain cases.
* FIXED: Thumbnails in profiles no longer show white-borders.
* FIXED: QuickLook performance has been improved, as well as some issues related to its appearance/disappearance.
* FIXED: An issue with typing non-latin characters and emoji’s in comments and search fields.
* FIXED: An issue with not being able to use the arrow keys to move selection in a text field.
* FIXED: Switching accounts no longer repositions the window.
* FIXED: Added a placeholder graphic to help indicate content is still downloading.
* FIXED: Added a navigation history option to quickly jump to any previous point when pressing and holding down on the back button  in the title bar.
* FIXED: The window could still be dragged when the share menu appeared.
* FIXED: Show a nicer error message if the Activity tab fails to load.
* FIXED: An issue that caused the “Authorize” button on login to be un-clickable until scrolling down.
* FIXED: Disabled discrete GPU-usage \(where possible\).
* FIXED: An issue that caused flickering to occur on reload when using the Cmr+R / Refresh shortcut in the menu bar.
* FIXED: A crash that would occur if you had looked at the Search view and then switched accounts.
* FIXED: Added a forced reload when switching OS X user accounts.
* FIXED: Switching accounts keeps you on the same tab you had previously selected.
* FIXED: Many other miscellaneous improvements and crash fixes!

## 1.0

[_Release Date: October 12th, 2015_](http://blog.flumeapp.com/image/131027923266)

* Initial release

