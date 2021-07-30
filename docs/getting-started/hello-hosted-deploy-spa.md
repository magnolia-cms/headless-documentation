---
title: "Hosted Trial - Build and Deploy the demo SPA"

---

import ChangeHeaderForHostedFreeTrials from '../../src/ChangeHeader';

<ChangeHeaderForHostedFreeTrials/>

The provisioned demo project, 'spa-website-demo', demonstrates an advanced headless approach. It shows how you can have an independent frontend getting content from Magnolia over REST API's, and yet still give content authors a WYSIWYG visual page editor.  
We call it the [Visual SPA Editor](/docs/visual-spa-editor).

Go ahead and open the Pages app, and open the `react-website` page. This page is actually a React SPA. To make the SPA available for editing, it is pushed to one of the light modules. It's in `light-modules/spa-website-lm/webresources/build` to be exact.

But you can deploy the frontend SPA to any server or run it locally in a development mode too.

## Run the Frontend Locally

Configure your local environment:  

Edit `/spa/react-website/.env`  
```
REACT_APP_MGNL_DEV_DEFAULT_BASE_URL= [YOUR_AUTHOR_URL]
REACT_APP_MGNL_DEV_DAM_BASE_URL= [YOUR_AUTHOR_URL]
```

(Example of YOUR_AUTHOR_URL:  
`https://mycompany-author.magnolia-trials.com`)

In your terminal:

Go to `spa/react-website`
```
npm install
```
```
npm run start
```

> The React dev server starts and opens the app in a browser on port 3000: `http://localhost:3000/`


> The app is running locally, with content from your hosted Magnolia!

(If not, check the browser developer tools for hints, especially the `Console` and `Network` tool.)






## View Published content

So far you have have been working with content on the `Author` instance. The app is giving a preview of how the content will look.

But you'll want your production frontend to display the published content being served from the `Public` instance. To view the published content on your local dev server:

Again, edit `/spa/react-website/.env`, and change 'author' urls to 'public' urls.)  
```
REACT_APP_MGNL_DEV_DEFAULT_BASE_URL= [YOUR_PUBLIC_URL]
REACT_APP_MGNL_DEV_DAM_BASE_URL= [YOUR_PUBLIC_URL]
```

In the terminal, stop the dev server with `Ctrl-C`.
Start it again with
```
npm run start
```

> The app is running locally!

Log into the Magnolia UI running on your `Public` instance. The URL is:
`[YOUR_PUBLIC_URL]/.magnolia/admincentral`

Refresh your browser, the content loads now!

(If it is not working, check the browser developer tools for hints, especially the `Console` and `Network` tool.)


## Local SPA Development

You can make changes to your app and see the results immediately on your local dev server. Let's make a simple, yet obnoxious, change. (Just because we can.)

Edit `/spa/react-website/src/components/Header.js`

Change line 17 to:
```js
<header className="Header"> Look Ma, no hands!
```
Save the file, and then check the app in your browser, notice something?

## Deploy your Production SPA

Once you are satisfied with your SPA, build a production version with: 
```
npm run build
```
And deploy the contents of the `/spa/react-website/build` directory to any web server.


## Deploy your SPA change for the Authors

You can deploy your production app anywhere.

But for authors to see your changes to the app in the Magnolia Page editor, you need to deploy the app in your light module. 

At your terminal, in the `/spa/react-website` directory, run 
```
npm run build-free-trial
```
After the build, check to see that the app was deployed to  
`/light-modules/spa-website-lm/webresources/build`


Now check your changes:
```
git status
```
And push your changes:
```
git add --all
git commit -m "Improved the app header."
git push
```


:::tip Congratulations!
Now you know how to develop the SPA locally - with both preview and production content. And you know how to deploy both your production app, and the app for visual authoring in Magnolia.
:::



## Next Steps / FAQ

Next, read the __magnolia-trials.com__ [FAQ & Next Steps](/docs/getting-started/hosted-faq) to review, and to choose your learning path.

