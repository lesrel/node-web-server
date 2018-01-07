echo "Pipeline Starting"
git add .
git commit -m '$1'
git push heroku
heroku open
