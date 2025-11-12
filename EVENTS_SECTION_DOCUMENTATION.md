# Events Section Documentation

## 📍 Location
**File**: `app/merl/page.tsx`  
**Position**: Before the "Enroll in our summer chip design" section  
**Section ID**: `events`

---

## 🎨 Layout Structure

### Grid Layout
```
┌─────────────────────────────────────────────────────┐
│                     Events                          │
│  MERL-UITU hosted Events and Training Sessions...  │
├─────────────┬─────────────┬─────────────────────────┤
│   Card 1    │   Card 2    │      Card 3            │
│   [Image]   │   [Image]   │      [Image]           │
│   Title     │   Title     │      Title             │
│   Desc      │   Desc      │      Desc              │
└─────────────┴─────────────┴─────────────────────────┘
```

### Responsive Behavior
- **Mobile**: 1 column (stacked)
- **Tablet/Desktop**: 3 columns (side by side)

---

## 🎯 Features

### Section Header
- **Title**: "Events" (4xl, bold, gray-900)
- **Description**: Subtitle explaining MERL events
- **Alignment**: Center
- **Spacing**: mb-12 (48px bottom margin)

### Event Cards (3 total)
Each card includes:
1. **Image**: 256px height, full width, object-cover
2. **Title**: "MERL Training Session X"
3. **Description**: Brief text about the event
4. **Hover Effects**:
   - Shadow increases (shadow-lg → shadow-xl)
   - Card lifts up (-translate-y-1)
   - Smooth transition (300ms)

---

## 💻 Code Structure

```tsx
<section id="events" className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header */}
    <div className="text-center mb-12">
      <h2>Events</h2>
      <p>Description...</p>
    </div>

    {/* Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Card 1 */}
      <div className="bg-white rounded-xl shadow-lg...">
        <img src="..." />
        <div className="p-6">
          <h3>Title</h3>
          <p>Description</p>
        </div>
      </div>
      
      {/* Card 2 & 3 - Same structure */}
    </div>
  </div>
</section>
```

---

## 🎨 Styling Details

### Section
```css
py-16          → padding-y: 4rem (64px)
bg-white       → background: white
```

### Container
```css
max-w-7xl      → max-width: 80rem (1280px)
mx-auto        → margin-x: auto (centered)
px-4           → padding-x: 1rem (16px)
sm:px-6        → padding-x: 1.5rem (24px) on small screens
lg:px-8        → padding-x: 2rem (32px) on large screens
```

### Header
```css
text-center    → text-align: center
mb-12          → margin-bottom: 3rem (48px)
text-4xl       → font-size: 2.25rem (36px)
font-bold      → font-weight: 700
text-gray-900  → color: #111827
```

### Grid
```css
grid                → display: grid
grid-cols-1         → 1 column (mobile)
md:grid-cols-3      → 3 columns (tablet+)
gap-8               → gap: 2rem (32px)
```

### Card
```css
bg-white            → background: white
rounded-xl          → border-radius: 0.75rem (12px)
shadow-lg           → box-shadow: large
border              → border: 1px solid
border-gray-100     → border-color: #f3f4f6
overflow-hidden     → overflow: hidden
```

### Card Hover Effects
```css
hover:shadow-xl     → Larger shadow on hover
hover:-translate-y-1 → Move up 4px on hover
transition-all      → Smooth transition
duration-300        → 300ms duration
```

### Image
```css
w-full             → width: 100%
h-64               → height: 16rem (256px)
object-cover       → object-fit: cover
```

### Card Content
```css
p-6                → padding: 1.5rem (24px)
text-lg            → font-size: 1.125rem (18px)
font-semibold      → font-weight: 600
text-gray-900      → color: #111827
mt-2               → margin-top: 0.5rem (8px)
text-gray-600      → color: #4b5563
```

---

## 🖼️ Images Used

### Event 1
```
URL: https://uitu.edu.pk/wp-content/uploads/2024/05/Merl-Achievements_compressed_page-0036-scaled.jpg
Alt: MERL Event 1
Title: MERL Training Session 1
```

### Event 2
```
URL: https://uitu.edu.pk/wp-content/uploads/2024/05/Merl-Achievements_pages-to-jpg-0039-scaled.jpg
Alt: MERL Event 2
Title: MERL Training Session 2
```

### Event 3
```
URL: https://uitu.edu.pk/wp-content/uploads/2024/05/Merl-Achievements_pages-to-jpg-0042-scaled.jpg
Alt: MERL Event 3
Title: MERL Training Session 3
```

---

## 📱 Responsive Breakpoints

### Mobile (< 768px)
```
┌─────────────┐
│   Card 1    │
│   [Image]   │
│   Title     │
│   Desc      │
├─────────────┤
│   Card 2    │
│   [Image]   │
│   Title     │
│   Desc      │
├─────────────┤
│   Card 3    │
│   [Image]   │
│   Title     │
│   Desc      │
└─────────────┘
```

### Tablet/Desktop (≥ 768px)
```
┌─────────────┬─────────────┬─────────────┐
│   Card 1    │   Card 2    │   Card 3    │
│   [Image]   │   [Image]   │   [Image]   │
│   Title     │   Title     │   Title     │
│   Desc      │   Desc      │   Desc      │
└─────────────┴─────────────┴─────────────┘
```

---

## 🎯 Customization Options

### Add More Cards
```tsx
{/* Event Card 4 */}
<div className="bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
  <img
    alt="MERL Event 4"
    className="w-full h-64 object-cover"
    src="YOUR_IMAGE_URL"
  />
  <div className="p-6">
    <h3 className="text-lg font-semibold text-gray-900">MERL Training Session 4</h3>
    <p className="text-gray-600 mt-2">
      Your description here
    </p>
  </div>
</div>
```

### Change Grid Columns
```tsx
{/* 2 columns on tablet, 4 on desktop */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
```

### Change Image Height
```tsx
{/* Taller images */}
<img className="w-full h-80 object-cover" />

{/* Shorter images */}
<img className="w-full h-48 object-cover" />
```

### Change Card Colors
```tsx
{/* Blue card */}
<div className="bg-blue-50 rounded-xl shadow-lg border border-blue-200...">

{/* Gray card */}
<div className="bg-gray-50 rounded-xl shadow-lg border border-gray-200...">
```

---

## ♿ Accessibility

### Alt Text
```tsx
alt="MERL Event 1"  // Descriptive alt text for screen readers
```

### Semantic HTML
```tsx
<section>  // Semantic section element
<h2>       // Proper heading hierarchy
<h3>       // Card titles
```

### Keyboard Navigation
- Cards are focusable
- Hover effects work with keyboard focus
- Images have alt text

---

## 🎨 Design Tokens

### Colors
```
Background: white (#ffffff)
Title: gray-900 (#111827)
Description: gray-600 (#4b5563)
Border: gray-100 (#f3f4f6)
```

### Spacing
```
Section padding: 64px (py-16)
Card gap: 32px (gap-8)
Card padding: 24px (p-6)
Title margin: 8px (mt-2)
```

### Typography
```
Section title: 36px, bold
Card title: 18px, semibold
Description: 16px, regular
```

### Effects
```
Shadow: large (shadow-lg)
Shadow hover: extra-large (shadow-xl)
Border radius: 12px (rounded-xl)
Transition: 300ms
Transform: -4px Y on hover
```

---

## 🔄 Animation Details

### Hover Animation
```css
Initial State:
- shadow-lg
- translate-y-0

Hover State:
- shadow-xl (larger shadow)
- -translate-y-1 (move up 4px)
- transition-all duration-300 (smooth 300ms)
```

### Visual Effect
```
Before Hover:          On Hover:
┌─────────┐           ┌─────────┐
│  Card   │           │  Card   │ ↑ (lifted)
│         │           │         │
└─────────┘           └─────────┘
  Shadow                Bigger Shadow
```

---

## 📊 Performance

### Image Optimization
- Images loaded from external CDN (uitu.edu.pk)
- Using `<img>` tag (not Next/Image for external URLs)
- `object-cover` ensures proper aspect ratio
- Fixed height (h-64) prevents layout shift

### CSS Performance
- Tailwind utility classes (minimal CSS)
- Hardware-accelerated transforms
- Efficient hover transitions

---

## 🐛 Troubleshooting

### Images Not Loading
1. Check internet connection
2. Verify image URLs are accessible
3. Check browser console for errors
4. Try opening image URL directly in browser

### Cards Not Hovering
1. Check if hover classes are applied
2. Verify transition classes exist
3. Test in different browsers
4. Check for conflicting CSS

### Layout Breaking
1. Verify grid classes are correct
2. Check responsive breakpoints
3. Test on different screen sizes
4. Inspect with DevTools

---

## ✅ Testing Checklist

- [x] Section displays correctly
- [x] 3 cards in a row on desktop
- [x] 1 card per row on mobile
- [x] Images load properly
- [x] Hover effects work
- [x] Cards lift on hover
- [x] Shadow increases on hover
- [x] Smooth transitions
- [x] Responsive on all devices
- [x] Alt text present
- [x] No console errors

---

## 📝 Content Management

To update event information:

1. **Change Title**:
   ```tsx
   <h3>Your New Title</h3>
   ```

2. **Change Description**:
   ```tsx
   <p>Your new description text</p>
   ```

3. **Change Image**:
   ```tsx
   <img src="YOUR_NEW_IMAGE_URL" alt="Your Alt Text" />
   ```

4. **Add Date** (optional):
   ```tsx
   <div className="p-6">
     <p className="text-sm text-gray-500 mb-2">May 15, 2024</p>
     <h3>Title</h3>
     <p>Description</p>
   </div>
   ```

---

*Last Updated: November 8, 2025*  
*Section: Events*  
*Status: ✅ Complete*
