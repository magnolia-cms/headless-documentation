---
title: "Hello Magnolia - Hosted Trial"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import ChangeHeaderForHostedFreeTrials from '../../src/ChangeHeader';

<ChangeHeaderForHostedFreeTrials/>

## Get Started with the Hosted Trial

Let's take Magnolia for a spin. We'll cover how to work with your new server via the provisioned git repository.

## First commit

Create a directory named `Magnolia-Trial` on your computer to hold your work.

Go to that directory in your terminal or command prompt.

Clone your provisioned git repo:

- Go to your hosted git repo. ([Click the link in your Dashboard](https://www.magnolia-trials.com/dashboard))
- Get your clone url: Use the 'Clone' item from the left menu. (It's the 2nd one down with the arrow.)
- Use your clone url in your terminal:

```
git clone [YOUR_CLONE_URL]
```

> Note: If you already have a user on the Magnolia BitBucket git repository, then you may already have a different git username stored on your system. Please consult the git documentation on how to either temporarily change your stored username, or configure a local username just for this repository. If you have trouble, don't hesitate to reach out to us!

Notice that your repository is pre-populated with a demonstration website project. You can remove it later if you want.

This repository is how you make changes to your hosted Magnolia instance.

Try it now.

- In your editor, open: `/light-modules/spa-website-lm/contentTypes/tour.yaml`
- Change `label: Description` to `label: Summary`, and save.
- In your terminal 'cd' into the repository directory.

Commit and push your change to git.

```
git commit -a -m "Changed tours label."
git push
```

- Login to your hosted Magnolia author instance, and close the Tours app if it is open.
  (Click the 'x' in the upper right corner of the app.)
- Now, open the Tours app, and see that your label change has been applied!

> Did the app not load or you don't see a change? You might have made a typo by accident.
>
> - Open the `Definitions` app, then open the `Problems` tab. Do you see any `Severe` problems related to `Tours`?
> - Once you find the problem and fix your `contentTypes/tours.yaml` file, you will also need to make a small change to the `apps/tours.yaml` file, just add a space to the end of the file. Now push both of these files to git.
> - Then logout of your Author instance (menu at the top right) and log back in. The problem will be fixed.

:::tip Congratulations!
Now you know how to deploy your changes to your hosted **magnolia-trials.com** instance.
:::

##

## Create new projects

To start new projects, you can create additional new light modules in the `light-modules` directory.

In the pages app, you can create additional hierarchies of pages. And thanks to the Multi-Site feature, you can map different domain names to each one.

We'll start to cover this in the next tutorial.

## Next Steps

Next, follow the [Headless Tutorial](/docs/getting-started/hello-hosted-headless) to quickly level-up on headless development with Magnolia.
