/* Challenge 1: Favorite Foods
- Topic: Object Destructuring
1. Edit the faveFoods object so that it contains 
your favorite foods.
2. Destructure the faveFoods object into three consts: 
breakfast, lunch, and supper.
3. Fetch the meals <section> from the DOM.
4. Set the innerHTML content of the meals <section> to a paragraph
that states what your favorite foods are for breakfast, lunch, and supper.
Use a template literal to construct the string.

E.g.
For breakfast, I only like croissants 🥐. For lunch, I love pasta 🍝, 
and for supper I want usually want pizza 🍕.
*/

const faveFoods = {
  breakfast: "eggs 🍳",
  lunch: "hamburger 🍔",
  supper: "wine 🍷",
};
const { breakfast, lunch, supper } = faveFoods;

const meals = document.getElementById("meals");

meals.innerHTML = `For breakfast, I only like ${breakfast}. For lunch, I love ${lunch}, 
and for supper I want usually want ${supper}.`;

// const faveFoods = {
//   breakfast: '',
//   lunch: '',
//   supper: ''
// }

// const myFavFoods = ["croissants", "pasta", "pizza"];

// // 1. Edit the faveFoods object so that it contains
// // your favorite foods.

// let index = 0;
// for (const [key, value] of Object.entries(faveFoods)) {
//   faveFoods[key] = myFavFoods[index];
//   index++;
// }

// const faveFoods = {
//   breakfast: 'pancakes 🥞',
//   lunch: 'pizza 🍕',
//   supper: 'sushi 🍱'
// }

// const displayFaveFoods = ({breakfast, lunch, supper}) => {
//   document.getElementById("meals").innerHTML = `
//   <p>For breakfast, I only like ${breakfast}. For lunch, I love ${lunch}, and for supper I want usually want ${supper}</p>
//   `
// }

// displayFaveFoods(faveFoods)
