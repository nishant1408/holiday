# Holiday Calendar Application

A beautiful, design-heavy React + Next.js calendar application showcasing an epic holiday road trip across India. **Fully responsive and mobile optimized**.

## Features

✨ **Modern Design**
- Glassmorphism UI with gradient backgrounds
- Smooth animations and transitions
- Responsive grid layout for all device sizes
- Beautiful card-based calendar display

� **Mobile Responsive**
- Mobile-first design approach
- Touch-optimized interactive elements
- Safe area support for notched devices (iPhone X+)
- Optimized font sizes and spacing for all screen sizes
- Bottom modal sheet on mobile for better UX
- Prevents unwanted zoom on input focus

�📊 **Trip Statistics**
- Total days overview
- Distance and duration tracking
- Visual badges for different day types
- Filter by event type (Travel, Rest, Darshan, Office, etc.)

🎨 **Interactive Elements**
- Click on any day to see detailed information
- Modal popups with rich content
- Color-coded event types
- Emoji icons for quick visual reference
- Responsive filter buttons

🔄 **Easy Data Management**
- All trip data stored in `public/itinerary.json`
- Simple structure for easy updates
- No database required

## Project Structure

```
holiday/
├── public/
│   └── itinerary.json           # Trip data (easily editable)
├── src/
│   ├── components/
│   │   ├── Calendar.tsx         # Main calendar component
│   │   └── CalendarDay.tsx      # Individual day card component
│   ├── pages/
│   │   ├── _app.tsx            # App wrapper
│   │   ├── _document.tsx       # Document structure with mobile meta tags
│   │   └── index.tsx           # Home page
│   └── styles/
│       └── globals.css         # Tailwind + global styles + mobile optimizations
├── .gitignore
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── postcss.config.js
```

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
open http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

## Mobile Responsiveness Features

### Breakpoints
- **Mobile (< 640px)**: Single column, optimized spacing and font sizes
- **Tablet (640px - 1024px)**: Two-column grid
- **Desktop (1024px+)**: Three-column grid with full spacing

### Mobile Optimizations
1. **Touch-Friendly**: All interactive elements meet minimum 44x44px touch targets
2. **Viewport**: Proper viewport meta tags for device scaling
3. **Safe Areas**: Support for notched devices and home indicators
4. **Modal Behavior**: Bottom sheet style modal on mobile, centered on desktop
5. **Typography**: Responsive font sizes that scale with viewport
6. **Performance**: Optimized animations respect `prefers-reduced-motion`

### Device Support
- ✅ iPhone (All models including notched)
- ✅ Android phones and tablets
- ✅ iPad and iPad Pro
- ✅ Desktop browsers

## Updating Trip Data

Edit `public/itinerary.json` to update trip information:

```json
{
  "itinerary": [
    {
      "day": 0,
      "date": "2026-07-03",
      "title": "Trip Title",
      "dayOfWeek": "Friday",
      "type": "travel|arrival|rest|darshan|office",
      "distance": "850km",
      "duration": "20hrs",
      "startLocation": "City Name",
      "endLocation": "City Name",
      "leaves": "none|leave|optional|weekend|working",
      "description": "Trip description",
      "activities": ["Activity 1", "Activity 2"],
      "color": "blue|green|yellow|purple|orange|cyan|red"
    }
  ]
}
```

## Event Types

- 🚗 **travel**: Long-distance travel days
- 🏁 **arrival**: Arrival days at destinations
- 😌 **rest**: Rest and relaxation days
- 🙏 **darshan**: Temple darshan/pilgrimage days
- 💼 **office**: Office/working days

## Leave Types

- **leave**: Approved leave day
- **optional**: Optional leave day
- **weekend**: Weekend
- **working**: Regular working day
- **none**: N/A

## Colors

Available color options for cards:
- blue
- green
- yellow
- purple
- orange
- cyan
- red

## Deployment to Render

1. Push to GitHub repository
2. Go to [Render.com](https://render.com)
3. Create new Web Service
4. Connect your GitHub repository
5. Build command: `npm run build`
6. Start command: `npm start`
7. The app will be automatically optimized for mobile!

## Technologies Used

- **Framework**: Next.js 14
- **UI Framework**: React 18
- **Styling**: Tailwind CSS with mobile-first approach
- **Language**: TypeScript
- **Deployment**: Render
- **Mobile**: Fully responsive with safe area support

## Browser Support

- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile Safari 14+ (iOS)
- Chrome Mobile 90+

## Performance

- Optimized animations for devices with reduced motion preference
- Lazy loading of images
- CSS-based animations for smooth 60fps performance
- Mobile-optimized bundle size

## License

MIT
