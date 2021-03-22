---
title: Git push --force vs --force-with-lease
date: "2021-03-22T22:12:03.284Z"
description: "It is well known that using Git’s push --force command is strongly discouraged and considered destructive"
tags: ['2021', 'GIT', 'github', 'begineers']
disqus: true
---


### What git push does is basically -
* Copies all the commits that exist in the local branch
* Integrates the histories by forwarding the remote branch to reference the new commit, also called Fast forward ref.

![force with lease](https://images.thoughtbot.com/git-push-force-with-lease/XEDULrg2QsnzIGytOMfh_XFQLB.jpg)

### What is git push --force?
Git’s push --force is destructive because it unconditionally overwrites the remote repository with whatever you have locally, possibly overwriting any changes that a team member has pushed in the meantime. However there is a better way; the option –force-with-lease can help when you do need to do a forced push but still ensure you don’t overwrite other’s work.

### A safer alternative: force-with-lease
A force push overwrites a remote branch with your local branch, regardless of the status of that remote branch (more on force push here). This is not ideal in a team scenario as it might result in one developer overwriting other developers’ commits (this could happen when the developer forgot to do a git pull to fetch the newer commits).

>Enter the safer alternative: git push --force-with-lease

Force with lease gives you the flexibility to override new commits on your remote branch, whilst protecting your old commit history:

* If you rebased and squashed/edited/created new commits, you will be able to update the remote branch.
* If new commits are added to the remote branch (by some team member), this command would not update the remote branch (and not overwrite any work).

