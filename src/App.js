import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './componets/MyNav'
import MyFooter from './componets/MyFooter'
import Welcome from './componets/Welcome'
import AllTheBooks from './componets/AllTheBooks'
import BookList from './componets/BookList'
import fantasy from "./books/fantasy.json"
import history from "./books/history.json"
import horror from "./books/horror.json"
import romance from "./books/romance.json"
import scifi from "./books/scifi.json"


function App() {
  return (
    <div className="App">
      <header>
      <MyNav/>
      <Welcome/>
      </header>
      <main>
      <BookList books={romance} /> 
        {/* <AllTheBooks/> */}
      </main>
      <MyFooter/>
    </div>
  )
}

export default App
