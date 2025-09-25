# Design Guidelines: Natural Disaster Alert System - Cinematic Storytelling Website

## Design Approach
**Reference-Based Approach**: Inspired by the dramatic, immersive storytelling style of https://humandestroyer.tilda.ws/#ToxicWaters with full-screen sections, parallax effects, and cinematic transitions adapted for disaster preparedness content.

## Core Design Elements

### A. Color Palette
**Dark Mode Primary**: 
- Background: 15 8% 8% (deep charcoal)
- Text Primary: 0 0% 95% (near white)
- Text Secondary: 0 0% 75% (light gray)

**Accent Colors**:
- Emergency Red: 0 85% 60% (for critical alerts)
- Warning Orange: 25 90% 55% (for cautions)
- Safe Green: 140 60% 50% (for safety info)

**Gradients**: Dark dramatic overlays over disaster imagery using gradients from 15 8% 8% to transparent, positioned at bottom of sections for text readability.

### B. Typography
**Primary Font**: Inter or Poppins (Google Fonts)
- Hero Headlines: 4rem-6rem, font-weight 800
- Section Headers: 2.5rem-3.5rem, font-weight 700  
- Body Text: 1.125rem-1.25rem, font-weight 400
- Captions: 0.875rem, font-weight 300

**Text Animation**: Fade-in from bottom with stagger delays, large headlines split by words for dramatic reveal.

### C. Layout System
**Spacing Primitives**: Tailwind units of 4, 8, 12, 16, 24
- Section padding: p-12 to p-24
- Content spacing: gap-8 to gap-16
- Text margins: mb-4, mb-8
- Button spacing: px-8 py-4

**Grid**: Full-width sections with centered content containers max-w-6xl

### D. Component Library
**Navigation**: Fixed dark header with smooth fade-in scroll navigation
**Hero Section**: Full-viewport with video background, centered text overlay
**Disaster Sections**: Full-screen with background imagery, large animated headlines
**Statistics Counters**: Large numbers with animated count-up effects
**Deep-dive Blocks**: Alternating image-text layout with parallax scrolling
**CTA Section**: Dark full-width with prominent button
**Footer**: Minimal dark with subtle links

### E. Animations
**Scroll Triggers**: GSAP ScrollTrigger for fade-ins, parallax, and counter animations
**Entrance Effects**: Text slides up from bottom with opacity fade
**Parallax**: Background images move slower than foreground content
**Performance**: Lazy-loading for all media, smooth 60fps transitions

## Images
**Hero Section**: Looping video/cinemagraph of dramatic natural disasters (storm clouds, earthquake fissures, flooding) - full viewport background with dark gradient overlay
**Disaster Sections**: High-impact photography for each disaster type - earthquake damage, flood waters, wildfire flames, hurricane satellite imagery, tornado funnel, tsunami waves
**Educational Blocks**: Infographic-style visuals, preparation guides, and real disaster aftermath photos
**Statistics Section**: Abstract dark background with subtle disaster-related textures

All images should be high-resolution, dramatic, and professionally shot with strong contrast suitable for text overlays.