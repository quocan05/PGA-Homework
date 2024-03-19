import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { LoginPage } from './modules/auth/pages/LoginPage.tsx'
import { Provider } from 'react-redux'
import store, { persistor } from './modules/redux/store.ts'
import { PersistGate } from 'redux-persist/integration/react'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/routes.tsx'
ReactDOM.createRoot(document.getElementById('root')!).render(
  // <Provider store={store}>
  // </Provider>
  <PersistGate loading={null} persistor={persistor}>
    <RouterProvider router={router} />
  </PersistGate>
)
