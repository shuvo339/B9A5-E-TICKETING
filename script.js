let count = 0;
const seatNumbers = document.getElementsByClassName('seat-btn');
for(const seatNumber of seatNumbers){
    seatNumber.addEventListener('click', function(e){
        count = count+1;
        if(count>4){
            alert('Sorry! You can not buy more than 4 tickets');
            return;
        }
        if(count>=4){
            document.getElementById('coupon-btn').removeAttribute("disabled");
        }
        setValueById('seat-count', count);

        updatedAvailableSeats();
        totalPrice();

        const seatName = seatNumber.innerText;
        const table = document.getElementById('table-container');
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        td.innerText = seatName;
        tr.appendChild(td);
        const td1 = document.createElement('td');
        td1.innerText = 'Economy';
        tr.appendChild(td1);
        const td2 = document.createElement('td');
        td2.innerText = 550;
        tr.appendChild(td2);
       table.appendChild(tr);
       
       e.target.style.backgroundColor = "#1DD100";
       e.target.style.color = "white";
       e.target.setAttribute("disabled", true);
       document.getElementById('next-btn').removeAttribute("disabled");
    })
}

function updatedAvailableSeats(){
    const totalSeatsNumber = getValueById('total-seat');
    const upadatedTotalSeats = totalSeatsNumber -1;
    setValueById('total-seat', upadatedTotalSeats);
}

function totalPrice(){
    const totalPrice = getValueById('total-price');
    const upadatedTotalPrice = totalPrice + 550;
    setValueById('total-price', upadatedTotalPrice);
    setValueById('grand-price', upadatedTotalPrice);
}

function discountedPrice(){
    const totalPrice = getValueById('total-price');
    const couponText = document.getElementById('coupon-text').value;
    if(couponText === 'NEW15'){
       const discountPrice = totalPrice * 0.15;
       setValueById('discount-text', 'Discount Price');
       setValueById('discount-price', `BDT ${discountPrice}`);
       document.getElementById('coupon-btn').parentNode.classList.add('hidden');
       setValueById('grand-price', totalPrice-discountPrice);
    }
    else if(couponText === 'Couple 20'){
       const discountPrice = totalPrice * 0.20;
       setValueById('discount-text', 'Discount Price');
       setValueById('discount-price', `BDT ${discountPrice}`);
       document.getElementById('coupon-btn').parentNode.classList.add('hidden');
       setValueById('grand-price', totalPrice-discountPrice);
    }
    else{
        alert('Invalid Coupon Code');
    }
}

function refresh(){
    for(const seatNumber of seatNumbers){
        window.location.reload(true);
    }
}