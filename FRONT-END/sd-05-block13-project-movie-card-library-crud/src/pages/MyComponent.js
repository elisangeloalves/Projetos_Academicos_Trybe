// async function a() {
//   const myObject = {
//     method: 'GET',
//   };
//  return await fetch('https://api.mercadolibre.com/sites/MLB/categories', myObject)
//     .then(response => response.json())
//     .then(data => console.log(data))
// }
// a();
import React from 'react';

const porCategoria = "https://api.mercadolibre.com/sites/MLB/categories";
const porTermo = "https://api.mercadolibre.com/sites/MLB/search?category=MLB1055&q=Motorola"

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }
  componentDidMount() {
    fetch(porTermo)
      .then(res => res.json())
      .then(
        (item) => {
          console.log(item.results);
          this.setState({
            isLoaded: true,
            items: item.results
          });
        },
        // Nota: É importante lidar com os erros aqui
        // em vez de um bloco catch() para não recebermos
        // exceções de erros dos componentes.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    console.log(items);
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.name}>
              {item.name}
              {item.title} {`R$ ${(item.price).toFixed(2)}`}
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default MyComponent