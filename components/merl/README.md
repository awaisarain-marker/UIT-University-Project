# MERL Components Documentation

## ImageCarouselWithLightbox

A responsive image carousel component with lightbox functionality for the MERL page.

### Features

✅ **Single Slide Display** - Shows one image at a time  
✅ **Navigation Arrows** - Left and right arrows for navigation (no dots)  
✅ **Lightbox on Click** - Opens full-screen lightbox when image is clicked  
✅ **Keyboard Support** - Press ESC to close lightbox  
✅ **Responsive Heights** - Adjusts height based on image dimensions  
✅ **Smooth Animations** - Framer Motion animations for lightbox  
✅ **Loop Enabled** - Infinite scrolling through images  

### Usage

```tsx
import ImageCarouselWithLightbox from '@/components/merl/ImageCarouselWithLightbox';

<ImageCarouselWithLightbox
  images={[
    '/images/GSOC1.jpg',
    '/images/GSOC2.jpg',
    '/images/GSOC3.jpg',
  ]}
  altPrefix="Google Summer of Code Achievement"
/>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `images` | `string[]` | Required | Array of image paths |
| `altPrefix` | `string` | `'MERL Achievement'` | Prefix for alt text (will append index) |

### Image Dimensions

**Main Carousel:**
- Mobile: `h-[400px]`
- Desktop: `h-[500px]`
- Object fit: `contain` (preserves aspect ratio)

**Lightbox:**
- Height: `80vh` (80% of viewport height)
- Object fit: `contain` (preserves aspect ratio)

### Navigation

**Main Carousel:**
- Left/Right arrow buttons
- White background with shadow
- Positioned on sides of carousel

**Lightbox:**
- Left/Right arrow buttons
- Semi-transparent white background
- ESC key to close
- Click outside image to close
- X button in top-right corner

### Accessibility

- `aria-label` on all buttons
- Keyboard navigation support
- Focus management
- Alt text on all images

### Dependencies

- `embla-carousel-react` - Carousel functionality
- `framer-motion` - Lightbox animations
- `next/image` - Optimized images
- `lucide-react` - Icons

### Styling

Uses Tailwind CSS classes:
- Responsive design (mobile-first)
- Shadow effects
- Hover states
- Smooth transitions

### Example Implementation

The carousel is currently used on the MERL page at line 203-217:

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

### Customization

To customize the carousel:

1. **Change image heights:**
   ```tsx
   // In ImageCarouselWithLightbox.tsx
   <div className="relative w-full h-[YOUR_HEIGHT] md:h-[YOUR_DESKTOP_HEIGHT]">
   ```

2. **Modify navigation button styles:**
   ```tsx
   className="absolute left-4 top-1/2 -translate-y-1/2 bg-YOUR_COLOR ..."
   ```

3. **Adjust lightbox background:**
   ```tsx
   className="fixed inset-0 z-50 bg-black/YOUR_OPACITY ..."
   ```

### Performance

- Uses Next.js Image component for optimization
- Lazy loading for images
- Efficient carousel library (Embla)
- Minimal re-renders

### Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

---

*Last Updated: November 8, 2025*
