import React from "react";

export type TimelineItem = {
  year: string;
  content: string;
};

interface AceternityTimelineProps {
  items: TimelineItem[];
}

// Lightweight, dependency-free timeline inspired by Aceternity UI
// - Horizontal scroll with snap
// - Hide scrollbar
// - When hovered, mouse wheel moves to next/prev item
export default function AceternityTimeline({ items }: AceternityTimelineProps) {
  const listRef = React.useRef<HTMLOListElement>(null)
  const hoverRef = React.useRef(false)
  const lastWheelRef = React.useRef(0)
  const draggingRef = React.useRef(false)
  const startRef = React.useRef<{ x: number; left: number } | null>(null)

  const onWheel = (e: React.WheelEvent) => {
    if (!hoverRef.current) return
    const list = listRef.current
    if (!list) return
    const now = Date.now()
    if (now - lastWheelRef.current < 250) return

    const children = Array.from(list.children) as HTMLElement[]
    if (children.length === 0) return
    const scrollLeft = list.scrollLeft

    // find current index by closest offsetLeft
    let current = 0
    for (let i = 0; i < children.length; i++) {
      if (children[i].offsetLeft - 10 <= scrollLeft) current = i
      else break
    }

    const atStart = scrollLeft <= 2
    const atEnd = scrollLeft >= list.scrollWidth - list.clientWidth - 2

    const dir = e.deltaY > 0 ? 1 : -1
    const next = Math.min(Math.max(current + dir, 0), children.length - 1)

    // If we can't advance further, allow page to scroll
    if ((dir < 0 && (atStart || next === current)) || (dir > 0 && (atEnd || next === current))) {
      return
    }

    // We can advance inside timeline -> prevent page scroll
    e.preventDefault()
    const targetLeft = children[next].offsetLeft
    list.scrollTo({ left: targetLeft, behavior: "smooth" })
    lastWheelRef.current = now
  }

  // Drag handlers (desktop)
  const onPointerDown = (e: React.PointerEvent) => {
    const list = listRef.current
    if (!list) return
    draggingRef.current = true
    startRef.current = { x: e.clientX, left: list.scrollLeft }
    list.setPointerCapture?.(e.pointerId)
    list.style.cursor = 'grabbing'
    list.style.userSelect = 'none'
  }
  const onPointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return
    const list = listRef.current
    if (!list || !startRef.current) return
    const dx = e.clientX - startRef.current.x
    list.scrollLeft = startRef.current.left - dx
  }
  const endDrag = (e?: React.PointerEvent) => {
    const list = listRef.current
    draggingRef.current = false
    startRef.current = null
    if (list) {
      if (e) list.releasePointerCapture?.(e.pointerId)
      list.style.cursor = ''
      list.style.userSelect = ''
    }
  }

  return (
    <div className="relative h-full pt-4 md:pt-6" onWheel={onWheel} onMouseEnter={() => (hoverRef.current = true)} onMouseLeave={() => (hoverRef.current = false)}>
      {/* Gradient track */}
      <div className="pointer-events-none absolute left-0 right-0 top-6 md:top-8 h-[3px] bg-gradient-to-r from-primary via-primary/50 to-primary/20" />

      <ol
        ref={listRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        className="overflow-visible relative flex gap-6 md:gap-10 overflow-x-auto pb-6 md:pb-8 scroll-smooth snap-x snap-mandatory hide-scrollbar timeline-scroll h-full timeline-draggable"
      >
        {items.map((item, idx) => (
          <li key={idx} className="relative snap-start min-w-[300px] md:min-w-[420px]">
            {/* Dot */}
            <div className="absolute top-1 md:top-2 left-8 md:left-12">
              <div className="h-3 w-3 md:h-4 md:w-4 rounded-full bg-primary ring-4 ring-primary/30 shadow-[0_0_0_6px_rgba(7,80,163,0.08)]" />
            </div>

            {/* Card */}
            <div className="bg-background border rounded-xl shadow transition-transform duration-300 hover:-translate-y-1">
              <div className="p-5 md:p-6">
                <div className="text-primary text-2xl font-semibold mb-2">{item.year}</div>
                <p className="small-text text-muted-foreground text-sm leading-relaxed">
                  {item.content}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
