# amazon-clone

Clone for Amazon

To deploy a production version of the Amazon Clone, we need to set up Firebase hosting. So let’s go to console and type the command:
firebase init
Select to use an existing project
Type in the public directory to be “build”
Allow to rewrite all URLs to index.html
After you do this, run in the console:
npm run build
This will basically ask React to build your app so that you can run this in production. After the build has completed, type this command to finally deploy the application on the internet!
firebase deploy
