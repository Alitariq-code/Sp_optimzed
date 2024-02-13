// pages/api/images.js

import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const { imageName } = req.query;
  const imagePath = path.join(process.cwd(), `${imageName}`);

  try {
    const imageBuffer = fs.readFileSync(imagePath);
    let contentType;

    // Determine the content type based on the file extension
    if (imageName.endsWith('.webp')) {
      contentType = 'image/webp';
    } else if (imageName.endsWith('.svg')) {
      contentType = 'image/svg+xml';
    } else if (imageName.endsWith('.gif')) {
      contentType = 'image/gif';
    } else {
      // Add more conditions for other image formats if needed
      res.status(400).end('Unsupported image format');
      return;
    }

    res.writeHead(200, { 'Content-Type': contentType });
    res.end(imageBuffer, 'binary');
  } catch (error) {
    console.error('Error fetching image:', error);
    res.status(500).end('Internal Server Error');
  }
}
