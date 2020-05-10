import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import Action from './components/Action';
import OptionList from './components/OptionList';
import AddOption from './components/AddOption';
import DecisionModal from './components/DecisionModal';

const App = () => {
  const [items, setItems] = useState<string[]>([]);
  const [selectedItem, setSelectedItem] = useState<string>('');

  useEffect(() => {
    const localItems: string | null = localStorage.getItem('items');
    if (localItems != null) {
      setItems(JSON.parse(localItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const handlePick = (): void => {
    const randomIndex: number = Math.floor(Math.random() * items.length);
    setSelectedItem(items[randomIndex]);
  };

  const clearSelectedItem = (): void => {
    setSelectedItem('');
  };

  const addNewItem = (newItem: string): void => {
    if (newItem && !items.includes(newItem)) {
      setItems(items.concat(newItem));
    }
  };

  const removeItem = (itemToRemove: string): void => {
    setItems(items.filter((item) => item !== itemToRemove));
  };

  const removeAllItems = (): void => {
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
