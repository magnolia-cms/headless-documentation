---
title: Defining a release
---

::: {.infobox}
Related topics

-   [Installing a
    snapshot](/Magnolia+Cloud/Installing+updates+using+the+Magnolia+cockpit/Installing+a+snapshot)
-   [Installing a release in
    UAT](/Magnolia+Cloud/Installing+updates+using+the+Magnolia+cockpit/Installing+a+release+in+UAT)
:::

A
[release](/Magnolia+Cloud/Cockpit/Magnolia+cockpit+concepts#Siterelease)
wraps the latest changes in the Integration environment in preparation
for installation on the UAT or Live environment. A new release contains
all the Integration environment snapshots installed since the last
release was created .

All releases are stored by Magnolia in the cloud and you can restore a
previous version if you need to.

![](mnow-define-site-release_v3.png){width="500"}

::: {.note}
**Note**

-   Before you can define a release at least one [snapshot must be
    installed](/Magnolia+Cloud/Installing+updates+using+the+Magnolia+cockpit/Installing+a+snapshot)
    in the Integration environment.
-   When an installed snapshot has been defined as a release you cannot
    define another release until you install another snapshot.
:::

1.  In **Installed releases** click **Install an update**.\
    ![](InstallSite1_scope_v2.png){width="600"}
2.  Click **Define a new release**.\
    ![](define-new-release%20(1).png){width="600"}
3.  This action appears in the [activity
    log](/Magnolia+Cloud/Cockpit/Understanding+activity+logs) and a
    notification banner is displayed.
4.  Defining the release is a three-step process:
    1.  Click **Next** in **Select snapshot** step.\
        ![](InstallSIte3a.png){width="600"}
    2.  Add a name and description in **Describe release**. These
        details are then displayed in the Installed releases and
        Environment sections of the Package overview page.\
        ![](describe-release.png){width="600"}
    3.  Click **OK** in **Define release**. As all actions in the
        Magnolia cockpit are asynchronous, you can click on **OK**
        before the action is complete: it will run in the background.

This action appears in the [activity
log](/Magnolia+Cloud/Cockpit/Understanding+activity+logs) and a
notification banner is displayed. The new release details are displayed
in **Installed releases** section.

Next:

[Installing a release in
UAT](/Magnolia+Cloud/Installing+updates+using+the+Magnolia+cockpit/Installing+a+release+in+UAT)

```{=html}
<!-- Original Confluence content:

<ac:structured-macro ac:name="html-wrap" ac:schema-version="1" ac:macro-id="effad116-e9c4-46f6-86b7-b8ae58e9afa0"><ac:parameter ac:name="align">right</ac:parameter><ac:parameter ac:name="float">right</ac:parameter><ac:parameter ac:name="class">menu</ac:parameter><ac:parameter ac:name="atlassian-macro-output-type">BLOCK</ac:parameter><ac:rich-text-body><p>Related topics</p><ul><li><ac:link><ri:page ri:content-title="Installing a snapshot" /></ac:link></li><li><ac:link><ri:page ri:content-title="Installing a release in UAT" /></ac:link></li></ul></ac:rich-text-body></ac:structured-macro><p>A <ac:link ac:anchor="Siterelease"><ri:page ri:content-title="Magnolia cockpit concepts" /><ac:plain-text-link-body><![CDATA[release]]></ac:plain-text-link-body></ac:link> wraps the latest <ac:inline-comment-marker ac:ref="aa1f7ee9-040b-4980-bb4b-5bd5f3caf20d"> changes </ac:inline-comment-marker> in the Integration environment in preparation for installation on the UAT or Live environment. A new release contains all the Integration environment snapshots installed since the last release was created <ac:inline-comment-marker ac:ref="98a69933-012a-4d69-9b0b-9f04c6de0179"> . </ac:inline-comment-marker>&nbsp;</p><p>All releases are stored by Magnolia in the cloud and you can restore a previous version if you need to.</p><p><ac:image ac:width="500"><ri:attachment ri:filename="mnow-define-site-release_v3.png" /></ac:image></p><p><br /></p><ac:structured-macro ac:name="note" ac:schema-version="1" ac:macro-id="d7d2f7fa-f30a-4601-aca8-c1f21b41a944"><ac:parameter ac:name="title">Note</ac:parameter><ac:rich-text-body><ul class="_mce_tagged_br"><li>Before you can define a release at least one&nbsp;<ac:link><ri:page ri:content-title="Installing a snapshot" /><ac:plain-text-link-body><![CDATA[snapshot must be installed]]></ac:plain-text-link-body></ac:link>&nbsp;in the Integration environment.</li><li>When an installed snapshot has been defined as a release you cannot define another release until you install another snapshot.</li></ul></ac:rich-text-body></ac:structured-macro><ol><li>In <strong>Installed releases</strong> click&nbsp;<strong>Install an update</strong>.<br /><ac:image ac:width="600"><ri:attachment ri:filename="InstallSite1_scope_v2.png" /></ac:image></li><li>Click&nbsp;<strong>Define a new release</strong>. <br /><ac:image ac:width="600"><ri:attachment ri:filename="define-new-release (1).png" /></ac:image></li><li>This action appears in the&nbsp;<ac:link><ri:page ri:content-title="Understanding activity logs" /><ac:plain-text-link-body><![CDATA[activity log]]></ac:plain-text-link-body></ac:link>&nbsp;and a notification banner is displayed.</li><li>Defining the release is a three-step process:<ol><li>Click <strong>Next</strong> in <strong>Select snapshot</strong> step.&nbsp;<br /><ac:image ac:width="600"><ri:attachment ri:filename="InstallSIte3a.png" /></ac:image></li><li>Add a name and description in <strong>Describe release</strong>. These details are then displayed in the Installed releases and Environment sections of the Package overview page.&nbsp;<br /><ac:image ac:width="600"><ri:attachment ri:filename="describe-release.png" /></ac:image>&nbsp;</li><li>Click <strong>OK</strong> in <strong>Define release</strong>.&nbsp;As all actions in the Magnolia cockpit are asynchronous, you can click on&nbsp;<strong>OK</strong>&nbsp;before the action is complete: it will run in the background.&nbsp;</li></ol></li></ol><p>This action appears in the&nbsp;<ac:link><ri:page ri:content-title="Understanding activity logs" /><ac:plain-text-link-body><![CDATA[activity log]]></ac:plain-text-link-body></ac:link>&nbsp;and a notification banner is displayed. The new release details are displayed in <strong>Installed releases</strong> section.<br /><br /></p><p>Next:&nbsp;</p><ac:structured-macro ac:name="mgnl-aui-button-inline" ac:schema-version="1" ac:macro-id="672299e6-0761-4f0b-9d06-00bb9cbcc7cf"><ac:parameter ac:name="Type">
    Normal
   </ac:parameter><ac:parameter ac:name="IconClass">
    aui-iconfont-export
   </ac:parameter><ac:parameter ac:name="atlassian-macro-output-type">
    INLINE
   </ac:parameter><ac:rich-text-body><ac:link><ri:page ri:content-title="Installing a release in UAT" /></ac:link></ac:rich-text-body></ac:structured-macro>

-->
```
