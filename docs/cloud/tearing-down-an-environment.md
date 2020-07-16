---
title: Tearing down an environment
---

You may only have one environment of each type per package at any given
time. Therefore, if an environment of the same type already exists, you
have to tear it down before you can create a new one.

To tear down an environment:

1.  In the Package overview page, click **Manage environments** in the
    Environments section.

2.  Click **Tear down an environment**.\
    ![](mnow_teardown-env.png){width="600"}

3.  Choose what kind of environment you want to tear down: Live, UAT or
    Integration.\
    ![](mnow_choose-env-teardown.png){width="600"}

4.  Confirm the consequences of the teardown and click **Tear down
    \<environment name\>**.

    ::: {.note}
    While the Tear down action does not create a backup, the system
    automatically creates backups in the Live environment and a backup
    should therefore already exist. To be on the safe side, you may want
    to [create a backup
    manually](/Magnolia+Cloud/Managing+environments+using+the+Magnolia+cockpit/Backing+up+and+restoring/Creating+a+backup+manually)
    anyway before tearing down a Live environment.

    When you tear down the UAT and Integration environments, you lose
    your content and configuration. There is no way to recover it.
    However, you can recover Magnolia and your custom light modules at
    any time. See [How and where data is kept
    safe](/Magnolia+Cloud/Managing+environments+using+the+Magnolia+cockpit/Backing+up+and+restoring#how-and-where-data-is-kept-safe)
    for more.
    :::

5.  Click **OK**. As all actions in the Magnolia cockpit are
    asynchronous, you can click on **OK** before the action is complete.
    The action runs in the background and a notification will display
    once it is complete. The action also appears in the [activity
    log](/Magnolia+Cloud/Cockpit/Understanding+activity+logs).

Next:

[Setting up a new
environment](/Magnolia+Cloud/Managing+environments+using+the+Magnolia+cockpit/Setting+up+a+new+environment)

```{=html}
<!-- Original Confluence content:

<p><ac:inline-comment-marker ac:ref="44061ef4-8e53-4d1f-84a0-367da30ebd5f"> You may only have </ac:inline-comment-marker> one environment of each type per package at any given time. Therefore, if an environment of the same type already exists, you have to&nbsp;tear it down&nbsp;before you can create a new one.</p><p>To tear down an&nbsp;environment:&nbsp;</p><ol><li>In the Package overview page, click&nbsp;<strong>Manage environments</strong>&nbsp;in the Environments section.</li><li>Click <strong>Tear down an environment</strong>.<br /> <ac:image ac:width="600"><ri:attachment ri:filename="mnow_teardown-env.png" /></ac:image></li><li>Choose what kind of environment you want to tear down: Live, UAT or Integration.&nbsp;<br /> <ac:image ac:width="600"><ri:attachment ri:filename="mnow_choose-env-teardown.png" /></ac:image></li><li><p>Confirm <ac:inline-comment-marker ac:ref="54b41688-7ffa-4209-9c3a-4b40cace6378"> the consequences </ac:inline-comment-marker> of the teardown and click&nbsp;<strong>Tear down &lt;environment name&gt;</strong>.&nbsp;</p><ac:structured-macro ac:name="note" ac:schema-version="1" ac:macro-id="141ce941-f7b9-423b-a261-d8935f520241"><ac:rich-text-body><p>While the Tear down action does not create a backup, the system automatically creates backups in the Live environment and a backup should therefore already exist. To be on the safe side, you may want to <ac:link><ri:page ri:content-title="Creating a backup manually" /><ac:plain-text-link-body><![CDATA[create a backup manually]]></ac:plain-text-link-body></ac:link> anyway before tearing down a Live environment.</p><p>When you tear down the UAT and Integration environments, you lose your content and configuration. There is no way to recover it. However, you can recover Magnolia and your custom light modules at any time. See <ac:link ac:anchor="Howandwheredataiskeptsafe"><ri:page ri:content-title="Backing up and restoring" /><ac:plain-text-link-body><![CDATA[How and where data is kept safe]]></ac:plain-text-link-body></ac:link> for more.</p></ac:rich-text-body></ac:structured-macro></li><li>Click <strong>OK</strong>. As all actions in the Magnolia cockpit are asynchronous, you can click on&nbsp;<strong>OK</strong>&nbsp;before the action is complete. The action runs in the background and a notification will display once it is complete. The action also appears in the&nbsp;<ac:link><ri:page ri:content-title="Understanding activity logs" /><ac:plain-text-link-body><![CDATA[activity log]]></ac:plain-text-link-body></ac:link>.</li></ol><p>Next:&nbsp;</p><ac:structured-macro ac:name="mgnl-aui-button-inline" ac:schema-version="1" ac:macro-id="74b03e07-4b9a-4467-a680-98fef74a350e"><ac:parameter ac:name="Type">
    Normal
   </ac:parameter><ac:parameter ac:name="IconClass">
    aui-iconfont-version
   </ac:parameter><ac:parameter ac:name="atlassian-macro-output-type">
    INLINE
   </ac:parameter><ac:rich-text-body><p><ac:link><ri:page ri:content-title="Setting up a new environment" /></ac:link></p></ac:rich-text-body></ac:structured-macro>

-->
```
