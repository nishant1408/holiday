# Mobile Testing Guide

## Testing the Mobile Responsiveness

### Browser DevTools Testing

#### Chrome/Firefox DevTools
1. Open the app in Chrome/Firefox
2. Press `F12` or right-click → Inspect
3. Click the device toggle icon (top-left corner)
4. Select different devices from the list:
   - iPhone SE
   - iPhone 12 Pro
   - iPhone 14 Pro
   - iPhone 15 Pro Max
   - Samsung Galaxy S21
   - iPad
   - iPad Pro

#### Manual Breakpoint Testing
The app is responsive at these breakpoints:
- **320px** - Small phones
- **375px** - Standard phones
- **640px** - Small tablets / large phones
- **768px** - Tablets
- **1024px** - Large tablets / small desktop
- **1280px+** - Desktop

### Features to Test on Mobile

#### Layout
- [ ] Cards display in single column on phones
- [ ] Cards display in 2 columns on tablets
- [ ] Cards display in 3 columns on desktop
- [ ] Statistics boxes are properly sized
- [ ] Filter buttons fit on screen and are scrollable

#### Interactions
- [ ] Tap on card opens modal
- [ ] Modal shows bottom sheet style on mobile
- [ ] Modal shows centered on desktop
- [ ] Close button is easily tappable
- [ ] Scrolling in modal works smoothly

#### Touch Optimization
- [ ] All buttons are at least 44x44px (minimum touch target)
- [ ] No accidental taps on nearby elements
- [ ] Tap feedback is immediate
- [ ] Double-tap zoom doesn't interfere

#### Typography
- [ ] Text is readable without zooming on all devices
- [ ] Headings are appropriately sized
- [ ] Font sizes scale properly with screen size
- [ ] Line spacing is appropriate

#### Safe Areas
- [ ] Content doesn't overlap with notch on iPhone X+
- [ ] Content doesn't overlap with home indicator
- [ ] Status bar is readable

#### Performance
- [ ] Page loads quickly on 4G connection
- [ ] Animations are smooth (60fps)
- [ ] No janky scrolling
- [ ] No lag when tapping buttons

### Real Device Testing

#### iOS Testing
1. Use iPhone Safari developer tools:
   - Connect Mac via USB
   - Open Safari DevTools
   - Check console for errors

2. Test on:
   - iPhone 12 Pro (6.1")
   - iPhone 15 Pro Max (6.7")
   - iPad Air/Pro

#### Android Testing
1. Use Android Chrome DevTools:
   - Connect Android device via USB
   - Open Chrome on device
   - Go to chrome://inspect in desktop Chrome

2. Test on:
   - Samsung Galaxy S21/S23
   - Google Pixel 7/8
   - Samsung Galaxy Tab

### Network Testing

#### Simulate Slow Networks
1. Open DevTools → Network tab
2. Set to "Slow 3G" or "4G"
3. Check:
   - Page loads completely
   - Data loads from `public/itinerary.json`
   - No broken layout

### Accessibility Testing

#### Mobile Accessibility
- [ ] All interactive elements are keyboard accessible
- [ ] Text contrast meets WCAG AA standards
- [ ] Font sizes are readable
- [ ] Touch targets are sufficient

#### Screen Reader Testing
1. **iOS**: Use Voice Over
2. **Android**: Use TalkBack

Test:
- [ ] All text is readable
- [ ] Buttons have proper labels
- [ ] Modal is announced correctly

### Landscape Orientation

Test on both portrait and landscape:
- [ ] Layout doesn't break
- [ ] Text remains readable
- [ ] Modal still works correctly
- [ ] No horizontal scroll overflow

### Common Issues to Check

❌ **Common Mobile Issues**
- [ ] Page zooms unexpectedly
- [ ] Text gets cut off
- [ ] Buttons not tappable
- [ ] Modal covers entire screen with no close option
- [ ] Images don't load
- [ ] Animations cause stuttering
- [ ] Form elements get magnified on focus

✅ **Proper Behavior**
- [ ] Smooth, fast interactions
- [ ] Clear, readable text
- [ ] Easy to tap elements
- [ ] Proper spacing on all devices
- [ ] No unexpected zoom
- [ ] Responsive to all screen sizes

### Testing on Different Orientations

1. **Portrait (default)**
   - Single column on small phones
   - Multiple columns on tablets

2. **Landscape**
   - Should show more cards horizontally
   - Text should still be readable

### Performance Profiling

#### Using Chrome DevTools
1. Open DevTools → Performance tab
2. Record user interactions
3. Check:
   - FCP (First Contentful Paint) < 1.5s
   - LCP (Largest Contentful Paint) < 2.5s
   - No layout shifts (CLS < 0.1)

#### Lighthouse Testing
1. Open DevTools → Lighthouse
2. Click "Analyze page load"
3. Check scores for:
   - Performance
   - Accessibility
   - Best Practices
   - SEO

Target scores:
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

### Final Checklist

Before deployment:
- [ ] Tested on 3+ mobile devices
- [ ] Tested on 2+ tablets
- [ ] Tested on desktop
- [ ] All Lighthouse scores 90+
- [ ] No console errors
- [ ] Modal works on all devices
- [ ] Filter buttons work on mobile
- [ ] Scrolling is smooth
- [ ] Touch interactions feel responsive
- [ ] App loads quickly on slow networks

### Browser Compatibility

Tested and working on:
- Chrome 90+
- Firefox 88+
- Safari 14+ (iOS 14.5+)
- Edge 90+

### Debugging Mobile Issues

If something's wrong:

1. **Check DevTools Console**
   - Look for JavaScript errors
   - Check for failed network requests

2. **Network Issues**
   - Verify `public/itinerary.json` loads
   - Check CORS if using external APIs

3. **Styling Issues**
   - Check Tailwind classes are applied
   - Verify CSS isn't overridden

4. **Performance Issues**
   - Check for layout shifts
   - Profile with DevTools Performance tab
   - Check if animations cause stuttering

### Quick Test Script

Copy this into browser console to test responsive behavior:
```javascript
// Test touch target sizes
document.querySelectorAll('button').forEach(btn => {
  const rect = btn.getBoundingClientRect();
  if (rect.width < 44 || rect.height < 44) {
    console.warn('Button too small:', btn, rect.width, 'x', rect.height);
  }
});
```

---

**Questions?** Check the main README.md for more information about the app structure and features.
