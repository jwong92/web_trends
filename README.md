# Web Trends Git Lab 1
======

This is a test for the Lab in Web Trends where we are learning git and github.

## Creating a Repo
1. Set up repository on git service account
2. Initialize project on CLI with 
...`git init`
3. Add a git origin to the git project
...`git remote add origin [url containing remote git repo]`
4. Make first commit by creating a markdown (README.md) file in the same directory as the .git file.
5. Add the file to the git tracker
...`git add README.md`
6. Check what files have been modified/added using
...`git status`
7. Add files using
...`git add`
8. Commit the change with
...`git commit -m 'short title/description of commit'`
9. Perform commits locally as many times as you'd like, but before you do any pushes, pull from the origin
...`git pull origin {branch name}`
10. After resolving any conflicts you are ready to push
...`git push origin master`

## Git Cloning
1. Navigate to another project and copy the project src url. Using command line, clone the git project from a remote source
...`git clone {git url}`

## Branching
1. To create a new branch from the current commit
...`git branch {new branch name}`
2. To use a branch from the project
... `git checkout {branch name}`
or
...`git checkout {commit hash}`

