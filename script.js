const seatNumbers = document.getElementsByClassName('seat-btn');
for(const seatNumber of seatNumbers){
    seatNumber.addEventListener('click', function(e){
        totalSeatsCount(seatNumber);
        
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
    
    })
}

function updatedAvailableSeats(){
    const totalSeats = document.getElementById('total-seat').innerText;
    const totalSeatsNumber = parseInt(totalSeats);
    const upadatedTotalSeats = totalSeatsNumber -1;
    setValueById('total-seat', upadatedTotalSeats);
}

function totalSeatsCount(seatId){
    const initialCountText = document.getElementById('seat-count').innerText;
    const initialCount = parseInt(initialCountText);
    const upadatedCount = initialCount + 1;
    if(upadatedCount>4){
        alert('You can not buy more than 4 tickets');
        seatId.setAttribute(disabled, true);
        return;
    }
    setValueById('seat-count', upadatedCount);
}

function totalPrice(){
    const totalPriceText = document.getElementById('total-price').innerText;
    const totalPrice = parseInt(totalPriceText);
    const upadatedTotalPrice = totalPrice + 550;
    setValueById('total-price', upadatedTotalPrice);
    setValueById('grand-price', upadatedTotalPrice);
}

function discountedPrice(){
    const totalPriceText = document.getElementById('total-price').innerText;
    const totalPrice = parseInt(totalPriceText);
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
