import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App, { router } from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import { store } from './redux/store.js'
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient();
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';


createRoot(document.getElementById('root')).render(
  
  <QueryClientProvider client={queryClient} > 
  <RouterProvider router={router}/>
  <ReactQueryDevtools initialOpen = {true}/>
  </QueryClientProvider>
  
)
