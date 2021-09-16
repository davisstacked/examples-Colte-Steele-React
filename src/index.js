import { choice, remove } from "./helpers";
import foodsArr from "./foods";

  let fruitChosen = choice(foodsArr);
  console.log(`I'd like one ${fruitChosen}, please.`);
  console.log(`Here you go: ${fruitChosen}`);
  console.log("Delicious! May I have another?")
  let remaining = remove(foodsArr, fruitChosen);
  console.log(`I'm sorry, we're all out. We have ${remaining.length} left`)


