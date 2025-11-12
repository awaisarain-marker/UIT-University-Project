# Image Carousel - Visual Guide

## 🎨 Main Carousel Layout

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  ◄                                               ►      │
│  │                                               │      │
│  │                                               │      │
│  │                                               │      │
│  │              [  IMAGE  ]                      │      │
│  │                                               │      │
│  │                                               │      │
│  │                                               │      │
│  ◄                                               ►      │
│                                                         │
└─────────────────────────────────────────────────────────┘
   ↑                                               ↑
   Left Arrow                              Right Arrow
   (White circle)                          (White circle)
```

### Features:
- **Single Image Display**: Only one image visible at a time
- **Navigation Arrows**: White circular buttons on left and right
- **No Dots**: Clean interface without pagination indicators
- **Click to Expand**: Click anywhere on image to open lightbox

---

## 🔍 Lightbox Layout

```
┌─────────────────────────────────────────────────────────┐
│ ████████████████████████████████████████████████████  X │ ← Close Button
│ ██                                                  ██   │
│ ██                                                  ██   │
│ ██  ◄                                         ►     ██   │
│ ██  │                                         │     ██   │
│ ██  │                                         │     ██   │
│ ██  │          [  FULL SIZE IMAGE  ]         │     ██   │
│ ██  │                                         │     ██   │
│ ██  │                                         │     ██   │
│ ██  ◄                                         ►     ██   │
│ ██                                                  ██   │
│ ██                                                  ██   │
│ ████████████████████████████████████████████████████   │
└─────────────────────────────────────────────────────────┘
     ↑                                         ↑
     Left Arrow                         Right Arrow
     (Semi-transparent)                 (Semi-transparent)
```

### Features:
- **Full Screen**: Dark background (95% black opacity)
- **Large Image**: 80% viewport height
- **Navigation**: Semi-transparent white arrows
- **Close Options**: X button, ESC key, or click outside

---

## 🎯 User Flow

```
┌─────────────┐
│   Browse    │
│   Carousel  │
└──────┬──────┘
       │
       ├─► Click Left Arrow ──► Previous Image
       │
       ├─► Click Right Arrow ──► Next Image
       │
       └─► Click Image ──┐
                         │
                         ▼
                  ┌──────────────┐
                  │   Lightbox   │
                  │    Opens     │
                  └──────┬───────┘
                         │
                         ├─► Navigate with Arrows
                         │
                         ├─► Press ESC ──┐
                         │               │
                         ├─► Click X ────┤
                         │               │
                         └─► Click Outside┤
                                         │
                                         ▼
                                  ┌─────────────┐
                                  │   Lightbox  │
                                  │   Closes    │
                                  └─────────────┘
```

---

## 📐 Dimensions

### Main Carousel

```
Mobile (< 768px):
┌─────────────────┐
│                 │
│                 │  Height: 400px
│     IMAGE       │
│                 │
│                 │
└─────────────────┘
  Width: 100%

Desktop (≥ 768px):
┌─────────────────┐
│                 │
│                 │
│                 │  Height: 500px
│     IMAGE       │
│                 │
│                 │
│                 │
└─────────────────┘
  Width: 50% (lg:w-1/2)
```

### Lightbox

```
All Devices:
┌─────────────────────────────┐
│                             │
│                             │
│                             │
│                             │
│          IMAGE              │  Height: 80vh
│                             │
│                             │
│                             │
│                             │
└─────────────────────────────┘
  Max Width: 6xl (1152px)
```

---

## 🎨 Button Styles

### Main Carousel Arrows

```
┌─────────┐
│    ◄    │  Background: White (90% opacity)
│         │  Hover: White (100% opacity)
└─────────┘  Size: 48px × 48px
             Icon: 24px × 24px
             Shadow: Large
             Position: Absolute, centered vertically
```

### Lightbox Arrows

```
┌─────────┐
│    ◄    │  Background: White (20% opacity)
│         │  Hover: White (30% opacity)
└─────────┘  Size: 64px × 64px
             Icon: 32px × 32px
             Color: White
             Position: Absolute, centered vertically
```

### Close Button

```
┌─────────┐
│    ✕    │  Background: White (10% opacity)
│         │  Hover: White (20% opacity)
└─────────┘  Size: 48px × 48px
             Icon: 32px × 32px
             Color: White
             Position: Top-right corner
```

---

## 🔄 Animation Flow

### Opening Lightbox

```
Main Carousel Image
        │
        │ Click
        ▼
   [Fade In]
        │
        ▼
Lightbox Appears
(opacity: 0 → 1)
Duration: 300ms
```

### Closing Lightbox

```
Lightbox Open
        │
        │ ESC / Click X / Click Outside
        ▼
   [Fade Out]
        │
        ▼
Lightbox Disappears
(opacity: 1 → 0)
Duration: 300ms
```

### Sliding Images

```
Current Image
        │
        │ Click Arrow
        ▼
   [Smooth Slide]
        │
        ▼
Next/Previous Image
Duration: Instant (Embla default)
```

---

## 📱 Responsive Behavior

### Mobile View (< 768px)

```
┌─────────────────────────┐
│  ◄    [IMAGE]      ►    │  Height: 400px
└─────────────────────────┘  Width: 100%
         Full Width          Touch-friendly buttons
```

### Desktop View (≥ 768px)

```
┌──────────────────┬──────────────────┐
│                  │                  │
│   Text Content   │  ◄ [IMAGE] ►    │  Height: 500px
│                  │                  │  Width: 50%
└──────────────────┴──────────────────┘
   50% Width           50% Width
```

---

## 🎯 Image States

### Normal State
```
┌─────────────────┐
│                 │
│     IMAGE       │  Cursor: pointer
│                 │  Opacity: 100%
└─────────────────┘
```

### Hover State
```
┌─────────────────┐
│                 │
│     IMAGE       │  Cursor: pointer
│                 │  Opacity: 100%
└─────────────────┘  (No visual change)
```

### Clicked State
```
┌─────────────────┐
│                 │
│     IMAGE       │  → Opens Lightbox
│                 │
└─────────────────┘
```

---

## 🔢 Image Counter (Not Implemented)

If you want to add an image counter in the future:

```
┌─────────────────────────────────────┐
│                                     │
│              [IMAGE]                │
│                                     │
│                                     │
│              3 / 8                  │ ← Counter
└─────────────────────────────────────┘
```

---

## 🎨 Color Scheme

### Main Carousel
- **Background**: White
- **Arrows**: White with shadow
- **Arrow Icons**: Dark gray (#1f2937)
- **Hover**: Brighter white

### Lightbox
- **Background**: Black (95% opacity)
- **Arrows**: White (20% opacity)
- **Arrow Icons**: White
- **Close Button**: White (10% opacity)
- **Hover**: Increased opacity

---

## 📊 Component Hierarchy

```
ImageCarouselWithLightbox
│
├── Main Carousel
│   ├── Embla Container
│   │   └── Image Slides (8 images)
│   │       └── Next/Image Component
│   │
│   ├── Left Arrow Button
│   └── Right Arrow Button
│
└── Lightbox (Conditional)
    ├── Dark Overlay
    ├── Close Button (X)
    ├── Embla Container
    │   └── Image Slides (8 images)
    │       └── Next/Image Component
    │
    ├── Left Arrow Button
    └── Right Arrow Button
```

---

## 🎬 Interaction Examples

### Example 1: Basic Navigation
```
User sees: [Image 1]
User clicks: Right Arrow →
Result: [Image 2] appears
```

### Example 2: Loop Navigation
```
User sees: [Image 8] (last image)
User clicks: Right Arrow →
Result: [Image 1] appears (loops back)
```

### Example 3: Opening Lightbox
```
User sees: [Image 3] in carousel
User clicks: On the image
Result: Lightbox opens showing [Image 3] full-screen
```

### Example 4: Closing Lightbox
```
User sees: Lightbox with [Image 5]
User presses: ESC key
Result: Lightbox closes, returns to carousel
```

---

## 🎯 Key Measurements

| Element | Mobile | Desktop |
|---------|--------|---------|
| Carousel Height | 400px | 500px |
| Carousel Width | 100% | 50% |
| Lightbox Height | 80vh | 80vh |
| Lightbox Width | 100% | max-w-6xl |
| Arrow Size (Main) | 48px | 48px |
| Arrow Size (Lightbox) | 64px | 64px |
| Icon Size (Main) | 24px | 24px |
| Icon Size (Lightbox) | 32px | 32px |

---

*Visual Guide Created: November 8, 2025*
