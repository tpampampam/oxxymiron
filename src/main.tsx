import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store/store.ts'

import '../src/styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
<Provider store={store}>
  <Router>
    <App />
  </Router> 
</Provider>
)

// npm run dev  запуск прилож
//npx json-server db.json --port 8000  запуск сервера




// разобрать формулу