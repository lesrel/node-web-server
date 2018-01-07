echo "Pipeline Starting"
git add .
echo "Git commit"
git commit -m $1
echo "Heroku update"
git push heroku
heroku open
