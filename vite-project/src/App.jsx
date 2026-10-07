import { useState } from "react";

function App() {
  const products = [
  { name: 'Mela', price: 0.5 },
  { name: 'Pane', price: 1.2 },
  { name: 'Latte', price: 1.0 },
  { name: 'Pasta', price: 0.7 },
 ];

const [addedProducts, setAddedProducts] = useState([]);

const updateProductQuantity = (name, quantity) => {
  if(quantity < 1 || isNaN(quantity)){
    return;
  }
  setAddedProducts(curr => 
    curr.map(p => p.name === name ? {...p, quantity} : p));

    }
  


const addToCart = product => {
  const addedProduct = addedProducts.find(p => p.name === product.name);
  if(addedProduct){
    updateProductQuantity(addedProduct.name, addedProduct.quantity + 1)
    return;
  }
  
  setAddedProducts(curr => [...curr, {
    ...product,
    quantity: 1
  }]);
}

const removeFromCart = product => {
  setAddedProducts(curr => curr.filter(p => p.name !== product.name));
}

const totalToPay = addedProducts.reduce(
  (acc, p) => acc + (p.price * p.quantity), 
0);

  return (
    <>
      <h1>La lista dei prodotti</h1>
      <ul>
        {products.map((p, i) => (
          <li key={i}>
            <p>{p.name} ({p.price.toFixed(2)}€)</p>
            <button onClick={() => addToCart(p)}>Aggiungi al carrello</button>
          </li>
        ))}
      </ul>
      {addedProducts.length > 0 && (<>
        <h2>Carrello</h2>
        <ul>
          {addedProducts.map((p, i) => (
            <li key={i}>
              <p>
                <input type="number" value={p.quantity} onChange={
                  e => updateProductQuantity(p.name, parseInt(e.target.value))
                } />
                <span>x {p.name} ({p.price.toFixed(2)}€)</span>
              </p>
              <button onClick={() => removeFromCart(p)}>Rimovi dal carrello</button>
            </li>
          ))}
        </ul>
        <h3>Totale da pagare: {totalToPay.toFixed(2)}€</h3>
        </>)}
    </>
  )
}

export default App


//   Milestone 3: Modificare il carrello
// Al click successivo del bottone "Aggiungi al carrello", se il prodotto è già presente:
// Usa una funzione updateProductQuantity per incrementare la proprietà quantity del prodotto esistente.
// Per ogni prodotto nel carrello, aggiungi un bottone "Rimuovi dal carrello":
// Al click, usa una funzione removeFromCart per rimuovere il prodotto dal carrello.
// Sotto alla lista del carrello, mostra il totale da pagare:
// Calcola il totale moltiplicando il prezzo per la quantità di ogni prodotto e somma tutti i risultati.
// Obiettivo: Gestire l’aggiunta, la rimozione e il calcolo del totale del carrello in modo dinamico.