---
title: Tearing down an environment
---

You may only have one environment of each type per package at any given
time. Therefore, if an environment of the same type already exists, you
have to tear it down before you can create a new one.

To tear down an environment:

1.  In the Package overview page, click **Manage environments** in the
    Environments section.

2.  Click **Tear down an environment**.
    ![](/assets/cloud/mnow_teardown-env.png)

3.  Choose what kind of environment you want to tear down: Live, UAT or
    Integration.
    ![](/assets/cloud/mnow_choose-env-teardown.png)

4.  Confirm the consequences of the teardown and click **Tear down
    \<environment name\>**.

    :::note
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


