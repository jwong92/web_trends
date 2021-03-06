# Web Trends Git Lab 1

This is a test for the Lab in Web Trends where we are learning git and github.

## Creating a Repo
1. Set up repository on git service account
2. Initialize project on CLI with 
>`git init`
3. Add a git origin to the git project
>`git remote add origin [url containing remote git repo]`
4. Make first commit by creating a markdown (README.md) file in the same directory as the .git file.
5. Add the file to the git tracker
>`git add README.md`
6. Check what files have been modified/added using
>`git status`
7. Add files using
>`git add`
8. Commit the change with
>`git commit -m 'short title/description of commit'`
9. Perform commits locally as many times as you'd like, but before you do any pushes, pull from the origin
>`git pull origin {branch name}`
10. After resolving any conflicts you are ready to push
>`git push origin master`

## Git Cloning
1. Navigate to another project and copy the project src url. Using command line, clone the git project from a remote source
>`git clone {git url}`

## Branching
1. To create a new branch from the current commit
>`git branch {new branch name}`
2. To use a branch from the project
>`git checkout {branch name}`
or
>`git checkout {commit hash}`
3. To determine which branch you're on, use
>`git branch`
it will be marked with an *
4. After creating a new branch, you need to push it to the master
>`git push --set-upstream origin branchingout`

## Merging Branches
- Branches can be merged so commits will follow a shared branch rather than two separate ones. This happens when parallel branches no longer need to be parallel, and development can continue on the same path. This allows a project to have multiple versions simultaneously and switching between versions is seamless.
1. Prior to merging, pull from the branch you wish to merge from
>`git pull origin {branch name}`
2. Once potential conflicts are resolved, the merging of the branches can occur
>`git merge  {branch name to merge to}`
3. To delete a branch, use
> git branch -d {branch}
