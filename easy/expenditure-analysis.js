/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {

  let output = [];
  // console.log(transactions);

  for(let i = 0; i < transactions.length; i++)
  {
    if(output.length == 0)
    {
      output.push({category: transactions[i].category, totalSpent: transactions[i].price});
    }
    else if(output.length > 0){
      for(let j = 0; j < output.length; j++){
        if(output[j].category == transactions[i].category){
          output[j].totalSpent += transactions[i].price;
          break;
        }
        else if( j == (output.length - 1) ){
          output.push({category: transactions[i].category, totalSpent: transactions[i].price});
          break;
        }
      }
    }
    // else{
      // output.push({category: transactions[i].category, totalSpent: transactions[i].price});
      // output[0                                     ]["category"] = transactions[i].category;
      // output[0]["totalSpent"] += transactions[i].price;
    // }
  }
  // console.log(output);
  return output;
}

module.exports = calculateTotalSpentByCategory;

/* 

transaction = {
  itemName: 'atta',
  Category: 'grocery',
  price: 50,
  timestamp: 5PM
}

*/
