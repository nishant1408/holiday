# Deployment Guide

## Deployment to Render.com

### Step 1: Prepare Your Repository

1. Ensure all files are committed to GitHub:
```bash
cd /Users/nishant/Desktop/github/holiday
git add .
git commit -m "Initial commit: Holiday calendar app with mobile responsiveness"
git push origin main
```

### Step 2: Set Up on Render

1. Go to [render.com](https://render.com)
2. Sign up or log in with your GitHub account
3. Click "New +"
4. Select "Web Service"
5. Connect your GitHub repository

### Step 3: Configure Web Service

Fill in the following settings:

**Name**: `holiday-calendar` (or your preferred name)

**Environment**: `Node`

**Build Command**: 
```bash
npm install && npm run build
```

**Start Command**: 
```bash
npm start
```

**Auto-deploy**: Toggle ON (to auto-deploy on push)

### Step 4: Deploy

Click "Create Web Service" and wait for deployment to complete.

Your app will be available at: `https://holiday-calendar.onrender.com`

## Environment Variables

Currently, the app doesn't require any environment variables. All data is stored in `public/itinerary.json`.

If you want to add environment-specific configurations in the future, add them in the Render dashboard.

## Updating Content

To update the trip data:

1. Edit `public/itinerary.json` locally
2. Commit and push to GitHub:
   ```bash
   git add public/itinerary.json
   git commit -m "Update trip itinerary"
   git push origin main
   ```
3. Render will automatically redeploy with the new content

## Troubleshooting

### Build Fails
- Check that `package.json` and `tsconfig.json` are properly configured
- Ensure all dependencies are listed in `package.json`
- Run `npm install` locally to verify

### App Crashes on Render
- Check the logs in the Render dashboard
- Verify the build completed successfully
- Try redeploying from the Render dashboard

### Mobile Issues
- The app includes proper viewport meta tags
- Test on various devices using browser dev tools
- Check that all Tailwind classes are correctly applied

## Performance Tips

1. **Static Optimization**: The itinerary data is loaded once on page load
2. **Image Optimization**: Use Next.js Image component if adding images
3. **CSS**: Tailwind CSS is already optimized and tree-shaken in production
4. **Caching**: Next.js automatically optimizes and caches assets

## Custom Domain

1. Go to your Render service dashboard
2. Click "Settings"
3. Under "Custom Domain", add your domain
4. Follow DNS setup instructions provided by Render

## Monitoring

Render provides built-in monitoring:
- CPU and memory usage
- Deployment history
- Error logs
- Custom metrics

Check the "Logs" tab in your Render dashboard for debugging.

## Backup & Recovery

Your code is safe in GitHub. To restore:

1. Any version can be deployed by pushing a tag to GitHub
2. Render keeps deployment history
3. You can roll back to a previous deployment from the Render dashboard

## Cost

Render's free tier includes:
- 0.5 CPU
- 512 MB RAM
- Sufficient for this application

Upgrade to a paid plan if you need more resources.

## Additional Resources

- [Render Documentation](https://render.com/docs)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment/render)
- [Tailwind CSS Production Guide](https://tailwindcss.com/docs/installation/framework-guides)
