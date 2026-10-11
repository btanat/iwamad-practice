# Week 5 — Handoff notes (SIS 2 starter design)

Routes (from the prototype):
/ → posts-desktop, posts-phone (posts list)
/posts/:id → post-desktop (opened with "Read more")
* → 404-desktop

Components → React files:
PostCard → src/components/PostCard.tsx
Button → src/components/ui/Button.tsx
Tag → src/components/ui/Tag.tsx

Button variants → prop:
variant = primary | secondary

PostCard layout:
direction column  gap 12  padding 16  radius 8

Breakpoint change:
phone 1 column, desktop 3 columns; header stacked on phone, one row on desktop

Tokens (all ten):
color/primary = #1D4ED8
color/on-primary = #FFFFFF
color/text = #1F2937
color/text-muted = #9CA3AF
color/surface = #FFFFFF
color/border = #D1D5DB
space/2 = 8
space/4 = 16
space/6 = 24
radius/md = 8

Component details:
Button: height 44, padding-x 8, gap 10, radius 8, text 14; primary fill color/primary; secondary fill color/surface + 1px stroke color/primary
Tag: text 14, padding-x 8, padding-y 2, radius 999, 1px stroke color/border
PostCard text: title 20 regular color/text; date 14 regular color/text-muted; text centered