import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import RecipeContext from '../context/RecipeContext';

const verifyChecked = (setState, element) => {
  // fonte https://qastack.com.br/programming/5541387/check-if-all-checkboxes-are-selected
  if (document.querySelector(`label[for="${element}"]`).style.textDecoration === 'line-through') {
    document.querySelector(`label[for="${element}"]`).style.textDecoration = null;
  } else {
    document.querySelector(`label[for="${element}"]`).style.textDecoration = 'line-through';
  }
  if (document.querySelectorAll('input[name="cname"]:checked').length === document.querySelectorAll('input[name="cname"]').length) {
    setState(true);
    document.getElementById('btn').disabled = false;
  } else {
    setState(false);
    document.getElementById('btn').disabled = true;
  }
};

/* function localStore() {
const storage = JSON.parse(localStorage.getItem('InProgressRecipes'));
localStorage.
setItem('InProgressRecipes', JSON.stringify({ cocktails: { [idRecipe]:
[...state.storage, ing] } }));
} */

function IngredientOngoing(props) {
  const { ingredient, measure, idRecipe } = props;
  const { setDone } = useContext(RecipeContext);
  return (
    <div className="ingredients-details">
      <h4>Ingredients</h4>
      <div>
        {ingredient.map((item, i) => (
          <div data-testid={`${i}-ingredient-step`}>
            <input type="checkbox" id={item} name="cname" value={`${item} : ${measure[i]}`} onChange={() => verifyChecked(setDone, item, idRecipe, item)} />
            {/* ideia de checar o check https://stackoverflow.com/questions/30975459/add-strikethrough-to-checked-checkbox */}
            <label htmlFor={item}>{`${item} : ${measure[i]}`}</label>
          </div>
          ))}
      </div>
    </div>
  );
}

export default IngredientOngoing;

IngredientOngoing.propTypes = {
  ingredient: PropTypes.string.isRequired,
  measure: PropTypes.string.isRequired,
  idRecipe: PropTypes.number.isRequired,
};
