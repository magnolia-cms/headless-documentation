---
title: Committing and pushing to the remote Magnolia Git repository
---

After [developing and
testing](/Magnolia+Cloud/Developing+for+Magnolia+in+the+cloud/Developing+and+testing)
new code in your local instance of Magnolia, you are ready to commit and
push your work to the remote Magnolia Git repository.

This page explains how to send your new features to the remote
repository to make them available in your cloud-based Magnolia package.
Remember that the code must be stored in the `light-modules` directory
of your local Git repository.

To get your code updates to the cloud-based Magnolia package, you
execute three Git commands:

-   [`add`](https://git-scm.com/docs/git-add) your code to the Git
    index.
-   [`commit`](https://git-scm.com/docs/git-commit) the files that you
    have added to the index.
-   [`push`](https://git-scm.com/docs/git-push) the commit(s) to the
    remote repository.

The `commit` command creates an entry in the Git repository history. You
can do multiple commits before pushing. If you are an advanced Git user,
you can also rebase your commits before pushing them.

:::info
If you have achieved an important milestone in your project, add a Git
[`tag`](https://git-scm.com/docs/git-tag) to the commit. Later on, you
can [install a
snapshot](/Magnolia+Cloud/Installing+updates+using+the+Magnolia+cockpit/Installing+a+snapshot)
in your Magnolia package based on a branch or on a tag.
:::

Here are the (_simplified_) Git commands. You should execute them in the
root folder of the local Git repository:

``` {.bash}
cd /Users/<username>/dev/repo/mgnl-cloud-packages/magnolia-docs
git add light-modules/
git commit -m "Add light-module 'hello-cloud'"
git pull
git push
```

After you `commit` and before you `push`, you should `pull`. The Git
`pull` commands means "fetch & merge". `Pull` gets the latest changes
from the remote repository. If there has been a change pushed by
somebody else before your last `pull`, you may have to resolve a
conflict.

Git may prompt you for a password to the remote Git repository when
executing `git push`.

This is a simplified description of how you can work with Git. In a more
realistic scenario, you could work on a Git branch or fork, possibly
with multiple remote git repositories: one for development only and the
one connected to Magnolia for deployment.

Once you have pushed your work to the remote Git repository, you can
access your work through the Magnolia cockpit.

