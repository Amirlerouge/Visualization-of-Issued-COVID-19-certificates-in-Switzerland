const url =  "https://www.covid19.admin.ch/api/data/20211118-81oyvung/sources/COVID19Certificates.json";
const ctx = document.getElementById('myChart').getContext('2d');

let promise = fetch(url);
let dates = [];
let sumTotal = [];
let recovered = [];
let vaccinated = [];
let tested = [];


// Sends an asynchronous HTTP request to the target url
fetch(url)
  .then((response) => response.json() )
  .then(value => {
   //console.log(value);
    setDate(value);
    getTotal(value);
    getRecovered(value);
    getVaccinated(value);
    getTested(value);
  });





function getTotal(object){
    for (const type_variant in object) {
        if (object[type_variant].type_variant == "all"){
            //console.log(object[type_variant].type_variant + " total = " + object[type_variant].sumTotal);
            sumTotal.push(object[type_variant].sumTotal);
        }
        
    }

  
}
function getRecovered (object){
    for (const items in object) {
        if (object[items].type_variant == "recovered"){
            recovered.push(object[items].sumTotal);
            //console.log(object[items].type_variant);
        }
        
    }

  
}
function getVaccinated (object){
    for (const items in object) {
        if (object[items].type_variant == "vaccinated"){
            vaccinated.push(object[items].sumTotal);
            console.log(object[items].type_variant);
        }
        
    }

  
}

function getTested (object){
    for (const items in object) {
        if (object[items].type_variant == "tested"){
            tested.push(object[items].sumTotal);
            //console.log(object[items].type_variant);
        }
        
    }

  
}
function setDate(object){
    let local;
    for (const date in object) {
        if (object[date].date == local){
            continue;

        }
        local = object[date].date;
        //console.log(`${object[date].date}`);
        dates.push(local);

      }

      //console.log(dates);
    
}


const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: dates,
        datasets: [{
            label: 'Recovered',
            data: recovered,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',

            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',

            ],
            borderWidth: 1
        },
        {
            label: 'Tested',
            data: tested,
            backgroundColor: [
              
                'rgba(58, 173, 255, 0.4)',
                
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
          
            ],
            borderWidth: 1
        },
        {
            label: 'Vaccinated',
            data: vaccinated,
            backgroundColor: [
              
                'rgba(255, 230, 99, 0.4)',

            ],
            borderColor: [

                'rgba(255, 206, 86, 1)',

            ],
            borderWidth: 1
        },{
            label: 'Total (click me)',
            data: sumTotal,
            backgroundColor: [

                'rgba(79, 200, 200, 0.4)',

            ],
            borderColor: [

                'rgba(75, 192, 192, 1)',

            ],
            borderWidth: 1
        },
    
    ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
    
});

