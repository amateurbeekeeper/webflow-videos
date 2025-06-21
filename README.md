# Webflow Videos - Alternative Video Hosting Solution

A Next.js application that provides **free video hosting** as an alternative to YouTube and Vimeo for Webflow projects. This solution gives you direct control over your video files and URLs.

## 🎥 Live Demo

Visit [webflow-videos.vercel.app](https://webflow-videos.vercel.app) to see the hosted videos in action.

## 📹 Available Videos

The following videos are hosted and available for use:

- `DARE.mp4`
- `FAKE_GATE.mp4`
- `FAKE_STATUE.mp4`
- `FLYBUYS_COMPONENTS.mp4`
- `FLYBUYS.mp4`
- `SHORT FILM.mp4`
- `SNOOZE.mov`
- `UP THERE STORE.mp4`

### Direct Video URLs

You can embed these videos directly in your Webflow site:

- https://webflow-videos.vercel.app/videos/DARE.mp4
- https://webflow-videos.vercel.app/videos/FAKE_GATE.mp4
- https://webflow-videos.vercel.app/videos/FAKE_STATUE.mp4
- https://webflow-videos.vercel.app/videos/FLYBUYS_COMPONENTS.mp4
- https://webflow-videos.vercel.app/videos/FLYBUYS.mp4
- https://webflow-videos.vercel.app/videos/SHORT%20FILM.mp4
- https://webflow-videos.vercel.app/videos/SNOOZE.mov
- https://webflow-videos.vercel.app/videos/UP%20THERE%20STORE.mp4

## 🖼️ Image Compression Tool

This project includes a **free image compression script** that automatically compresses photos to meet Webflow's 4MB file size limit.

### Features:
- ✅ Compresses images to under 4MB (Webflow's specification)
- ✅ Maintains optimal quality while reducing file size
- ✅ Processes all images in subfolders automatically
- ✅ Supports JPG, JPEG, PNG, and WebP formats
- ✅ Smart compression that only processes files that need it

### How to Use the Image Compression Tool:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Place your images in the `images` folder:**
   ```
   images/
   ├── folder1/
   │   ├── image1.jpg
   │   └── image2.png
   └── folder2/
       └── image3.jpeg
   ```

3. **Run the compression script:**
   ```bash
   npm run compress-images
   ```

4. **The script will:**
   - Skip images already under 4MB
   - Compress larger images while maintaining quality
   - Show progress and results for each file
   - Process all subfolders automatically

## 🚀 Why Use This Instead of YouTube/Vimeo?

### Advantages:
- **Direct Control:** You own the video files and URLs
- **No Branding:** No YouTube/Vimeo logos or suggested videos
- **Custom URLs:** Clean, branded video URLs
- **No Ads:** No platform advertisements
- **Privacy:** Videos aren't discoverable on public platforms
- **Unlimited:** No platform-specific upload limits

### When to Use:
- Professional client work
- Branded video content
- Private/internal videos
- Custom video players
- When you want full control over video delivery

## 💡 Webflow Integration Tips

### Embedding Videos in Webflow:

1. **HTML Embed Element:**
   ```html
   <video controls width="100%">
     <source src="https://webflow-videos.vercel.app/videos/YOUR_VIDEO.mp4" type="video/mp4">
     Your browser does not support the video tag.
   </video>
   ```

2. **Custom Code Element:**
   - Add a Custom Code element in Webflow
   - Paste the HTML above
   - Replace `YOUR_VIDEO.mp4` with your actual video filename

3. **Background Video:**
   ```html
   <video autoplay muted loop playsinline style="position: absolute; width: 100%; height: 100%; object-fit: cover;">
     <source src="https://webflow-videos.vercel.app/videos/YOUR_VIDEO.mp4" type="video/mp4">
   </video>
   ```

## 🛠️ Development

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

### Getting Started:

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Compress images
npm run compress-images
```

Open [http://localhost:3000](http://localhost:3000) to view the development site.

## 📁 Project Structure

```
webflow-videos/
├── public/
│   └── videos/          # Video files
├── images/              # Images for compression
├── scripts/
│   └── compress-images.js  # Image compression utility
├── src/                 # Next.js source code
└── README.md           # This file
```

## 🚀 Deployment

This project is deployed on Vercel and is accessible at [webflow-videos.vercel.app](https://webflow-videos.vercel.app).

### Deploy Your Own:

1. Fork this repository
2. Connect to Vercel
3. Deploy automatically
4. Add your videos to the `public/videos/` folder

## 📝 Notes

- Videos are served directly from Vercel's CDN for fast loading
- No bandwidth limits on Vercel's free tier
- Images are automatically compressed to meet Webflow's 4MB limit
- All tools and scripts are included for free

## 🤝 Contributing

Feel free to contribute by:
- Adding new video hosting methods
- Improving the image compression script
- Adding more documentation
- Reporting issues

## 📄 License

This project is open source and available under the MIT License.

---

**Happy video hosting! 🎬**
