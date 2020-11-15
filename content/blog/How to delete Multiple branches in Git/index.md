---
title: How to delete Multiple branches in Git?
date: "2020-11-15T22:12:03.284Z"
description: "In this post I will share, how can you delete multiple branch in GIT?"
tags: ['2020', '', 'github']
disqus: true
---


To delete many branches based on a specified pattern do the following:
Open the terminal, or equivalent.

Type in `git branch | grep <pattern>` for a preview of the branches that will be deleted.

![preview branches](preview.jpg)

Type in `git branch | grep <pattern> | xargs git branch -D`

![deleted branches](deleted.jpg)

Replace the `<pattern>` with a regular expression to match your branch names and that’s it.

**Thanks for reading :)**

