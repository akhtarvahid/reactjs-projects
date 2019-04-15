import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

// import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import reducers from './reducers';
import PostsShow from './components/posts_show';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
   <BrowserRouter>
    <div>
      <Switch>
      <Route path="/posts/new" exact component={PostsNew} />
      <Route path="/posts/:id" exact component={PostsShow} />
      <Route path="/" exact component={PostsIndex} />
      </Switch>
    </div>
   </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
