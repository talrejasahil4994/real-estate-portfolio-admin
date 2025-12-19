const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const cropImage = async (buffer, filename) => {
  const uploadDir = path.join(__dirname, '../../uploads');
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  const outputFileName = `cropped-${Date.now()}-${filename}`;
  const outputPath = path.join(uploadDir, outputFileName);

  await sharp(buffer)
    .resize(450, 350, {
      fit: 'cover',
      position: 'center'
    })
    .toFile(outputPath);

  return outputFileName;
};

module.exports = { cropImage };
