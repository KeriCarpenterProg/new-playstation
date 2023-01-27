# How to deploy this site to the cloud

Instructions on how to deploy a personal site on Google Cloud
https://learn.nucamp.co/mod/book/view.php?id=6191&chapterid=6461

Go to
console.cloud.google.com
Login in with kericarpenter@gmail.com account (or your own Google account)
Choose Activate Cloud Shell

Go to your project in VS Code.
Go to the directory with your project on it.
You have to have already set up your package.json so that it will build properly.  Sharing that is outside the scope for this set of instructions, but package.json should have
“Build” on it.
Npm run build
Will create a dist/ folder.
Open finder.
Use finder to go to dist/ folder
Compress dist folder into dist.zip
Put that in the downloads folder (or any other clean directory)

Make sure you are in your home directory on cloud shell:
/home/kericarpenter
Type
Pwd to see what directory you are in.

In Google Cloud shell, choose … Upload file.
Upload dist.zip to the shell.

Unzip the file
unzip dist.zip -d new-playstation

Cd new-playstation (or whatever the name of the project is)
Firebase deploy

URL it is deployed to is:
https://new-playstation.web.app
