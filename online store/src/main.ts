import './style.sass';

// import typescriptLogo from './typescript.svg';
import AppController from './components/controller/AppController';
import AppView from './components/view/AppView';
import Model from './components/model/Model';

new AppController(new AppView(), new Model());
