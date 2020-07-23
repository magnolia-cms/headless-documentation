---
title: Recovering the Live environment
---

This page explains how to restore the Live environment to a previous
state.

Restoring the Live environment may require more than one action,
depending on your Magnolia cloud set up.

Different data types require different restore actions:

-   [Restore from backup](#Replacingwithabackup) recovers:
    -   Magnolia software **custom configuration** (JCR data of
        configuration workspace).
    -   Editor-created **content** (JCR data from content workspaces
        such as website, dam, category, contacts, etc.).
-   [Install a
    release](/Magnolia+Cloud/Installing+updates+using+the+Magnolia+cockpit/Installing+a+release+in+Live)
    recovers Magnolia **light modules** you have added.

You can execute either action first.

## Restoring from a backup


To restore from a backup:

1.  In the Package overview page click **Manage environments** in the
    Environments section.
2.  Click **Restore from backup**.
    ![](/assets/cloud/replace-with-backup.png)
3.  Select the backup from which you want to restore content and
    configuration.\
    You can choose the latest **Manual backup** or one of the
    **Automated backups**.
    ![](/assets/cloud/back-up-selection_manual.png)
    You are informed if there are differences between the backup you
    have selected and your current Live environment.
4.  Acknowledge the consequences and click **Restore**.
5.  A notification banner is displayed and the restore operation appears
    in the [activity
    log](/Magnolia+Cloud/Cockpit/Understanding+activity+logs).


<!-- Original Confluence content:

<ac:structured-macro ac:name="html-wrap" ac:schema-version="1" ac:macro-id="07de0747-2516-4936-9b0e-fc203f4d216e"><ac:parameter ac:name="align">right</ac:parameter><ac:parameter ac:name="class">menu</ac:parameter><ac:parameter ac:name="atlassian-macro-output-type">INLINE</ac:parameter><ac:rich-text-body><p>Related topics:</p><ul><li><ac:link><ri:page ri:content-title="Backing up and restoring" /></ac:link></li></ul></ac:rich-text-body></ac:structured-macro><p>This page explains how to restore the Live environment to a previous state.</p><p><ac:inline-comment-marker ac:ref="9d8039dd-f610-4914-baf0-a85cc0d8d2af"> Restoring the Live environment </ac:inline-comment-marker> may require more than one action, depending on your Magnolia cloud set up.</p><p>Different data types require different restore actions:</p><ul><li><ac:link ac:anchor="Replacingwithabackup"><ac:plain-text-link-body><![CDATA[Restore from backup]]></ac:plain-text-link-body></ac:link>&nbsp;recovers:&nbsp;<ul><li><span>Magnolia software&nbsp;</span><strong>custom configuration</strong><span>&nbsp;(JCR data of configuration workspace).</span></li><li><span> <span>Editor-created&nbsp;</span><strong>content</strong><span>&nbsp;(JCR data from content workspaces such as website, dam, category, contacts, etc.).</span> </span></li></ul></li><li><ac:link><ri:page ri:content-title="Installing a release in Live" /><ac:plain-text-link-body><![CDATA[Install a release]]></ac:plain-text-link-body></ac:link>&nbsp;recovers <span>Magnolia&nbsp;</span><strong>light modules</strong>&nbsp;you have added.</li></ul><p>You can execute either action first.&nbsp;</p><h2>Restoring from a backup</h2><p>To restore from a backup:</p><ol><li>In the Package overview page click&nbsp;<strong>Manage environments</strong>&nbsp;in the Environments section.</li><li>Click <strong>Restore from backup</strong>.<br /><ac:image ac:width="600"><ri:attachment ri:filename="replace-with-backup.png" /></ac:image></li><li>Select the backup from which you want to restore content and configuration.<br />You can choose the latest&nbsp;<strong> <ac:inline-comment-marker ac:ref="9b60699a-f19e-4154-aed6-b308e16ac490"> Manual backup </ac:inline-comment-marker> </strong> or one of the <strong>Automated backups</strong>.<br /><ac:image ac:width="600"><ri:attachment ri:filename="back-up-selection_manual.png" /></ac:image> <br />You are informed if there are differences between the backup you have selected and your current Live environment.</li><li>Acknowledge the consequences and click <strong>Restore</strong>.</li><li>A notification banner is displayed and the restore operation appears in the&nbsp;<ac:link><ri:page ri:content-title="Understanding activity logs" /><ac:plain-text-link-body><![CDATA[activity log]]></ac:plain-text-link-body></ac:link>.&nbsp;</li></ol><p><br /></p><p><br /></p>

-->

