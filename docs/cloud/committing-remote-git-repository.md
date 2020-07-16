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

::: {.info}
If you have achieved an important milestone in your project, add a Git
[`tag`](https://git-scm.com/docs/git-tag) to the commit. Later on, you
can [install a
snapshot](/Magnolia+Cloud/Installing+updates+using+the+Magnolia+cockpit/Installing+a+snapshot)
in your Magnolia package based on a branch or on a tag.
:::

Here are the (simplified) Git commands. You should execute them in the
root folder of the local Git repository:

::: {.codebox}
``` {.bash}
cd /Users/<username>/dev/repo/mgnl-cloud-packages/magnolia-docs
git add light-modules/
git commit -m "Add light-module 'hello-cloud'"
git pull
git push
```
:::

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

Next:

[Installing a
snapshot](/Magnolia+Cloud/Installing+updates+using+the+Magnolia+cockpit/Installing+a+snapshot)

```{=html}
<!-- Original Confluence content:

<p>After <ac:link><ri:page ri:content-title="Developing and testing" /><ac:plain-text-link-body><![CDATA[developing and testing]]></ac:plain-text-link-body></ac:link> new code in your local instance of Magnolia, you are ready to commit and push your work to the remote Magnolia Git repository.</p><p>This page explains how to send your new features to the remote repository to make them available in your cloud-based Magnolia package.&nbsp;Remember that the code must be stored in the <code>light-modules</code>&nbsp;directory of your local Git repository.&nbsp;</p><p>To get your code updates to the cloud-based Magnolia package, you execute three Git commands:</p><ul><li><code><a href="https://git-scm.com/docs/git-add">add</a></code> your code to the Git index.</li><li><code><a href="https://git-scm.com/docs/git-commit">commit</a></code> the files that you have added to the index.&nbsp;</li><li><code><a href="https://git-scm.com/docs/git-push">push</a></code> the commit(s) to the remote repository.</li></ul><p>The <code>commit</code> command creates an entry in the Git repository history. You can do multiple commits before pushing. If you are an advanced Git user, you can also rebase your commits before pushing them.</p><ac:structured-macro ac:name="info" ac:schema-version="1" ac:macro-id="b7dbbc88-fccf-4785-8a8b-6cd4cc485d40"><ac:rich-text-body><p>If you have achieved an important&nbsp;milestone in your project, add a Git&nbsp;<code><a href="https://git-scm.com/docs/git-tag">tag</a></code> to the commit. Later on, you can <ac:link><ri:page ri:content-title="Installing a snapshot" /><ac:plain-text-link-body><![CDATA[install a snapshot]]></ac:plain-text-link-body></ac:link>&nbsp;in your Magnolia package based on a branch or on a tag.</p></ac:rich-text-body></ac:structured-macro><p>Here are the (simplified) Git commands. You should execute them in the root folder of the local Git repository:</p><ac:structured-macro ac:name="code-pro" ac:schema-version="1" ac:macro-id="4742785a-a888-48e1-8c67-11776c63371c"><ac:parameter ac:name="language">bash</ac:parameter><ac:parameter ac:name="atlassian-macro-output-type">
    INLINE
   </ac:parameter><ac:plain-text-body><![CDATA[cd /Users/<username>/dev/repo/mgnl-cloud-packages/magnolia-docs
git add light-modules/
git commit -m "Add light-module 'hello-cloud'"
git pull
git push]]></ac:plain-text-body></ac:structured-macro><p>After you&nbsp;<code>commit</code>&nbsp;and before you&nbsp;<code>push</code>, you should&nbsp;<code>pull</code>. The Git <code>pull</code> commands means &quot;fetch &amp; merge&quot;.&nbsp;<code>Pull</code>&nbsp;gets the latest changes from the remote repository. If there has been a change pushed by somebody else before your last <code>pull</code>, you may have to resolve a conflict.</p><p><span>Git may prompt you for a password to the remote Git repository when executing </span><code>git push</code><span>.&nbsp;</span></p><p><span><span>This is a simplified description of how you can work with Git. In a more realistic scenario, you could work on a Git branch or fork, possibly with multiple remote git repositories:&nbsp;one for development only and the one connected to Magnolia for deployment. </span></span></p><p>Once you have pushed your work to the remote Git repository, you can access your work through the Magnolia cockpit.</p><p><br /></p><p>Next:&nbsp;</p><ac:structured-macro ac:name="mgnl-aui-button-inline" ac:schema-version="1" ac:macro-id="e127b154-1bfb-4eb2-b834-de9df1853053"><ac:parameter ac:name="Type">
    Normal
   </ac:parameter><ac:parameter ac:name="IconClass">
    aui-iconfont-export
   </ac:parameter><ac:parameter ac:name="atlassian-macro-output-type">
    INLINE
   </ac:parameter><ac:rich-text-body><p><ac:link><ri:page ri:content-title="Installing a snapshot" /></ac:link></p></ac:rich-text-body></ac:structured-macro>

-->
```
