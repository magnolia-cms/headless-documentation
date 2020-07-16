---
title: Restarting instances
---

::: {.infobox}
Related topics:

-   [Cockpit](/Magnolia+Cloud/Cockpit)
:::

This page explains how to restart instances in your cloud-based Magnolia
package. You may want to do this, for example, if an instance is not
reachable due to high CPU or memory usage, or if you use a [YAML-based
module
descriptor](/Modules/Module+descriptor/YAML-based+module+descriptor) for
light modules.

::: {.note}
When you restart an instance, the whole environment is unavailable for a
short period of time (approx. 5 minutes).

Be aware that restarting the *author* instance will close user sessions
and may cause the loss of content that is in progress. We recommend you
warn your end-users before restarting the author instance.
:::

To restart an instance:

1.  In the Package overview page, click **Manage environments** in the
    Environments section.

2.  Click **Restart an instance**.\
    ![](/assets/cloud/image2020-2-5_10-11-21.png){width="556"}

3.  Choose the environment in which you want to restart an instance:
    Live, UAT or Integration and click **Next.**\
    ![](/assets/cloud/image2020-2-5_10-45-2.png){.inline height="150"}

4.  Choose the instance you want to restart. You can only select one
    instance at a time and click **Next**.

    ![](/assets/cloud/image2020-2-5_10-46-41.png){.inline height="150"}

5.  Confirm the consequences of the restart and click **Restart**.\
    ![](/assets/cloud/image2020-2-5_10-47-47.png){width="450"}\
    The operation takes approximately 5 minutes. During that time, the
    environment and all the instances it contains are unavailable.

6.  Click **OK**. As all actions in the Magnolia cockpit are
    asynchronous, you can click on **OK** before the action is complete.
    The action runs in the background and a notification will display
    once it is complete. The action also appears in the [activity
    log](/Magnolia+Cloud/Cockpit/Understanding+activity+logs).

```{=html}
<!-- Original Confluence content:

<ac:structured-macro ac:name="html-wrap" ac:schema-version="1" ac:macro-id="3af23fd3-2e30-44b3-8277-2c72ac2d072b"><ac:parameter ac:name="align">right</ac:parameter><ac:parameter ac:name="class">menu</ac:parameter><ac:parameter ac:name="atlassian-macro-output-type">INLINE</ac:parameter><ac:rich-text-body><p>Related topics:</p><ul><li><ac:link><ri:page ri:content-title="Cockpit" /></ac:link></li></ul></ac:rich-text-body></ac:structured-macro><p>This page <ac:inline-comment-marker ac:ref="6a9eb412-81b8-4f14-9566-5c379d037e8a">explains how to restart instances</ac:inline-comment-marker> in your cloud-based Magnolia package. You may want to do this, for example,&nbsp;<span style="color: rgb(0,0,0);">if an instance is not reachable due to high CPU or memory usage, or if you use a <ac:link><ri:page ri:content-title="YAML-based module descriptor" /></ac:link> for light modules.</span></p><ac:structured-macro ac:name="note" ac:schema-version="1" ac:macro-id="467737c0-7257-4474-81c1-91d2f1f70184"><ac:rich-text-body><p>When you restart an instance, the whole environment is unavailable for a short period of time (approx. 5 minutes).</p><p>Be aware that restarting the <em>author</em> instance will close user sessions and may cause the loss of content that is in progress. We recommend you warn your end-users before restarting the author instance.</p></ac:rich-text-body></ac:structured-macro><p>To restart an instance:</p><ol><li>In the Package overview page, click <strong>Manage environments</strong> in the Environments section.</li><li>Click <strong>Restart an instance</strong>.<br /><ac:image ac:width="556"><ri:attachment ri:filename="image2020-2-5_10-11-21.png" /></ac:image></li><li>Choose the environment in which you want to restart an instance: Live, UAT or Integration a<span style="color: rgb(0,0,0);">nd click <strong>Next.</strong></span><br /><ac:image ac:thumbnail="true" ac:height="150"><ri:attachment ri:filename="image2020-2-5_10-45-2.png" /></ac:image></li><li>Choose the instance you want to restart. You can only select one instance at a time and click <strong>Next</strong>.<br /><p><ac:image ac:thumbnail="true" ac:height="150"><ri:attachment ri:filename="image2020-2-5_10-46-41.png" /></ac:image></p></li><li>Confirm the consequences of<span style="color: rgb(0,0,0);">&nbsp;the restart and click <strong>Restart</strong>.&nbsp;<br /><ac:image ac:width="450"><ri:attachment ri:filename="image2020-2-5_10-47-47.png" /></ac:image></span><span style="color: rgb(0,0,0);"><br /></span>The operation takes approximately 5 minutes. During that time, the environment and all the instances it contains are unavailable.&nbsp;</li><li>Click&nbsp;<strong>OK</strong>. As all actions in the Magnolia cockpit are asynchronous, you can click on&nbsp;<strong>OK</strong>&nbsp;before the action is complete. The action runs in the background and a notification will display once it is complete. The action also appears in the&nbsp;<ac:link><ri:page ri:content-title="Understanding activity logs" /><ac:plain-text-link-body><![CDATA[activity log]]></ac:plain-text-link-body></ac:link>.</li></ol><p><br /></p>

-->
```
