import 'babel-polyfill';
import 'whatwg-fetch';
import { createApp } from 'react-app';
import store from './store';
import routes from '../routes';

createApp({
  routes,
  context: { store },
  container: document.getElementById('container'),
});

// if (module.hot) {
//   module.hot.accept(() => {
//     createApp({
//       routes,
//       context: { store },
//       container: document.getElementById('container'),
//     });
//   });
// }
