---
title: Installing a release in UAT
---

::: {style="overflow: hidden; float: right;"
atlassian-macro-output-type=\" BLOCK \" .menu float=\" right \"} Related
topics

-   [Installing a
    snapshot](/Magnolia+Cloud/Installing+updates+using+the+Magnolia+cockpit/Installing+a+snapshot)
-   [Defining a
    release](/Magnolia+Cloud/Installing+updates+using+the+Magnolia+cockpit/Defining+a+release)
-   [Installing a release in
    Live](/Magnolia+Cloud/Installing+updates+using+the+Magnolia+cockpit/Installing+a+release+in+Live)
    :::

Once a release has been
[defined](/Magnolia+Cloud/Installing+updates+using+the+Magnolia+cockpit/Defining+a+release)
it can be installed in the UAT (User Acceptance Testing) or the Live
environment. Typically, a new release is first installed in UAT for
testing first. UAT is the environment where stakeholders, such as
authors and site managers, can see the development changes that have
been made and decide whether they satisfy their requirements. Once the
changes have been tested and accepted in the UAT environment, the
release can be [installed in the Live
environment](/Magnolia+Cloud/Installing+updates+using+the+Magnolia+cockpit/Installing+a+release+in+Live).

![](mnow-int-uat.png){width="500"}

To install a release:
---------------------

1.  In **Installed releases** click **Install an update**.\
    ![](InstallUAT1_scope_v2.png){width="600"}
2.  Click **Install a release**.\
    ![](Install-site-release.png){width="600"}
3.  Installing is a four-step process:
    1.  Select the release you want to install and click **Next**.
        Latest versions display first. Select **Other site releases**
        for a dropdown of earlier versions.\
        ![](pick.png){width="600"}
    2.  Select the environment to install in and click **Next**.
        Environments that have not been set up are not available for
        selection.
    3.  Confirm the consequences of the installation and click
        **Install**.
    4.  Installation may take a few minutes. As all actions in the
        cockpit are asynchronous, you can click on **OK** before the
        installation is complete: the action will run in the background
        and a notification will appear once it is complete.

The installation action appears in the [activity
log](/Magnolia+Cloud/Cockpit/Understanding+activity+logs) and a
notification banner is displayed. The new release details are displayed
in Environments section of the Package overview page.

Test changes on updated environment
===================================

To check that the environment is running on the correct release:

-   Click **Edit content** in **Author space** of the environment on
    which you installed the release.
-   Log in to Magnolia and check that the updates included in the
    release are present. Usually a content editor may try out new
    features such as templates, etc. or a stakeholder may check updated
    style, etc. pp.

::: {.warning}
Always avoid hotfixing problems in the Resources app because the changes
are not propagated back to your GIT repository.
:::

Next:

[Installing a release in
Live](/Magnolia+Cloud/Installing+updates+using+the+Magnolia+cockpit/Installing+a+release+in+Live)

```{=html}
<!-- Original Confluence content:

<ac:structured-macro ac:name="html-wrap" ac:schema-version="1" ac:macro-id="edcda0ff-ecb3-434b-af11-dd105c1cc687"><ac:parameter ac:name="align">right</ac:parameter><ac:parameter ac:name="float">
    right
   </ac:parameter><ac:parameter ac:name="class">    menu   </ac:parameter><ac:parameter ac:name="atlassian-macro-output-type">
    BLOCK
   </ac:parameter><ac:rich-text-body><p class="confluence-link">Related topics</p><ul><li><ac:link><ri:page ri:content-title="Installing a snapshot" /></ac:link></li><li><ac:link><ri:page ri:content-title="Defining a release" /></ac:link></li><li><ac:link><ri:page ri:content-title="Installing a release in Live" /></ac:link></li></ul></ac:rich-text-body></ac:structured-macro><p>Once a release has been <ac:link><ri:page ri:content-title="Defining a release" /><ac:plain-text-link-body><![CDATA[defined]]></ac:plain-text-link-body></ac:link>&nbsp;it can be <span>installed in the UAT (User Acceptance Testing) or the Live environment</span>. Typically, a new release is first installed in <ac:inline-comment-marker ac:ref="5c2fab09-d340-4a94-a1f9-79adec2b60bc"> UAT for testing first. UAT is the environment where stakeholders, such as authors and site managers, can see the development changes that have been made and decide whether they satisfy their requirements. Once the changes have been tested and accepted in the UAT environment, the release can be <ac:link><ri:page ri:content-title="Installing a release in Live" /><ac:plain-text-link-body><![CDATA[installed in the Live environment]]></ac:plain-text-link-body></ac:link></ac:inline-comment-marker>.&nbsp;</p><p><ac:image ac:width="500"><ri:attachment ri:filename="mnow-int-uat.png" /></ac:image></p><h3>To install a release:</h3><ol><li>In <strong>Installed releases</strong> click&nbsp;<strong>I</strong><strong style="line-height: 1.5em;">nstall an <ac:inline-comment-marker ac:ref="cee664cb-a524-4a9c-899c-d06bce0c572c"> update </ac:inline-comment-marker></strong>.<br /><ac:image ac:width="600"><ri:attachment ri:filename="InstallUAT1_scope_v2.png" /></ac:image></li><li>Click&nbsp;<strong>Install a release</strong>.<br /><ac:image ac:width="600"><ri:attachment ri:filename="Install-site-release.png" /></ac:image>&nbsp;</li><li>Installing is a four-step process:<ol><li>Select the release you want to install and click<strong> Next</strong>.&nbsp;Latest versions display first. Select <strong>Other site releases</strong> for a dropdown of earlier versions.<br /><ac:image ac:width="600"><ri:attachment ri:filename="pick.png" /></ac:image></li><li>Select the environment to install in and click <strong>Next</strong>. Environments that <ac:inline-comment-marker ac:ref="258f3610-556d-4a74-a800-3a3fcaa8aabb"> have not been set up </ac:inline-comment-marker>are not available for selection.</li><li><p>Confirm the consequences of the installation and click <strong>Install</strong>.&nbsp;</p></li><li>Installation may take a few minutes. As all actions in the cockpit are asynchronous, you can click on <strong>OK</strong> before the installation is complete: the action will run in the background and a notification will appear once it is complete.&nbsp;</li></ol></li></ol><p>The installation action appears in the&nbsp;<ac:link><ri:page ri:content-title="Understanding activity logs" /><ac:plain-text-link-body><![CDATA[activity log]]></ac:plain-text-link-body></ac:link>&nbsp;and a notification banner is displayed.&nbsp;<span style="color: rgb(0,0,0);">The new release details are displayed in<span>&nbsp;</span></span>Environments<span style="color: rgb(0,0,0);"><span>&nbsp;</span>section of the Package overview page.</span></p><h2>Test changes on updated environment</h2><p>To check that the environment is running on the correct release:</p><ul><li>Click <strong>Edit content</strong> in <strong>Author space</strong> of the environment on which you installed the release.</li><li>Log in to Magnolia and check that the updates included in the release are present. Usually a content editor may try out new features such as&nbsp;templates, etc. or a stakeholder may check updated style, etc. pp.</li></ul><ac:structured-macro ac:name="warning" ac:schema-version="1" ac:macro-id="3630853e-a827-42c3-9ec7-664051c453eb"><ac:rich-text-body><p><ac:inline-comment-marker ac:ref="7423d27b-a91a-40fb-b502-e02f69f6954d">Always avoid</ac:inline-comment-marker> hotfixing problems in the Resources app because the changes are not propagated back to your GIT repository.</p></ac:rich-text-body></ac:structured-macro><p><br /></p><p>Next:&nbsp;</p><ac:structured-macro ac:name="mgnl-aui-button-inline" ac:schema-version="1" ac:macro-id="672299e6-0761-4f0b-9d06-00bb9cbcc7cf"><ac:parameter ac:name="Type">
    Normal
   </ac:parameter><ac:parameter ac:name="IconClass">
    aui-iconfont-export
   </ac:parameter><ac:parameter ac:name="atlassian-macro-output-type">
    INLINE
   </ac:parameter><ac:rich-text-body><p><ac:link><ri:page ri:content-title="Installing a release in Live" /></ac:link></p></ac:rich-text-body></ac:structured-macro>

-->
```
