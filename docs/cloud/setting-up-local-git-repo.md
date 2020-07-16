---
title: Setting up a local Git repository
---

Every cloud-based Magnolia package is connected to a Git repository. You
have to clone this repository to your local computer. The Git repository
must contain a folder named `light-modules` - this is the place where
you add new code for new features. You then promote your code to the
remote repository to make it available in the cloud-based Magnolia
package.

This page explains how to set up a local light module folder structure
and synchronize your local folder structure with your Magnolia package
using Git. You therefore need some working knowledge of using
[Git](https://git-scm.com). If you are not familiar with Git, learn a
few basic Git commands such as `clone`, `pull`, `add`, `commit` and
`push`.

Have a look at the
[prerequisites](/Magnolia+Cloud/Developing+for+Magnolia+in+the+cloud#localdevprereqs)
before you get started.

The Git commands we describe below are presented in command line use.
You can, however, use an application providing a graphical user
interface for Git usage such as
[SourceTree](https://www.sourcetreeapp.com/).

::: {.info}
:information_source: We assume you are using one Git repository: the one
connected to your Magnolia package. In a more advanced Git setup, you
could use multiple Git repositories: one for development only and
another one connected to Magnolia for deployment.
:::

Setting up a local light-module repository
==========================================

Log in to the Magnolia [cockpit](/Magnolia+Cloud/Cockpit) to obtain the
[URL of the Git
repository](/Magnolia+Cloud/Cockpit#additional-information) connected to
your Magnolia package. This information is in the **Additional
information** section of the **Package overview**:

![](/assets/cloud/AdditionalInformation.png){width="600"}

Open your shell, `cd` into a directory of your choice and clone the
Magnolia repository. Use a directory that does not contain special
characters or spaces within the complete absolute path:

::: {.codebox}
``` {.bash}
cd ~/dev/repo/mgnl-cloud-packages
git clone https://<username>@git.magnolia-cms.com/scm/odc/magnolia-docs.git
```
:::

The local repository is the location where you will hold your newly
developed or updated code. It must create a `light-modules` directory to
hold your work. For example:

::: {.codebox}
``` {.bash}
magnolia-docs/
└── content/
└── light-modules/
    └── btk/
└── README.md
```
:::

:information_source: Both the Git URL
(`git.magnolia-cms.com/scm/odc/magnolia-docs.git`) and the name of the
directory (`magnolia-docs`) created as a result of the clone operation
are just example names.

Local light-modules folder path
===============================

You must know the path to your `light-modules` directory. All the code
you develop will go into this directory. You need to know the absolute
path when setting up the Magnolia local development bundle. Typical
paths are:

  ----------------------------------- ---------------------------------------------------------------------------------
  Mac                                 `/Users/<username>/dev/repo/mgnl-cloud-packages/magnolia-docs/light-modules/`

  Linux                               `/home/<username>/dev/repo/mgnl-cloud-packages/magnolia-docs/light-modules/`

  Windows                             `C:\Users\<username>\dev\repo\mgnl-cloud-packages\magnolia-docs\light-modules\`
  ----------------------------------- ---------------------------------------------------------------------------------

Next:

[Setting up a Magnolia bundle for local
development](/Magnolia+Cloud/Developing+for+Magnolia+in+the+cloud/Setting+up+a+Magnolia+bundle+for+local+development)

```{=html}
<!-- Original Confluence content:

<p><ac:inline-comment-marker ac:ref="641a7c70-fa3d-4e09-80ad-33dde9ad9534"> Every cloud-based Magnolia package is connected to a Git repository. You have to clone this repository to your local computer.&nbsp;The Git repository must contain a folder named&nbsp; <code>light-modules</code>&nbsp;- this is the place where you add new code for new features.&nbsp;You then promote your code to the remote repository to make it available in the cloud-based Magnolia package. </ac:inline-comment-marker></p><p>This page explains how to set up a local light module folder structure and synchronize your local folder structure with your Magnolia package using Git. You therefore need some working knowledge of using <a href="https://git-scm.com">Git</a>. If you are not familiar with Git, learn a few basic Git commands such as <code>clone</code>, <code>pull</code>, <code>add</code>,&nbsp;<code>commit</code>&nbsp;and&nbsp;<code>push</code>.</p><p>Have a look at the <ac:link ac:anchor="localdevprereqs"><ri:page ri:content-title="Developing for Magnolia in the cloud" /><ac:plain-text-link-body><![CDATA[prerequisites]]></ac:plain-text-link-body></ac:link>&nbsp;before you get started.</p><p>The Git commands we describe below are presented in command line use. You can, however, use an application providing a graphical user interface for Git usage such as <a href="https://www.sourcetreeapp.com/">SourceTree</a>.&nbsp;</p><ac:structured-macro ac:name="info" ac:schema-version="1" ac:macro-id="f100141c-9a62-4dfe-aba6-9294c1c6f350"><ac:rich-text-body><p class="emoticon emoticon-information" title="(info)">We assume you are using one Git repository: the one connected to your Magnolia package. In a more advanced Git setup, you could use multiple Git repositories: one for development only and another one connected to Magnolia for deployment.</p></ac:rich-text-body></ac:structured-macro><h2>Setting up a local light-module repository</h2><p>Log in to the Magnolia <ac:link><ri:page ri:content-title="Cockpit" /><ac:plain-text-link-body><![CDATA[cockpit]]></ac:plain-text-link-body></ac:link> to obtain the<ac:inline-comment-marker ac:ref="2f6ee1b3-07e2-4c68-86d9-992007d72da5"> <ac:link ac:anchor="Additionalinformation"><ri:page ri:content-title="Cockpit" /><ac:plain-text-link-body><![CDATA[URL of the Git repository]]></ac:plain-text-link-body></ac:link>&nbsp;</ac:inline-comment-marker>connected to your Magnolia&nbsp;<span>package</span>. This <ac:inline-comment-marker ac:ref="37b9146d-c38e-4346-962c-9a22af5f5ed5"> information is in the </ac:inline-comment-marker> <strong>Additional information</strong> section of the <strong>Package overview</strong>:</p><p><ac:image ac:width="600"><ri:attachment ri:filename="AdditionalInformation.png" /></ac:image></p><p>Open your shell,&nbsp;<code>cd</code> into a directory of your choice and <ac:inline-comment-marker ac:ref="20506598-e7a8-4b45-bd22-10be122372a5">clone the Magnolia repository</ac:inline-comment-marker>.&nbsp;Use a directory that does not contain special characters or spaces within the complete absolute path:</p><ac:structured-macro ac:name="code-pro" ac:schema-version="1" ac:macro-id="662de727-5a22-4a0c-8c5e-0bff7ff4abbd"><ac:parameter ac:name="language">bash</ac:parameter><ac:parameter ac:name="atlassian-macro-output-type">
    INLINE
   </ac:parameter><ac:plain-text-body><![CDATA[cd ~/dev/repo/mgnl-cloud-packages
git clone https://<username>@git.magnolia-cms.com/scm/odc/magnolia-docs.git]]></ac:plain-text-body></ac:structured-macro><p>The local repository is the location where you will hold your newly developed or updated code. It must create a <code>light-modules</code> directory to hold your work. For example:&nbsp;</p><ac:structured-macro ac:name="code-pro" ac:schema-version="1" ac:macro-id="4704ee10-122e-4f5d-86c0-b3cfdb66d467"><ac:parameter ac:name="language">bash</ac:parameter><ac:parameter ac:name="atlassian-macro-output-type">
    INLINE
   </ac:parameter><ac:plain-text-body><![CDATA[magnolia-docs/
└── content/
└── light-modules/
    └── btk/
└── README.md]]></ac:plain-text-body></ac:structured-macro><p><span><ac:emoticon ac:name="information" />&nbsp;Both the Git URL (</span><code>git.magnolia-cms.com/scm/odc/magnolia-docs.git</code> <span>) and the name of the directory (</span><code>magnolia-docs</code><span>) created as a result of the clone operation are just example names.</span></p><h2>Local light-modules folder path</h2><p>You must know the path to your <code>light-modules</code> directory. All the code you develop will go into this directory. You need to know the absolute path when setting up the Magnolia local development bundle. Typical paths are:</p><table class="wrapped"><colgroup> <col /> <col /> </colgroup><tbody><tr><td>Mac</td><td><code>/Users/&lt;username&gt;/dev/repo/mgnl-cloud-<span>package</span>s/<span>magnolia-docs</span>/light-modules/</code></td></tr><tr><td colspan="1">Linux</td><td colspan="1"><code>/home/<span>&lt;username&gt;</span>/dev/repo/mgnl-<span>cloud</span>-<span>package</span>s/<span>magnolia-docs</span>/light-modules/</code></td></tr><tr><td>Windows</td><td><p class="p1"><code>C:\Users\<span>&lt;username&gt;</span>\dev\repo\mgnl-<span>cloud</span>-<span>package</span>s\<span>magnolia-docs</span>\light-modules\</code></p></td></tr></tbody></table><p><br /></p><p>Next:&nbsp;</p><ac:structured-macro ac:name="mgnl-aui-button-inline" ac:schema-version="1" ac:macro-id="1008fba4-22c2-4842-b47e-a6cf0e990636"><ac:parameter ac:name="Type">
    Normal
   </ac:parameter><ac:parameter ac:name="IconClass">
    aui-iconfont-export
   </ac:parameter><ac:parameter ac:name="atlassian-macro-output-type">
    INLINE
   </ac:parameter><ac:rich-text-body><p><ac:link><ri:page ri:content-title="Setting up a Magnolia bundle for local development" /></ac:link></p></ac:rich-text-body></ac:structured-macro><p><br /><br /></p><p><br /></p>

-->
```
