---
title: Copying content for testing
---

You can copy the
*[content](/Magnolia+Cloud/Cockpit/Magnolia+cockpit+concepts#glossary-content)*
in one environment to another for testing purposes. You can copy:

-   From Live to UAT or Integration.
-   From UAT to Integration.

The copy operation copies all editor-created content, such as pages and
assets, from the Magnolia JCR
[workspaces](/Administration/Architecture/Workspaces) source
environment. Content from both the author and the public instances is
copied to corresponding target instances.

The copy operation does **not** copy:

-   Any administrator-created content in the `config` workspace.
-   Users, roles and groups defined in the Security app.
-   Any light modules deployed in the source environment.

Use this functionality to test a new light module or an updated light
module in the Integration environment on the basis of your Live or UAT
content.

You can only copy content "backward", that is, from Live to UAT or
Integration, or from UAT to Integration. To promote your changes
"forward", you must [define a
release](/Magnolia+Cloud/Installing+updates+using+the+Magnolia+cockpit/Defining+a+release).

::: {.note}
Note that all content in the target environment is overridden, except
the `config`, `users`, `userroles` and `usergroups` workspaces, during
the copy operation.
:::

1.  In **Installed releases** click **Install an update**.\
    ![](/assets/cloud/install-update.png){width="600"}
2.  Click **Copy content for testing**.\
    ![](/assets/cloud/copy-content.png){width="600"}
3.  Select the source environment from which you want to copy content
    and the target environment the content will be copied to before
    clicking **Next**.\
    ![](/assets/cloud/copy3step1.png){width="600"}
4.  Confirm the consequences of the copy operation and click **Copy**.\
    ![](/assets/cloud/Copy4Step2.png){width="600"}\
    The copy operation begins.
5.  Click **OK**. As all actions in the Magnolia cockpit are
    asynchronous, you can click on **OK** before the copy is complete:
    the action will run in the background and a notification will appear
    once it is complete.

This action appears in the [activity
log](/Magnolia+Cloud/Cockpit/Understanding+activity+logs) and a
notification banner is displayed.

Once you have copied the environment's content to another environment
and made the changes or corrections you required, you can [define a
release](/Magnolia+Cloud/Installing+updates+using+the+Magnolia+cockpit/Defining+a+release)
to wrap these changes in preparation for installation in the
[UAT](/Magnolia+Cloud/Installing+updates+using+the+Magnolia+cockpit/Installing+a+release+in+UAT)
or
[Live](/Magnolia+Cloud/Installing+updates+using+the+Magnolia+cockpit/Installing+a+release+in+Live)
environment.

::: {.info}
Note that the release versions of the environments displayed in the
Package overview are not affected by the copy operation. Check the
activity log instead.
:::

::: {.warning}
Always avoid hotfixing problems in the Resources app because the changes
are not propagated back to your GIT repository.
:::

```{=html}
<!-- Original Confluence content:

<p>You can&nbsp;copy the <em> <ac:link ac:anchor="glossary-content"><ri:page ri:content-title="Magnolia cockpit concepts" /><ac:plain-text-link-body><![CDATA[content]]></ac:plain-text-link-body></ac:link> </em>&nbsp;in one environment to another for testing purposes. You can copy:</p><ul><li>From Live to UAT or Integration.</li><li>From UAT to Integration.</li></ul><p>The copy operation copies all editor-created content, such as pages and assets,&nbsp;from the Magnolia JCR&nbsp;<ac:link><ri:page ri:content-title="Workspaces" /><ac:plain-text-link-body><![CDATA[workspaces]]></ac:plain-text-link-body></ac:link>&nbsp;source environment. Content from both the author and the public instances is copied to corresponding target instances.</p><p class="p1">The copy operation does&nbsp;<strong>not</strong>&nbsp;copy:</p><ul><li>Any administrator-created content in the&nbsp;<code>config</code>&nbsp;workspace.</li><li>Users, roles and groups defined in the Security app.</li><li>Any light modules deployed in the source environment.&nbsp;&nbsp;</li></ul><p>Use this functionality to test a new light module or an updated light module in the Integration environment on the basis of your Live or UAT content.&nbsp;</p><p>You can only copy content &quot;backward&quot;, that is, from Live to UAT or Integration, or from UAT to Integration. To promote your changes &quot;forward&quot;, you must&nbsp;<ac:link><ri:page ri:content-title="Defining a release" /><ac:plain-text-link-body><![CDATA[define a release]]></ac:plain-text-link-body></ac:link>.</p><ac:structured-macro ac:name="note" ac:schema-version="1" ac:macro-id="63147edf-7c93-4971-ab18-e709afb40263"><ac:rich-text-body><p>Note that all content in the target environment is overridden, except the&nbsp;<code>config</code>, <code>users</code>, <code>userroles</code> and <code>usergroups</code>&nbsp; workspaces, during the copy operation.</p></ac:rich-text-body></ac:structured-macro><ol><li>In <strong>Installed releases</strong> click&nbsp;<strong>Install an update</strong>.<br /><ac:image ac:width="600"><ri:attachment ri:filename="install-update.png" /></ac:image></li><li>Click <strong>Copy content for testing</strong>.<br /><ac:image ac:width="600"><ri:attachment ri:filename="copy-content.png" /></ac:image></li><li>Select the source environment from which you want to copy content and the target environment the content will be copied to before clicking <strong>Next</strong>.<br /><ac:image ac:width="600"><ri:attachment ri:filename="copy3step1.png" /></ac:image></li><li>Confirm&nbsp;the consequences&nbsp;of the copy operation and click&nbsp;<strong>Copy</strong>.<br /><ac:image ac:width="600"><ri:attachment ri:filename="Copy4Step2.png" /></ac:image> <br />The copy operation begins.&nbsp;</li><li>Click&nbsp;<strong>OK</strong>. As all actions in the Magnolia cockpit are asynchronous, you can click on&nbsp;<strong>OK</strong>&nbsp;before the copy is complete: the action will run in the background and a notification will appear once it is complete.&nbsp;</li></ol><p>This action appears in the&nbsp;<ac:link><ri:page ri:content-title="Understanding activity logs" /><ac:plain-text-link-body><![CDATA[activity log]]></ac:plain-text-link-body></ac:link>&nbsp;and a notification banner is displayed.</p><p>Once you have copied the environment's content to another environment and made the changes or corrections you required, you can&nbsp;<ac:link><ri:page ri:content-title="Defining a release" /><ac:plain-text-link-body><![CDATA[define a release]]></ac:plain-text-link-body></ac:link>&nbsp;to wrap these changes&nbsp;in preparation for installation in the <ac:link><ri:page ri:content-title="Installing a release in UAT" /><ac:plain-text-link-body><![CDATA[UAT]]></ac:plain-text-link-body></ac:link> or <ac:link><ri:page ri:content-title="Installing a release in Live" /><ac:plain-text-link-body><![CDATA[Live]]></ac:plain-text-link-body></ac:link> environment.</p><ac:structured-macro ac:name="info" ac:schema-version="1" ac:macro-id="f25d3c43-5284-4005-9b71-9806940d0c9a"><ac:rich-text-body><p>Note that the release versions of the environments displayed in the Package overview are not affected by the copy operation. Check the activity log instead.</p></ac:rich-text-body></ac:structured-macro><ac:structured-macro ac:name="warning" ac:schema-version="1" ac:macro-id="3630853e-a827-42c3-9ec7-664051c453eb"><ac:rich-text-body><p>Always avoid hotfixing problems in the Resources app because the changes are not propagated back to your GIT repository.</p></ac:rich-text-body></ac:structured-macro>

-->
```
