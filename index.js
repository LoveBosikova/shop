const firstPrice = +(document.getElementById('firstPrice').textContent);
const secondPrice = +(document.getElementById('secondPrice').textContent);
const thirdPrice = +(document.getElementById('thirdPrice').textContent);
const fourthPrice = +(document.getElementById('fourthPrice').textContent);

let totalPrice =  document.getElementById('totalPrice');

totalPrice.textContent = (firstPrice + secondPrice + thirdPrice + fourthPrice);

let summary = totalPrice.textContent;

let discountPrice = ((Number(summary))*.8);

const countSale = () => {
    totalPrice.textContent = discountPrice.toFixed();
};

