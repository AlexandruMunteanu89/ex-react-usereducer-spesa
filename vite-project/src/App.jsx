function App() {
  const products = [
  { name: 'Mela', price: 0.5 },
  { name: 'Pane', price: 1.2 },
  { name: 'Latte', price: 1.0 },
  { name: 'Pasta', price: 0.7 },
 ];

  return (
    <>
      <h1>La lista dei prodotti</h1>
      <ul>
        {products.map((p, i) => (
          <li key={i}>
            <p>{p.name} ({p.price.toFixed(2)})</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App


//  Milestone 1: Mostrare la lista dei prodotti
// 1. Parti dall’array products fornito:

// Crea un componente che mostra la lista dei prodotti.
// Per ogni prodotto, mostra:
// Nome
// Prezzo

// Obiettivo: Vedere un elenco leggibile di tutti i prodotti con nome e prezzo.