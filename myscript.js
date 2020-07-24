// phone amount plus
AmountBtnPlus.addEventListener("click", function(){
    allOne("phoneAmount", "phoneMoney", 1, 1219, 88, 1219);

    })

AmountBtnMinus.addEventListener("click", function(){
    allOneMinus("phoneAmount", "phoneMoney", -1, 1219, -88, -1219);
})

coverBtnPlus.addEventListener("click", function(){
    allOne("coverAmount", "coverMoney", 1, 59, 15, 59);
})

coverBtnMinus.addEventListener("click", function(){
    allOneMinus("coverAmount", "coverMoney", -1, 59, -15, -59);
})


// function allOne(phoneAnt, money, onePlusMinus, perPlusAmount, taxInteger, moneyInteger){
//     const currentAmount = parseFloat(document.getElementById(phoneAnt).value);
//     if(currentAmount <=0){
//         document.getElementById(phoneAnt).value = 1;
//         document.getElementById(money).innerText = perPlusAmount;
//         const subTotalAmount = parseFloat(document.getElementById("subAmount").innerText);
//         document.getElementById("subAmount").innerText = subTotalAmount + moneyInteger;
//         const taxSum = parseFloat(document.getElementById("totalTax").innerText);
//         document.getElementById("totalTax").innerText = taxSum + taxInteger;
//         const total = parseFloat(document.getElementById("total").innerText)
//         document.getElementById("total").innerText = total + taxInteger + moneyInteger;
//     }
//     else if(currentAmount>0){
//         const currentAmountNum = currentAmount+ onePlusMinus;
//         document.getElementById(phoneAnt).value = currentAmountNum;
//         const currentPhoneMoney = parseFloat(document.getElementById(money).innerText);
//         const newPhoneMoney = currentAmountNum *perPlusAmount;
//         document.getElementById(money).innerText = newPhoneMoney;
//         const subTotalAmount = parseFloat(document.getElementById("subAmount").innerText);
//         document.getElementById("subAmount").innerText = subTotalAmount + moneyInteger;
//         const taxSum = parseFloat(document.getElementById("totalTax").innerText);
//         document.getElementById("totalTax").innerText = taxSum + taxInteger;
//         const total = parseFloat(document.getElementById("total").innerText)
//         document.getElementById("total").innerText = total + taxInteger + moneyInteger;
//         }
// }


// function allOneMinus(phoneAnt, money, onePlusMinus, perPlusAmount, taxInteger, moneyInteger){
//     const currentAmount = parseFloat(document.getElementById(phoneAnt).value);
//     if(currentAmount>0){
//         if(currentAmount <=0){
//             document.getElementById(phoneAnt).value = 1;
//             document.getElementById(money).innerText = perPlusAmount;
//             const subTotalAmount = parseFloat(document.getElementById("subAmount").innerText);
//             document.getElementById("subAmount").innerText = subTotalAmount + moneyInteger;
//             const taxSum = parseFloat(document.getElementById("totalTax").innerText);
//             document.getElementById("totalTax").innerText = taxSum + taxInteger;
//             const total = parseFloat(document.getElementById("total").innerText)
//             document.getElementById("total").innerText = total + taxInteger + moneyInteger;
//         }
//         else if(currentAmount>0){
//             const currentAmountNum = currentAmount+ onePlusMinus;
//             document.getElementById(phoneAnt).value = currentAmountNum;
//             const currentPhoneMoney = parseFloat(document.getElementById(money).innerText);
//             const newPhoneMoney = currentAmountNum *perPlusAmount;
//             document.getElementById(money).innerText = newPhoneMoney;
//             const subTotalAmount = parseFloat(document.getElementById("subAmount").innerText);
//             document.getElementById("subAmount").innerText = subTotalAmount + moneyInteger;
//             const taxSum = parseFloat(document.getElementById("totalTax").innerText);
//             document.getElementById("totalTax").innerText = taxSum + taxInteger;
//             const total = parseFloat(document.getElementById("total").innerText)
//             document.getElementById("total").innerText = total + taxInteger + moneyInteger;
//             }
//     }
// }




function allOne(phoneAnt, money, onePlusMinus, perPlusAmount, taxInteger, moneyInteger){
    const currentAmount = parseFloat(document.getElementById(phoneAnt).value);
    if(currentAmount <=0){
        document.getElementById(phoneAnt).value = 1;
        document.getElementById(money).innerText = perPlusAmount;
        const subTotalAmount = parseFloat(document.getElementById("subAmount").innerText);
        document.getElementById("subAmount").innerText = subTotalAmount + moneyInteger;
        const taxSum = parseFloat(document.getElementById("totalTax").innerText);
        document.getElementById("totalTax").innerText = taxSum + taxInteger;
        const total = parseFloat(document.getElementById("total").innerText)
        document.getElementById("total").innerText = total + taxInteger + moneyInteger;
    }
    else if(currentAmount>0){
        const currentAmountNum = currentAmount+ onePlusMinus;
        document.getElementById(phoneAnt).value = currentAmountNum;
        const currentPhoneMoney = parseFloat(document.getElementById(money).innerText);
        const newPhoneMoney = currentAmountNum *perPlusAmount;
        document.getElementById(money).innerText = newPhoneMoney;
        const subTotalAmount = parseFloat(document.getElementById("subAmount").innerText);
        document.getElementById("subAmount").innerText = subTotalAmount + moneyInteger;
        const taxSum = parseFloat(document.getElementById("totalTax").innerText);
        document.getElementById("totalTax").innerText = taxSum + taxInteger;
        const total = parseFloat(document.getElementById("total").innerText)
        document.getElementById("total").innerText = total + taxInteger + moneyInteger;
        }
}


function allOneMinus(phoneAnt, money, onePlusMinus, perPlusAmount, taxInteger, moneyInteger){
    const currentAmount = parseFloat(document.getElementById(phoneAnt).value);
    if(currentAmount>0){
        if(currentAmount <=0){
            document.getElementById(phoneAnt).value = 1;
            document.getElementById(money).innerText = perPlusAmount;
            const subTotalAmount = parseFloat(document.getElementById("subAmount").innerText);
            document.getElementById("subAmount").innerText = subTotalAmount + moneyInteger;
            const taxSum = parseFloat(document.getElementById("totalTax").innerText);
            document.getElementById("totalTax").innerText = taxSum + taxInteger;
            const total = parseFloat(document.getElementById("total").innerText)
            document.getElementById("total").innerText = total + taxInteger + moneyInteger;
        }
        else if(currentAmount>0){
            const currentAmountNum = currentAmount+ onePlusMinus;
            document.getElementById(phoneAnt).value = currentAmountNum;
            const currentPhoneMoney = parseFloat(document.getElementById(money).innerText);
            const newPhoneMoney = currentAmountNum *perPlusAmount;
            document.getElementById(money).innerText = newPhoneMoney;
            const subTotalAmount = parseFloat(document.getElementById("subAmount").innerText);
            document.getElementById("subAmount").innerText = subTotalAmount + moneyInteger;
            const taxSum = parseFloat(document.getElementById("totalTax").innerText);
            document.getElementById("totalTax").innerText = taxSum + taxInteger;
            const total = parseFloat(document.getElementById("total").innerText)
            document.getElementById("total").innerText = total + taxInteger + moneyInteger;
            }
    }
}

const cartItemBtn1 = document.getElementById("cartItem1Btn");
cartItemBtn1.addEventListener("click", function(){
remover("cartItem1");
})

const cartItemBtn2 = document.getElementById("cartItem2Btn");
cartItemBtn2.addEventListener("click", function(){
remover("cartItem2");
})

function remover(item){
    const cartItem2Remove = document.getElementById(item);
cartItem2Remove.style.display = "none";
}
