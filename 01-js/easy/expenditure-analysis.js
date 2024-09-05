/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

// Done By ChatGPT

function calculateTotalSpentByCategory(transactions) {
  const totalsByCategory = {};

  // Iterate through each transaction
  transactions.forEach(transaction => {
      const { category, price } = transaction;

      // If the category is already in the dictionary, add the price to its total
      if (totalsByCategory[category]) {
          totalsByCategory[category] += price;
      } else {
          // Otherwise, create a new entry for this category
          totalsByCategory[category] = price;
      }
  });

  // Convert the dictionary to an array of objects
  const result = Object.keys(totalsByCategory).map(category => ({
      category: category,
      totalSpent: totalsByCategory[category]
  }));

  return result;
}

module.exports = calculateTotalSpentByCategory;

