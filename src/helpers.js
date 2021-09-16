const choice = items => {
  const randomItem = items[Math.floor(Math.random * items.length)];
  return randomItem;
};

const remove = (items, item) => {
  for (let i = 0; i < items.length; i++) {
    if (items[i] === item) {
      // returns the new array without the selected item
      return [...items.slice(0, i), ...items.slice(i + 1)];
    }
  }
}

export { choice, remove };