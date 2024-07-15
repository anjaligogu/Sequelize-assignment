const { getBooksByAuthor, getOverdueLoans } = require("./queries");

const testQueries = async () => {
  await getBooksByAuthor(1);
  await getOverdueLoans();
};

testQueries();
