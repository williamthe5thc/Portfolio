@echo off
echo Building staging site...
call npm run build:staging

echo Deploying to GitHub Pages...
cd dist
git init
git add .
git commit -m "Deploy portfolio updates"
git remote add origin https://github.com/williamthe5thc/Portfolio-Staging.git
git push -f origin main:gh-pages
cd ..

echo Deployment complete!
pause