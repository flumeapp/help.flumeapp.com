# What's New in Flume

#### Flume 2.5

_Release Date: March 31st, 2017 (Setapp). Mac App Store approval pending._



<hr />

#### Flume 2.4.2

_Release Date: January 21st, 2017_



<hr />

#### Flume 2.4.1

_Release Date: January 22nd, 2017_



<hr />

#### Flume 2.4

_Release Date: December 24th, 2016_



<hr />

#### Flume 2.3

_Release Date: September 15th, 2016_



<hr />

#### Flume 2.2

_Release Date: August 27th, 2016_



<hr />

#### Flume 2.1

_Release Date: July 6th, 2016_

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

_Release Date: June 1st, 2016_

- NEW: Flume Pro.
- NEW: Upload support.
- NEW: Instagram Direct support.
- NEW: Curated recommendations
- NEW: Improved notification preferences.

<hr />

#### Flume 1.2.2

_Release Date: December 22nd, 2015_

- FIXED: Commenting, the Activity and Popular tabs failed to load due to changes from Instagram
- FIXED: Some inconsistencies with menu’s. Follow/unfollow state is correctly updated in the menu also.
- FIXED: An issue that could cause video’s to play in the QuickLook window as well as the main window.
- FIXED: An issue where audio from a previously playing video could still be heard despite no QuickLook window visible.
- FIXED: A bunch of very rare crashes reported by users.

<hr />

#### Flume 1.2.1

_Release Date: December 3rd, 2015_

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