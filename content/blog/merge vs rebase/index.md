---
title: Git Merge vs Git Rebase
date: "2020-02-23T22:12:03.284Z"
description: ""
tags: ['2020', 'git', 'github']
disqus: true
---

### Git Merge
If you merge two branches, it will create a new commit and combine master branch into the feature branch. Here, feature branch commits keep as it is and commit history does not change.

You can merge master branch into the feature branch by running following command

    git checkout feature
    git merge master
or with a single line

    git merge feature master

### Git Rebase
Rebase is little different than merge. Rebase apply all feature branch changes on top of master branch by creating new commit for each of its previous commit messages. This means that rebase command will change your commit history and regenerate commits again on top of master branch.

Following command can be used to rebase feature branch on top of master branch. "-i" option used for interactive rebase. Otherwise, you can simply use "git rebase master".

    git checkout feature
    git rebase -i master

It is a most common puzzling question for the git user's that when to use merge command and when to use rebase. Both commands are similar, and both are used to merge the commits made by the different branches of a repository.

Rebasing is not recommended in a shared branch because the rebasing process will create inconsistent repositories. For individuals, rebasing can be more useful than merging. If you want to see the complete history, you should use the merge. Merge tracks the entire history of commits, while rebase rewrites a new one.

|Git merge| Git rebase |
|--|--|
| Merging creates a final commit at merging. | Git rebase does not create any commit at rebasing. |
| It merges all commits as a single commit. | It creates a linear track of commits. |
| It creates a graphical history that might be a bit complex to understand. | It creates a linear history that can be easily understood. |
| It is safe to merge two branches. | Git "rebase" deals with the severe operation. |
| Merging can be performed on both public and private branches. | It is the wrong choice to use rebasing on public branches. |
| Git merge presents all conflicts at once. | Git rebase presents conflicts one by one. |
| Merging preserves history. | Rebasing rewrites history. |
