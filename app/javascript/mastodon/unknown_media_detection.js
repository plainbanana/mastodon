const IMAGE_EXTENTION = ['.jpg', '.jpeg', '.png']
const VIDEO_EXTENTION = ['.mp4']

export function unknown_media_detection(remote_url) {
    if (remote_url) {
        let ext = '.' + remote_url.split('.').pop();
        if (IMAGE_EXTENTION.indexOf(ext) >= 0) {
            return 'image';
        }
        else if (VIDEO_EXTENTION.indexOf(ext) >= 0) {
            return 'video';
        }
    }
    return 'unknown';
};