# Upload

The upload window allows you upload photos and videos, write captions, tag users, set cover frames, crop and resize, share to [linked accounts](profile/settings/linkedaccounts.md) and much more.

![](../.gitbook/assets/upload%20%281%29.png)

{% hint style="info" %}
Adding multiple accounts requires a [Flume Pro](../preferences/flumepro.md) licence.

Photos and videos must fit within certain [specifications](../misc/upload-specifications.md) to be accepted by Instagram.
{% endhint %}

## Creating Posts

To begin creating a new post:

* Click the upload ![](../.gitbook/assets/uploadicon%20%281%29.png) button in [Flume's toolbar menu.](../preferences/design.md#show-the-menu)  ![](../.gitbook/assets/menu%20%282%29.png)
* Use the `File > New Post…` [menu bar](../misc/glossary.md#menu-bar) item.
* Use the `View > Upload` [menu bar](../misc/glossary.md#menu-bar) item.
* Tap the upload ![](../.gitbook/assets/uploadicon.png) button in the [Touch Bar.](../misc/touchbar.md)
* Right-click on Flume's [Dock](../misc/glossary.md#dock) icon and select the `Upload` item.
* Drag a photo/video directly onto Flume's [Dock](../misc/glossary.md#dock) icon.
* Right-click a photo or video in Finder and select the `Open with… > Flume` menu item.

## Drafts

Flume has support for drafts through its own `.flumedraft` document type. Drafts save the following information:

* The photos or videos to post.
* All [filters](upload.md#filters) and [adjustments.](upload.md#adjustments)
* The [caption.](upload.md#captions)
* The [tagged users.](upload.md#tagged-users)
* The [tagged location.](upload.md#tagged-locations)
* The [sharing options.](upload.md#sharing)
* The [advanced settings.](upload.md#advanced-settings)
* The [video settings.](upload.md#video-settings)
* The [repost settings.](reposting.md#repost-settings)
* The [account](../preferences/accounts.md) to post to.

{% hint style="info" %}
Prior to Flume 2.8.6, the Flume draft file extension was `.flume`.

Flume versions older than 2.8.6 will not be able to open newer `.flumedraft` drafts. Flume versions 2.8.6 and later can still open older `.flume` drafts.
{% endhint %}

### Creating Drafts

To create/save a draft:

* After selecting your photo/video and making all necessary edits, close the upload window, or use the `File > Save Draft…` [menu bar](../misc/glossary.md#menu-bar) item. A save dialog will appear to select a save location and filename.

{% hint style="info" %}
If you make edits to a previously opened draft, changes will be saved to the same draft file and no save dialog will appear.
{% endhint %}

### Opening Drafts

To open a draft:

* Open the draft file in Finder.
* Drag-and-drop the draft onto Flume's [Dock](../misc/glossary.md#dock) icon.
* Drag-and-drop the draft onto an Upload window.
* Use the `File > Open Draft…` [menu bar](../misc/glossary.md#menu-bar) item.

### Previewing Drafts

Flume's drafts support [QuickLook](https://en.wikipedia.org/wiki/Quick_Look) and render previews of the photo or video in Finder.

## Carousel Posts

You can select up to 10 photos and videos into a single post, otherwise known as a [carousel or multi-post.](detailview.md#carousel-posts)

Carousel posts can be either all square items, all horizontal, or all vertical. It is not possible to mix-and-match square items with horizontal or vertical items. **Flume will use the aspect ratio of your first item in the Carousel Post, in order to force cropping of all subsequent items to the same aspect ratio.** If you wish to create a square carousel post from a photo or video that is not originally in square aspect ratio, you should first [crop the photo/video](upload.md#cropping---resizing) before toggling the carousel post option. If you drag-and-drop multiple files to create a new carousel post, Flume will automatically display the [cropping window](upload.md#cropping-resizing) for you for the first item.

{% hint style="info" %}
When dragging/opening multiple files to create a carousel post, Flume will sort the selected files by **filename** to ascertain the order. The first item in your carousel post determines the kind of carousel post \(square / horizontal / vertical\) Flume will create. If you wish to override Flume's default filename ordering, select your first item for upload manually, then add the remaining items after [converting from a single post to a carousel post.](upload.md#converting-single-posts-to-carousel-posts) Once all items are added, rearrange them by hovering over the item thumbnail and drag-and-dropping them to a new position.
{% endhint %}

### Creating Carousel Posts

To create a carousel post directly:

* Select more than one photo/video in the macOS open panel that appears after choosing `Select [Photo|Video|Draft]…` in the upload window.
* Drag more than one photo/video directly onto an empty upload window.
* Drag more than one photo/video \(or a folder\) directly onto Flume's [Dock](../misc/glossary.md#dock) icon.
* Right-click more than one photo/video in Finder and select the `Open with… > Flume` menu item.

### Converting Single Posts to Carousel Posts

To toggle between an individual and carousel post:

* Click the carousel ![](../.gitbook/assets/carousel%20%281%29.png) button.
* Use the `Upload > Toggle Carousel Post` [menu bar](../misc/glossary.md#menu-bar) item.
* Tap the carousel ![](../.gitbook/assets/carousel.png) button in the [Touch Bar.](../misc/touchbar.md)

### Reordering Items in Carousel Posts

To adjust the order of the items in your carousel post:

1. Hover the mouse cursor over the thumbnails in the carousel item list until the drag-handle appears.
2. Click-and-drag the drag-handle up/down to reorder the item.

## Editing

You can apply filters and make adjustments to your photos and videos easily right inside Flume.

{% hint style="info" %}
The Scale adjustment is only available on photos.
{% endhint %}

{% hint style="warning" %}
Tagging users in videos is not currently supported.

Video filters and adjustments are not available on macOS Yosemite 10.10
{% endhint %}

![](../.gitbook/assets/upload-edit%20%281%29.png)

#### Editing Photos/Videos

To edit a selected photo or video:

* Click the edit ![](../.gitbook/assets/edit%20%281%29.png) button.
* Use the `Upload > Toggle Edit Options` [menu bar](../misc/glossary.md#menu-bar) item.
* Tap the edit ![](../.gitbook/assets/edit.png) button in the [Touch Bar.](../misc/touchbar.md)

#### Previewing Edits

To quickly preview your edits:

* Click the preview ![](../.gitbook/assets/preview.png) button.
* Tap the preview ![](../.gitbook/assets/preview%20%281%29.png) button in the [Touch Bar.](../misc/touchbar.md)

### Filters

To apply a filter to a photo or video:

* Click on the filter preview.
* Tap on the filter preview in the [Touch Bar.](../misc/touchbar.md)
* Use the `←` \(LEFT\) and `→` \(RIGHT\) [keyboard arrows.](../misc/keyboard-shortcuts.md)

After selecting a filter, you can adjust the its intensity \(default 100%\).

{% hint style="info" %}
You can reorder and enable Flume's exclusive filters via [upload preferences.](../preferences/upload/filters.md)
{% endhint %}

### Adjustments

To make adjustments to a photo or video:

* Click and drag the respective slider to set a new value.
* Use the `↑` \(UP\) and `↓` \(DOWN\) [keyboard arrows](../misc/keyboard-shortcuts.md) to move between adjustments, and `←` \(LEFT\) and `→` \(RIGHT\) to set their value.

The color adjustment requires you to first select a color to apply as an overall tint to the photo or video.

The tilt shift adjustment requires you to set the two focal points. Click the `Adjust` button and follow the prompts to set the points on the photo or video.

#### Resetting Adjustments

To reset all adjustments:

* Click the clear ![](../.gitbook/assets/discard.png) button.

### Video Settings

When a video is selected, additional video settings will also appear in the editing area.

#### Volume

To mute or adjust the output volume of the video:

* Click and drag the volume slider to set a new volume level. To mute the video, slide the value left until the ![](../.gitbook/assets/flumediaitemunmute-2x.png)  image is visible.

{% hint style="info" %}
If the video file contains no audio, the volume slider is disabled.
{% endhint %}

### Repost Settings

For more details on the available repost settings, see [reposting.](reposting.md)

## Captions

You can add an optional caption to your posts. When typing a `#` or `@` character, your keyboard input will also search Instagram for matching hashtags and users until you select an item from the popover, press the `ESC` key, or press another space.

### Pre-filling Captions

Flume can use embedded metadata \(EXIF/IPTC\) inside your photos and videos to [pre-fill your caption](../preferences/upload/) with a specific format.

{% hint style="info" %}
[Limits apply](../misc/limits.md) to the length of the caption, the number of hashtags, and mentions.
{% endhint %}

## Tagged Users

You can include up to 30 users to tag in a post. The tagged users can be viewed in the [details view.](detailview.md)

{% hint style="warning" %}
Tagging users in videos is not currently supported.
{% endhint %}

![](../.gitbook/assets/detail-view-usertags-1.png) ![](../.gitbook/assets/detail-view-usertags-2.png)

### Adding Tagged Users

To add a tagged user in a post:

1. Click the tagged users ![](../.gitbook/assets/taggedusers.png) button on the post, or tap the button in the [Touch Bar.](../misc/touchbar.md)
2. Click a position where the user is located.
3. Type in the search text field to find the relevant user.
4. Click on a search result to confirm the user tag.

### Removing Tagged Users

To remove a tagged user:

1. Click the tagged users ![](../.gitbook/assets/taggedusers.png) button on the post, or tap the button in the [Touch Bar.](../misc/touchbar.md)
2. Hover the mouse over the user tag you wish to remove and click it once.

### Repositioning Tagged Users

To reposition a tagged user:

1. Click the tagged users ![](../.gitbook/assets/taggedusers.png) button on the post, or tap the button in the [Touch Bar.](../misc/touchbar.md)
2. Hover the mouse over the user tag you wish to remove and click-and-drag it to a new position.

## Tagged Locations

You can tag your photo and video at a location that displays on the [details view](detailview.md) and links to the [recent media tagged at that location.](locations.md)

![](../.gitbook/assets/edit-location%20%282%29.png)

### Adding Tagged Locations

To add a location on a photo or video:

1. Click the `Add Location` button, or tap the location ![](../.gitbook/assets/location-add.png) button in the [Touch Bar.](../misc/touchbar.md)
2. Type to search for the location to tag, or click the `Nearby Places` ![](../.gitbook/assets/nearbyplaces.png) button to search locations close to your current position.
3. Select a location from the search results. If no search results could be found, the results popover will disappear.

{% hint style="info" %}
If the photo or video contains [geotag](https://en.wikipedia.org/wiki/Geotagging) location information, Flume will automatically search for the GPS coordinates where the photo or video was taken. You cannot tag exact GPS coordinates on Instagram, and all tagged locations must exist as Facebook Places. To add new locations, see [Instagram's Help Center.](https://help.instagram.com/1618893218361276)
{% endhint %}

### Editing Tagged Locations

To edit a location on a photo or video:

* Click the name of the location, and select the `Edit Location` item.
* Tap the edit location ![](../.gitbook/assets/location-add.png) button in the [Touch Bar.](../misc/touchbar.md)

### Removing Tagged Locations

To remove an existing location on a photo or video:

* Click the name of the location, and select the `Remove Location` item.
* Tap the remove location ![](../.gitbook/assets/location-remove.png) button in the [Touch Bar.](../misc/touchbar.md)

## Cover Image

When uploading a video, you can choose a custom cover image that will be used to represent your video's thumbnail image.

![](../.gitbook/assets/upload-cover-image%20%281%29.png)

To set a cover image:

* Click the cover image ![](../.gitbook/assets/coverimage.png) button.
* Use the `Upload > Select a Cover Image…` [menu bar](../misc/glossary.md#menu-bar) item.
* Tap the cover image ![](../.gitbook/assets/coverimage%20%281%29.png) button in the [Touch Bar.](../misc/touchbar.md)

Use the video scrubber in the cover image view or [Touch Bar](../misc/touchbar.md) to select a position in the video as the cover image.

{% hint style="info" %}
By default, Flume will use the frame at 0.5 seconds into your video as your cover image. If your video contains a solid colour fade-in transition, your cover image will be the solid colour. To avoid this, set a custom cover image.
{% endhint %}

## Cropping / Resizing

### Photos

When you select a photo to upload that exceeds the [aspect ratio requirements](../misc/upload-specifications.md), you have three options:

* Scroll the photo's cropping region to a desired area using your mouse/trackpad. The region of the photo not visible will be cropped from the upload.
* [Crop a region of the photo](upload.md#cropping-photos) so that it falls within the aspect ratio requirements.
* [Resizing the photo to fit into a square](upload.md#resizing-photos-to-fit), with an optional custom border colour.

![](../.gitbook/assets/upload-cropping%20%282%29.png)

#### Cropping Photos

To crop a photo:

* Click the crop ![](../.gitbook/assets/crop%20%282%29.png) button.
* Use the `Upload > Crop…` [menu bar](../misc/glossary.md#menu-bar) item.
* Tap the crop ![](../.gitbook/assets/crop%20%281%29.png) button in the [Touch Bar.](../misc/touchbar.md)

Click-and-drag the resize handles to adjust the cropping region, and click-and-drag the rectangle to adjust the cropping position.

{% hint style="info" %}
You can toggle between common aspect-ratios, or use the aspect-ratio of the media, by clicking on  the `Aspect Ratio` button and choosing from the pop-up menu. This enforces the dragging rectangle to maintain the selected aspect-ratio.
{% endhint %}

#### Resizing Photos

To resize a photo back to its original dimensions:

* Click the resize ![](../.gitbook/assets/resize%20%282%29.png) button.
* Use the `Upload > Resize to Original` [menu bar](../misc/glossary.md#menu-bar) item.
* Tap the resize ![](../.gitbook/assets/resize%20%283%29.png) button in the [Touch Bar.](../misc/touchbar.md)

#### Resizing Photos to Fit

If your selected photo exceeds the [aspect ratio requirements](../misc/upload-specifications.md), you can use the `Resize to Fit` option to resize the entire photo to fit inside a square, with the ability to also choose a custom border color \(default: white\).

This ensures your landscape or portrait photos will not be cropped, by adding in either vertical or horizontal borders. The border colour chosen is saved for future cropping/resizing edits.

![](../.gitbook/assets/upload-cropping-resizetofit.png)

### Videos

When you select a video to upload that exceeds the [aspect ratio requirements](../misc/upload-specifications.md), you have three options:

* Scroll the video's cropping region to a desired area using your mouse/trackpad. The region of the video not visible will be cropped from the upload, and the original aspect ratio will be maintained.
* [Crop a region of the video](upload.md#cropping-videos) so that it falls within the aspect ratio requirements.
* Resizing the video to fit into a square. Like above, scroll the video's cropping region to a desired area using your mouse/trackpad. The region of the video not visible will be cropped from the upload, and a 1:1 \(square\) aspect ratio will be maintained.

{% hint style="info" %}
When selecting a video that is already 1:1 \(square\), the options to crop or resize will be disabled.

It is not currently possible to resize videos to fit, [unlike photos.](upload.md#resizing-photos-to-fit)
{% endhint %}

#### Cropping Videos

To crop a video:

* Click the crop ![](../.gitbook/assets/crop.png) button.
* Use the `Upload > Crop…` [menu bar](../misc/glossary.md#menu-bar) item.
* Tap the crop ![](../.gitbook/assets/crop%20%283%29.png) button in the [Touch Bar.](../misc/touchbar.md)

Click-and-drag the resize handles to adjust the cropping region, and click-and-drag the rectangle to adjust the cropping position.

{% hint style="info" %}
You can toggle between common aspect-ratios, or use the aspect-ratio of the media, by clicking on  the `Aspect Ratio` button and choosing from the pop-up menu. This enforces the dragging rectangle to maintain the selected aspect-ratio.
{% endhint %}

#### Resizing Videos

To resize a video back to its original dimensions:

* Click the resize ![](../.gitbook/assets/resize%20%281%29.png) button.
* Use the `Upload > Resize to Original` [menu bar](../misc/glossary.md#menu-bar) item.
* Tap the resize ![](../.gitbook/assets/resize.png) button in the [Touch Bar.](../misc/touchbar.md)

#### Trimming Videos

![](../.gitbook/assets/upload-trim-2.png)

Videos posted to Instagram [must be within 3 and 60 seconds in duration.](../misc/upload-specifications.md#video-specifications) You can perform some fine-tuning to the length of your video directly inside Flume. To trim a video:

* Click the trim ![](../.gitbook/assets/fluuploadvideotrim-2x.png) button.
* Use the `Upload > Trim…` [menu bar](../misc/glossary.md#menu-bar) item.
* Tap the trim ![](../.gitbook/assets/fluuploadvideotrim-2x.png) button in the [Touch Bar.](../misc/touchbar.md)

## Sharing to Linked Accounts

Sharing allows you to cross-post your upload to a [linked account.](profile/settings/linkedaccounts.md) You can also [share existing posts](sharing.md) at any time.

To share a post to a linked account:

* Click the `Share` ![](../.gitbook/assets/share.png) button.
* Use the `Upload > Share > Linked Account` [menu bar](../misc/glossary.md#menu-bar) item.

Choose at least one social network to share to.

{% hint style="info" %}
You can also save your sharing options, so that the previously enabled options are remembered for your next upload.
{% endhint %}

## Advanced Settings

To adjust advanced settings on your post:

* Click the `Settings` ![](../.gitbook/assets/settings.png) button.

{% hint style="info" %}
You can also [disable comments after posting.](detailview.md#enabling--disabling-comments)
{% endhint %}

## Switching Accounts

To switch the account to post with:

* Click on the profile picture and select an account.
* Use the `Accounts` [menu bar](../misc/glossary.md#menu-bar) item.

## Export Edits

If you are a [Flume Pro](../preferences/flumepro.md) user, you can use Flume to edit your photos and videos, adding filters and fine-tuning with adjustments, but export the items for use elsewhere without uploading to Instagram.

To export your edited items:

* Click on the actions ![](../.gitbook/assets/actions-menu.png) button in the titlebar area of the Upload window, and select the `Export Edits…` menu item.
* Use the `Upload > Export Edits…` [menu bar](../misc/glossary.md#menu-bar) item.

A dialog will appear asking you to choose the location to export your items.

## Sync All Upload Windows

If you need to post some items in a series, such as 3 photos in a row with the same theme, you can make use of the unique sync all upload windows feature, which will copy and replace the caption, location, tagged users, sharing settings, and advanced settings to all currently open upload windows. This allows you to write and set the details once, and apply it to all the other open upload windows instantly.

To sync all upload windows:

* Click on the actions ![](../.gitbook/assets/actions-menu.png) button in the titlebar area of the upload window, and select the `Sync All Upload Windows…` menu item.
* Use the `Upload > Sync All Upload Windows…` [menu bar](../misc/glossary.md#menu-bar) item.

