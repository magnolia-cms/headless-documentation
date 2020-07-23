---
title: Understanding activity logs
---

Magnolia logs all major actions triggered from the cockpit affecting
your package. You can access the activity log from the [Package
overview](/Magnolia+Cloud/Cockpit#Siteoverview) page of the Magnolia
cockpit.

The activity log gives you a single location to see all notifications
and understand how the current state of the setup came to be.

![](/assets/cloud/5-7-1-cloud-activity-log.png)

The activity log shows:

-   An icon indicating the activity type.
-   A description of the activity.
-   Which environment the activity affected.
-   Who performed the activity.
-   When the activity happened.

You can use the dropdown menus at the top of the page to filter the
entries by type or environment, or to see only the activities that
happened since you last logged in.

Click on any row in the log to see more details about the activity,
including the exact date and time of the log message.

You can choose to display the log entries in your server's timezone by
selecting the option at the top of the table. Otherwise, the entries are
displayed in your browser's timezone.

## Types of actions logged

Different types of information are displayed in the activity log:

| Icon 	| Type        	| Example                                                         	|
|------	|-------------	|-----------------------------------------------------------------	|
|![](/assets/cloud/mnow_icon_info.gif)      	| Information 	| UAT environment has been set up successfully.                   	|
|![](/assets/cloud/mnow_icon_error.gif)      	| Error       	| Failed to set up the LIVE environment.                          	|
|![](/assets/cloud/New-activity-log-type-or-not.gif)      	| Warning     	| The setup operation for the LIVE environment has been canceled. 	|


