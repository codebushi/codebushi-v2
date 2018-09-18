---
title: Progressive Web Apps with React & Preact.js
date: "2018-08-30"
path: "/pwa-with-react-and-preact/"
image: "./img/pwa-react-preact.jpg"
description: "Explore Progressive Web Apps with React.js and build a News Feed PWA using Preact.js and a custom Service Worker with Google's Workbox."
featured: true
tags: ["blog"]
---

Progressive Web Apps (PWA) have come onto the scene in a big way and with more mobile browsers supporting them, they might very well be the future of web applications. A PWA is actually pretty simple, and virtually any website or application can be converted into a baseline Progressive Web App. Here is a <a href="https://developers.google.com/web/progressive-web-apps/checklist" target="_blank">checklist</a> from Google on all the things a website needs in order to be considered a PWA. Basically if you have a website or web application that loads fast, is served over HTTPS, and is responsive for mobile and tablet devices, then you are already most of the way there. You'll just need a `manifest.json` file and a <a href="https://developers.google.com/web/fundamentals/primers/service-workers/" target="_blank">Service Worker</a> JavaScript file.

The `manifest.json` file tells a compatible browser that you have a Progressive Web App and, on certain mobile devices, it will trigger a prompt to add the app to the Home Screen. It also includes information about the icons that are displayed once added to the Home Screen and the name of the application.

A service worker is a bit more complex, but it's also very powerful. It's essentially a JavaScript file that runs in the background and listens for events, even if the website or application is closed. It can do things like cache the website's files for offline access, enable push notifications, and even access the camera of a mobile device. This is what give your PWA superpowers and makes it feel like a native mobile application.

<h4 class="mt-5 mb-3">Progressive Web Apps with React.js and Create React App</h4>

If you use React.js and <a href="https://github.com/facebook/create-react-app" target="_blank">Create React App</a> (CRA) to start your projects, the good news is that the resulting app will be a Progressive Web App by default. Create React App already has everything needed, including the `manifest.json` ( in the `/public` directory ) and a Service Worker file called `service-worker.js` ( handled by `registerServiceWorker.js` ). You'll have to run `yarn build` or `npm run build` and then serve the `/build` folder before seeing them in action.

![React Service Worker](./img/pwa-react-1.jpg)

With the `manifest.json`, you'll need to generate and add the appropriate icons for the wide variety of devices. A great resource for generating a proper `manifest.json` file is <a href="https://app-manifest.firebaseapp.com/" target="_blank">app-manifest.firebaseapp.com</a>.

The Service Worker provided by CRA will provide support for offline mode. This means that it will cache all the files generated by CRA during the build process and store them in the browser's Cache Storage. If you turn off your internet connection. the application will still load!


![React App Cache](./img/pwa-react-2.jpg)

This is, however, the bare minimum required for a PWA. The default `service-worker.js` won't cache any external data or resources and it won't have neat features such as push notifications. You'll probably want to <a href="https://medium.freecodecamp.org/how-to-build-a-pwa-with-create-react-app-and-custom-service-workers-376bd1fdc6d3" target="_blank">register a custom Service Worker</a> if you wish to get the most out your PWA.

<h4 class="mt-5 mb-3">PWAs with Preact.js, Custom Service Workers, and Workbox</h4>

While CRA is a fantastic tool, it doesn't do much for you in terms of code optimization. A Progressive Web App needs to be as fast and performant as possible, and this means smaller JavaScript bundles and code splitting. Enter <a href="https://preactjs.com/" target="_blank">Preact.js</a>, which is a slimmer alternative to React that also has built in support for PWAs. The [Preact CLI](https://github.com/developit/preact-cli) functions much like Create React App and it's just as easy to use.

The Service Worker that Preact CLI generates (called `sw.js`) will cache any generated files for offline use, but what if our web app uses an external API? If we fetch data or images from an external site, then those resources won't be cached by our default Service Worker. We'd need to register our own *custom* Service Worker to enable more robust PWA features.

Here is a <a href="https://medium.com/@applification/service-worker-magic-with-workbox-preact-c9ef35e063ec" target="_blank">wonderful article</a> by Dave Hudson on how to implement a custom Service Worker into Preact.js. If you'd rather skip his post, I've made a repo of his <a href="https://github.com/ChangoMan/Preact-Workbox" target="_blank">finished product here for download</a>. Also included in the repo is the latest version of <a href="https://developers.google.com/web/tools/workbox/" target="_blank">Workbox</a>, which is a set of libraries by Google for PWAs. Workbox makes writing our custom Service Worker much easier and exposes many advanced features for a PWA.

<h4 class="mt-5 mb-3">Building a News Feed PWA using Preact.js</h4>

Starting with the [Preact-Workbox repo](https://github.com/ChangoMan/Preact-Workbox), we'll be creating a super simple Progressive Web App that pulls in the news using this [News API](https://newsapi.org/). We will then add a few simple lines of code into our Service Worker to enable Workbox's offline caching features.

<h4 class="mt-4 mb-4"><a href="https://preactnews.netlify.com/">Preact.js News Feed PWA</a> <small>( <a href="https://github.com/ChangoMan/Preact-PWA-News">view source</a> )</small></h4>

Let's kick things off by cloning the repo and running the dev environment.
```bash
git clone https://github.com/ChangoMan/Preact-Workbox.git preact-demo
cd preact-demo
npm install
npm run dev
# Navigate to http://localhost:8080 in your browser
```

Here you will see the default boilerplate for a Preact app created with the CLI. Let's add some code to make our very basic news feed app. Open up the main CSS file at `src/style/index.css` and replace with the following:

```css
html,
body {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  background: #fafafa;
  font-family: "Helvetica Neue", arial, sans-serif;
  font-weight: 400;
  color: #444;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
}

#app {
  height: 100%;
}

.site-header {
  padding: 2rem 0 1rem;
}

main {
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: max-content;
  grid-auto-flow: row dense;
}

.article a,
.article a:visited {
  text-decoration: none;
  color: inherit;
}

.article img {
  width: 100%;
}

.error {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.alert {
  display: inline-block;
  padding: 15px;
  border-radius: 0.25rem;
}

.alert--error {
  background-color: #f8d7da;
  color: #721c24;
}
```

Under the home component. we'll add the functionality to fetch for the news using the newsapi.org API. If you haven't done so already, sign up for a free account to get your own API key. Open up the file at `/src/routes/home/index.js` and replace with the following.

```jsx
import { h, Component } from "preact";
import style from "./style";

const apiKey = "YOUR_NEWS_API_KEY";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      selectedSource: "techcrunch",
      articles: [],
      sources: []
    };
  }

  componentDidMount() {
    this.updateNews(this.state.selectedSource);
    this.updateSources();
  }

  updateNews = async (source = this.state.selectedSource) => {
    try {
      const res = await fetch(`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`);
      const json = await res.json();

      this.setState(() => ({
        isLoaded: true,
        articles: json.articles,
        selectedSource: source
      }));
    } catch (error) {
      this.setState(() => ({ error }));
    }
  };

  updateSources = async () => {
    try {
      const res = await fetch(`https://newsapi.org/v2/sources?apiKey=${apiKey}`);
      const json = await res.json();

      this.setState(() => ({
        sources: json.sources
      }));
    } catch (error) {
      this.setState(() => ({ error }));
    }
  };

  render() {
    const { error, isLoaded, articles } = this.state;
    if (error) {
      return (
        <div className="error">
          <div className="alert alert--error">Error: {error.message}</div>
        </div>
      );
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className={style.home}>
          <div className="site-header">
            <div className="select">
              <select
                value={this.state.selectedSource}
                onChange={e => {
                  this.updateNews(e.target.value);
                }}>
                {this.state.sources.map(source => {
                  return (
                    <option value={source.id} key={source.id}>
                      {source.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <main>
            {articles.map((article, index) => (
              <div className="article" key={index}>
                <h2>
                  <a href={article.url}>{article.title}</a>
                </h2>
                <img src={article.urlToImage} alt="" />
                <p>{article.description}</p>
              </div>
            ))}
          </main>
        </div>
      );
    }
  }
}
```

Your app should now be getting some news articles, with the default dropdown source being `techcrunch`. If you change the dropdown to a different source, it will pull in a different set of articles. Let's open up our `service-worker.js` file and take a peek.

```javascript
workbox.precaching.precacheAndRoute(self.__precacheManifest || []);
```

The Service Worker uses Workbox to precache any files that will be generated by Preact.js during the build process. This is much like the default behavior provided by CRA mentioned above. However, we also want to detect and cache the news articles fetched by the News API. We'll simply replace the contents with the following:

```javascript
// Default Precache for files generated by Preact.js
workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

// Detect and register any fetch calls using 'https://' and use the Network First Strategy by Workbox
workbox.routing.registerRoute(/(?:https:\/\/.*)/,workbox.strategies.networkFirst());

// Handle any images
workbox.routing.registerRoute(
  // Cache image files
  /.*\.(?:png|jpg|jpeg|svg|gif)/,
  // Use the cache if it's available
  workbox.strategies.cacheFirst({
    // Use a custom cache name
    cacheName: "image-cache",
    plugins: [
      new workbox.expiration.Plugin({
        // Cache only 20 images
        maxEntries: 20,
        // Cache for a maximum of a week
        maxAgeSeconds: 7 * 24 * 60 * 60
      })
    ]
  })
);
```

Using Workbox, we can quickly and easily detect fetch requests and deal with them using <a href="https://developers.google.com/web/tools/workbox/guides/route-requests#handling_a_route_with_a_workbox_strategy" target="_blank">Workbox Strategies</a>. There are also a variety of <a href="https://developers.google.com/web/tools/workbox/guides/common-recipes" target="_blank">Workbox Recipes</a> to help with things like image caching and Google Fonts. With this added, our Progressive Web App is done! It's still very basic, but it will load offline and cache the news articles properly. We can do the final build and preview our app.

```bash
# Build and serve the assets
npm run serve
```

When you `serve` with Preact, it will prompt you to accept some permissions so that it can load over `https`. If you navigate to https://localhost:8080, open up your Chrome inspector and head over to the Application tab. Make sure the `service-worker.js` is active and Workbox is working. You might need to reload the page a couple of times for the caching to kick in.

![Preact Service Worker](./img/pwa-react-3.jpg)

If things don't look right, try clearing the Application's cache under `Clear storage > Clear site data` and reload the page. You can simulate going offline by checking the `Offline` box under Service Workers. The app should still load the Tech Crunch articles even if offline. If you browse to other sources before going offline, those should also be cached and served. Sources that you didn't visit will result in an error if you try selecting them while offline.

To audit your PWA, use Google's <a href="https://developers.google.com/web/tools/lighthouse/" target="_blank">Lighthouse</a> in the Chrome Dev Tools. It will simulate a mobile device and throttle the internet to 3G speeds, eventually giving you some scores and advice for improvement.

![PWA Lighthouse Audit](./img/pwa-react-4.jpg)

You can also [host the app](https://codebushi.com/hosting-your-static-website/) a variety of ways since it's essentially a static website after the build process. Visit your hosted app or the <a href="https://preactnews.netlify.com/" target="_blank">example app</a> using an Android device with Chrome, and you'll see the prompt to add the app to your Home Screen. Apple iOS 11.3 and above will also support Progressive Web Apps, but I'm not sure Safari on mobile will pop up a prompt like Chrome does.

Hopefully this was a good intro into Progressive Web Apps. You can take things further by experimenting with more of Google Workbox's recipes and features, making your PWA even better!

<h4 class="mt-4 mb-4"><a href="https://preactnews.netlify.com/">Preact.js News Feed PWA</a> <small>( <a href="https://github.com/ChangoMan/Preact-PWA-News">view source</a> )</small></h4>