console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
const firstName = "Brandon";

let lastName = "Campbell";

var age = 28;

// Exercise 2

console.log( `Hello, my name is ${firstName} 
${lastName} ,and I am ${age} years old.`)

// Exercise 3

let language = "JavaScript";
let createdYear = "1995";
let isCaseSensitive = true;

console.log(` ${language} is a coding language 
created in the year ${createdYear} and it is case 
sensitive. `)

//Exercise 4
let price = "19.99";
let isOnSale = false;
let salePrecentage = "15%";
let stock = "0";
let inStock = false;
let selectedSize = "M";

console.log(`the shirt is ${price} , we are having a 
sale of ${salePrecentage} the current size selected is 
${selectedSize}. we have ${stock} ${selectedSize}
therfore the sale does not apply to the selected items. `)

//Exercise 5 
let title = "Name of the Wind";
let author = "Patrick Rothfuss";
let pageCount = "722";
let bookmark = "465";
let hasRead = true; 

//lets say this is a Nook or Kindle and we 
// will just have the values print.. 

console.log( ` Welcome Back! 
pick up where you left off. 
  ${title}
  by : ${author}
  pick up on page ${bookmark} of ${pageCount}
  completed?  ${hasRead}
`
)