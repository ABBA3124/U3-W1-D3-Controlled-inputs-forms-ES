import React, { useState, useEffect } from "react"
import { Card, Button, Container, Row, Col } from "react-bootstrap"
import fantasy from "../books/fantasy.json"
import history from "../books/history.json"
import horror from "../books/horror.json"
import romance from "../books/romance.json"
import scifi from "../books/scifi.json"
import "../CSS/AllTheBooks.css"
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'


function AllTheBooks() {
    const [books, setBooks] = useState({
      All: [], 
      fantasy: fantasy,
      history: history,
      horror: horror,
      romance: romance,
      scifi: scifi
    })
  
    const [filter, setFilter] = useState("All")
  
    useEffect(() => {
      setBooks(prevBooks => ({ ...prevBooks, All: [...fantasy, ...history, ...horror, ...romance, ...scifi] }))
    }, [])
  
    return (
      <Container>
        <Row>
          <Col>
            <select className="form-select form-select-lg mb-3" onChange={d => setFilter(d.target.value)} value={filter}>
              <option value="All">Tutti i Libri</option>
              <option value="fantasy">Fantasy</option>
              <option value="history">Storia</option>
              <option value="horror">Horror</option>
              <option value="romance">Romanzo</option>
              <option value="scifi">Fantascienza</option>
            </select>
          </Col>
        </Row>
        <Row>
          {books[filter].map((book, index) => (
            <Col key={index} sm={12} md={6} lg={4} xl={3} className="ciao">
              <Card className="mb-4 card-container">
                {/* <Card.Img variant="top" src={book.img} /> */}
                <LazyLoadImage
              alt={book.title}
              src={book.img}
              variant="top"
            />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>{`Prezzo: ${book.price}€`}</Card.Text>
                  <Card.Text>{`Categoria: ${book.category}`}</Card.Text>
                  <Button variant="primary">Scopri Di Più 🔍</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    )
}  

export default AllTheBooks

// METODO USATO PRECEDENTEMENTE

// function AllTheBooks() {
//   const [books, setBooks] = useState([])
//   //provo a creare un menu a tendina che permetta di filtrare i libri in base alla categoria
//   const [filter, setFilter] = useState("All")

//   useEffect(() => {
//     // tutti i libri in un unico array
//     // vorrei provare ad aggiungere i libri in base alla categoria
//     setBooks([...fantasy, ...history, ...horror, ...romance, ...scifi])
//   }, [])

//   return (
//     <Container>
//       <Row>
//         <Col>
//           <select className="form-select form-select-lg mb-3" onChange={d => setFilter(d.target.value)} value={filter}>
//             <option value="All">Tutti i Libri</option>
//             <option value="fantasy">Fantasy</option>
//             <option value="history">Storia</option>
//             <option value="horror">Horror</option>
//             <option value="romance">Romanzo</option>
//             <option value="scifi">Fantascienza </option>
//           </select>
//         </Col>
//       </Row>
//       <Row>
//         {books.filter(book => filter === 'All' || book.category === filter).map((book, index) => (
//           <Col key={index} sm={12} md={6} lg={4} xl={3}>
//             <Card className="mb-4 card-container">
//               <Card.Img variant="top" src={book.img} />
//               <Card.Body>
//                 <Card.Title>{book.title}</Card.Title>
//                 <Card.Text>{`Price: ${book.price}€`}</Card.Text>
//                 <Card.Text>{`Category: ${book.category}`}</Card.Text>
//                 <Button variant="primary">Scopri Di Più 🔍</Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   )
// }  
      

