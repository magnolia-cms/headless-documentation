---
title: Protecting environments
---

::: {.infobox}
Related topics:

-   [Cockpit](/Magnolia+Cloud/Cockpit)
-   [Tearing down an
    environment](/Magnolia+Cloud/Managing+environments+using+the+Magnolia+cockpit/Tearing+down+an+environment)
-   [Upgrading Magnolia in the
    cloud](/Magnolia+Cloud/Installing+updates+using+the+Magnolia+cockpit/Upgrading+Magnolia+in+the+cloud)
:::

This page explains how to protect your environments in your cloud-based
Magnolia package. You may want to do this to prevent them from being
unintentionally [torn
down](/Magnolia+Cloud/Managing+environments+using+the+Magnolia+cockpit/Tearing+down+an+environment)
or
[upgraded](/Magnolia+Cloud/Installing+updates+using+the+Magnolia+cockpit/Upgrading+Magnolia+in+the+cloud).

::: {.info}
When you protect an environment, it cannot be torn down or upgraded
until the protection is disabled again.

You use the same cockpit wizard to enable and disable protection.
:::

To protect an environment:

1.  In the Package overview page, click **Manage environments** in the
    Environments section.
2.  Click **Termination protection**.\
    ![](cloud-protect-env.png){height="73"}
3.  Choose the environment you want to protect: Live, UAT or
    Integration. You can only select one environment at a time.
4.  Confirm the consequences of the action and click **Enable
    protection**.
5.  Click **OK**. As all actions in the Magnolia cockpit are
    asynchronous, you can click on **OK** before the action is complete.
    The action runs in the background and a notification will display
    once it is complete. The action also appears in the [activity
    log](/Magnolia+Cloud/Cockpit/Understanding+activity+logs).

To disable protection, follow the same steps as above but select a
protected environment and click **Disable protection** instead.

::: {.tip}
When an environment is protected, a green shield icon is displayed next
to it in the Package overview.
:::

```{=html}
<!-- Original Confluence content:

<ac:structured-macro ac:name="html-wrap" ac:schema-version="1" ac:macro-id="3af23fd3-2e30-44b3-8277-2c72ac2d072b"><ac:parameter ac:name="align">right</ac:parameter><ac:parameter ac:name="class">menu</ac:parameter><ac:parameter ac:name="atlassian-macro-output-type">INLINE</ac:parameter><ac:rich-text-body><p>Related topics:</p><ul><li><ac:link><ri:page ri:content-title="Cockpit" /></ac:link></li><li><ac:link><ri:page ri:content-title="Tearing down an environment" /></ac:link></li><li><ac:link><ri:page ri:content-title="Upgrading Magnolia in the cloud" /></ac:link></li></ul></ac:rich-text-body></ac:structured-macro><p>This page explains how to&nbsp;protect your environments in your cloud-based Magnolia package. You may want to do this&nbsp;to prevent them from being unintentionally&nbsp;<ac:link><ri:page ri:content-title="Tearing down an environment" /><ac:plain-text-link-body><![CDATA[torn down]]></ac:plain-text-link-body></ac:link>&nbsp;or <ac:link><ri:page ri:content-title="Upgrading Magnolia in the cloud" /><ac:plain-text-link-body><![CDATA[upgraded]]></ac:plain-text-link-body></ac:link>.&nbsp;</p><ac:structured-macro ac:name="info" ac:schema-version="1" ac:macro-id="084ec3eb-ddb6-446b-8941-a41dc4903eac"><ac:rich-text-body><p>When you protect an environment, it cannot be torn down or upgraded until the protection is disabled again.</p><p>You use the same cockpit wizard to enable and disable protection.</p></ac:rich-text-body></ac:structured-macro><p>To&nbsp;protect an environment:</p><ol><li>In the Package overview page, click <strong>Manage environments</strong> in the Environments section.</li><li>Click <strong>Termination protection</strong>.<br /><ac:image ac:height="73"><ri:attachment ri:filename="cloud-protect-env.png" /></ac:image></li><li>Choose the environment you want to protect: Live, UAT or Integration.&nbsp;You can only select one environment at a time.</li><li>Confirm the consequences of&nbsp;the action and click <strong>Enable protection</strong>.&nbsp;</li><li>Click&nbsp;<strong>OK</strong>. As all actions in the Magnolia cockpit are asynchronous, you can click on&nbsp;<strong>OK</strong>&nbsp;before the action is complete. The action runs in the background and a notification will display once it is complete. The action also appears in the&nbsp;<ac:link><ri:page ri:content-title="Understanding activity logs" /><ac:plain-text-link-body><![CDATA[activity log]]></ac:plain-text-link-body></ac:link>.</li></ol><p>To disable protection, follow the same steps as above but select a protected environment and click <strong>Disable protection</strong> instead.</p><ac:structured-macro ac:name="tip" ac:schema-version="1" ac:macro-id="e14af3c9-80c9-4191-8acb-c9c3eed03cb5"><ac:rich-text-body><p>When an environment is protected, a green shield icon is displayed next to it in the Package overview.</p></ac:rich-text-body></ac:structured-macro><p><br /></p><p><br /></p>

-->
```
