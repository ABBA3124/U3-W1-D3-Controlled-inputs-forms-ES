import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './componets/MyNav'
import MyFooter from './componets/MyFooter'
import Welcome from './componets/Welcome'
import AllTheBooks from './componets/AllTheBooks'



function App() {
  return (
    <div className="App">
      <header>
      <MyNav/>
      <Welcome/>
      </header>
      <main>
        <AllTheBooks/>
      </main>
      <MyFooter/>
    </div>
  )
}

export default App
