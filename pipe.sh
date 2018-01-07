echo "Pipeline Starting"
git add .
echo "Git commit"
git commit -m $1
git push heroku
heroku open
