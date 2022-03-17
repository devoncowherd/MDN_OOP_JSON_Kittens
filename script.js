const section = document.querySelector('section');

let para1 = document.createElement('p');
let para2 = document.createElement('p');
let motherInfo = 'The mother cats are called ';
let kittenInfo;
const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json';

fetch(requestURL)
  .then(response => response.text())
  .then(text => displayCatInfo(text))

function displayCatInfo(catString) {
  let totalKittens = 0;
  let maleKittens = 0;

// Add your code here
let catInfo = JSON.parse(catString);
console.log(catInfo);

motherInfo = `The mother cats are called ${catInfo[0].name}, ${catInfo[1].name}, and ${catInfo[2].name}.`;
for (cat of catInfo)
{
    console.log(cat);
    for(kitten of cat.kittens)
    {
        ++totalKittens;
        console.log(totalKittens);
        if(kitten.gender === "m")
        {
            maleKittens+= 1;
            console.log(maleKittens);
        }
    }
}

kittenInfo = `Thanks to these mommy and daddy cats, there are a total of ${totalKittens} kittens! ${maleKittens} of them are males, so that means ${totalKittens - maleKittens} of them are female kittens. UWU`
// Don't edit the code below here!

  para1.textContent = motherInfo;
  para2.textContent = kittenInfo;
}

section.appendChild(para1);
section.appendChild(para2);
    