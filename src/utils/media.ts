/**
 * Media optimization utilities for Cloudinary hosted video assets.
 */

/**
 * Generates an optimized Cloudinary video poster frame URL.
 * Automatically samples at second 1 (so_1) to avoid dark/intro frames,
 * converting to auto-quality optimized JPEG.
 */
export const getCloudinaryPoster = (url: string): string => {
  if (!url) return '';
  if (url.includes('/video/upload/')) {
    return url
      .replace('/video/upload/', '/video/upload/so_1,q_auto,f_jpg/')
      .replace(/\.(mp4|mov)$/i, '.jpg');
  }
  return url;
};

/**
 * Returns an optimized video source URL.
 * If the asset is a .mov container, Cloudinary serves it as standard H.264 mp4
 * with vc_h264 transformation for 100% universal browser compatibility.
 */
export const getOptimizedVideoSrc = (url: string): string => {
  if (!url) return '';
  if (url.toLowerCase().endsWith('.mov')) {
    return url
      .replace('/video/upload/', '/video/upload/vc_h264/')
      .replace(/\.mov$/i, '.mp4');
  }
  return url;
};
