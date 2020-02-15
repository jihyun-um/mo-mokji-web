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

  useEffect(() => {
    axios
      .get(
        'https://my-json-server.typicode.com/jihyun-um/mo-mokji-server/menus'
      )
      .then(response => {
        console.log(response);
        setItems(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [items]);

  const handlePick = () => {
    const randomIndex = Math.floor(Math.random() * items.length);
    setSelectedItem(items[randomIndex]);
  };

  const clearSelectedItem = () => {
    setSelectedItem(undefined);
  };

  const addNewItem = newItem => {
    if (newItem && !items.includes(newItem)) {
      setItems(items.concat(newItem));
    }
  };

  const removeItem = itemToRemove => {
    setItems(items.filter(item => item !== itemToRemove));
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
