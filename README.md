# Parcel (v2) Treeshaking Sample

https://github.com/parcel-bundler/parcel/tree/v2#entries-sources-targets-environment

## Run

```bash
yarn install

yarn start      # Developer HMR server.
yarn build      # Have parcel create the `/dist` bundle.
yarn serve      # Build and run a simple HTTP server to host the bundled assets.
yarn clean      # Delete bundle and cache.

```

## Error

To see the error, bundle and serve the assets:

```
yarn serve
```

When loading the built page (on http://localhost:5000) the following error will occur:

![error-message](https://user-images.githubusercontent.com/185555/70870576-da6b3c00-1ff9-11ea-9397-a8cb4374f7e6.png)

This seems related to tree-shaking and the module reference [`glamor`](https://github.com/threepointone/glamor).

It appears that tree-shaking is on by default in V2 of parcel, and this is the same error that occurd in V1 of parcel when I turned on tree-shaking.

Frustratingly Glamor is at the core of "hundreds-of-miles" of UI code I've built up, so it's going to be a PITA to rip this thing out...yet tree-shaking, and indeed picking up all the goodness of V2 of Parcel is important.

Any ideas on what's going on here, whether this is a Parcel treeshaking issue, or something else?

Thanks!
