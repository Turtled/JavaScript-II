// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  // GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // NOTES ON THE SOLUTION:

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we can use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  const test1 = firstItem(items, item => `I love my ${item}!`);
  console.log(test1); // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    return `this ${article} is worth a million dollars!`;
  };

  const test2 = firstItem(items, logExorbitantPrice);
  console.log(test2); // "this Pencil is worth a million dollars!"
*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}
//test
getLength([1, 1, 1, 1], (length) => console.log(length));

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length-1]);
}
//test
last(["first", "last"], (lastItem) => console.log(lastItem));

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y);
}
//test
sumNums(1, 1, (int) => console.log(int));

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y);
}
//test
multiplyNums(1, 1, (int) => console.log(int));

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(list.includes(item));
}

//test
contains(1, [2, 1, 5], (doesContain) => console.log(doesContain))

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {

  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.

  let noDuplicates = array.map(item => item);//clone the array since we're not supposed to edit the original

  noDuplicates.forEach(element => {

    let duplicates = array.filter(item => isEquivalent(element, item));//find duplicates

      if(duplicates.length >= 2){//found one or more duplicates, lets delete them

        duplicates.shift();//We want to keep one duplicate, so lets remove one so it doesn't get deleted from array

        //remove duplicates
        duplicates.forEach(item => noDuplicates = noDuplicates.filter(i => i != item));//why is there no simple array.remove(object) method?! Using .filter instead lol
      }

  });

  return cb(noDuplicates);

}

//Disclaimer: I copied this function from Google. I've read through it and understand how it works though. Javascript doesn't have any way to check if an object
//is equal based on the values it contains, so I grabbed this method for it. 
function isEquivalent(object1, object2) {
  // Create arrays of property names
  var object1Props = Object.getOwnPropertyNames(object1);
  var object2Props = Object.getOwnPropertyNames(object2);

  // If number of properties is different,
  // objects are not equivalent
  if (object1Props.length != object2Props.length) {
      return false;
  }

  for (var i = 0; i < object1Props.length; i++) {
      var propName = object1Props[i];

      // If values of same property are not equal,
      // objects are not equivalent
      if (object1[propName] !== object2[propName]) {
          return false;
      }
  }

  // If we made it this far, objects
  // are considered equivalent
  return true;
}

//test
const runnersWithSomeDups = [
  { id: 32, first_name: "Jessey", last_name: "Walhedd", email: "jwalheddv@slashdot.org", shirt_size: "L", company_name: "Trilia", donation: 5 },
  { id: 33, first_name: "Karola", last_name: "Piper", email: "kpiperw@ucsd.edu", shirt_size: "3XL", company_name: "Yombu", donation: 110 },
  { id: 34, first_name: "Marley", last_name: "Mitchenson", email: "mmitchensonx@webeden.co.uk", shirt_size: "M", company_name: "Zoonoodle", donation: 97 },
  { id: 35, first_name: "Marrilee", last_name: "Thrasher", email: "mthrashery@opensource.org", shirt_size: "XL", company_name: "Bluejam", donation: 17 },
  { id: 36, first_name: "Tye", last_name: "Manie", email: "tmaniez@netscape.com", shirt_size: "L", company_name: "Kanoodle", donation: 30 },
  { id: 37, first_name: "Charleen", last_name: "Sheering", email: "csheering10@mit.edu", shirt_size: "3XL", company_name: "Jatri", donation: 262 },
  { id: 37, first_name: "Charleen", last_name: "Sheering", email: "csheering10@mit.edu", shirt_size: "3XL", company_name: "Jatri", donation: 262 },
  { id: 37, first_name: "Charleen", last_name: "Sheering", email: "csheering10@mit.edu", shirt_size: "3XL", company_name: "Jatri", donation: 262 },
  { id: 38, first_name: "Valma", last_name: "Eynaud", email: "veynaud11@archive.org", shirt_size: "XS", company_name: "Jaxbean", donation: 212 },
  { id: 39, first_name: "Dollie", last_name: "McDarmid", email: "dmcdarmid12@tinyurl.com", shirt_size: "S", company_name: "Kayveo", donation: 74 },
  { id: 40, first_name: "Minna", last_name: "Hymas", email: "mhymas13@cornell.edu", shirt_size: "XS", company_name: "Vimbo", donation: 101 },
  { id: 41, first_name: "Jsandye", last_name: "Frend", email: "jfrend14@ca.gov", shirt_size: "XS", company_name: "Latz", donation: 156 },
  { id: 42, first_name: "Yevette", last_name: "Hacket", email: "yhacket15@wp.com", shirt_size: "XL", company_name: "Lazzy", donation: 291 },
  { id: 42, first_name: "Yevette", last_name: "Hacket", email: "yhacket15@wp.com", shirt_size: "XL", company_name: "Lazzy", donation: 291 },
  { id: 42, first_name: "Yevette", last_name: "Hacket", email: "yhacket15@wp.com", shirt_size: "XL", company_name: "Lazzy", donation: 291 },
  { id: 42, first_name: "Yevette", last_name: "Hacket", email: "yhacket15@wp.com", shirt_size: "XL", company_name: "Lazzy", donation: 291 },
  { id: 42, first_name: "Yevette", last_name: "Hacket", email: "yhacket15@wp.com", shirt_size: "XL", company_name: "Lazzy", donation: 291 },
  { id: 43, first_name: "Hank", last_name: "Zebedee", email: "hzebedee16@ezinearticles.com", shirt_size: "L", company_name: "Gigashots", donation: 241 },
  { id: 44, first_name: "Jodie", last_name: "Stawell", email: "jstawell17@yale.edu", shirt_size: "S", company_name: "Jaxspan", donation: 262 },
  { id: 45, first_name: "Falito", last_name: "Karsh", email: "fkarsh18@pcworld.com", shirt_size: "S", company_name: "Mycat", donation: 239 },
  { id: 45, first_name: "Falito", last_name: "Karsh", email: "fkarsh18@pcworld.com", shirt_size: "S", company_name: "Mycat", donation: 239 },
  { id: 45, first_name: "Falito", last_name: "Karsh", email: "fkarsh18@pcworld.com", shirt_size: "S", company_name: "Mycat", donation: 239 },
  { id: 45, first_name: "Falito", last_name: "Karsh", email: "fkarsh18@pcworld.com", shirt_size: "S", company_name: "Mycat", donation: 239 },
  { id: 46, first_name: "Reginauld", last_name: "Purselowe", email: "rpurselowe19@thetimes.co.uk", shirt_size: "L", company_name: "Jabbersphere", donation: 11 },
  { id: 47, first_name: "Vida", last_name: "Tydd", email: "vtydd1a@dropbox.com", shirt_size: "S", company_name: "Quaxo", donation: 55 },
  { id: 48, first_name: "Anderea", last_name: "MacGiolla Pheadair", email: "amacgiollapheadair1b@xing.com", shirt_size: "2XL", company_name: "Kwimbee", donation: 214 },
  { id: 48, first_name: "Anderea", last_name: "MacGiolla Pheadair", email: "amacgiollapheadair1b@xing.com", shirt_size: "2XL", company_name: "Kwimbee", donation: 214 },
  { id: 48, first_name: "Anderea", last_name: "MacGiolla Pheadair", email: "amacgiollapheadair1b@xing.com", shirt_size: "2XL", company_name: "Kwimbee", donation: 214 },
  { id: 48, first_name: "Anderea", last_name: "MacGiolla Pheadair", email: "amacgiollapheadair1b@xing.com", shirt_size: "2XL", company_name: "Kwimbee", donation: 214 },
  { id: 48, first_name: "Anderea", last_name: "MacGiolla Pheadair", email: "amacgiollapheadair1b@xing.com", shirt_size: "2XL", company_name: "Kwimbee", donation: 214 },
  { id: 49, first_name: "Bel", last_name: "Alway", email: "balway1c@ow.ly", shirt_size: "S", company_name: "Voolia", donation: 107 },
  { id: 50, first_name: "Shell", last_name: "Baine", email: "sbaine1d@intel.com", shirt_size: "M", company_name: "Gabtype", donation: 171 },
];

removeDuplicates(runnersWithSomeDups, noDupsArray => console.table(noDupsArray));
