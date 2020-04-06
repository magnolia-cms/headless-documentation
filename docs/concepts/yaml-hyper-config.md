---
title: "YAML Hyper Config"

---

## Overview
Configuration in YAML files is a significant part of your Magnolia project. We've supplied some extra features to make it more powerful, to help you keep your coding best practices, like keeping your config DRY.

## Includes

Fragments of config can be stored in their own files, and then included in any definition. For example if you have a standard group of fields you want to use in many dialogs.

By convention include files are stored in the 'include' subfolder of your light modules. You can then include that fragment in other config with the !include directive and the absolute path to the file, starting at the light-modules directory.


```yaml
# an include within a list, here adding a complete tab

  - !include:/module-a/includes/categorization-tab.yaml
```


Best practice: Try to keep to 1, or at most 2 levels of includes to prevent things getting too abstract.

## Includes with a twist

Sometimes you want to reuse a common fragment, but with a small change. You can do that by simply adding any properties directly after the !include statement. These will replace the properties with the same name that were in the include file.


```yaml
# an include within a list, here adding a complete tab

  - !include:/module-a/includes/categorization-tab.yaml
    label: Yo! 1-tab-only!
```


If you have large include files, you may have a case where you want to exclude an entire subtree of that configuration. You can do this with the !override directive.

## Decorations

Decorations allow you to change the definitions supplied by other modules, including the core Magnolia modules. For example to change the effect of an action in one of the stock apps, like the Pages or Assets app. Or it can be used to augment an existing app, such as adding some additional actions or views.

Decorations are YAML files stored in the 'decorations' subfolder of a light module. The path of the file determines which definition it applies to, the file name can be used to target a specific part of the definition and the contents of the file are the changes to be applied.

Example file location and name:
```yaml
/myModule/decorations/dam-app/apps/assets.subApps.browser.yaml
```

This decoration targets the 'dam-app' module, it applies to the 'assets' app definition, and it will apply to the 'subApps.browser' part of that definition.

## More information

* [Full Docs: YAML in Magnolia](https://documentation.magnolia-cms.com/display/DOCS/YAML)
* [Full Docs: Definition Decoration](https://documentation.magnolia-cms.com/display/DOCS/Definition+decoration)
