import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Header from './components/Header';
import Action from './components/Action';
import OptionList from './components/OptionList';
import AddOption from './components/AddOption';
import DecisionModal from './components/DecisionModal';

const App = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState();

  const fetchMenuItems = () => {
    axios
      .get('http://localhost:3001/menus')
      .then(response => {
        console.log(response);
        setItems(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(fetchMenuItems, []);

  const handlePick = () => {
    const randomIndex = Math.floor(Math.random() * items.length);
    setSelectedItem(items[randomIndex].name);
  };

  const clearSelectedItem = () => {
    setSelectedItem(undefined);
  };

  const addNewItem = newItemName => {
    axios
      .post('http://localhost:3001/menus', { name: newItemName })
      .then(response => {
        console.log(response);
        fetchMenuItems();
      });
  };

  const removeItem = itemToRemove => {
    axios
      .delete(`http://localhost:3001/menus/${itemToRemove}`)
      .then(response => {
        console.log(response);
        fetchMenuItems();
      });
  };

  const removeAllItems = () => {
    setItems([]);
  };

  return (
    <div>
      <Header />
      <Action hasOptions={items.length > 0} handlePick={handlePick} />
      <OptionList
        handleRemoveAllOptions={removeAllItems}
        handleRemoveOption={removeItem}
        items={items}
      />
      <AddOption addNewOption={addNewItem} />
      <DecisionModal
        selectedOption={selectedItem}
        handleClearSelectedItem={clearSelectedItem}
      />
    </div>
  );
};

export default App;
