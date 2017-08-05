# Integrations

## Finder

### System Services

Flume supports macOS Services menu, allow you to right-click any photo/video in Finder and begin the upload process.

See [this article](http://www.macworld.com/article/1163996/software-utilities/how-to-use-services-in-mac-os-x.html) for an introduction to macOS System Services.

### "Open with…"

Flume also supports opening images and videos directly, though in most instances the default application for opening these files would be Preview. To open an image or video with Flume, right-click on it and use the "Open with…" menu item.

If Flume is not currently open, it will open and present you with an [Upload](/views/upload.md) window with the selected file/s ready to post.

### Drag to Dock

Flume handles photos and videos dragged to its Dock icon, as well as entire folders (though a limit of 10 files is applied). You will be asked if each file is a separate [upload](//views/upload.md) or if you wish to create a single [carousel post.](//views/upload.md#carousel-posts)

------

## Photos

Starting with macOS Yosemite 10.10.3, Apple ships all Macs with [Photos](https://support.apple.com/photos) (the successor to iPhoto). Flume does not currently support [Sharing Extensions](https://support.apple.com/kb/PH18826) or [Photo Editor Extensions.](https://support.apple.com/en-us/HT205245)

We recommend the use of a third-party extension, [External Editors for Photos](http://externaleditorsforphotos.tumblr.com). This extension will allow you to open any content from [Photos](https://support.apple.com/photos) directly into Flume, as it will be considered an "editor". 

------

## Adobe Lightroom

To send content from Lightroom into Flume, you can create a new [Export Preset](https://helpx.adobe.com/lightroom/help/export-presets-settings-plug-ins.html) with the following options:

<p style="text-align: center; margin-top: 1em;"><img src="/misc/assets/integrations-lightroom.png" width="70%" height="70%" /> </p>

> **[info]**
> The only necessary step is that listed under "Post-Processing", the options for where to place the exported file are customizable to your workflow.

------

## Adobe Photoshop

Unlike Lightroom, Photoshop does not offer a simple way to export content into a post-processing application. However, using [AppleScript](https://en.wikipedia.org/wiki/AppleScript), it is still possible to automate the export into Flume.

The following AppleScript can be used to export the currently open document in Adobe Photoshop CC 2017 into Flume. This can be imported into [AppleScript Editor](https://en.wikipedia.org/wiki/AppleScript_Editor), [Automator](https://en.wikipedia.org/wiki/List_of_macOS_components#Automator), or other tools that accept AppleScript input.

```
set filePath to "/tmp/flume-temp-upload.png"

tell application "Adobe Photoshop CC 2017"
	set saveOptions to {class:PNG save options}
	save current document in file filePath as PNG with options Â¬
		saveOptions appending lowercase extension with copying
end tell

try
	set command to "open -a /Applications/Flume.app " & quoted form of filePath
	do shell script command
end try
```

------

