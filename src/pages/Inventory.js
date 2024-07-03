import React, { useState, useEffect } from 'react';

const ShoppingList = () => {
  const [ingredients, setIngredients] = useState(
    JSON.parse(localStorage.getItem('shoppingList')) || []
  );
  const [newIngredientText, setNewIngredientText] = useState('');
  const [newQuantityText, setNewQuantityText] = useState('');

  useEffect(() => {
    // Save to localStorage whenever the ingredients change
    localStorage.setItem('shoppingList', JSON.stringify(ingredients));
  }, [ingredients]);

  const handleAddIngredients = () => {
    const ingredientNames = newIngredientText.split(',')
      .map(name => name.trim())
      .filter(name => name !== '');
    const quantities = newQuantityText.split(',')
      .map(qty => qty.trim())
      .filter(qty => qty !== '');

    // If there are more ingredients than quantities, default the missing quantities to '1'
    const combined = ingredientNames.map((name, index) => ({
      name,
      quantity: quantities[index] || '1',
      checked: false
    }));

    setIngredients(prevIngredients => [...prevIngredients, ...combined]);
    setNewIngredientText('');
    setNewQuantityText('');
  };

  const handleRemoveIngredient = indexToRemove => {
    setIngredients(prevIngredients => prevIngredients.filter((_, index) => index !== indexToRemove));
  };

  const handleToggleChecked = index => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index].checked = !updatedIngredients[index].checked;
    setIngredients(updatedIngredients);
  };

  const handleClearList = () => {
    setIngredients([]);
    localStorage.removeItem('shoppingList');
  };

  const handleSubmit = event => {
    event.preventDefault();
    handleAddIngredients();
  };

  return (
    <div className="shopping-list-container">
      <h1>Inventory / Shopping List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newIngredientText}
          onChange={(e) => setNewIngredientText(e.target.value)}
          placeholder="Ingredients (separated by commas)"
        />
        <input
          type="text"
          value={newQuantityText}
          onChange={(e) => setNewQuantityText(e.target.value)}
          placeholder="Quantities (separated by commas)"
        />
        <button type="submit">Add</button>
        <button type="button" onClick={handleClearList}>Clear</button>
      </form>
      <ul>
        {ingredients.map((item, index) => (
          <li key={index} style={{ textDecoration: item.checked ? 'line-through' : 'none' }}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleToggleChecked(index)}
            />
            {item.name} - {item.quantity}
            <button onClick={() => handleRemoveIngredient(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
