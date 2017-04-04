# What's New in Flume

#### Flume 2.5

[_Release Date: March 31st, 2017 (Setapp). Mac App Store approval pending._](http://blog.flumeapp.com/post/158945007616/flume-for-mac-25)

- NEW: Editing and filters! This is a huge change to Flume’s upload support with 23 Instagram filters (replicated) and 38 custom Flume filters, in addition to complete editing support. Filters and edits can be applied to photos as well as videos (video edits cannot be made on macOS Yosemite however). In addition, Touch Bar support has been added for all these features, and there is a new preference panel for configuring filters and adjustments.
- NEW: Drafts! You can now save all edits to a photo or video, the location, the caption, the tagged users, the cover image position for video uploads, which sharing networks to post to, and whether to disable comments. You can save drafts when closing the upload window after making changes, and open them by double-clicking .flume files, or dragging them onto Flume like a photo/video. Drafts will also switch you to the correct account that you saved the draft under, in case you are logged into another. Better yet, since these .flume files include all the information Flume needs to upload your post, you can share these files with colleagues.
- NEW: Support for multi-posts (carousels)! Viewing, editing, deleting and sharing is supported, with upload support coming in a future update.
- NEW: Repost support! Note that reposting of content from private profiles is not allowed unless you manage/own that account in Flume.
- NEW: Hashtag, location and profile previews! Simply long-press anywhere you see an avatar, hashtag or location to see quick previews.
- NEW: Profile suggestions! View accounts similar to ones you just followed or are viewing.
- NEW: Revamped search, including top search results.
- NEW: View recent and suggested searches in the Search view. You can also clear your recent search history from your Profile.
- NEW: Added hashtag, character and mention counts to upload and editing windows.
- NEW: Added two new viewing options in Column-View: Compact and Hover.
- NEW: Import and export your bookmarks.
- NEW: Sorting options for bookmarks (Date Added, Date Added (Reverse), Alphabetically, Frequency)
- NEW: Filter conversations to people you follow only, or only unread conversations.
- NEW: Filter activity to people you follow, comments, likes, mentions or new followers.
- NEW: Send and display “typing…” indicators in conversations.
- NEW: Search followers and following lists.
- NEW: Multiple upload windows can now be opened much more easily.
- NEW: Added a “flumeapp://userid/:id” URI scheme.
- NEW: Choose to view dates in relative or absolute formats.
- NEW: You can now use the J and K keys in addition to the arrow keys to move through content.
- NEW: Support for Instagram’s sensitive content flagging as well as displaying help/support options for users considering self-harm / suicide.
- NEW: Added a new Help menu, with all new documentation. This is also available at https://help.flumeapp.com
- NEW: A larger upload window, with completely revamped cropping tools that also allow for custom background colors, crop-to-fit.
- NEW: You can report posts, and they are no longer displayed.
- NEW: Sync the previously blocked media on login.
- NEW: Added an option to block one-on-one conversations from the conversation info view.
- NEW: Report carousel posts.
- NEW: Hide labels for Touch Bar items preference option. This allows you to see more buttons in the Touch Bar that might be otherwise hidden.
- NEW: Insights added for Stories.
- NEW: You can now double-click (or right-click) to like shared messages.
- NEW: Turn on/off post notifications. Only your phones can actually receive the push notifications, but you can still enable/disable them from Flume.
- NEW: Support for “Try Business Instagram Tools” and declaring your profile “Not a Business”
- NEW: The position of the Large Preview is remembered so you can position it where you like.
- NEW: Added Norwegian localization.
- FIXED: A crash that could occur on macOS Yosemite when a database migration fails.
- FIXED: Dismissing suggested users did not always work.
- FIXED: An issue that could cause duplicate desktop notifications when a recipient read your message.
- FIXED: An issue with posting images to new conversations.
- FIXED: An issue with Page Up/Down keys not deselecting the current selection.
- FIXED: Improved keyboard support when adding locations using the arrow keys.
- FIXED: Reduced photo size restrictions of 640x640px to 160x160px. Photos will be resized to a minimum size of 320x320px.
- FIXED: Display password reset dialogs when Instagram recommends you update your password.
- FIXED: Multiple issues related to cropping and uploading non-square vertical videos.
- FIXED: Improved QuickLook behaviour on upload windows.
- FIXED: Desktop notification and badging settings will now ignore new sponsored posts.
- FIXED: Listening for location updates did not stop when closing the upload window.
- FIXED: When selecting a shared post of a user, hashtag, location or media, you can now access all the relevant keyboard shortcuts for that item.
- FIXED: Placeholder text in the comment/message area was clipped instead of truncated (for long languages such as German).
- FIXED: An issue that could require you to press ESC twice to deselect selections in Grid-View.
- FIXED: An issue with selection flickering when using the keyboard to delete items in the Feed / Profile.
- FIXED: Added an explicit „Change Profile Photo“ button in profile editing because someone left a review saying it’s not possible. Hint: Press the avatar.
- FIXED: An issue with stuck large preview windows when repeatedly opening/closing large previews in conversations.
- FIXED: An issue when pressing ESC to try and close the avatar image picker that instead popped the view back.
- FIXED: Copy support for all cell types, and improved text selection for captions, messages and comments.
- FIXED: Engagement counts in business profile insights did not display.
- FIXED: Following and follower ordering is corrected.
- FIXED: A crash that could occur when deleting comments, posts, conversations, or messages.
- FIXED: Improved behaviour for “shortcode” URI links.
- FIXED: flumeapp:// links will now go to the correct area if Flume was not open.
- FIXED: “Main window” menu item is hidden when not logged in.
- FIXED: Login errors are now displayed rather than only being hidden in the log file.
- FIXED: A crash for macOS Yosemite users with multiple accounts.
- FIXED: A crash when trying to edit a post when the post is deleted while the edit window is open.
- FIXED: The payments window did not load correctly.
- FIXED: A crash when trying to edit promotions.
- FIXED: When deleting a promotion, Flume will jump back to the list of promotions correctly.
- FIXED: An incorrect label in menu’s for saving videos.
- FIXED: An issue that didn’t keep all windows on top when the option was enabled.
- FIXED: Flume will now report “unseen” and “seen” content to Instagram.
- FIXED: The Share panel will pop-up when using the macOS menubar to initiate sharing on an upload.
- FIXED: Removed click-and-drag for cropping photos that go beyond Instagram’s approved aspect ratio. You can still use mouse scrolling to position the cropping area.
- FIXED: The contextual “Copy” menu item didn’t do anything since the last change to enable the macOS Edit > Copy menu item.
- FIXED: Various issues related to carousel posts display.
- FIXED: Workaround for Instagram’s latest API changes that broke thumbnails (squashed or missing) in grid layouts for Flume.
- FIXED: An issue when compressing certain videos.
- FIXED: The Large Preview window now remains in front of all other Flume windows.
- FIXED: Shared carousel posts will now appear in messages.
- FIXED: Profile headers no longer jump when loading in the biography details.
- FIXED: Allow line-breaks in comments.
- FIXED: An issue that caused unnecessary scrolling when replying to comments.
- FIXED: If Instagram is overloaded and reports HTTP 503 Service Unavailable errors, Flume will display this particular error, as it’s not Flume’s fault 😎
- FIXED: An issue that could have caused duplicate items to appear in a user’s feed, if they were recommended to you previously.
- FIXED: Removed app ratings prompt from Setapp versions.
- FIXED: An issue that could have caused accounts to be non-selectable in Preferences > Accounts.
- FIXED: Text rendering on popovers improved, as well as the quick „Go to user“ window.
- FIXED: An issue with stuck large preview windows when repeatedly opening/closing large previews in conversations.
- FIXED: An issue when pressing ESC to try and close the avatar image picker that instead popped the view back.
- FIXED: Lots of asset updates and bits of UI polish, and tons of other little hidden behind the scenes fixes and memory improvements.

<hr />

#### Flume 2.4.2

[_Release Date: January 21st, 2017_](http://blog.flumeapp.com/post/156030916356/flume-for-mac-241)

Re-release of Flume 2.4.1 with minor adjustments for Setapp release.

<hr />

#### Flume 2.4.1

[_Release Date: January 22nd, 2017_](http://blog.flumeapp.com/post/156030916356/flume-for-mac-241)

- NEW: Respond to comments directly from notifications.
- NEW: Directly jump to comments from the notifications in the Activity tab.
- NEW: Save sharing options for Linked Accounts.
- NEW: You can now switch Facebook sharing options easily and more directly on the Upload window as opposed to the Profile > Settings > Linked Accounts > Facebook menu.
- NEW: Disable commenting on uploads.
- NEW: Progress is displayed when compressing videos and uploading photos and videos.
- NEW: The titlebar now animates leaving more space for buttons on the Detail View.
- NEW: Export your Insights data.
- FIXED: Downloading posts is removed for accounts you do not manage, in order to comply with Instagram’s copyright terms.
- FIXED: A crash when un-liking items in Grid View mode.
- FIXED: An issue that would cause conversations to display the wrong timestamp and move to the top of the conversations list.
- FIXED: An issue that would cause media that had failed to download be un-clickable.
- FIXED: An issue that would cause media that had failed to download to never re-appear, even after relaunch.
- FIXED: The profile switcher on the Touch Bar has been improved when using multiple accounts.
- FIXED: Multiple issues that could result in a crash when a menu had an invalid or empty selection.
- FIXED: An issue that could cause double video playback when using the Large Preview window from the Detail View.
- FIXED: An issue that could cause hashtag/user search popovers to appear even after typing a space character.
- FIXED: An issue that could cause button presses to still be performed even when click-and-dragging outside the bounds of the button.
- FIXED: An issue that would cause the first image/video selected in the Upload window to upload even when overwriting the selection with another.
- FIXED: When logging out, the main window is disabled with a progress indicator.
- FIXED: When deleting media from the Detail View, the content is immediately refreshed to remove the newly deleted item.
- FIXED: The Large Preview window on the Upload window is much faster at displaying/hiding for very large images.
- FIXED: An issue when uploading / editing a post with a location that included quote characters in the name.
- FIXED: Editing / deleting of posts that have been promoted or are currently promoted is now disabled.
- FIXED: An issue that caused the Services > Upload with Flume menu item to not work.
- FIXED: Copyright takedown notices are handled in the Activity tab.
- FIXED: An issue that would display 4 rows instead of 3 under “Top Posts” sections.
- FIXED: Alignment issues with videos and buttons in Column-View mode when you are an Instagram Business user.
- FIXED: Multiple issues with the height of activity rows.
- FIXED: The bookmark (save) icon did not disappear when editing tagged posts on your profile.
- FIXED: The display position of the tagged posts menu was incorrect.
- FIXED: The “Learn More” button did not work on the tagged post options view.
- FIXED: An issue with sharing to Facebook Pages for Instagram Business profiles.
- FIXED: An issue with sharing to Facebook Pages for Instagram Business profiles when your Facebook account is an editor and not an admin.
- FIXED: An issue displaying thumbnails of shared profiles when the profile is a private user, or does not have more than 6 posts yet.
- FIXED: A crash when allowing or declining pending message requests from the message request list as opposed from the pending conversation itself.
- FIXED: A crash when a long video download operation completes some time in the future.
- FIXED: The group name placeholder text colour did not respect the Design Mode setting.
- FIXED: An issue where multiple similar notifications would replace the previous notification in Notification Center.
- FIXED: The poster frame slider on the Touch Bar did not correctly reflect the initial position.
- FIXED: Comments are updated to Instagram’s latest security methods.
- FIXED: Comments, captions, messages and biographies would fail to send/update when using “dumb quotes”.
- FIXED: Captions that use “invisible spaces” to space out captions will no longer remove these characters.
- FIXED: Video upload quality increased.
- FIXED: An issue that would cause video uploads to fail if navigating in the main window while a video was still uploading.
- FIXED: An issue that would cause video uploads to fail if the resulting compressed file size was too large for Instagram to accept.
- FIXED: An issue that would cause video uploads to fail due to a “transcode timeout” error.
- FIXED: Alignment of the video icon for shared videos in messages.
- FIXED: The Large Preview window for messages overlaid an empty video player.
- FIXED: Backslashes in passwords caused login to fail.
- FIXED: Avatar borders in the Touch Bar are always white, regardless of Design Mode setting.
- FIXED: The “Customize Touch Bar” menu item appeared for Macs that don’t have a Touch Bar.
- FIXED: Mentions in captions, messages and comments to usernames that were longer than 20 characters did not work.
- FIXED: An issue with the security checkpoint browser loading a “404 Bad Request”.
- FIXED: An issue that would cause the placeholder text to appear on the pending conversations list incorrectly.
- FIXED: Video uploads in conversations failed.
- FIXED: The pause button would not show when hovering over videos.
- FIXED: The view mode switcher has been removed from the Touch Bar when viewing a profile.
- FIXED: Added share to Facebook / Twitter options to help spread the word.
- FIXED: View the conversation info in a one-on-one conversation so you can click through to the other member’s profile.
- FIXED: An issue when linking accounts with Tumblr and Flickr.
- FIXED: Many more minor tweaks and improvements.

<hr />

#### Flume 2.4

[_Release Date: December 24th, 2016_](http://blog.flumeapp.com/post/154810435611/flume-for-mac-24-update)

NEW: The new Touch Bar and Flume are a match made in heaven! Comprehensive support for all functions, and completely customisable, and localised in all languages.
- NEW: Flume now speaks a whopping 25 languages! Arabic, Chinese (Traditional), Danish, Dutch, French, Greek, Indonesian, Italian, Malay, Portuguese (and BR), Swedish, Thai, Turkish and Vietnamese speakers can now enjoy Flume in their native tongue.
- NEW: Get insights on your posts and followers. For the first time ever, now available on a desktop!
- NEW: Create Instagram Adverts and view your promotion results.
- NEW: Edit your profile, change your password, convert to a Business account (and back to Personal), configure your comment filters and edit your business contact information.
- NEW: Support for “Saved” posts including via our handy “Hover Shortcuts” - simply hover your mouse over items and tap “S” to save them! See our Support Portal for more info about our Hover Shortcuts.
- NEW: Like comments, and turn commenting on/off for your posts.
- NEW: Edit your tagged posts and remove them from your profile.
- NEW: View blocked users.
- NEW: Added a quick “Logout All Users” shortcut.
- NEW: Related hashtags are now shown when viewing the posts of another hashtag.
- NEW: Support for “Videos you might like”.
- NEW: Hover menu actions on comments - simply move your cursor to the edge of the comment to have quick access to reply/report/like/delete actions.
- FIXED: A crash when using the hashtag / user search popover in a comment / message on macOS Yosemite.
- FIXED: A crash when a video upload failed to post.
- FIXED: A crash when cropping videos on macOS Yosemite.
- FIXED: A crash related to specific types of content in the Activity > Following tab.
- FIXED: A potential crash for messages that contained a shared hashtag or location.
- FIXED: A crash when deleting media from the Detail View.
- FIXED: A crash when switching between tabs quickly in the Activity View.
- FIXED: A crash when deleting a conversation via the contextual menu and there were pending message requests in the conversations list.
- FIXED: A crash when switching accounts while viewing a conversation.
- FIXED: A crash when downloading a video and switching to a new view before it completed downloading.
- FIXED: Various visual issues in conversations with lots of shared content.
- FIXED: Improved performance and fixed missing images in Activity.
- FIXED: Added a reset option in rare cases of needing to reset all Flume’s data - hold the OPTION key when launching Flume to use it.
- FIXED: Improved photo and video upload quality and stability.
- FIXED: Contextual-menus on labels are much improved, providing easier access to comment / message actions, and regular text (copy / translate) actions.
- FIXED: Added an emoji button to comment / message areas for quick access to the macOS Character Picker.
- FIXED: An issue that would cause Wacom tablets to handle clicks as drags instead.
- FIXED: An issue when writing captions/comments/messages with slashes.
- FIXED: Improved visibility of current keyboard selection.
- FIXED: Various video playback issues.
- FIXED: Improvements to not deselect selections when new content is reloaded.
- FIXED: An issue that could cause batch upload windows to not close.
- FIXED: An issue where menu’s could appear multiple times.
- FIXED: An issue with content scrolling to the top despite disabling the option in Preferences > Feed.
- FIXED: An issue when trying to login with a password that contained a “ character.
- FIXED: An issue with photos not handling EXIF rotation tags resulting in 90º rotated photo uploads.
- FIXED: An issue where new message notifications could be duplicated.
- FIXED: An issue when sharing content to a conversation.
- FIXED: An issue when trying to close the QuickLook window and the main window was closed or minimised.
- FIXED: An issue where multiple notifications could fire all at once when multiple new media is downloaded.
- FIXED: An issue that could cause flickering of images in conversations.
- FIXED: An issue where the info button in group conversations didn’t align when resizing the window.
- FIXED: Now everyone can see what the upload features are, with the "PRO” badge removed from the menu.
- FIXED: An issue with an incorrect filename extension when trying to save a video.
- FIXED: An issue when quickly switching tabs in Preferences.
- FIXED: An issue with updating the avatar failing.
- FIXED: An issue when trying to edit the location on previously uploaded media.
- FIXED: An issue on macOS Yosemite that caused the Facebook login window to appear incorrectly.
- FIXED: An issue where Cmd+W would not close the QuickLook window.
- FIXED: An issue that would cause the last saved search bookmark to not be removable.
- FIXED: When viewing the followers / followings of a profile, the correct “Follows You” status is displayed.
- FIXED: An issue when blocking a profile that you used to follow.
- FIXED: An issue that could cause the QuickLook window to not close.
- FIXED: An issue when trying to send an empty comment or message.
- FIXED: Improved the placeholder message content when viewing an account that you’ve blocked.
- FIXED: Removed Facebook, Twitter and Flickr share options from the macOS system “Share” list. Use Instagram’s “Linked Accounts” feature to share posts, not macOS’s sharing feature.
- FIXED: An issue when trying to share an item without a message not being able to send.
- FIXED: An issue if you logged in with a Facebook account as the second account, linking it to the first account.
- FIXED: Sharing content will now use the ranked recipients correctly.
- FIXED: Added confirmations when “unsending” messages.
- FIXED: Comments now load in the same order and fashion as the official apps.
- FIXED: Support message types for shared media that was deleted, or if the shared content comes from a private profile that the recipient does not follow.
- FIXED: A scrolling issue with Logitech MX mice that would cause older content to never load.
- FIXED: Added a keyboard shortcut to switch to the main window.
- FIXED: Preferences and profile headers have much improved text rendering on non-retina displays.
- FIXED: Support for macOS Sierra’s window-snapping feature.
- FIXED: Added timestamps when selecting messages in conversations.
- FIXED: When exiting full-screen mode on macOS Yosemite, the main window would display nothing.
- FIXED: Message replies to Instagram Stories appear in conversations.
- FIXED: Avatar borders adjust if using macOS’ dark menu bar.
- FIXED: Sponsored posts now display similarly to the official apps.
- FIXED: Notifications will attempt to display the media /  user avatar before being displayed.
- FIXED: Display connection issues when trying to login.
- FIXED: An issue when trying to share to Sina Weibo / Odoklassniki.
- FIXED: When deleting the last item in a table, the placeholder will appear afterwards instead of an empty table.
- FIXED: Unlinking a business account from Facebook is now restricted.
- FIXED: Show permissions issues if trying to share to a Facebook Page that you’re no longer the admin of.
- FIXED: Errors are displayed if there is an issue with Facebook access.
- FIXED: Popovers correctly adjust the scrollbar area when switching Design Mode.
- FIXED: The last view is restored when relaunching.
- FIXED: An issue when quickly switching between Views causing incorrect content to appear for a different View.
- FIXED: While a video is compressing, you cannot try to select a new file.
- FIXED: Uploads that are cropped to square, but were zoomed out, will now display more clearly that they will upload with a white (default) border. Please use the cropping tool only if you wish to upload a square post.
- FIXED: Various clipped labels in different languages.
- FIXED: Various fixes for keyboard selections, scrolling via keyboard arrows, menu bar updates, and missing “click” sounds.
- FIXED: The Facebook location that posts will share to is now clearly indicated on the upload/share windows.
- FIXED: Notifications that were delivered are removed on relaunch, to make sure Notification Centre doesn’t get too messy.
- FIXED: Reduced the required minimum height for the Flume main window, for those on 11" screens.
- FIXED: An issue with long conversation names (unnamed) not clipping properly in the conversations header.
- FIXED: An issue that would not allow you to send media you wish to share after typing an optional message, then deleting it.
- FIXED: An issue with loading follower/followings lists.
- FIXED: An issue with saved bookmark searches disappearing after switching accounts.
- FIXED: An issue when trying to add an account you already added.
- FIXED: An issue when trying to upload an image that you then deleted / moved from its locations.
- FIXED: An issue that could have allowed simultaneous posting to occur.
- FIXED: Added easy access to open and search for Instagram logins in 1Password for Mac (if present).
- FIXED: An issue that would never allow you to see “Recent” Activity as it was refreshed twice.
- FIXED: Added support for “feedback_required” issues - when Instagram believes your account is being used for spam etc.
- FIXED: Profiles now display addresses.
- FIXED: An issue with translations not updating.
- FIXED: Removed support for maps on profiles.
- FIXED: An issue where new conversations would not refresh after sending the first message.
- FIXED: An issue when uploading a post with a location that contained quote characters.
- FIXED: An issue where location searching did not always find the correct results.
- FIXED: An issue that would cause older messages in conversations to not load.

<hr />

#### Flume 2.3

[_Release Date: September 15th, 2016_](http://blog.flumeapp.com/post/150462881826/flume-for-mac-23-update)

- NEW: Videos can now be uploaded in 1:1 square format, and also cropped in original format should they be too wide or tall.
- NEW: “Hover shortcuts”. Quickly like, comment, or zoom media using the L, C or Spacebar while hovering the mouse over items.
- NEW: “Show Media Details” now displays captions and likes/comment counts in Column-View mode.
- NEW: Added support for Ukrainian.
- NEW: Long-press support. Hold down the left-mouse on Media to toggle the Large Preview window.
- NEW: You can now browse items directly from the Detail View.
- FIXED: Sharing to a Facebook page from the Upload window now correctly shares to the correct page, rather than the Timeline.
- FIXED: High resolution images in portrait orientation did not upload correctly.
- FIXED: A crash that could occur randomly in the future, after viewing the location tagged posts of a user.
- FIXED: A crash that would occur when typing the # character in the Upload caption.
- FIXED: A crash that could occur after pasting text in the caption text area.
- FIXED: A crash that could occur when using multiple accounts and pressing the “Post” button.
- FIXED: A crash that could occur when trying to deselect a selection.
- FIXED: Video duration labels were clipped and not always center-aligned.
- FIXED: Older conversations did not always load.
- FIXED: Avatars and labels would flicker when loading new content in user lists.
- FIXED: Conversation search results with a single match did not show the results.
- FIXED: A crash that could occur when following a user.
- FIXED: An issue that would sometimes cause avatars to not appear on first load.
- FIXED: A rare but potential crash that could occur when popping a view.
- FIXED: Shared media activity posts now show the preview of the image shared.
- FIXED: A fix for a potential crash, after trying to download the same avatar twice.
- FIXED: Clicking on the (+) button when trying to add recipients to a new conversation did not actually toggle their participation.
- FIXED: Timestamps were sometimes clipped in the conversations list, depending on language / time.
- FIXED: Searching conversations with 0 matches no longer shows a spinning indicator.
- FIXED: Some some rare crashes related to viewing the followers/following/requested followers on the Profile tab.
- FIXED: A potential crash that could occur when clicking on the tagged profile posts of a user.
- FIXED: A potential crash that could occur when trying to switch quickly between tabs.
- FIXED: You can now click anywhere in the “Your report has been updated” activity notifications, to view the report.
- FIXED: The menu on the avatar button on the Upload window showed the checkmark on the wrong account after switching accounts.
- FIXED: Removed the elasticity (bounce-scrolling) in the Welcome window change-log.
- FIXED: Fixed missing background on the Upload button when not a Flume Pro user. 
- FIXED: Replaced the missing emoji for 10.10 Yosemite in the “Upgrade to Flume Pro” dialog.
- FIXED: Pasting of text in the caption should now paste up until the maximum length properly (2200 characters).
- FIXED: A crash when trying to request content and the session had timed-out (potentially from a previous crash).
- FIXED: A potential crash when pressing the “Clear Caches” button and new content was being downloaded/updated.
- FIXED: An issue that could result in duplicated items in Profiles.
- FIXED: A crash related to emoji-hashtags you had composed as a comment or caption
- FIXED: The “Explore Instagram” button was not center-aligned.
- FIXED: Followers/following lists did not display all results.
- FIXED: Hashtags or locations that don’t have a “Popular” section, showed an empty header.
- FIXED: Left/Right arrows in Grid-View now wrap to the next/previous row.
- FIXED: The “Flume Pro” modal dialog has been removed.
- FIXED: The “Delete Comment” menu item appear for comments you didn’t author.
- FIXED: Translating will now translate into the app’s language, if overridden from the System Default language.
- FIXED: You can now create new Posts using Cmd+N.
- FIXED: The Poster Frame window did not display correctly in “Light” Design Mode.
- FIXED: Hashtag search popovers now show the post counts.
- FIXED: Disabled system text suggestions (ESC) on text-entry areas.
- FIXED: Locations are searched progressively and results now display addresses.
- FIXED: Lots of fixes related to Sponsored Posts.
- FIXED: Support for uploading extra wide images (eg. panorama’s)
- FIXED: Tagged location posts are no longer visible on user profile’s except your own.
- FIXED: Bookmarks are no longer lost on logout.
- FIXED: Emoji’s can be used for searching.
- FIXED: Session timeouts did not correctly display the Login window.
- FIXED: Hashtag search results containing emoji’s were clipped.
- FIXED: The Feed will display more content initially if set to Grid-View.
- FIXED: The “pop” sound played when switching to the Conversations tab.
- FIXED: The Detail View like/comment counts update more reliably.
- FIXED: After accepting a pending conversation, the message text area did not appear immediately.
- FIXED: Improved swiping gesture support.
- FIXED: Compatibility with macOS Sierra.

<hr />

#### Flume 2.2.1

[_Release Date: Unreleased, was merged with the Flume 2.3 update_](https://flumeapp.tumblr.com/post/149716825616/flume-for-mac-221-update)

- NEW: Shared media activity posts now show the preview of the image shared.
- FIXED: A crash that could occur when following/unfollowing a profile.
- FIXED: A fix for a potential crash, after trying to download the same avatar twice (race-condition).
- FIXED: Searching conversations did not show results if there was just a single match.
- FIXED: An issue that would sometimes cause avatars to not appear on first load.
- FIXED: A rare but potential crash that could occur when popping a view.
- FIXED: Clicking on the (+) button when trying to add recipients to a new conversation did not actually toggle their participation.
- FIXED: Timestamps were sometimes clipped in the conversations list, depending on language / time.
- FIXED: Searching conversations with 0 matches no longer shows a spinning indicator.
- FIXED: Some some rare crashes related to viewing the followers/following/requested followers on the Profile tab.
- FIXED: Older conversations were not always downloaded and displayed.
- FIXED: A potential crash that could occur when clicking on the tagged profile posts of a user.
- FIXED: A potential crash that could occur when trying to switch quickly between tabs.
- FIXED: You can now click anywhere in the “Your report has been updated” activity notifications, to view the report.
- FIXED: A crash that results after you’ve logged in with a secondary account, due to an incorrectly parsed cookie.
- FIXED: The menu on the avatar button on the Upload window showed the checkmark on the wrong account after switching accounts.
- FIXED: Removed the elasticity (bounce-scrolling) in the Welcome window change-log.
- FIXED: Potentially fixed the crash affecting 10.10 users when typing newlines and # or @ characters.
- FIXED: Fixed missing background on the Upload button when not a Flume Pro user.
- FIXED: Replaced the missing emoji for 10.10 Yosemite in the “Upgrade to Flume Pro” dialog.
- FIXED: Pasting of text in the caption should now paste up until the maximum length properly (2200 characters).
- FIXED: A potential crash related to pasting text.
- FIXED: A potential crash that would occur when the username/hashtag search popover displayed (on 10.10 mostly).
- FIXED: A crash when trying to request content and the session had timed-out (potentially from a previous crash).
- FIXED: A potential crash when pressing the “Clear Caches” button and new content was being downloaded/updated.

<hr />

#### Flume 2.2

[_Release Date: August 27th, 2016_](http://blog.flumeapp.com/post/149339016961/flume-for-mac-22-update)

- NEW: Editing posts! Full support to edit captions, add/remove locations, and add/edit user tags (for photos).
- NEW: An all new Light Mode.
- NEW: Customisable font-size preference.
- NEW: Added support for Japanese, Korean, Polish, Czech and French.
- NEW: An improved login window, with support for Facebook account login and easy access to get Help.
- NEW: Link your profile to social media accounts! Support for Facebook, Twitter, Tumblr, Flickr, Weibo, Ameba, Mixi, VKontakte and Odnoklassniki.
- NEW: Share your media to your Facebook Page, or to your Timeline.
- NEW: Find and follow friends from Facebook and your Contacts.
- NEW: Support for overriding the System Default language.
- NEW: Portrait photos that are beyond the acceptable aspect ratio, can now be cropped during click-and-drag or scrolling, and do not need to be cropped to a 1:1 square ratio.
- NEW: You can now drag-and-drop or select up to 9 photos/videos and upload successively.
- NEW: Timestamps are now relative in the detail view.
- NEW: You can report user profile’s for spam.
- NEW: The Activity tab handles updated user profile reports.
- NEW: Complete support for business profiles contact information (email, directions and calling).
- NEW: Profile’s now display tagged location posts.
- NEW: Support for editing posts you are tagged in (removing tags, or hiding from your profile).
- NEW: Support for editing posts you’ve tagged at locations (removing locations).
- NEW: Profile’s now support tagged location posts.
- NEW: Support for profile’s flagged as requiring age-verification (over 18)
- NEW: Searches now show “X new posts”
- NEW: Edit / remove your avatar.
- NEW: Set your profile to private/public.
- NEW: Profile headers display the context and business category.
- NEW: You can indicate to “Show Fewer Posts Like These” for media that appears in the Explore tab.
- NEW: You can clear the image caches from Preferences.
- NEW: An “Upload” menu is displayed when the Upload window is front-most.
- NEW: Conversation cells now show image previews.
- NEW: You can now bookmark conversations and they are displayed first.
- NEW: Support for profile’s that disallow commenting on their media.
- FIXED: Double-click to like animation did not appear in grid-view when there was a section header.
- FIXED: Desktop Notifications will only show for new media that is downloaded from the Feed.
- FIXED: The comment count in the detail view was always 1 less than the correct amount.
- FIXED: Clicking on a Desktop Notification for multiple new posts did not bring Flume above all other windows.
- FIXED: A crash when clicking in empty feeds.
- FIXED: The preview images in the Activity tab did not always appear on the first load.
- FIXED: Sponsored Posts are now indicated in Grid-View.
- FIXED: Sponsored Post actions are now displayed in the contextual menu.
- FIXED: The “Media” menu would disappear when pressing the “Help” menu.
- FIXED: When a comment started with an emoji character, the font would display incorrectly.
- FIXED: The Acknowledgements button would not display on the About window.
- FIXED: An issue with encoding non-Latin characters in comments.
- FIXED: Clicking on the tabbed buttons in Search did not always work.
- FIXED: Clicking on a Desktop Notification will remove it correctly from Notification Center.
- FIXED: Popovers now have their arrows styled correctly.
- FIXED: The previously used hashtag list did not correctly detect all your previously used hashtags.
- FIXED: An issue that would not display all the comments in the Detail View.
- FIXED: User preferences are no longer removed when logging out.
- FIXED: The activity indicator did not always disappear after submitting a comment.
- FIXED: The ESC key deselected your selection in Grid-View when the QuickLook window was visible.
- FIXED: Clicking on Desktop Notifications when Flume was closed did not correctly load the appropriate view.
- FIXED: The main window is positioned in the previously visible position when logging in again.
- FIXED: Liking an item from the Detail View before the thumbnail or high resolution image had downloaded, did not actually like the item.
- FIXED: Various issues related to images not always downloading in Grid View.
- FIXED: A crash that would occur after successfully uploading an item with the main window viewing a conversation.
- FIXED: Many improvements to the networking layer, keyboard navigation and selection, and menu bar updates.
- FIXED: A crash when typing the @ or # character on OS X 10.10 Yosemite.
- FIXED: An issue uploading captions when pasting text from Microsoft Word that included line-breaks.
- FIXED: An issue that would show placeholder images in Grid View when resizing.
- FIXED: Various fixes to drag-and-drop saving of media.
- FIXED: Tagged users are no longer displayed on hover in the Detail View.
- FIXED: Liking items in Grid View via the contextual menu did not work.
- FIXED: Various issues with the badge counts for unseen items.
- FIXED: An issue that caused the View Mode switch to show the wrong background colour.
- FIXED: The video duration label was not center-aligned.
- FIXED: The close button was visible on QuickLook windows when the “Always Show Title Bar” option was enabled.
- FIXED: Closing the QuickLook window through the close button did not animate the window out.
- FIXED: Conversation searching did not find all results.
- FIXED: Pressing Cmd+F on the Conversations tab now jumps to the Conversation search text field, not the Search tab.
- FIXED: The logout keyboard shortcut was missing after removing all but one account.

<hr />

#### Flume 2.1

[_Release Date: July 6th, 2016_](http://blog.flumeapp.com/post/146894777981/flume-for-mac-21-update)

- NEW: Improved scrolling performance and behaviour.
- NEW: Improved memory usage.
- NEW: The new sorting algorithm for user feed’s is now enabled. This fixes the issue of not being able to view more than 13 posts in the current version.
- NEW: A new preference option is available to display the username, avatar and location in column view by default.
- NEW: The activity tab is completely new - it is no longer a WebView and has support for displaying pending follower requests.
- NEW: Videos now display a small run-down counter to indicate the video duration.
- NEW: Support for Instagram’s Sponsored Posts.
- FIXED: Images in higher DPI (240dpi, 300dpi) no longer cause a blurry upload.
- FIXED: A crash that would occur when trying to upload on 10.10 Yosemite, either by selecting a file or dragging one onto the window.
- FIXED: A crash that would occur if you tried to type an invisible character.
- FIXED: An issue posting photos/videos when using the hashtag / username search popover.
- FIXED: When pasting in text that contains an ASCII quote, we replace it with an opening/closing quote character. This fixes issues when trying to post captions, messages or comments with pasted quotation marks.
- FIXED: Trying to compose new conversation with new user/s did not work. 
- FIXED: You can now remove accounts from Preferences > Accounts even when you have just one account logged in.
- FIXED: When changing your password from another device / website, we handle session timeouts correctly and prompt you to log in again.
- FIXED: The verified badge image was misaligned.
- FIXED: The translation of the Service menu item was missing.
- FIXED: Liked animations on grid view cells is improved.
- FIXED: Desktop notifications for new posts did not show if Flume was on another virtual desktop/screen.
- FIXED: When switching the options for the menu bar visibility, hidden Finder windows would display.
- FIXED: Video’s would not play if the low and standard resolution were pointing to the same URL.
- FIXED: Video’s would show the thumbnail “stuck” behind as they played.
- FIXED: Cmd+Up/Down arrow behaves better.
- FIXED: Profile headers now include the context.
- FIXED: Cmd+Ctrl+F toggles full-screen mode again instead of switching to the Search tab.
- FIXED: The Flume Pro “trial” has been removed, due to confusion.
- FIXED: Scroll-wheel mice don’t show the old style scrollbars.
- FIXED: The QuickLook preview in the Upload window would zoom in too far for very large images.
- FIXED: When adding too many hashtags to a comment or caption, we display an error.
- FIXED: When pasting text that exceeds the maximum allowed amount, we paste up until the maximum amount instead of disallowing the paste entirely.
- FIXED: The Preferences > Accounts window was resizable.
- FIXED: Improved behaviour in grid view for loading older content.
- FIXED: Infinite scrolling behaviour improved, in order to fetch new content earlier.
- FIXED: Various issues related to the last line of text getting clipped.
- FIXED: A crash on login if you had no internet connection, or the initial request failed.
- FIXED: Scroll-wheel mice did not pre-fetch content and relied on scrolling all the way to the bottom.
- FIXED: When switching tabs, the wrong titlebar could appear.
- FIXED: Sending a like as the first message of a new conversation did nothing.
- FIXED: A crash when sending a photo/video as the first message of a new conversation.
- FIXED: If a user previously had a biography, website, or profile context, and later deleted them, the profile header view did not reflect the latest info.
- FIXED: A crash when trying to push to the detail view from a profile with an invalid keyboard selection.
- FIXED: A crash when pressing up/down/left/right arrow keys on private profiles, or when the profile had no posts.

<hr />

#### Flume 2.0

[_Release Date: June 1st, 2016_](http://blog.flumeapp.com/post/145212126271/introducing-flume-20-and-flume-pro)

- NEW: Flume Pro.
- NEW: Upload support.
- NEW: Instagram Direct support.
- NEW: Curated recommendations
- NEW: Improved notification preferences.

<hr />

#### Flume 1.2.2

[_Release Date: December 22nd, 2015_](http://blog.flumeapp.com/post/135435777181/flume-122-changelog)

- FIXED: Commenting, the Activity and Popular tabs failed to load due to changes from Instagram
- FIXED: Some inconsistencies with menu’s. Follow/unfollow state is correctly updated in the menu also.
- FIXED: An issue that could cause video’s to play in the QuickLook window as well as the main window.
- FIXED: An issue where audio from a previously playing video could still be heard despite no QuickLook window visible.
- FIXED: A bunch of very rare crashes reported by users.

<hr />

#### Flume 1.2.1

[_Release Date: December 3rd, 2015_](http://blog.flumeapp.com/post/134286761751/flume-121-changelog)

- FIXED: An issue that caused the Activity stream to not load. Please log-out and log-in to make this work again.
- FIXED: An issue that caused the same account to be added when trying to add a different account. Please log-out and log-in to make this work again.
- FIXED: Fixed text legibility on non-retina displays.
- FIXED: An issue that caused the following status of a user to display incorrectly when clicking on their Followers.
- FIXED: A crash that occurred when long-pressing the back button in full-screen/split-screen mode.
- FIXED: A rare crash that could occur when trying to load the shortcut recorder control in Preferences.
- FIXED: A rare crash that could occur when opening the QuickLook window.
- FIXED: Improvements to the French localisation.

<hr />

#### Flume 1.2

_Release Date: November 25th, 2015_

- NEW: Added Spanish, French and Russian localisations.
- NEW: The popular tab infinitely loads from the bottom.
- FIXED: Videos would not play in the QuickLook window.
- FIXED: An issue that could cause some images in very rare cases to not appear in Column view.
- FIXED: Scrolling performance improvements.
- FIXED: A crash that could occur when using the keyboard to scroll to the last row in Grid View.
- FIXED: A crash that could occur in rare occurrences when updating the previously downloaded avatar of a user.
- FIXED: When liking a photo or video in column view, quickly scrolling away could cause the “liked” image to appear on the wrong media.

<hr />

#### Flume 1.1

_Release Date: November 15th, 2015_

- NEW: Added Chinese (Simplified) localisation.
- NEW: Added a preference to always display the title bar.
- NEW: Added a preference to change the display behaviour of the menu bar (always show, show on hover, show when scrolling up)
- NEW: Support for full-screen and split-view on El Capitan (10.11)
- NEW: Added a preference to allow mouse hovering to “focus” media in column-view.
- NEW: Content now “infinitely” scrolls when reaching towards the end of the existing content without the need to trigger a scrolling threshold.
- NEW: You can now use keyboard shortcuts to add/remove bookmarks, follow/unfollow users, switch to avatar/biographies in profiles and between multiple accounts.
- FIXED: Images no longer morph to their correct size after displaying, as we now know the correct size of the image ahead of download time.
- FIXED: The quick user search search field did not allow “.” character to be typed.
- FIXED: The “Go to User…” label was clipped in German localisation.
- FIXED: Comments would sometimes fail to send when containing certain characters.
- FIXED: Scroll-wheel mice would not dismiss the focussed view when scrolling.
- FIXED: Incorrect accessibility localisations in the Activity tab.
- FIXED: Numerous improvements to fading-in of content.
- FIXED: Some memory leaks and improved retina scrolling performance.
- FIXED: Scrolling “knob” is now a little easier to notice, especially on darker images.
- FIXED: Sometimes a blurred image would appear above the content after resizing the window, or new content appearing.
- FIXED: Loading older content in content tagged with a location or a hashtag would not load more than ~20 items.
- FIXED: An issue with being unable to scroll profile headers.
- FIXED: An issue when the wrong titlebar would appear when switching from/away from the Activity tab.
- FIXED: An issue where the wrong titlebar would appear when switching to the Profile tab.
- FIXED: An issue that would cause blurry text labels on non-retina displays.
- FIXED: Focus mode animations are improved, especially with keyboard navigation.
- FIXED: An issue when saving videos that would assume they were photos.
- FIXED: An issue when dragging content from a profile overwriting the previous file.
- FIXED: Dragging a photo/video now requests the high resolution version and saves that to your drag location, instead of the thumbnail or lower quality resolution.
- FIXED: The video and liked icons were missing in grid view cells.
- FIXED: Saved Searches are now named “Bookmarks” and use a new icon.
- FIXED: “View as Column/Grid” appeared unnecessarily on the Activity tab.
- FIXED: An issue that stopped older content from loading after waking from sleep.
- FIXED: Improved and explained the rate limiting error from Instagram.
- FIXED: Media tagged in the Popular tab would all show the same, incorrect location.
- FIXED: Comments with nested #hashtags#with#no#spaces#like#this#can#now#be#clicked
- FIXED: The View menu item would not show the correct selection in certain cases.
- FIXED: Thumbnails in profiles no longer show white-borders.
- FIXED: QuickLook performance has been improved, as well as some issues related to its appearance/disappearance.
- FIXED: An issue with typing non-latin characters and emoji’s in comments and search fields.
- FIXED: An issue with not being able to use the arrow keys to move selection in a text field.
- FIXED: Switching accounts no longer repositions the window.
- FIXED: Added a placeholder graphic to help indicate content is still downloading.
- FIXED: Added a navigation history option to quickly jump to any previous point when pressing and holding down on the back button  in the titlebar.
- FIXED: The window could still be dragged when the share menu appeared.
- FIXED: Show a nicer error message if the Activity tab fails to load.
- FIXED: An issue that caused the “Authorize” button on login to be un-clickable until scrolling down.
- FIXED: Disabled discrete GPU-usage (where possible).
- FIXED: An issue that caused flickering to occur on reload when using the Cmr+R / Refresh shortcut in the menu bar.
- FIXED: A crash that would occur if you had looked at the Search view and then switched accounts.
- FIXED: Added a forced reload when switching OS X user accounts.
- FIXED: Switching accounts keeps you on the same tab you had previously selected.
- FIXED: Many other miscellaneous improvements and crash fixes!

<hr />

#### Flume 1.0

_Release Date: October 12th, 2015_

- Initial release