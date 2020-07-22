---
title: "Hello Magnolia - Hosted Trial"

---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Get Started with the Hosted Trial

Let's take Magnolia for a spin. We'll cover how to work with your new server via the provisioned git repository.

## First commit

Create a directory named `Magnolia-Trial` on your computer to hold your work.

Go to that directory in your terminal or command prompt. 

Clone your provisioned git repo:
* Go to your hosted git repo.  ([Click the link in your Dashboard](https://www.magnolia-trials.com/dashboard))
* Get your clone url: Use the 'Clone' item from the left menu. (It's the 2nd one down with the arrow.)
* Use your clone url in your terminal:

```
git clone [YOUR_CLONE_URL]
```

Notice that your repository is pre-populated with a demonstration website project. You can remove it later if you want.

This repository is how you make changes to your hosted Magnolia instance. 

Try it now. 

*   In your editor, open: `/light-modules/spa-website-lm/contentTypes/tour.yaml`
*   Change `label: Description` to `label: Summary`, and save.
*   Commit and push your change to git.
```
git commit -a -m "Changed tours label."
git push
```
*   Login to your hosted Magnolia author instance, and close the Tours app if it is open.    
(Click the 'x' in the upper right corner of the app.)
*   Now, open the Tours app, and see that your label change has been applied!


:::tip Congratulations!
Now you know how to deploy your changes to your hosted __magnolia-trials.com__ instance.
:::

## 

## Create new projects

To start new projects, you can create additional new light modules in the `light-modules` directory.

In the pages app, you can create additional hierarchies of pages. And thanks to the Multi-Site feature, you can map different domain names to each one.

We'll start to cover this in the next tutorial.


## Next Steps

Next, follow the [Headless Tutorial](/docs/getting-started/hello-hosted-headless) to quickly level-up on headless development with Magnolia.




