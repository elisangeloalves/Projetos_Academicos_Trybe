import {
  FILTER_BY_NAME,
  FILTER_BY_NUMERIC_VALUES,
  FILTER_BY_COLUMN, FILTER_BY_COMPARISON,
  FILTER_BY_VALUE,
  SELECTED_COLUMN,
  SELECTED_RADIO,
} from './actions';

const selection = {
  column: '',
  comparison: '',
  value: 0,
};

// const initialState = {
//   filters: {
//     filterByName: { name: '' },
//   },
//   filterByNumericValues: [],
// };

/*

[HA][Requisito 2][Erro de interpretacao do README]
Neste codigo acima: as intrucoes do projeto nos induz ao erro grandemente pois
pede obrigatoriamente colocquemos a chave filterByName: { name: ''}
dentro de uma outra chave 'filters: ' o que me tomou 2 dias de sono noite
de sono tentando encontrar o erro que o teste acusa e gracas ao
PR do Felipe consegui debugar meu componente e encontrar o erro.

*/

const initialState = {
  filterByName: { name: '' },
  order: {
    column: 'Name',
    sort: 'ASD',
  },
  filterByNumericValues: [],
  currentFilter: selection,
};

const filterNAme = (state, action) => (
  {
    ...state,
    filterByName: {
      name: action.payload.name,
    },
  }
);

const filterNumericValue = (state) => (
  {
    ...state,
    filterByNumericValues: [
      ...state.filterByNumericValues, {
        ...state.currentFilter,
      },
    ],
    currentFilter: Object.assign(selection),
  }
);

const filterColumn = (state, action) => (
  {
    ...state,
    currentFilter: {
      ...state.currentFilter,
      column: action.payload,
    },
  }
);

const filterComparison = (state, action) => (
  {
    ...state,
    currentFilter: {
      ...state.currentFilter,
      comparison: action.payload,
    },
  }
);

const filterValue = (state, action) => (
  {
    ...state,
    currentFilter: {
      ...state.currentFilter,
      value: action.payload,
    },
  }
);

const selectColumn = (state, action) => (
  {
    ...state,
    order: {
      ...state.order,
      column: action.payload,
    },
  }
);

const selectRadio = (state, action) => (
  {
    ...state,
    order: {
      ...state.order,
      sort: action.payload,
    },
  }
);

// const sortedColumn = (state. action) => (
//   {
//     ...state,

//   }
// )


function filterReducer(state = initialState, action) {
  // Refatoração do codigo necessaria para a funcao passar no CC pelo numero de linhas
  switch (action.type) {
    case FILTER_BY_NAME:
      return filterNAme(state, action);

    case FILTER_BY_NUMERIC_VALUES:
      return filterNumericValue(state);

    case FILTER_BY_COLUMN:
      return filterColumn(state, action);

    case FILTER_BY_COMPARISON:
      return filterComparison(state, action);

    case FILTER_BY_VALUE:
      return filterValue(state, action);

    case SELECTED_COLUMN:
      return selectColumn(state, action);

    case SELECTED_RADIO:
      return selectRadio(state, action);

    default:
      return state;
  }
}

export default filterReducer;

// esquema de reducer montado tendo como base os exercicios e conteudo do course
