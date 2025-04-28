//Functions are reusable blocks of code with a single purpose that you can call back on.

//Get players choice of board size

function getBoardSize() {
    const validChoices = ["S", "M", "L"];
    let size;
    while (!validChoices.includes(size)){
        size = prompt("Enter board size (S)mall, (M)edium (L)arge").toUpperCase();
    }
    return size;
}

function getPointsScored(elapsedTime){
    if (elapsedTime < 30) {
        return 100;
    } else if (elapsedTime < 60) {
        return 75
    } else {
        return 25;
    }
}

// returns a score depending on how much time has elapsed.

// This function shows how a business application COULD be structured

function main() {
    let date = new Date();  // today's date
    let sales = getSalesData(date);
    let labor = getLaborCosts(date);
    let budget = getBudget(date);
    let report = generateReport(date, sales, labor, budget);
    sendReport(report);
  }
  
  // Run the main function
  main();
  
  /*--- helper functions ---*/
  
  function getSalesData(forDate) {
    let netSales = getNetSales(forDate);
    let salesTax = computeSalesTax(netSales);
    return {netSales, salesTax};
  }
  
  function getLaborCosts(forDate) {
    // etc.
  }
  
  function getBudget(forDate) {
    // etc.
  }
  
  function generateReport(forDate, dailySales, dailyLabor, budget) {
    // etc.
  }
  
  function sendReport(report) {
    // etc.
  }
  
  // etc.
  
  // A function will not execute until it's called. There isn't a way to "run" getBoardSize however due to "main()" the above function will be called.

  let size, board;

  function initialize() {
    size = getBoardSize();
    board = generateBoard(size);
    renderBoard();
  }

  // functions keep your code DRY (Don't Repeat Yourself) and therefore keep it cleaner and more concise.
  // using correct/accurate names for all functions allows the code to essentially self document, lessering the need for comments like this

  