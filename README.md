# Build Watcher Web
#### The web version of Build Watcher

Build Watcher Web was built with the intention of
- allowing multiple users to manage the builds they want to monitor from a single application
- saving user configurations
- delivering live updates on build statuses 

Build Watcher Web was built on .NET Core, using the (as of yet) unreleased Signal-R package from MyGet.  Front end was built using React and Redux.  

### To Run

In Visual Studio Code, run the task 'Get Going' to restore packages and run webpack.  Then simply run and navigate to localhost:5000

Otherwise, use:
```
  cd src\BuildWatcherWeb
  dotnet restore
  npm install
  webpack
```
then run the application.

### Todos
- implement real repository
- clean up build card UI
- unit tests on controllers
