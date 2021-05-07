---
title: "Light Development"

---

## Overview

Light Development is about applying the best patterns and principles from frontend development to CMS projects. Our mantras are "fast, easy & fun', 'DRY' and 'remove obstacles'.

The heart of it is a file-based, declarative approach. For developer tasks, you don't have to spend time clicking around in a CMS gui, everything is in files. You declare what you want Magnolia to do in light YAML configuration files, and Magnolia watches and reacts instantly to your file changes. Content types, REST endpoints, apps, dialogs, templates, redirects, REST clients, i18n UI translations and more are all configured this way.

<!--[TODO: Screenshot of Light Module folder structure.]-->

This is so simple and has so many advantages! As everything is in files (rather than controls in the CMS gui) you can use your own editor-of-choice and all your familiar actions like copy&paste, search&replace, etc. You can leverage command line build tools. And your projects have great visibility and transparency: The whole thing is just sitting in a few well structured folders.

Files means you can take full advantage of git to track changes, roll back, branch, and generally collaborate in a modern, familiar way. The YAML format makes for great change diffing when reviewing PRs and commit histories. And deployment is easy - and flexible. It's compatible with a gitOps approach.


## Key concepts

### Light Module

Projects and features are packaged in 'light modules'. A light module is a folder on the filesystem with a set of subfolders for any supplied definitions, like 'contentTypes', 'restEndpoints' and 'apps'.

Magnolia watches a specific directory, typically named 'light-modules', and treats any directory within it as a light module. You can put any number of light modules in it.

A light module can contain an entire customer project, or it can contain a reusable feature - such as a templating component to display a map on a website.

[More on light modules](https://documentation.magnolia-cms.com/display/DOCS/Light+modules)

### Definitions

Each YAML file configures a 'definition' in Magnolia. By convention, the name of the subfolder ('contentTypes', 'restEndpoints) , determines the definition type of the files within it. By convention the name of the file determines the name of the definition in the system.

Definitions are often referenced from other definitions via their names. For example an app can specify the contentType to use based on its name.

The 'Definitions' app in Magnolia provides a useful view of all of the registered definitions and is filterable by name, module and type. It also provides a list of any problems detected in any of the definitions, like a missing property.

Definitions come mostly from YAML files, but they can also come from Java code or from configuration stored directly in the Magnolia database (JCR).


## We've got sugar! 🍰

### CLI

The magnolia CLI (npm install @magnolia/cli -g) can help you with every project step, from downloading and starting Magnolia, to generators for light modules and most types of definitions. You can even supply your own blueprints for the generators to match your team's style and practices.

### Manual Overrides

In the 'Resources' app in Magnolia you can view the actual file sources that have been loaded in Magnolia. An 'Edit' action allows you to edit that defininition from within the GUI via built-in code editor. It does not actually edit the file itself, it overrides that file with configuration stored in the Magnolia database (JCR). This is useful for quickly testing something, or fixing something in an emergency when pushing changes to the light module would take too long. \
Of course all changes should then be ported to the light modules themselves and the override removed.



### YAML Hyper Config

We provide some fancy features to keep your YAML DRY.

*   Decorations
*   Includes
*   Overrides

Learn more in the dedicated [YAML Concept page](yaml-hyper-config.md).
