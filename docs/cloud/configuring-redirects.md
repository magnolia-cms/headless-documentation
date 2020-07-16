---
title: Configuring domain redirect rules
---

This page explains how to configure a root domain redirect rule for your
cloud-based Magnolia package.

::: {.infobox}
Related topics:

-   [Cockpit](/Magnolia+Cloud/Cockpit)
-   [Multisite in Magnolia in the
    cloud](/Magnolia+Cloud/Supported+modules+in+the+cloud/Multisite+in+Magnolia+in+the+cloud)
:::

You can change your root domain to use different subdomains if so
required. For example, you could redirect abc.com to abc.net.

::: {.note}
Certificates for the domains you redirect from and to must be managed by
Magnolia Cloud.
:::

![](/assets/cloud/cloud-redirect-config.png){width="500"}

To configure a redirect rule:

1.  In the Package overview page, click **Manage environments** in the
    Environments section.
2.  Click **Configure redirect rules**.
3.  Enter the source and target domains in the **From** and **Redirect
    to** fields.
4.  Add a description (optional).
5.  Click **Save**.\
    You can repeat the steps above to add other redirect rules if
    required.
6.  Click **Apply** to apply the rules. The rules take effect
    immediately.

To delete a redirect rule:

1.  In the Package overview page, click **Manage environments** in the
    Environments section.
2.  Click **Configure redirect rules**.
3.  In the bottom half of the page, click **Delete** next to the rule
    you want to delete.
4.  Click **Apply** to apply the deletion.

```{=html}
<!-- Original Confluence content:

<p>This page explains how to configure a root domain redirect rule for your cloud-based Magnolia package.&nbsp;</p><ac:structured-macro ac:name="html-wrap" ac:schema-version="1" ac:macro-id="3af23fd3-2e30-44b3-8277-2c72ac2d072b"><ac:parameter ac:name="align">right</ac:parameter><ac:parameter ac:name="class">menu</ac:parameter><ac:parameter ac:name="atlassian-macro-output-type">INLINE</ac:parameter><ac:rich-text-body><p>Related topics:</p><ul><li><ac:link><ri:page ri:content-title="Cockpit" /></ac:link></li><li><ac:link><ri:page ri:content-title="Multisite in Magnolia in the cloud" /></ac:link></li></ul></ac:rich-text-body></ac:structured-macro><p>You can change your root domain to use different subdomains if so required.&nbsp;For example, you could redirect&nbsp;abc.com to abc.net.</p><ac:structured-macro ac:name="note" ac:schema-version="1" ac:macro-id="13916fef-72cb-4ce0-9ef2-fca4b5d3a1e2"><ac:rich-text-body><p>Certificates for the domains you redirect from and to must be&nbsp;managed&nbsp;by Magnolia Cloud.</p></ac:rich-text-body></ac:structured-macro><p><ac:image ac:width="500"><ri:attachment ri:filename="cloud-redirect-config.png" /></ac:image></p><p>To configure a redirect rule:</p><ol><li>In the Package overview page, click&nbsp;<strong>Manage environments</strong>&nbsp;in the Environments section.</li><li>Click <strong>Configure redirect rules</strong>.</li><li>Enter the source and target domains in the <strong>From</strong> and <strong>Redirect to</strong> fields.&nbsp;&nbsp;</li><li>Add a description (optional).</li><li>Click <strong>Save</strong>.<br />You can repeat the steps above to add other redirect rules if required.&nbsp;</li><li>Click <strong>Apply</strong>&nbsp;to apply the rules. The rules take effect immediately.</li></ol><p><br /><ac:inline-comment-marker ac:ref="aaa4a658-f98c-46b7-ad04-4e8ac1e67f27">To delete a redirect rule:</ac:inline-comment-marker></p><ol><li>In the Package overview page, click&nbsp;<strong>Manage environments</strong>&nbsp;in the Environments section.</li><li>Click&nbsp;<strong>Configure redirect rules</strong>.</li><li>In the bottom half of the page, click <strong>Delete</strong>&nbsp;next to the rule you want to delete.</li><li>Click&nbsp;<strong>Apply</strong>&nbsp;to apply the deletion.</li></ol><p><br /></p>

-->
```
