
// Fetch the portfolio data from the API
// fetch("https://mocki.io/v1/61a36370-212d-4ac7-baf6-355a14262cb7")

// Fetch the portfolio data from the json file(data downloaded from API)
fetch("api endpoint.json")
  .then((response) => response.json())
  .then((data) => {
    // Check if the API call was successful
    if (!data.is_error) {
      // Display the loan to value
      document.getElementById("loan-to-value").innerHTML =
        data.loan_to_value;

      // Calculate the total portfolio value
      let totalValue = 0;
      data.portfolio.forEach((fund) => {
        totalValue += fund.current_value;
      });
      document.getElementById("total-value").innerHTML = totalValue;

      // Display the marked mutual fund details
      let fundList = "";
      data.portfolio.forEach((fund) => {
        fundList += `
              <div class="col-12 pb-2 mb-1">
                <div class="br-8px px-12px py-2 border-light-purple">
                  <p class="p-14px-600w mb-0 lh-24px">${fund.scheme_name}</p>
                  <div class="row fc--light-purple mx-negative-16px lh-24px">
                    <div
                      class="col-6 d-flex flex-row justify-content-between align-items-center"
                    >
                      <span class="p-10px-500w">Current Value</span>
                      <span class="p-12px-700w fc--sky-blue lato">${fund.current_value}</span>
                    </div>
                    <div
                      class="col-6 d-flex flex-row justify-content-between align-items-center"
                    >
                      <span class="p-10px-500w">Units</span>
                      <span class="p-12px-700w fc--dark-black lato">${fund.units}</span>
                    </div>
                    <div
                      class="col-6 d-flex flex-row justify-content-between align-items-center"
                    >
                      <span class="p-10px-500w">Folio Number</span>
                      <span class="p-12px-700w fc--purple lato">${fund.folio_number}</span>
                    </div>
                    <div
                      class="col-6 d-flex flex-row justify-content-between align-items-center"
                    >
                    <span class="p-10px-500w">Nav</span>
                        <span class="p-12px-700w fc--purple lato">${fund.nav}</span>
                    </div>
                  
                </div>
              </div>
            </div>`;
      });
      document.getElementById("fund-list").innerHTML = fundList;
    } else {

      console.error(data.msg);
    }
  })
  .catch((error) => {
    console.error(error);
  });