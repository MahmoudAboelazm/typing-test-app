//// Ideas

let str = "some word";
let arr = [];
let word = [];

// Loop take the string and convert it to an array similar to the words array on the bottom
// You can use split()
for (let i = 0; i < str.length; i++) {
  if (str[i] === " ") {
    arr.push({ word });
    word = [];
  } else {
    word.push({ letter: str[i], done: false });
  }
}
arr.push({ word });
console.log(arr);

// This should be the output
const words = [
  {
    word: [
      { letter: "h", done: false },
      { letter: "h", done: false },
    ],
  },
  {
    word: [
      { letter: "h", done: false },
      { letter: "h", done: false },
    ],
  },
];
export default words;

//// BIG KHAZOOOK HERE //// onkeyDown doesn't work on mobile don't know why >> still looking...
// const handleKeyDown = (e) => {
//   if (e.key === " ") {
//     validateTheWord();
//   }
// };
//// You can show the next words by scrolling, Require some configuration in css and the state
// const resetScrollEffect = (event) => {
//   //var target = event.nativeEvent.target;
//   if (nextWords < currentIndex) {
//     setnextWords(currentIndex + 8);
//     let target = event.target.parentNode.children[1];
//     console.log(target);
//     target.scrollTop += 50;
//   }
// };
