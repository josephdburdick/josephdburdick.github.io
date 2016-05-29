import {Content} from '../../components';
export default {

  path : '/',

  async action() {
    return new Promise((resolve, reject) => {
      require.ensure([], require => {
        try {
          const content = require('./index.md');

          resolve({
            title: content.title,
            name: content.name,
            accounts: content.accounts,
            component: Content,
            props: content
          });
        } catch (err) {
          reject(err);
        }
      });
    });
  }
};
