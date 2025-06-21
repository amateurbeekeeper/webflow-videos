const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const MAX_SIZE_MB = 4;
const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024;

async function compressImage(inputPath, outputPath) {
    try {
        const stats = fs.statSync(inputPath);
        if (stats.size <= MAX_SIZE_BYTES) {
            console.log(`Skipping ${inputPath} - already under ${MAX_SIZE_MB}MB`);
            return;
        }

        console.log(`Compressing ${inputPath}...`);
        
        // Start with high quality and gradually reduce until we meet the size requirement
        let quality = 80;
        let compressedBuffer;
        
        while (quality > 10) {
            compressedBuffer = await sharp(inputPath)
                .jpeg({ quality: quality })
                .toBuffer();
            
            if (compressedBuffer.length <= MAX_SIZE_BYTES) {
                break;
            }
            
            quality -= 10;
        }

        if (compressedBuffer.length > MAX_SIZE_BYTES) {
            console.error(`Warning: Could not compress ${inputPath} below ${MAX_SIZE_MB}MB`);
            return;
        }

        fs.writeFileSync(outputPath, compressedBuffer);
        console.log(`Successfully compressed ${inputPath} to ${(compressedBuffer.length / 1024 / 1024).toFixed(2)}MB`);
    } catch (error) {
        console.error(`Error processing ${inputPath}:`, error);
    }
}

async function processDirectory(directoryPath) {
    try {
        const files = fs.readdirSync(directoryPath);
        
        for (const file of files) {
            const filePath = path.join(directoryPath, file);
            const stats = fs.statSync(filePath);
            
            if (stats.isDirectory()) {
                await processDirectory(filePath);
            } else if (/\.(jpg|jpeg|png|webp)$/i.test(file)) {
                await compressImage(filePath, filePath);
            }
        }
    } catch (error) {
        console.error(`Error processing directory ${directoryPath}:`, error);
    }
}

// Create images directory if it doesn't exist
const imagesDir = path.join(process.cwd(), 'images');
if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir);
    console.log('Created images directory');
}

// Process all images
processDirectory(imagesDir)
    .then(() => console.log('Image compression complete!'))
    .catch(error => console.error('Error during compression:', error)); 