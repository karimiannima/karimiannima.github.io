# Nima Karimian Academic Website

This is a modern static academic website for Nima Karimian.

## Files
- `index.html` — main website content
- `style.css` — responsive design and dark/light mode
- `script.js` — filtering, mobile menu, theme toggle, and citation counter
- `scholar_data.json` — update Google Scholar citation metrics
- `assets/profile-placeholder.svg` — replace with your photo

## How to upload to GitHub
1. Create a private GitHub repository.
2. Upload all extracted files, not the ZIP itself.
3. Connect the private GitHub repository to Netlify.
4. Netlify publish settings:
   - Build command: leave empty
   - Publish directory: `/`

## Replace the photo
Put your photo in `assets/profile.jpg`, then edit `index.html`:

```html
<img src="assets/profile.jpg" alt="Nima Karimian" class="profile-img" />
```

## Update Google Scholar metrics
Edit `scholar_data.json`:

```json
{
  "citations": 1234,
  "h_index": 20,
  "i10_index": 35
}
```


## Add a live visitor map
The site includes a `Visitors` section with a placeholder.

Recommended option:
1. Go to ClustrMaps.com.
2. Create a free visitor map widget.
3. Copy the embed script.
4. Open `index.html`.
5. Find the section `id="visitors"`.
6. Replace the placeholder content inside `visitor-map-placeholder` with your embed code.

You can also use FlagCounter or RevolverMaps.
