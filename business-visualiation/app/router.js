import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('companies',{path: '/' },function(){
    this.route('company',{ path: '/:company_id'});
  });

});

export default Router;
