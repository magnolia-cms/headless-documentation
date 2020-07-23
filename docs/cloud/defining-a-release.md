---
title: Defining a release
---

A
[release](/Magnolia+Cloud/Cockpit/Magnolia+cockpit+concepts#Siterelease)
wraps the latest changes in the Integration environment in preparation
for installation on the UAT or Live environment. A new release contains
all the Integration environment snapshots installed since the last
release was created .

All releases are stored by Magnolia in the cloud and you can restore a
previous version if you need to.

![](/assets/cloud/mnow-define-site-release_v3.png)

:::note
-   Before you can define a release at least one [snapshot must be
    installed](/Magnolia+Cloud/Installing+updates+using+the+Magnolia+cockpit/Installing+a+snapshot)
    in the Integration environment.
-   When an installed snapshot has been defined as a release you cannot
    define another release until you install another snapshot.
:::

1.  In **Installed releases** click **Install an update**.
    ![](/assets/cloud/InstallSite1_scope_v2.png)
2.  Click **Define a new release**.
    ![](/assets/cloud/define-new-release%20(1).png)
3.  This action appears in the [activity
    log](/Magnolia+Cloud/Cockpit/Understanding+activity+logs) and a
    notification banner is displayed.
4.  Defining the release is a three-step process:
    1.  Click **Next** in **Select snapshot** step.
        ![](/assets/cloud/InstallSIte3a.png)
    2.  Add a name and description in **Describe release**. These
        details are then displayed in the Installed releases and
        Environment sections of the Package overview page.
        ![](/assets/cloud/describe-release.png)
    3.  Click **OK** in **Define release**. As all actions in the
        Magnolia cockpit are asynchronous, you can click on **OK**
        before the action is complete: it will run in the background.

This action appears in the [activity
log](/Magnolia+Cloud/Cockpit/Understanding+activity+logs) and a
notification banner is displayed. The new release details are displayed
in **Installed releases** section.

