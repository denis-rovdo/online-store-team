import { modelSingleton } from './components/model/Model';
import './style.sass';

// import typescriptLogo from './typescript.svg';
import App from './components/app/App';
import AppController from './components/controller/AppController';
import AppView from './components/view/AppView';
import CartController from './components/controller/CartController';
import ProductController from './components/controller/ProductController';
import NotFoundController from './components/controller/NotFoundController';
import CartView from './components/view/CartView';

export const app = new App(new AppController(new AppView(), modelSingleton), new CartController(new CartView()), new ProductController(), new NotFoundController());

if (window.location.pathname === '/') {
  app.homeController.startPage();
}


const anchors = document.querySelectorAll('.forLink');
anchors.forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(anchor.id)
    urlRoute(e, anchor.id);
  })
})


export const urlRoute = (event: Event, location: string) => {
  event = event || window.event
  event.preventDefault();

  if (event.target === null) throw new Error('Event target :' + event.target);
  let target = event.target;
  window.history.pushState({}, '', target.parentElement.href);
  locationHandler(location);
}

const locationHandler = async (location: string) => {
  console.log('Location : ' + location);
  if (location.length == 0) {
    location = '/';
  }

  const id = window.location.pathname.split('/').at(-1);
  const firstPath = window.location.pathname.split('/').at(-2);
  console.log(id, firstPath)

  // const pathName = window.location.pathname.split('/');
  const page = (window.location.pathname === '/')
    ? '/' : ('/' + firstPath === '/product')
      ? '/product' : window.location.pathname === '/cart'
        ? '/cart' : '/404'
  console.log(page);
  let controller;
  switch (page) {
    case '/':
      controller = app.homeController
      break;
    case `/product`:
      controller = app.productController
      break;
    case '/cart':
      controller = app.cartController
      break;
    case '/404':
      controller = app.notFoundController
      break;
    default:
      alert("What's happened???")
  }

  controller?.startPage();
}