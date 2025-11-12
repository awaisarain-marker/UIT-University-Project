# Image Carousel with Lightbox - Implementation Guide

## Overview

A fully functional image carousel with lightbox has been added to the MERL page. This component displays Google Summer of Code achievement images with smooth navigation and full-screen viewing capabilities.

---

## 📍 Location

**File**: `app/merl/page.tsx`  
**Line**: ~203-217  
**Section**: "Pakistan's Only Organization Selected as a Mentor Organization in Google Summer of Code"

---

## 🎨 Features Implemented

### Main Carousel
✅ **Single Slide Display** - Shows one image at a time  
✅ **Left/Right Navigation Arrows** - White circular buttons with shadow  
✅ **No Dots** - Clean interface without pagination dots  
✅ **Responsive Height** - 400px mobile, 500px desktop  
✅ **Loop Enabled** - Infinite scrolling  
✅ **Click to Open** - Clicking any image opens lightbox  

### Lightbox
✅ **Full-Screen View** - 80% viewport height  
✅ **Dark Background** - 95% black opacity  
✅ **Navigation Arrows** - Semi-transparent white buttons  
✅ **Close Button** - X button in top-right corner  
✅ **ESC Key Support** - Press ESC to close  
✅ **Click Outside** - Click background to close  
✅ **Smooth Animations** - Framer Motion fade in/out  

---

## 🖼️ Images Used

The carousel displays 8 Google Summer of Code achievement images:

```
/images/GSOC1.jpg
/images/GSOC2.jpg
/images/GSOC3.jpg
/images/GSOC4.jpg
/images/GSOC5.jpg
/images/GSOC6.jpg
/images/GSOC7.jpg
/images/GSOC8.jpg
```

---

## 💻 Code Implementation

### Component Import
```tsx
import ImageCarouselWithLightbox from '@/components/merl/ImageCarouselWithLightbox'
```

### Usage
```tsx
<ImageCarouselWithLightbox
  images={[
    '/images/GSOC1.jpg',
    '/images/GSOC2.jpg',
    '/images/GSOC3.jpg',
    '/images/GSOC4.jpg',
    '/images/GSOC5.jpg',
    '/images/GSOC6.jpg',
    '/images/GSOC7.jpg',
    '/images/GSOC8.jpg',
  ]}
  altPrefix="Google Summer of Code Achievement"
/>
```

---

## 🎯 User Interactions

### Main Carousel
1. **Navigate Left**: Click left arrow button
2. **Navigate Right**: Click right arrow button
3. **Open Lightbox**: Click on any image

### Lightbox
1. **Navigate Images**: Use left/right arrow buttons
2. **Close Lightbox**: 
   - Click X button (top-right)
   - Press ESC key
   - Click outside the image

---

## 📐 Dimensions

### Main Carousel
```css
Mobile:  h-[400px]
Desktop: h-[500px]
Object Fit: contain (preserves aspect ratio)
```

### Lightbox
```css
Height: 80vh (80% of viewport height)
Width: max-w-6xl (centered)
Object Fit: contain (preserves aspect ratio)
```

---

## 🎨 Styling Details

### Navigation Buttons (Main Carousel)
```css
Background: bg-white/90 hover:bg-white
Padding: p-3
Border Radius: rounded-full
Shadow: None (removed)
Icon Size: w-6 h-6
Position: Top-right corner, above carousel
Layout: Flex row with gap-2
```

### Navigation Buttons (Lightbox)
```css
Background: bg-white/20 hover:bg-white/30
Padding: p-4
Border Radius: rounded-full
Icon Size: w-8 h-8
Icon Color: text-white
```

### Close Button
```css
Background: bg-white/10 hover:bg-white/20
Padding: p-2
Border Radius: rounded-full
Position: Absolute top-4 right-4
Icon: X (w-8 h-8)
```

---

## 🔧 Technical Stack

### Dependencies
- **embla-carousel-react** - Carousel functionality
- **framer-motion** - Lightbox animations
- **next/image** - Optimized image loading
- **lucide-react** - Icons (ChevronLeft, ChevronRight, X)

### React Hooks Used
- `useState` - Lightbox state management
- `useCallback` - Memoized navigation functions
- `useEffect` - Keyboard event listener
- `useEmblaCarousel` - Carousel instances (main + lightbox)

---

## ♿ Accessibility

### ARIA Labels
```tsx
aria-label="Previous slide"
aria-label="Next slide"
aria-label="Previous image"
aria-label="Next image"
aria-label="Close lightbox"
```

### Keyboard Support
- **ESC**: Close lightbox
- **Tab**: Navigate through buttons
- **Enter/Space**: Activate buttons

### Image Alt Text
```tsx
alt="Google Summer of Code Achievement 1"
alt="Google Summer of Code Achievement 2"
// etc.
```

---

## 🚀 Performance Optimizations

1. **Next.js Image Component**
   - Automatic image optimization
   - Lazy loading
   - Responsive images with `sizes` prop

2. **Embla Carousel**
   - Lightweight library
   - Smooth animations
   - Efficient DOM manipulation

3. **Framer Motion**
   - Hardware-accelerated animations
   - Conditional rendering with AnimatePresence

4. **Event Listeners**
   - Cleanup on unmount
   - Memoized callbacks

---

## 📱 Responsive Behavior

### Mobile (< 768px)
- Carousel height: 400px
- Touch-friendly navigation buttons
- Full-width display
- Lightbox adapts to screen size

### Desktop (≥ 768px)
- Carousel height: 500px
- Larger navigation buttons
- Max-width container (6xl)
- Centered lightbox

---

## 🎨 Customization Options

### Change Image Heights
```tsx
// In ImageCarouselWithLightbox.tsx, line ~75
<div className="relative w-full h-[YOUR_HEIGHT] md:h-[YOUR_DESKTOP_HEIGHT]">
```

### Modify Button Colors
```tsx
// Main carousel buttons
className="... bg-YOUR_COLOR hover:bg-YOUR_HOVER_COLOR ..."

// Lightbox buttons
className="... bg-white/YOUR_OPACITY hover:bg-white/YOUR_HOVER_OPACITY ..."
```

### Adjust Lightbox Background
```tsx
// Line ~107
className="... bg-black/YOUR_OPACITY ..."
```

### Change Loop Behavior
```tsx
// Line ~18 and 19
const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }); // Disable loop
```

---

## 🐛 Troubleshooting

### Images Not Loading
- Check image paths in `/public/images/`
- Verify image file names match exactly
- Ensure Next.js Image component is configured

### Carousel Not Sliding
- Verify `embla-carousel-react` is installed
- Check console for errors
- Ensure parent container has proper width

### Lightbox Not Opening
- Check click handler on carousel images
- Verify state management
- Check for z-index conflicts

### ESC Key Not Working
- Verify useEffect cleanup
- Check event listener attachment
- Ensure no other ESC handlers conflict

---

## 📝 File Structure

```
components/
└── merl/
    ├── ImageCarouselWithLightbox.tsx  (Main component)
    └── README.md                       (Component docs)

app/
└── merl/
    └── page.tsx                        (Implementation)

public/
└── images/
    ├── GSOC1.jpg
    ├── GSOC2.jpg
    ├── GSOC3.jpg
    ├── GSOC4.jpg
    ├── GSOC5.jpg
    ├── GSOC6.jpg
    ├── GSOC7.jpg
    └── GSOC8.jpg
```

---

## 🔄 Future Enhancements

Potential improvements:
- [ ] Add image captions
- [ ] Add image counter (e.g., "3 / 8")
- [ ] Add thumbnail navigation
- [ ] Add zoom functionality
- [ ] Add swipe gestures for mobile
- [ ] Add autoplay option
- [ ] Add download button
- [ ] Add share functionality

---

## ✅ Testing Checklist

- [x] Carousel displays single image
- [x] Left arrow navigates to previous image
- [x] Right arrow navigates to next image
- [x] Loop works (last → first, first → last)
- [x] Click image opens lightbox
- [x] Lightbox displays correct image
- [x] Lightbox navigation works
- [x] ESC key closes lightbox
- [x] Click outside closes lightbox
- [x] X button closes lightbox
- [x] Responsive on mobile
- [x] Responsive on desktop
- [x] Images load properly
- [x] No console errors
- [x] Accessibility labels present

---

## 📞 Support

For issues or questions:
1. Check component documentation in `components/merl/README.md`
2. Review this implementation guide
3. Check browser console for errors
4. Verify all dependencies are installed

---

*Last Updated: November 8, 2025*  
*Component Version: 1.0.0*
