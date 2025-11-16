# 🎉 Birthday Website for Your Bestie

A beautiful, creative, and interactive birthday website with animations, music player, photo gallery, and special messages.

## 📁 Project Structure

```
birthday-website/
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # Interactive features and animations
├── music/              # Folder for your music files
│   └── your-song.mp3   # Your birthday song (add your file here)
├── photos/             # Folder for your photos
│   ├── photo1.jpg      # Your photos (add your files here)
│   ├── photo2.jpg
│   └── ...
└── README.md           # This file
```

## 🎵 How to Add Your Music

1. **Create the music folder:**
   - Create a folder named `music` in the `birthday-website` directory

2. **Add your song:**
   - Place your music file (MP3 format recommended) in the `music` folder
   - Name it something like `birthday-song.mp3` or `bestie-song.mp3`

3. **Update the HTML:**
   - Open `index.html`
   - Find the `<audio>` tag (around line 15)
   - Replace `music/your-song.mp3` with `music/your-actual-filename.mp3`
   
   Example:
   ```html
   <source src="music/birthday-song.mp3" type="audio/mpeg">
   ```

## 📸 How to Add Your Photos

1. **Create the photos folder:**
   - Create a folder named `photos` in the `birthday-website` directory

2. **Add your photos:**
   - Place your photo files (JPG, PNG, etc.) in the `photos` folder
   - Name them `photo1.jpg`, `photo2.jpg`, `photo3.jpg`, etc.

3. **Update the HTML (if needed):**
   - Open `index.html`
   - Find the gallery section (around line 70)
   - The photos are already set up with placeholders
   - If you have more or fewer photos:
     - **To add more photos:** Copy a `<div class="gallery-item">` block and update the image source
     - **To remove photos:** Delete the `<div class="gallery-item">` blocks you don't need
   
   Example for adding a photo:
   ```html
   <div class="gallery-item">
       <img src="photos/photo7.jpg" alt="Memory 7" loading="lazy">
       <div class="gallery-overlay">
           <p>Your Custom Caption Here 💫</p>
       </div>
   </div>
   ```

## 💌 How to Add Your Messages

### Main Message Section:
1. Open `index.html`
2. Find the message section (around line 50)
3. Look for the comment `<!-- ADD YOUR MESSAGE HERE -->`
4. Replace the text inside the `<p class="message-text">` tag with your personal message

### Final Message Section:
1. Find the final section (around line 130)
2. Look for the comment `<!-- ADD YOUR FINAL MESSAGE HERE -->`
3. Replace the text inside the `<p class="final-message">` tag with your closing message

### Birthday Wishes:
1. Find the wishes section (around line 100)
2. You can customize the wish cards or add more by copying the `<div class="wish-card">` structure

## 🎨 Customization Tips

### Change Colors:
- Open `styles.css`
- Look for the `:root` section at the top
- Modify the color variables to match your preferences

### Change Fonts:
- The website uses Google Fonts (Poppins and Dancing Script)
- You can change fonts in `index.html` by updating the Google Fonts link

### Adjust Animations:
- All animations are in `styles.css`
- Look for `@keyframes` rules to modify animation behavior

## 🚀 How to View Your Website

### Option 1: Simple Method (Double-click)
1. Simply double-click on `index.html`
2. It will open in your default web browser

### Option 2: Using a Local Server (Recommended)
1. If you have Python installed:
   ```bash
   python -m http.server 8000
   ```
   Then open: `http://localhost:8000`

2. If you have Node.js installed:
   ```bash
   npx http-server
   ```
   Then open the URL shown in the terminal

### Option 3: Deploy Online
- Upload all files to services like:
  - **Vercel** (free, easy)
  - **Netlify** (free, easy)
  - **GitHub Pages** (free)
  - Any web hosting service

## ✨ Features Included

- ✨ Beautiful animated landing page with countdown
- 🎵 Music player with play/pause button
- 📸 Photo gallery with hover effects
- 💌 Customizable message sections
- 🎁 Birthday wishes cards
- 🎊 Confetti animation effects
- 📱 Fully responsive (works on mobile, tablet, desktop)
- 🌟 Smooth scroll animations
- 💫 Parallax effects

## 📝 Notes

- Make sure all your photo and music file paths are correct
- Test the website in different browsers (Chrome, Firefox, Safari, Edge)
- For best results, optimize your photos (compress them if they're too large)
- Music files should be in MP3 format for best browser compatibility

## 🎉 Enjoy!

Your bestie is going to love this special birthday website! Make it personal with your own messages, photos, and music. Have fun! 🎂✨

