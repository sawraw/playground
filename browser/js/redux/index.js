import { combineReducers } from 'redux';
import users from './users';
import stories from './stories';
import styleguides from './styleguides';
import currentUser from './auth';

export default combineReducers({ users, stories, styleguides, currentUser });
