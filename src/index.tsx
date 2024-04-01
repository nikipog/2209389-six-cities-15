import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.tsx';
import './polyfills';
import reviewsMock from './mocks/reviews-mock.ts';
import { Provider } from 'react-redux';
import { store } from './store/index.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App reviews={reviewsMock}/>
    </Provider>
  </React.StrictMode>
);
