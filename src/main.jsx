import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import { ContextProvider } from './context/index.jsx'

let data = "hello world"
import "number-brm"
createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <ContextProvider>
            <App data={data}/>
        </ContextProvider>
    </BrowserRouter>
)




