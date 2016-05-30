import {Resume} from '../../components';
export default {

  path : '/',

  async action() {
    return new Promise((resolve, reject) => {
      require.ensure([], require => {
        try {
          const content = require('./index.md');
          resolve({
            title: content.title,
            component: Resume,
            props: content
          });
        } catch (err) {
          reject(err);
        }
      });
    });
  }
};
