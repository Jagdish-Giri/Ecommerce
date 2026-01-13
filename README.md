# 🛍️ Ecommerce Website

A modern, fully responsive ecommerce website with stunning preloader, smooth scroll animations, and interactive UI effects. Built with pure HTML, CSS, and vanilla JavaScript.

## ✨ Features

### 🎨 Design & UI
- **Animated Preloader** - Beautiful loading screen with rotating rings and pulsing logo
- **Scroll Progress Bar** - Visual indicator at top showing page scroll progress
- **Custom Cursor** - Interactive cursor that responds to hoverable elements
- **Smooth Animations** - Fade, slide, zoom, bounce, and rotate effects throughout
- **Hover Effects** - 3D tilt cards, ripple buttons, glowing badges
- **Parallax Effect** - Mouse-tracking parallax on selected elements
- **Glass Morphism** - Backdrop blur effects on scroll

### 🚀 Advanced Animations
- **Scroll Reveal** - Elements animate into view as you scroll
- **Number Counter** - Stats count up when visible
- **Text Gradient** - Animated gradient text effects
- **Image Lazy Loading** - Images fade in as they load
- **Floating Elements** - Subtle floating animation on badges
- **Card Tilt** - 3D perspective tilt on hover
- **Button Ripple** - Material design ripple effect

### 📱 Responsive Design
- Mobile-first approach
- Hamburger menu for mobile
- Breakpoints: Desktop (1200px+), Tablet (900px-1199px), Mobile (640px-)

### 🏠 Pages
- **Home** - Hero carousel, categories, featured products
- **Shop** - Complete product catalog
- **Product Details** - Individual pages with galleries & specs
- **About** - Team, values, company stats
- **Services** - Support features
- **Blog** - Article listings
- **Login/Signup** - Authentication forms

## 🛠️ Technical Stack

```
HTML5       - Semantic markup
CSS3        - Grid, Flexbox, Animations, Custom Properties
JavaScript  - ES6+, Intersection Observer API, DOM Manipulation
```

## 📁 Project Structure

```
ecommerce-website/
├── index.html                 # Main home page
├── shop.html                  # Shop catalog
├── about.html                 # About page
├── services.html              # Services page
├── blog.html                  # Blog listing
├── login.html                 # Login form
├── signup.html                # Signup form
├── product1.html              # Product detail pages
├── product2.html
├── product3.html
├── product4.html
├── styles.css                 # Main stylesheet (1500+ lines)
├── animations.css             # Animation library (400+ lines)
├── enhanced-animations.js     # Interactive effects
└── README.md                  # Documentation
```

## 🚀 Getting Started

1. Clone the repository
```bash
git clone https://github.com/Jagdish-Giri/Ecommerce.git
```

2. Open `index.html` in your browser
```bash
# No build process required!
open index.html
```

## 🎨 Customization

### Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --bg: #f7f7f7;
    --card: #ffffff;
    --ink: #0f172a;
    --primary: #ef4444;
    --radius: 14px;
}
```

### Preloader Duration
Adjust in `enhanced-animations.js`:
```javascript
setTimeout(() => {
    preloader.classList.add('fade-out');
}, 1500); // Change delay here (milliseconds)
```

### Animation Speed
Modify transition durations in `animations.css`:
```css
.scroll-reveal {
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}
```

## ⚡ Performance Features

- **Intersection Observer** - Efficient scroll detection
- **CSS Hardware Acceleration** - Transform-based animations
- **Lazy Loading** - Images load on demand
- **Debounced Events** - Optimized scroll listeners
- **Minimal Dependencies** - Pure vanilla JavaScript

## 🎬 Animation Classes

| Class | Effect |
|-------|--------|
| `.scroll-reveal` | Fade up from bottom |
| `.scroll-reveal-left` | Slide from left |
| `.scroll-reveal-right` | Slide from right |
| `.scroll-reveal-scale` | Zoom in |
| `.float` | Floating animation |
| `.gradient-text` | Animated gradient text |
| `.ripple` | Click ripple effect |
| `.parallax` | Mouse parallax |

## 📱 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 🔧 Advanced Features

1. **Progress Bar** - Auto-generated scroll indicator
2. **Custom Cursor** - Follows mouse with scale on hover
3. **Tilt Effect** - 3D card rotation based on mouse position
4. **Counter Animation** - Numbers count up when scrolled into view
5. **Navbar Blur** - Background blur on scroll
6. **Smooth Anchor** - Smooth scroll with offset

## 📝 Code Highlights

### Preloader
```javascript
window.addEventListener('load', () => {
    setTimeout(() => {
        preloader.classList.add('fade-out');
    }, 1500);
});
```

### Scroll Reveal
```javascript
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('active');
            }, index * 100);
        }
    });
}, { threshold: 0.15 });
```

### 3D Card Tilt
```javascript
card.addEventListener('mousemove', (e) => {
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});
```

## 🎯 Future Enhancements

- [ ] Shopping cart functionality
- [ ] Product search & filters
- [ ] User authentication backend
- [ ] Payment gateway integration
- [ ] Admin dashboard
- [ ] Email notifications
- [ ] Product reviews system
- [ ] Wishlist feature

## 👨‍💻 Learning Outcomes

Through this project, I learned:
- Efficient scroll animations using Intersection Observer
- CSS transform-origin for directional effects
- Creating accessible carousels with ARIA
- Building multi-page consistent navigation
- Balancing performance with visual effects
- Pure JavaScript DOM manipulation
- Responsive design patterns

## 📄 License

Free to use for personal and commercial projects.

## 🤝 Contributing

Pull requests welcome! For major changes, open an issue first.

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

---

**Built with ❤️ using HTML, CSS & JavaScript**

🔗 [Live Demo](https://jagdish-giri.github.io/Ecommerce/)  
👤 [Jagdish Giri](https://github.com/Jagdish-Giri)
