const items = document.querySelector('.items');
items.appendChild(createCustomElement('span', 'loading', 'LOADING...'));

const botaoExcluirProdutos = document.querySelector('.empty-cart');
const totalPrice = document.querySelector('.total-price');
// let soma = 0;
// let subtracao = 0;
let total = 0;

const soma = (valor) => {
  if (!valor) total = 0;
  else if (typeof valor === 'string') total -= Number(valor);
  else { total += valor; }
  totalPrice.innerText = `${total.toFixed(2)}`;
  if (total == 0) totalPrice.innerText = '';
  return total
}

const salvaCarrinho = () => {
  const carrinhoSalvo = document.getElementsByTagName('ol')[0].innerHTML;
  localStorage.setItem('carrinho', carrinhoSalvo);
};
/*
const somaPrice = () => {
  const total = (soma - subtracao);
  totalPrice.innerText = `${total}`;
  if (total === 0) totalPrice.innerText = '';
  return total;
};
*/
const limparCarrinho = () => {
  document.getElementsByTagName('ol')[0].innerHTML = '';
  localStorage.setItem('carrinho', '');
   soma();
};

botaoExcluirProdutos.addEventListener('click', limparCarrinho);

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function cartItemClickListener(event) {
  let valor = event.target.innerText;
  // exclui intem clicado do carrinho
  valor = valor.slice(valor.indexOf('$') + 1);
  soma(valor);
  // const carrinhoDeCompras = document.getElementsByTagName('ol')[0];
  // carrinhoDeCompras.removeChild(event.target);
  event.target.remove();
  salvaCarrinho();
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

function getSkuFromProductItem(item) {
 // item = item.target.parentNode;
  item = item.target.parentNode.querySelector('span.item__sku').innerText;
  // faz uma requição do produto selecionado a API
  fetch(`https://api.mercadolibre.com/items/${item}`)
  .then((response) => response.json())
  .then(function (produtoAdicionado) {
    // separa as informacoes do produto selecionado que serao exibidas ( destruturing object)
    const { id: sku, title: name, price: salePrice } = produtoAdicionado;
    // anexando o produto escolhido dentro do carrinho
    const itemDoCarrinho = document.getElementsByTagName('ol')[0];
    itemDoCarrinho.appendChild(createCartItemElement({ sku, name, salePrice }));
    /* soma += salePrice;
    somaPrice(); */
    soma(salePrice);
    salvaCarrinho();
  });
}

function createProductItemElement({ sku, name, image }) {
  //
  const section = document.createElement('section');
  const span = document.querySelector('.loading');
  //
  section.className = 'item';
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  //
  const botaoItem = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
  botaoItem.addEventListener('click', getSkuFromProductItem);
  section.appendChild(botaoItem);
  items.appendChild(section);
  //
  items.insertBefore(section, span);
  // return items
}

const source = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
//
fetch(source)
// converte a resposta da requisicao em objeto
  .then(response => response.json())
  .then(function (object) {
    // acessando um array dentro do objeto onde contem as informacoes desejadas
    object.results.map(function (product) {
      //  quebrando os dados recebido em informacoes do produto
      const { id: sku, title: name, thumbnail: image } = product;
      // produto --codigo -----nome ---------- foto
      // passando os parametros para a funcao para personalizar
      return createProductItemElement({ sku, name, image });
    });
  });
  if (soma() < 0) total = 0;

window.onload = function onload() {
  /*
  if (document.getElementsByClassName('item').length > 0) {
    document.querySelector('.loading').remove();
  }
  */
  document.getElementsByTagName('ol')[0].innerHTML = localStorage.getItem('carrinho');
  if (localStorage.getItem('carrinho') !== undefined) {
    //let carregaValor = 0;
    const carregaCarrinho = document.getElementsByClassName('cart__item');

    Array.from(carregaCarrinho).forEach(async (item) => {
      item.addEventListener('click', cartItemClickListener);
      let valor = item.innerText;
      valor = Number(valor.slice(valor.indexOf('$') + 1));
      soma(await valor);
      //const valor = item.innerText;
      // carregaValor += Number(valor.slice(valor.indexOf('$') + 1));
    });
   // soma = carregaValor;
   // somaPrice();
  }
  setTimeout(() => {
    document.querySelector('.loading').remove();
  }, 700);
};
//