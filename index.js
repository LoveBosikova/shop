const firstPrice = +(document.getElementById('firstPrice').textContent);

const secondPrice = +(document.getElementById('secondPrice').textContent);

const thirdPrice = +(document.getElementById('thirdPrice').textContent);

const fourthPrice = +(document.getElementById('fourthPrice').textContent);

let totalPrice =  document.getElementById('totalPrice');

totalPrice.textContent = (firstPrice + secondPrice + thirdPrice + fourthPrice);

let summary = totalPrice.textContent;
console.log(summary);
console.log(typeof summary);
//здесь саммари-это строка

const countSale = (summary) => {
    console.log(summary);
    console.log(typeof summary); //здесь саммари - PointerEvent 
    
    summary = Number(summary);
    console.log(summary);
    console.log(typeof summary); 
    // а здесь NaN, обьект так не приводится к числу
    
    summary = (summary*.8);
    console.log(summary);
    console.log(typeof summary);

    totalPrice.textContent = summary;
};

const button = document.getElementById("button");

button.addEventListener('click', countSale);
