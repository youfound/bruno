var plans = {
  daily_1: { apy: 50, daily: 0.1388, monthly: 4.1666, yearly: 50 },
  daily_2: { apy: 70, daily: 0.1944, monthly: 5.8333, yearly: 70, },
  daily_3: { apy: 102, daily: 0.2833, monthly: 8.5, yearly: 102, },

  monthly_1: { apy: 15, daily: 0.0416, monthly: 1.25, yearly: 15 },
  monthly_2: { apy: 30, daily: 0.0833, monthly: 2.5, yearly: 30, },
  monthly_3: { apy: 60, daily: 0.1666, monthly: 5, yearly: 60, },

  prestige_plan: { apy: 151.2, daily: 0.42, monthly: 12.6, yearly: 151.2, },


};

  


document.getElementById("numberInput").addEventListener("input", function(){
  var range_input = document.getElementById("rangeInput");
  updateRangeInput(this.value);
  calculateCompoundedValue(document.getElementById("rangeInput"));

});

document.getElementById("rangeInput").addEventListener("input", function(){
  var number_input = document.getElementById("numberInput");
  number_input.value = this.value;

});

function initialize() {
  var selectElement = document.getElementById("mySelect");
  // selectElement.selectedIndex = 0;
  var initialAmountElement = document.getElementById("rangeInput");
  initialAmountElement.value = 100;
  updateValue();
  calculateCompoundedValue(100); // Set default value for calculation
}

function updateValue() {
  var selectElement = document.getElementById("mySelect");
  var selectedValue = selectElement.value;
  var displayElement = document.getElementById("selectedValueDisplay");
  var dailyValueElement = document.getElementById("dailyValueDisplay");
  var monthlyValueElement = document.getElementById("monthlyValueDisplay");
  var compoundedValueElement = document.getElementById("compoundedValueDisplay");
  
  displayElement.innerHTML = "<span>APY ~</span> "+ plans[selectedValue]?.apy +"%";

  calculateCompoundedValue("");

}

function updateTextInput(val) {
  document.getElementById("numberInput").value = val;
}

function updateRangeInput(val) {
  if (val > 100000) {
      val = 100000;
  } else if (val < 1) {
      val = 1;
  }
  document.getElementById("rangeInput").value = val;
}

function calculateCompoundedValue(input) {
  var initialAmountElement = document.getElementById("rangeInput");
  var compoundedValueElement = document.getElementById("compoundedValueDisplay");
  var monthlyValueElement = document.getElementById("monthlyValueDisplay");
  var dailyValueElement = document.getElementById("dailyValueDisplay");
  var selectElement = document.getElementById("mySelect");

  var selectedValue = plans[selectElement.value];  
  var initialAmount = parseFloat(initialAmountElement.value);

  // if (!isNaN(initialAmount) && initialAmount >= 0) {
  //   var result = ((selectedValue / 100 ) * initialAmount * durations) + ( selectElement.value > 2 ? 0 : initialAmount );
  //   console.log(result.toFixed(2));

    
  //   if( selectElement.value > 2 ) {
  //     dailyValueElement.innerHTML = '<div class="monthly-income">Daily Income: </div>' +
  //           '<div class="monthly-income-value">' +
  //           '<span>' + result.toFixed(2) + '</span>' +
  //           ' USD ' +
  //           '(' +
  //           '$' +
  //           (result.toFixed(2) / 13.299).toFixed(2) +
  //           ')' +
  //           '</div>';

  //     monthlyValueElement.innerHTML = '';
      
      
  //   } else {
      

  //     monthlyValueElement.innerHTML = '<div class="monthly-income">Monthly Income: </div>' +
  //           '<div class="monthly-income-value">' +
  //           '<span>' + result.toFixed(2) + '</span>' +
  //           ' USD ' +
  //           '(' +
  //           '$' +
  //           (result.toFixed(2) / 13.299).toFixed(2) +
  //           ')' +
  //           '</div>';

  //           dailyValueElement.innerHTML = '';
  //           console.log('dailyValueElement', dailyValueElement );
  //   }
  // } else {
  //   monthlyValueElement.innerHTML = '';
  //   dailyValueElement.innerHTML = '';
  //   compoundedValueElement.innerText = "Please enter a valid initial amount.";
  // }

  
  if (!isNaN(initialAmount) && initialAmount >= 0) {
      var apy = selectedValue.apy;
      
      dailyValueElement.innerHTML = 
        `<div class="monthly-income">Daily Income: </div>
          <div class="monthly-income-value">
          <span> ${ ((selectedValue.daily / 100) * initialAmount).toFixed(4) } </span>USD          
        </div>`;       

      monthlyValueElement.innerHTML = 
        `<div class="monthly-income">Monthly Income: </div>
          <div class="monthly-income-value">
          <span> ${ ((selectedValue.monthly / 100) * initialAmount).toFixed(4) } </span>USD          
        </div>`;

      compoundedValueElement.innerHTML = 
        `<div class="monthly-income">Yearly Income: </div>
          <div class="monthly-income-value">
          <span> ${ ((selectedValue.yearly / 100) * initialAmount).toFixed(4) } </span>USD          
        </div>`;

  } else {
    dailyValueElement.innerHTML = '';
    monthlyValueElement.innerHTML = '';
    compoundedValueElement.innerText = "Please enter a valid initial amount.";
  }
  



}


document.addEventListener("DOMContentLoaded", function () {
  initialize(); // Initialize on DOM load
});

document.getElementById("mySelect").addEventListener("change", updateValue);