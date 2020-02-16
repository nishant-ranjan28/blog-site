---
title: Useful git tricks
date: "2020-02-17T22:40:32.169Z"
tags: ["2020","git"]
--- 

In this post we are going to discuss about some very useful trick on Git.

## Fix last commit message
Have this ever happened to you that you actually want to commit _"Final comment"_ but what you actually typed is _"Final commment"_.  This is not good if others see this.

``git commit -v --amend``

> The `-v` is optional, but I like it because it shows a lot of
> information about the changes which helps me to write a more
> descriptive commit message.

#### Follow these steps:
- Open your project directory on your terminal and type the above command. 
- Your editor will open and allow you to make a changes to that last commit message.
- Save

## Change branch name
You wanted to create a branch name as  _release_ but somehow you named your branch _relaese_. Don't panic, there's a solution for this too.

**If you are on the branch you want to rename:**
    ``git branch -m new-name``

**If you are on a different branch:**
``git branch -m old-name new-name``

**Rename remote branch name:**
``git push origin -u new-name``

## Switch to Previous Branch
This command allows you to quickly switch to the previously checked out branch. On a general note `-` is an alias for the previous branch. It can be used with other commands as well. I aliased `checkout` to `co` so, it becomes just `git co -`.

``git checkout -``
## Find Branches
This command will show all branches that contain a particular commit.

``git branch --contains <commit>``
## Cherry Pick
The command git  _cherry-pick_  is typically used to introduce particular commits from one branch within a repository onto a different branch. A common use is to forward- or back-port commits from a maintenance branch to a development branch.

``git cherry-pick <commit-hash>``