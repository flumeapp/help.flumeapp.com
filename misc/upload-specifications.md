# Photo / Upload Video Specifications

## Aspect Ratio
Instagram enforces aspect ratio rules for all uploads. All uploads must fit between a 4:5 (vertical) and 1.91:1 (horizontal) aspect ratio. For regular horizontal photos and videos taken with most cameras and smartphones, no cropping is necessary as they fit between these ratios. For portrait photos and videos, or panorama photos, some cropping is required to upload your photo/video.

[Carousel posts](//views/upload.md#carousel-posts) have different requirements enforced. All items must either be resized to square, all horizontal, or all vertical aspect ratios. Flume will enforce this restriction when toggling a regular post into a carousel post, and lock cropping regions to the aspect ratio of the first item in your Carousel Post.

To choose the cropping region for photos and videos in Flume, simply use the mouse scroll-wheel to pan left/right/up/down.

## Photo Specifications
Flume will accept all JPG and PNG files. No other specifications are required, except for the aspect ratio rules above. High DPI images are supported.

Photos will be compressed to a maximum dimension of 1080px before uploading. If you would like to avoid Flume performing compression of high-resolution photos, or to avoid issues with color profiles, configure your workflow to export photos with a maximum dimension of 1080px.

For more info on photo specifications and resolutions, please see the [official Instagram support article.](www.facebook.com/help/instagram/1631821640426723)

## Video Specifications
Flume will accept all video files with a .mp4, .mov or .m4v container. Note that if you are using a video codec that QuickTime cannot compress, your upload may fail. Duration must be between 3-60 seconds. 

Videos will be compressed to a maximum dimension of 1920px before uploading. If you would like to avoid Flume performing compression of high-resolution videos, configure your workflow to export videos with a maximum dimension of 1920px.

We suggest you output your videos using the following specifications for best results.

| Attribute | Requirement |
| ----------------------- |
| Dimensions | No greater than 1920x1080. Note that Instagram's aspect-ratio rules still apply. |
| File Size | Less than 100MB. This is to ensure Flume's compression before upload will not result in drastic changes from a high-resolution export. |
| Frame Rate | 30fps |
| Video Codec | H.264 codec / MP4 container with a 5,500 kbps video bitrate. The final bitrate might be adjusted by Instagram's servers. |
| Audio Codec | AAC audio codec at 44.1 kHz |

Some additional information can be found on [Facebook's official recommendations.](https://www.facebook.com/business/ads-guide/video-views/instagram-video-views/)

------