import Root from './containers/Root';
import Home from './containers/Home';
import About from './containers/About';
import Game from './containers/Game';
import Create from './containers/Create';
import CreateResult from './containers/CreateResult';
import Highscores from './containers/Highscores';

export { hashHistory as history } from 'react-router';

export const routes = {
  path: '/',
  component: Root,
  indexRoute: { component: Home },
  childRoutes: [
    { path: 'play', component: Game },
    { path: 'create', component: Create },
    { path: 'create-result', component: CreateResult },
    { path: 'highscores', component: Highscores },
    { path: 'about', component: About },
  ],
};
