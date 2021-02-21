function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick(p) {
      let input = JSON.parse(document.querySelector('#inputs textarea').value)
      let outBestRes = document.querySelector('#bestRestaurant p')
      let outWorkers = document.querySelector('#workers p')

      let restaurants = {};
      // fill data
      for (const entry of input) {
         let [resName, workers] = entry.split(' - ');
         restaurants[resName] = {};
         restaurants[resName].workers = {};
         workers
            .split(', ')
            .forEach(e => {
               let [wName, salary] = e.split(' ')
               restaurants[resName].workers[wName] = +salary;
            });
         let salaryArr = Object.values(restaurants[resName].workers)
         restaurants[resName].avgSalary = salaryArr.reduce((a, b) => a + b) / salaryArr.length;
         restaurants[resName].maxSalary = Math.max(...salaryArr)
      }

      // find best
      let winner = Object.keys(restaurants)
         .sort((res1, res2) => restaurants[res2].avgSalary - restaurants[res1].avgSalary)[0]

      let workersArr = Object.entries(restaurants[winner].workers)
      let text = '';
      workersArr.forEach(e => text += `Name: ${e[0]} With Salary: ${e[1]} `)
      // output
      outBestRes.textContent = `Name: ${winner} Average Salary: ${restaurants[winner].avgSalary.toFixed(2)} Best Salary: ${restaurants[winner].maxSalary.toFixed(2)}`
      outWorkers.textContent = text;
   }
}