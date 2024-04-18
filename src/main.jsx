import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import Router from './Routes/Router';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import store from './redux/store';
import AuthProvider from '../src/providers/AuthProvider'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster />
    <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <AuthProvider>
        <RouterProvider router={Router} />
      </AuthProvider>
    </Provider>
    </QueryClientProvider>
  </React.StrictMode>
)
