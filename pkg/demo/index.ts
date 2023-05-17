import { importTypes } from '@rancher/auto-import';
import { IPlugin } from '@shell/core/types';
// import Routing from './routing';
import Store from './store';

// Init the package
export default function(plugin: IPlugin) {
  // Auto-import model, detail, edit from the folders
  importTypes(plugin);

  // Provide plugin metadata from package.json
  plugin.metadata = require('./package.json');

  // Load a product
  plugin.addProduct(require('./product'));

  // // Add Vuex store
  plugin.addDashboardStore(Store.config.namespace, Store.specifics, Store.config);

  // Add Vue Routes
  // plugin.addRoutes(Routing);
}
