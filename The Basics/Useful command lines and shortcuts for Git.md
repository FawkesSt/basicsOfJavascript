# Reference of command lines

| command | what it does |
| --- | --- |
| `git --version` | lists the Git version |
| `git config --global http://user.name/ "Name Surname"` `git config --global user.email example@email.com` | configures the username and email on Git (only necessary on the first time you use it) |
| `git config --list` | list all variables set in config file, along with their values (the username and email are listed here) |
| `pwd` (print working directory) | returns the path to which directory you are working in |
| `ls` (list)  | returns a list of all of the files and directories in your current directory |
| `cd` (change directory) | changes your current directory to a new directory.
| `mkdir` (make directory) | creates a new directory |
| `git clone https://github.com/user/repo` | clones a repository to your local machine |
| `git status` | provides useful information |
| `git add` | moves one or more files from unstaged to staged |
| `git commit` | commits any staged files |
| `git push` | uploads commited files to GitHub |
| `mv ex6.md exercise6.md` | combines renaming and `git add .` |
| `rm exercise6.md` | combines removing and `git add .` |
| `git log` | shows you your history |
| `git log --oneline` | presents a compact version |
| `git checkout` | set the commit that I am working on |
| `git checkout main` | set the current version to the most recent (on the main branch) |
| `git tag -a` | adds a tag with name and description (git tag -a my_tag -m "This is my new tag") |
| `git tag` | lists all tags |
| `git checkout tags/<tagname>` | checkout a tag |
| `git push origion <tagname>` | pushes a tag |
| `git pull` | downloads all commits that have been pushed to the repository (you can only do it if you have commited your files) |
| `git fetch` | download the remote files, but not merge them |
| `git branch branchName` | creates a branch named branch-name |
| `git checkout -b branchName` | creates a branch and also moves you to that branch |
| `git stash` | creates a new stash and revert to the most recent commit |
| `git stash list` | lists all the most recent stashes |
| `git stash pop` | restores your changes to the most recent stash on the stacks |
| `git stash save "stash-name"` | saves the stash under a name |
| `git stash list` | shows the names of the stashes |
| `git diff` | compares two branches (git diff branch1...branch2) |
| `git merge` | merges the branch locally |
| `git rebase branchName`  | reorganizes your history so that’s if you branched later (branch-name is the name of the branch you are rebasing from) |
| `git reset --hard` | reverts unstaged changes |
| `git fetch origin` `git reset --hard origin/branchName` | makes your local version the same as remote |

# Command line shortcuts

| shortcut | what it does |
| --- | --- |
| tab | fills in the rest of a name |
| up arrow | repeats the previous command (multiple up arrows keep going back in history; you can then edit the line to make changes) |
| . | your current directory |
| .. | up one directory |
| ~ | makes the current directory the home directory |
| `origin` | shortcut for the URL where you cloned your repository from |

# .gitignore file structure

| structure | meaning |
| --- | --- |
| # | simply a comment, and doesn’t do anything |
| path to the file | list any file to be ignored using a path |
| * | this is a wildcard (ignores anything) |
| / (by the end) | lists a folder to be ignored |