---
title: Installing a release in Live
---

Once a release has been [tested and accepted in the
UAT](/Magnolia+Cloud/Installing+updates+using+the+Magnolia+cockpit/Installing+a+release+in+UAT)
(User Acceptance Testing) environment, the release can be installed in
the Live environment. When you install a release in the Live
environment, that version of the site is made public to your end users.

:::tip
During the installation of the release in your Live environment, your
public website remains available.
:::

![](/assets/cloud/mnow-uat-live_v2.png)

To install a release:
---------------------

1.  In **Installed releases** click **Install an update**.
    ![](/assets/cloud/InstallLive1_scope_v2.png)
2.  Click **Install a release**.
    ![](/assets/cloud/Install-site-release.png)
3.  Installing is a four-step process:
    1.  Select the release you want to install and click **Next**.
        Latest versions display first. Select **Other releases** for a
        dropdown of earlier versions.
        ![](/assets/cloud/pick.png)
    2.  Select the environment to install in and click **Next**.
        Environments that have not been set up are not available for
        selection.
    3.  Confirm the consequences of the installation and click
        **Install**.
        :warning: Note that if you are installing the release in the
        Live environment, you should make a
        [backup](/Magnolia+Cloud/Managing+environments+using+the+Magnolia+cockpit/Backing+up+and+restoring/Creating+a+backup+manually)
        of the environment beforehand to safeguard your Live environment
        in case something goes wrong during the installation process, or
        if you want to roll back the changes at a later time.
    4.  Installation may take a few minutes. As all actions in the
        Magnolia cockpit are asynchronous, you can click on **OK**
        before the installation is complete: the action will run in the
        background and a notification will appear once it is complete.

The installation action appears in the [activity
log](/Magnolia+Cloud/Cockpit/Understanding+activity+logs) and a
notification banner is displayed. The new release details are displayed
in Environments section of the Package overview page.

Test changes on updated environment
===================================

To check that the environment is running on the correct release:

-   Click **Edit content** in **Author space** of the environment in
    which you installed the release.
-   Log in to Magnolia and check that the updates included in the
    release are present. You may want to check changed style (due to
    updated webresources) or create new content with new features.

:::warning
Always avoid hotfixing problems in the Resources app because the changes
are not propagated back to your GIT repository.
:::

<!-- ```{=html}
<!-- Original Confluence content:

<p>Once a release has been <ac:link><ri:page ri:content-title="Installing a release in UAT" /><ac:plain-text-link-body><![CDATA[tested and accepted in the UAT]]></ac:plain-text-link-body></ac:link> (User Acceptance Testing) environment, the release can be installed in the Live environment. When you install a release in the Live environment, that version of the site is made public to your end users.&nbsp;</p><ac:structured-macro ac:name="tip" ac:schema-version="1" ac:macro-id="89ff3ab6-fe85-465d-86c0-cbdd50e4be8f"><ac:rich-text-body><p>During the installation of the release in your Live environment, your public website remains available.</p></ac:rich-text-body></ac:structured-macro><p><ac:image ac:width="500"><ri:attachment ri:filename="mnow-uat-live_v2.png" /></ac:image></p><h3>To install a release:</h3><ol><li>In <strong>Installed releases</strong> click&nbsp;<strong>I</strong><strong style="line-height: 1.5em;">nstall an <ac:inline-comment-marker ac:ref="d1178b66-841b-47d0-8eba-1b9094e30cbf"> update</ac:inline-comment-marker></strong>.<br /><ac:image ac:width="600"><ri:attachment ri:filename="InstallLive1_scope_v2.png" /></ac:image></li><li>Click&nbsp;<strong>Install a release</strong>.<br /><ac:image ac:width="600"><ri:attachment ri:filename="Install-site-release.png" /></ac:image>&nbsp;</li><li>Installing is a four-step process:<ol><li>Select the release you want to install and click<strong> Next</strong>.&nbsp;Latest versions display first. Select <strong>Other releases</strong> for a dropdown of earlier versions.<br /><ac:image ac:width="600"><ri:attachment ri:filename="pick.png" /></ac:image></li><li>Select the environment to install in and click <strong>Next</strong>. Environments that <ac:inline-comment-marker ac:ref="258f3610-556d-4a74-a800-3a3fcaa8aabb"> have not been set up </ac:inline-comment-marker>are not available for selection.</li><li><p>Confirm the consequences of the installation and click <strong>Install</strong>.&nbsp;<br /><ac:emoticon ac:name="warning" /> Note that if you are <ac:inline-comment-marker ac:ref="29da9b32-5149-4f47-acd3-b41482c7d946"> installing </ac:inline-comment-marker> the release in the Live environment, you should make a <ac:link><ri:page ri:content-title="Creating a backup manually" /><ac:plain-text-link-body><![CDATA[backup]]></ac:plain-text-link-body></ac:link>&nbsp;of the environment beforehand to safeguard your Live environment in case something goes wrong during the installation process, or if you want to roll back the changes at a later time.</p></li><li>Installation may take a few minutes. As all actions in the Magnolia cockpit are asynchronous, you can click on <strong>OK</strong> before the installation is complete: the action will run in the background and a notification will appear once it is complete.&nbsp;</li></ol></li></ol><p>The installation action appears in the&nbsp;<ac:link><ri:page ri:content-title="Understanding activity logs" /><ac:plain-text-link-body><![CDATA[activity log]]></ac:plain-text-link-body></ac:link>&nbsp;and a notification banner is displayed.&nbsp;<span style="color: rgb(0,0,0);">The new release details are displayed in&nbsp;</span><span style="letter-spacing: 0.0px;">Environments</span><span style="color: rgb(0,0,0);">&nbsp;section of the Package overview page.</span></p><h2>Test changes on updated environment</h2><p>To check that the environment is running on the correct release:</p><ul><li>Click <strong>Edit content</strong> in <strong>Author space</strong> of the environment in which you installed the release.</li><li>Log in to Magnolia and check that the updates included in the release are present. You may want to check changed style (due to updated webresources) or create new content with new features.&nbsp;</li></ul><p><br /></p><ac:structured-macro ac:name="warning" ac:schema-version="1" ac:macro-id="3630853e-a827-42c3-9ec7-664051c453eb"><ac:rich-text-body><p><ac:inline-comment-marker ac:ref="7423d27b-a91a-40fb-b502-e02f69f6954d">Always avoid</ac:inline-comment-marker> hotfixing problems in the Resources app because the changes are not propagated back to your GIT repository.</p></ac:rich-text-body></ac:structured-macro>

-->
``` -->
