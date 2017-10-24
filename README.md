# Redux Promise

A basic example app showing how you can reduce boilerplate of your redux logic by using a middleware which can handle promises.

```npm i```
```npm start```

## The redux logic has been implemented twice.

### Traditional
src/store/appTraditional
Logic showing how to handle your redux logic in the more traditional way

### Promise
src/store/appPromise
Logic showing how to handle your redux logic with promise middleware.

## Change implementation
To switch the implementation, change which file is being imported

src/containers/index.js
```import { actions as appActions } from '../../store/[appPromise|appTraditional]'```

src/store/createStore.js
```import { store as app } from './[appPromise|appTraditional]'```
