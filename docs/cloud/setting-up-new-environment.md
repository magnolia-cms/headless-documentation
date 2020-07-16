---
title: Setting up a new environment
---

This page explains how to add a new environment to your cloud-based
Magnolia package.

::: {.infobox}
Related topics:

-   [Cockpit](/Magnolia+Cloud/Cockpit)
-   [Tearing down an
    environment](/Magnolia+Cloud/Managing+environments+using+the+Magnolia+cockpit/Tearing+down+an+environment)
:::

You may only have one environment of each type at any given time.
Therefore, if an environment of the same type already exists, you have
to [tear it
down](/Magnolia+Cloud/Managing+environments+using+the+Magnolia+cockpit/Tearing+down+an+environment)
before you can set a new one up.

[/\_i/\_cloud+environments+vary](!include)

To set up a new environment:

1.  In the Package overview page, click **Manage environments** in the
    Environments section.

2.  Click **Set up new environment**.\
    ![](setup-new-env-start-bar.png){width="600"}

3.  Choose what kind of environment you want to create: Live, UAT or
    Integration.\
    You may only have one environment of each type at any given time. If
    an environment type already exists, the option is greyed out.

4.  Choose the Magnolia version. You can see runtime information (the
    OS, JDK and Tomcat versions) about the bundles available.

    ![](SETUP-ENV-CHOOSE-M-VESION.png){width="600"}

5.  Click **Set up \<environment name\>**. The creation of the
    environment may take some time.

6.  Click **OK**. As all actions in the Magnolia cockpit are
    asynchronous, you can click on **OK** before the action is complete.
    The action runs in the background and a notification will display
    once it is complete. The action also appears in the [activity
    log](/Magnolia+Cloud/Cockpit/Understanding+activity+logs).

Next:

[Installing a snapshot in the Integration
environment](/Magnolia+Cloud/Installing+updates+using+the+Magnolia+cockpit/Installing+a+snapshot)

```{=html}
<!-- Original Confluence content:

<p>This page explains how to add a new environment to your cloud-based Magnolia package.&nbsp;</p><ac:structured-macro ac:name="html-wrap" ac:schema-version="1" ac:macro-id="3af23fd3-2e30-44b3-8277-2c72ac2d072b"><ac:parameter ac:name="align">right</ac:parameter><ac:parameter ac:name="class">menu</ac:parameter><ac:parameter ac:name="atlassian-macro-output-type">INLINE</ac:parameter><ac:rich-text-body><p>Related topics:</p><ul><li><ac:link><ri:page ri:content-title="Cockpit" /></ac:link></li><li><ac:link><ri:page ri:content-title="Tearing down an environment" /></ac:link></li></ul></ac:rich-text-body></ac:structured-macro><p>You may only have one environment of each type at any given time. Therefore, if an environment of the same type already exists, you have to <ac:link><ri:page ri:content-title="Tearing down an environment" /><ac:plain-text-link-body><![CDATA[tear it down]]></ac:plain-text-link-body></ac:link>&nbsp;before you can set a new one up.</p><p><ac:structured-macro ac:name="include" ac:schema-version="1" ac:macro-id="f1f6a5f6-8c4d-491b-b06f-9972d13eb945"><ac:parameter ac:name=""><ac:link><ri:page ri:space-key="DOCS57" ri:content-title="_cloud environments vary" /></ac:link></ac:parameter></ac:structured-macro></p><p>To set up a new environment:</p><ol><li>In the Package overview page, click <strong>Manage environments</strong> in the Environments section.</li><li>Click <strong>Set up new environment</strong>.<br /><ac:image ac:width="600"><ri:attachment ri:filename="setup-new-env-start-bar.png" /></ac:image></li><li>Choose what kind of environment you want to create: Live, UAT or Integration.&nbsp;<br />You may only have one environment of each type at any given time. If an environment type already exists, the option is greyed out.&nbsp;</li><li>Choose the Magnolia version. You can see r<span style="color: rgb(0,0,0);">untime information (the&nbsp;OS, JDK and Tomcat versions) about the bundles available.</span><br /><p><ac:image ac:width="600"><ri:attachment ri:filename="SETUP-ENV-CHOOSE-M-VESION.png" /></ac:image></p></li><li>Click&nbsp;<strong>Set up &lt;environment name&gt;</strong>.&nbsp;The creation of the environment may take some time.</li><li>Click&nbsp;<strong>OK</strong>. As all actions in the Magnolia cockpit are asynchronous, you can click on&nbsp;<strong>OK</strong>&nbsp;before the action is complete. The action runs in the background and a notification will display once it is complete. The action also appears in the&nbsp;<ac:link><ri:page ri:content-title="Understanding activity logs" /><ac:plain-text-link-body><![CDATA[activity log]]></ac:plain-text-link-body></ac:link>.</li></ol><p>Next:&nbsp;</p><ac:structured-macro ac:name="mgnl-aui-button-inline" ac:schema-version="1" ac:macro-id="74b03e07-4b9a-4467-a680-98fef74a350e"><ac:parameter ac:name="Type">
    Normal
   </ac:parameter><ac:parameter ac:name="IconClass">
    aui-iconfont-version
   </ac:parameter><ac:parameter ac:name="atlassian-macro-output-type">
    INLINE
   </ac:parameter><ac:rich-text-body><p><ac:link><ri:page ri:content-title="Installing a snapshot" /><ac:plain-text-link-body><![CDATA[Installing a snapshot in the Integration environment]]></ac:plain-text-link-body></ac:link></p></ac:rich-text-body></ac:structured-macro><p><br /></p><p><br /></p>

-->
```
