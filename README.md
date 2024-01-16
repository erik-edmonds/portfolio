# Remaining Tasks (In order of Priority)
## Layout
### General Functionality
- Basic page
    - Filter
- Transitions
  - Card on click transitions (See below)
- Optimizations
  - Speed: Can be rather slow and unpredictable. When finished, remove unnecessary libraries
  - Mobile optimization
    - Get stylings for sizes
    - PWA
### Styling
- Card:
  - Parent Card
  - Header
    - Divider Between header and cardbody
      - Only if it doesn't take too much space, and only on desktop and mobile. On tablet, use standard card with just parent card, textview and modelview
  - Text as View? or Card?
  - ModelView
- Simple parallax
- Responsive (See below)
## Sections
### Splash Page
- Convert from three.js to r3f
### Homepage
- Add black Youtooz model.
- Camera transition
- Dropdown section filter
- Parallax
- Lenis Scroll library addition
## 3D Models
- two stage lights red/blue
### Animations
- Spiderman
## Flask
- change index.py file to __init__.py with manifest file
- Create blueprint for template
- add launch script to run gunicorn and config wsgi.py file to allow testing without external dependencies
## Splash
## Deployment

# Responsive Ideas
- Desktop
 - Turn section to card in card
 - On click, full screen card
 - Compare the first line, 3D Gaussian Splatting to the following rows. Figure out
which spacing works best. 
- Tablet
- Tablet/Mobile
  - Cards turn to stacked cards
- Mobile
  - Turn canvas from perspective mode to orthographic


# Necessary Fixes
- Fix background; only one spinner appearing. There's two 
- Cards aren't showing properly on mobile
- Card canvases scroll with the page, when background enabled
- Expanded card doesn't transition to right location
- 3D Model disappears on click


# Optimizations
- Change imports to dynamic imports, so they will be loaded when needed instead of immediately