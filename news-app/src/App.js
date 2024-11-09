import logo from './logo.svg';
import './App.css';
import NewsComponent from './components/wrapComponent/NewsComponent';
import store from './components/store/NewsStore';
import {Provider} from 'react-redux';
import './styles.css';

function App() {
  return (
    <div className="App">  
    <Provider store={store}>
      <NewsComponent/> 
    </Provider>    
    </div>
  );
}

export default App;
