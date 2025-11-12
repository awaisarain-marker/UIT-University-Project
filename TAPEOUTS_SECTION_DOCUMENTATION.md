# Tapeouts Section Documentation

## 📍 Location
**File**: `app/merl/page.tsx`  
**Position**: After Events section, before "Enroll in our summer chip design" section  
**Section ID**: `tapeouts`  
**Background**: Gray-50 (light gray)

---

## 🎨 Layout Structure

### Two-Column Layout
```
┌─────────────────────────────────────────────────────────┐
│                      Tapeouts                           │
├──────────────────────────┬──────────────────────────────┤
│                          │  ┌────┐ ┌────┐ ┌────┐       │
│   Text Content           │  │Img1│ │Img2│ │Img3│       │
│   (3 paragraphs)         │  │    │ │    │ │    │       │
│                          │  │Name│ │Name│ │Name│       │
│                          │  └────┘ └────┘ └────┘       │
└──────────────────────────┴──────────────────────────────┘
```

### Responsive Behavior
- **Mobile**: Stacked (text on top, cards below)
- **Desktop**: Side by side (text left, cards right)

---

## 🎯 Section Components

### 1. Header
- **Title**: "Tapeouts" (4xl, bold, gray-900)
- **Alignment**: Center
- **Spacing**: mb-12 (48px bottom margin)

### 2. Content Grid (2 columns on desktop)
- **Left Column**: Text content (3 paragraphs)
- **Right Column**: 3 tapeout cards in a grid

### 3. Tapeout Cards (3 total)
Each card includes:
- **Image**: 128px height, object-contain
- **Title**: Chip name (SoC-Now, Ibtida SoC, Azadi SoC)
- **Hover Effects**: Shadow increases, lifts up
- **Layout**: 3 columns on tablet/desktop, 1 column on mobile

---

## 💻 Code Structure

```tsx
<section id="tapeouts" className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header */}
    <div className="text-center mb-12">
      <h2>Tapeouts</h2>
    </div>

    {/* Two-Column Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
      {/* Left: Text Content */}
      <div className="space-y-6">
        <p>Paragraph 1...</p>
        <p>Paragraph 2...</p>
        <p>Paragraph 3...</p>
      </div>

      {/* Right: Tapeout Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Card 1: SoC-Now */}
        <div className="bg-white rounded-xl...">
          <img src="..." />
          <h3>SoC-Now</h3>
        </div>
        
        {/* Card 2 & 3 - Same structure */}
      </div>
    </div>
  </div>
</section>
```

---

## 🎨 Styling Details

### Section
```css
py-16          → padding-y: 4rem (64px)
bg-gray-50     → background: #f9fafb (light gray)
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

### Main Grid (Two Columns)
```css
grid                → display: grid
grid-cols-1         → 1 column (mobile)
lg:grid-cols-2      → 2 columns (desktop)
gap-12              → gap: 3rem (48px)
items-center        → align-items: center
mb-12               → margin-bottom: 3rem (48px)
```

### Text Content
```css
space-y-6          → vertical spacing: 1.5rem (24px)
text-lg            → font-size: 1.125rem (18px) - first paragraph
text-gray-700      → color: #374151
```

### Cards Grid (Three Columns)
```css
grid                → display: grid
grid-cols-1         → 1 column (mobile)
md:grid-cols-3      → 3 columns (tablet+)
gap-4               → gap: 1rem (16px)
```

### Tapeout Card
```css
bg-white            → background: white
rounded-xl          → border-radius: 0.75rem (12px)
shadow-lg           → box-shadow: large
border              → border: 1px solid
border-gray-100     → border-color: #f3f4f6
p-4                 → padding: 1rem (16px)
text-center         → text-align: center
```

### Card Hover Effects
```css
hover:shadow-xl     → Larger shadow on hover
hover:-translate-y-1 → Move up 4px on hover
transition-all      → Smooth transition
duration-300        → 300ms duration
```

### Card Image
```css
w-full             → width: 100%
h-32               → height: 8rem (128px)
object-contain     → object-fit: contain (no cropping)
mb-3               → margin-bottom: 0.75rem (12px)
```

### Card Title
```css
font-semibold      → font-weight: 600
text-gray-900      → color: #111827
```

---

## 📝 Content

### Text Content (3 Paragraphs)

**Paragraph 1** (text-lg):
> MERL-UITU proudly celebrates the groundbreaking accomplishments of its students, who have achieved a series of remarkable tapeouts, solidifying their place at the forefront of technological innovation in Pakistan.

**Paragraph 2**:
> Among these achievements is the development of the country's first Verilog-based microprocessor, a significant milestone in the nation's technological history. Additionally, our students have designed and fabricated an innovative System on a Chip (SoC) for the Google-sponsored Open MPW shuttles.

**Paragraph 3**:
> Our students' success extends beyond these singular projects, with other groundbreaking tapeouts including the CHISEL-based "Ibtida" chip, the Azadi SoC, and the SoC-Now, all of which showcase their ingenuity and technical prowess.

---

## 🖼️ Tapeout Cards

### Card 1: SoC-Now
```
Image: https://uitu.edu.pk/wp-content/uploads/2024/09/socnow_v2Ok24D.png
Alt: SoC-Now
Title: SoC-Now
```

### Card 2: Ibtida SoC
```
Image: https://uitu.edu.pk/wp-content/uploads/2024/09/ibtida-soc.png
Alt: Ibtida SoC
Title: Ibtida SoC
```

### Card 3: Azadi SoC
```
Image: https://uitu.edu.pk/wp-content/uploads/2024/09/slot-019_caravel_azadi_soc.png
Alt: Azadi SoC
Title: Azadi SoC
```

---

## 📱 Responsive Breakpoints

### Mobile (< 1024px)
```
┌─────────────────┐
│   Tapeouts      │
├─────────────────┤
│  Text Content   │
│  Paragraph 1    │
│  Paragraph 2    │
│  Paragraph 3    │
├─────────────────┤
│  ┌───────────┐  │
│  │  Card 1   │  │
│  └───────────┘  │
│  ┌───────────┐  │
│  │  Card 2   │  │
│  └───────────┘  │
│  ┌───────────┐  │
│  │  Card 3   │  │
│  └───────────┘  │
└─────────────────┘
```

### Desktop (≥ 1024px)
```
┌─────────────────────────────────────────┐
│              Tapeouts                   │
├────────────────────┬────────────────────┤
│  Text Content      │  ┌────┬────┬────┐ │
│  Paragraph 1       │  │ C1 │ C2 │ C3 │ │
│  Paragraph 2       │  └────┴────┴────┘ │
│  Paragraph 3       │                    │
└────────────────────┴────────────────────┘
```

---

## 🎯 Design Highlights

### Background Color
- **Section**: Gray-50 (light gray)
- **Cards**: White
- Creates nice contrast

### Typography Hierarchy
```
Section Title: 36px, bold
First Paragraph: 18px (text-lg)
Other Paragraphs: 16px (base)
Card Titles: 16px, semibold
```

### Spacing
```
Section padding: 64px (py-16)
Column gap: 48px (gap-12)
Card gap: 16px (gap-4)
Text spacing: 24px (space-y-6)
```

### Visual Effects
```
Card hover: Lift 4px + larger shadow
Transition: 300ms smooth
Border radius: 12px (rounded-xl)
```

---

## 🎨 Color Palette

```
Background: #f9fafb (gray-50)
Card Background: #ffffff (white)
Text Primary: #111827 (gray-900)
Text Secondary: #374151 (gray-700)
Border: #f3f4f6 (gray-100)
```

---

## ♿ Accessibility

### Alt Text
```tsx
alt="SoC-Now"      // Descriptive alt text
alt="Ibtida SoC"   // Descriptive alt text
alt="Azadi SoC"    // Descriptive alt text
```

### Semantic HTML
```tsx
<section>  // Semantic section element
<h2>       // Proper heading hierarchy
<h3>       // Card titles
<p>        // Paragraphs
```

### Contrast
- Text on gray-50 background: ✅ Passes WCAG AA
- Card text on white: ✅ Passes WCAG AA

---

## 🔄 Customization Options

### Add More Cards
```tsx
{/* Card 4 */}
<div className="bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-4 text-center">
  <img
    alt="Your Chip Name"
    className="w-full h-32 object-contain mb-3"
    src="YOUR_IMAGE_URL"
  />
  <h3 className="font-semibold text-gray-900">Your Chip Name</h3>
</div>
```

### Change Grid Layout
```tsx
{/* 4 columns on desktop */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

{/* 2 columns on desktop */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
```

### Change Image Height
```tsx
{/* Taller images */}
<img className="w-full h-40 object-contain mb-3" />

{/* Shorter images */}
<img className="w-full h-24 object-contain mb-3" />
```

### Add Description to Cards
```tsx
<div className="p-4 text-center">
  <img src="..." />
  <h3>Title</h3>
  <p className="text-sm text-gray-600 mt-2">Description here</p>
</div>
```

---

## 📊 Layout Comparison

### Events Section vs Tapeouts Section

| Feature | Events | Tapeouts |
|---------|--------|----------|
| Background | White | Gray-50 |
| Layout | 3-column grid | 2-column (text + cards) |
| Cards | Full cards | Compact cards |
| Image Height | 256px | 128px |
| Content | Image + Title + Desc | Image + Title only |
| Hover | Yes | Yes |
| Lightbox | Yes | No (for now) |

---

## 🎬 Animation Details

### Card Hover Animation
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
│  [Img]  │           │  [Img]  │
│  Title  │           │  Title  │
└─────────┘           └─────────┘
  Shadow                Bigger Shadow
```

---

## 🐛 Troubleshooting

### Images Not Loading
1. Check internet connection
2. Verify image URLs are accessible
3. Check browser console for errors
4. Try opening image URL directly in browser

### Cards Not Aligning
1. Verify grid classes are correct
2. Check responsive breakpoints
3. Test on different screen sizes
4. Inspect with DevTools

### Text Overflow
1. Check container max-width
2. Verify padding is applied
3. Test on mobile devices
4. Adjust text size if needed

---

## ✅ Testing Checklist

- [x] Section displays correctly
- [x] Title centered and visible
- [x] Text content readable
- [x] 3 cards display in grid
- [x] Images load properly
- [x] Hover effects work
- [x] Cards lift on hover
- [x] Shadow increases on hover
- [x] Smooth transitions
- [x] Responsive on mobile (stacked)
- [x] Responsive on desktop (side by side)
- [x] Alt text present
- [x] No console errors

---

## 📝 Content Management

To update tapeout information:

1. **Change Text**:
   ```tsx
   <p>Your new text here</p>
   ```

2. **Change Card Title**:
   ```tsx
   <h3>Your New Chip Name</h3>
   ```

3. **Change Image**:
   ```tsx
   <img src="YOUR_NEW_IMAGE_URL" alt="Your Alt Text" />
   ```

4. **Add More Paragraphs**:
   ```tsx
   <div className="space-y-6">
     <p>Paragraph 1</p>
     <p>Paragraph 2</p>
     <p>Paragraph 3</p>
     <p>Paragraph 4</p> {/* New */}
   </div>
   ```

---

## 💡 Future Enhancements

Potential improvements:
- [ ] Add lightbox functionality (like Events section)
- [ ] Add chip specifications on hover
- [ ] Add links to detailed chip pages
- [ ] Add fabrication dates
- [ ] Add technology node information
- [ ] Add download links for datasheets
- [ ] Add video demonstrations

---

## 📊 Performance

### Image Optimization
- Images loaded from external CDN (uitu.edu.pk)
- Using `<img>` tag (not Next/Image for external URLs)
- `object-contain` ensures proper aspect ratio
- Fixed height (h-32) prevents layout shift

### CSS Performance
- Tailwind utility classes (minimal CSS)
- Hardware-accelerated transforms
- Efficient hover transitions

---

*Last Updated: November 8, 2025*  
*Section: Tapeouts*  
*Status: ✅ Complete (No lightbox yet)*
