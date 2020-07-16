---
title: Installing a snapshot
---

::: {.infobox}
Related topics

-   [Developing for Magnolia in the
    cloud](/Magnolia+Cloud/Developing+for+Magnolia+in+the+cloud)
-   [Defining a
    release](/Magnolia+Cloud/Installing+updates+using+the+Magnolia+cockpit/Defining+a+release)
:::

This page explains how to retrieve the light development changes [pushed
to the remote Git
repository](/Magnolia+Cloud/Developing+for+Magnolia+in+the+cloud/Committing+and+pushing+to+the+remote+Magnolia+Git+repository)
linked to your cloud-based Magnolia subscription package and install
them in the Integration environment. If your subscription package offers
all the available cloud environments, after the changes have been tested
in the Integration environment, they can be included in a release and
promoted to the UAT environment, and then to the Live environment.

::: {.note}
You cannot install a snapshot or a release until you have [set up a new
environment](/Magnolia+Cloud/Managing+environments+using+the+Magnolia+cockpit/Setting+up+a+new+environment).
:::

[/\_i/\_cloudContext/\_cloud+environments+vary](!include)

![](/assets/cloud/mnow-install-snapshot_v2.png){width="400"}

Install a snapshot
==================

1.  In **Installed releases** click **Install an update**.\
    ![](/assets/cloud/InstallSnap_v2_scope.png){width="600"}

2.  Click **Install a development snapshot**.\
    ![](/assets/cloud/install-snapshot.png){width="600"}

3.  Select the Git **Tag** or **Branch** you want to retrieve.\
    ![](/assets/cloud/cloud-install-release-step1.png){width="600"}

4.  Click **Install** to pull changes from the Git repository and apply
    them to the Integration environment.

    This action appears in the [activity
    log](/Magnolia+Cloud/Cockpit/Understanding+activity+logs) and a
    notification banner is displayed. In the Package overview,
    information about the snapshot installed is displayed in the
    Integration environment section.

Test changes
------------

To check that the snapshot has been installed correctly:

-   Click **Edit content** in the **Author space** of the Integration
    environment.
-   Log in to Magnolia and check that the updates included in the
    snapshot are present. For example, if the snapshot contains updated
    resource files, open the **Resource Files** app to check that the
    updates are there.

::: {.warning}
Always avoid hotfixing problems in the Resources app because the changes
are not propagated back to your GIT repository.
:::

Next:

[Defining a
release](/Magnolia+Cloud/Installing+updates+using+the+Magnolia+cockpit/Defining+a+release)

<!-- ```{=html}
<!-- Original Confluence content:

<ac:structured-macro ac:name="html-wrap" ac:schema-version="1" ac:macro-id="effad116-e9c4-46f6-86b7-b8ae58e9afa0"><ac:parameter ac:name="align">right</ac:parameter><ac:parameter ac:name="float">right</ac:parameter><ac:parameter ac:name="class">menu</ac:parameter><ac:parameter ac:name="atlassian-macro-output-type">BLOCK</ac:parameter><ac:rich-text-body><p>Related topics</p><ul><li><ac:link><ri:page ri:content-title="Developing for Magnolia in the cloud" /></ac:link></li><li><ac:link><ri:page ri:content-title="Defining a release" /></ac:link></li></ul></ac:rich-text-body></ac:structured-macro><p><ac:inline-comment-marker ac:ref="961ffe20-13df-425f-ad7a-2483c0d0e28b"> This page explains </ac:inline-comment-marker> how to retrieve the light development changes <ac:link><ri:page ri:content-title="Committing and pushing to the remote Magnolia Git repository" /><ac:plain-text-link-body><![CDATA[pushed to the remote Git repository]]></ac:plain-text-link-body></ac:link> linked to your cloud-based Magnolia subscription package&nbsp;and install them in the Integration environment. If your subscription package offers all the available cloud environments, after the changes have been tested in the Integration environment, they can be included in a release and promoted to the <ac:inline-comment-marker ac:ref="ea893800-bac7-40fa-a15d-196fca24b15a"> UAT </ac:inline-comment-marker> environment, and then to the Live environment.&nbsp;</p><ac:structured-macro ac:name="note" ac:schema-version="1" ac:macro-id="326271f5-115d-4f1e-a06f-6db70c48869d"><ac:rich-text-body><p>You cannot install a snapshot or a release until you have <ac:link><ri:page ri:content-title="Setting up a new environment" /><ac:plain-text-link-body><![CDATA[set up a new environment]]></ac:plain-text-link-body></ac:link>.</p></ac:rich-text-body></ac:structured-macro><p><ac:structured-macro ac:name="include" ac:schema-version="1" ac:macro-id="a5b72b58-2b27-4e20-9ca1-71a71a38f447"><ac:parameter ac:name=""><ac:link><ri:page ri:content-title="_cloud environments vary" /></ac:link></ac:parameter></ac:structured-macro></p><p><ac:image ac:width="400"><ri:attachment ri:filename="mnow-install-snapshot_v2.png" /></ac:image></p><h2>Install a snapshot</h2><ol><li>In&nbsp;<strong>Installed releases</strong>&nbsp;click&nbsp;<strong>I</strong><strong>nstall an <ac:inline-comment-marker ac:ref="75b228dd-34bb-4323-87e1-3f34aed90965"> update</ac:inline-comment-marker></strong>.<br /><ac:image ac:width="600"><ri:attachment ri:filename="InstallSnap_v2_scope.png" /></ac:image></li><li><ac:inline-comment-marker ac:ref="0b36eb2c-53e0-48e3-b54d-23ac8fdd6cad"> Click&nbsp; </ac:inline-comment-marker> <strong> <ac:inline-comment-marker ac:ref="0b36eb2c-53e0-48e3-b54d-23ac8fdd6cad"> Install a development snapshot</ac:inline-comment-marker></strong><ac:inline-comment-marker ac:ref="0b36eb2c-53e0-48e3-b54d-23ac8fdd6cad">. </ac:inline-comment-marker> <br /><ac:image ac:width="600"><ri:attachment ri:filename="install-snapshot.png" /></ac:image></li><li><p><span>Select the Git&nbsp;</span><strong>Tag </strong>or<strong>&nbsp;Branch&nbsp;</strong><span>you want to retrieve</span><span>.&nbsp;<br /></span><ac:image ac:width="600"><ri:attachment ri:filename="cloud-install-release-step1.png" /></ac:image></p></li><li><p>Click <strong>Install</strong> to pull changes from the Git repository and apply them to the Integration environment.&nbsp;</p><p>This action appears in the&nbsp;<ac:link><ri:page ri:content-title="Understanding activity logs" /><ac:plain-text-link-body><![CDATA[activity log]]></ac:plain-text-link-body></ac:link>&nbsp;and a notification banner is displayed.&nbsp;In the Package overview, information about the snapshot installed is displayed in the Integration environment section.&nbsp;</p></li></ol><h3>Test changes</h3><p>To check that the snapshot has been installed correctly:</p><ul><li>Click&nbsp;<strong>Edit content</strong>&nbsp;in the&nbsp;<strong>Author space</strong>&nbsp;of the Integration environment.</li><li><p>Log in to Magnolia and check that the updates included in the snapshot are present. For example, if the snapshot contains updated resource files, open the&nbsp;<strong>Resource Files</strong>&nbsp;app to check <ac:inline-comment-marker ac:ref="b91b6364-4c78-4dac-ac46-39a21df5fa1e"> that the updates ar</ac:inline-comment-marker>e there.</p></li></ul><ac:structured-macro ac:name="warning" ac:schema-version="1" ac:macro-id="79871e95-a558-4506-b117-468f8d7d2b1c"><ac:parameter ac:name="atlassian-macro-output-type">
    INLINE
   </ac:parameter><ac:rich-text-body><p>Always avoid hotfixing problems in the Resources app because the changes are not propagated back to your GIT repository.</p></ac:rich-text-body></ac:structured-macro><p><br /></p><p>Next:&nbsp;</p><ac:structured-macro ac:name="mgnl-aui-button-inline" ac:schema-version="1" ac:macro-id="74b03e07-4b9a-4467-a680-98fef74a350e"><ac:parameter ac:name="Type">
    Normal
   </ac:parameter><ac:parameter ac:name="IconClass">
    aui-iconfont-version
   </ac:parameter><ac:parameter ac:name="atlassian-macro-output-type">
    INLINE
   </ac:parameter><ac:rich-text-body><p><ac:link><ri:page ri:content-title="Defining a release" /></ac:link></p></ac:rich-text-body></ac:structured-macro>

-->
``` -->
