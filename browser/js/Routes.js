import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Root from './react/Root';
import Home from './react/Home';
import Login from './react/Login';
import Signup from './react/Signup';
import UserList from './react/User/UserList';
import UserDetail from './react/User/UserDetail';
import StoryList from './react/Story/StoryList';
import StoryDetail from './react/Story/StoryDetail';
// import Styleguide from './react/Styleguide';
import Dashboard from './react/Containers/Dashboard';

import { fetchUsers } from './redux/users';
import { fetchStyleguides } from './redux/styleguides';
import { fetchStories, fetchStory } from './redux/stories';
import { retrieveLoggedInUser } from './redux/auth';

/* -----------------    COMPONENT     ------------------ */

const Routes = ({ fetchInitialData, onStoryEnter }) => (
  <Router history={browserHistory}>
    <Route path="/" component={Root} onEnter={fetchInitialData}>
      <IndexRoute component={Home} />
      <Route path="login" component={Login} />
      <Route path="signup" component={Signup} />
      <Route path="users" component={UserList} />
      <Route path="users/:id" component={UserDetail} />
      <Route path="stories" component={StoryList} />
      <Route path="stories/:id" component={StoryDetail} onEnter={onStoryEnter} />
      <Route path="dashboard" component={Dashboard} />

      <Route path="*" component={Home} />
    </Route>
  </Router>
);

/* -----------------    CONTAINER     ------------------ */

const mapProps = null;

const mapDispatch = dispatch => ({
  fetchInitialData: () => {
    dispatch(retrieveLoggedInUser());
    dispatch(fetchUsers());
    dispatch(fetchStories());
    dispatch(fetchStyleguides());
  },
  onStoryEnter: (nextRouterState) => {
    const storyId = nextRouterState.params.id;
    dispatch(fetchStory(storyId));
  }
});

export default connect(mapProps, mapDispatch)(Routes);
