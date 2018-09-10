cd www/client
git init

git config user.email huijife@outlook.com
git config user.name huijife-bot

git remote add origin git@github.com:HuijiFE/void-ui.git

git checkout gh-pages
git add .
git commit -m "auto deploy"
git push origin gh-pages --force
