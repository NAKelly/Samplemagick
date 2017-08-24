## SampleMagick local setup

# RailsApi:

- cd RailsApi
- install rvm https://rvm.io/rvm/install #unless already installed
- rvm install 2.4.1   # unless already installed
- rvm use 2.4.1
- bundle install
- rake db:create
- rake db:migrate
- rails s

# FrontEnd/web (in a new terminal window):

- cd FrontEnd/web
- install nvm https://github.com/creationix/nvm #unless already installed
- nvm install stable  # unless already installed
- rvm install 2.2.2   # unless already installed
- gem install sass    # unless already installed
- nvm use stable
- rvm use 2.2.2
- npm install
- npm run start_with_sass
- go to http://localhost:3001