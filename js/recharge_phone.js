
window.onload = Recharge();
function Recharge(){
    document.querySelector("#Recharge").innerHTML = `
    <nav class="tm-nav">
        <ul>
            <li >
                <a onclick = "AcceptRecharge()"><span class="tm-nav-deco"></span>Tiếp tục</a>
            </li>
        </ul>
    </nav>
<div class="center">
    <div style="color: black;" class="column-recharge">
        <p style="color: black;">Số tài khoản</p>
        <p class="center" style=" font-weight:bold; color: black">18110000028436</p>
        <p style="color: black;">Số dư</p>
        <p class="alignright" style=" font-weight:bold; color : #EE2E2E">2,000,000 VND</p>
    </div>

    <div class="column-recharge" style="width: 100%;">
        <p>Số điện thoại được nạp</p>
        <div>
        <input type="text" id="input-phone-number" name="firstname" placeholder="Số điện thoại"> 
        
        <button class = "button" style="float: right;" onclick = "changePhoneNumber(1)">Phúc</button>
        <button class = "button" style="float: right;" onclick = "changePhoneNumber(2)">Khoa</button>
        <button class = "button" style="float: right;" onclick = "changePhoneNumber(3)">Minh</button>
        <button class = "button" style="float: right;" onclick = "changePhoneNumber(4)">Khiêm</button>
        
        <p class="center">ICON</p>
        </div>
        <p style = "color : #EE2E2E">Bỏ trống nếu nạp cho chính mình</p>
        <p>Mệnh giá</p>
        <div>
            <p onclick = "changeColor(1)" id = "changeColor1" class="recharge-money" style="float: left;">10.000</p>
            <p onclick = "changeColor(3)" id = "changeColor3" class="recharge-money" style="float: right;">30.000</p>
            <p onclick = "changeColor(2)" id = "changeColor2" class="recharge-money" style="float: center;">20.000</p>
            
            
        </div>
        <div>
            <p onclick = "changeColor(4)" id = "changeColor4" class="recharge-money" style="float: left;">50.000</p>
            <p onclick = "changeColor(6)" id = "changeColor6" class="recharge-money" style="float: right;">200.000</p>
            <p onclick = "changeColor(5)" id = "changeColor5" class="recharge-money" style="float: center;">100.000</p>
        </div>
        <div>
            <p onclick = "changeColor(7)" id = "changeColor7" class="recharge-money" style="float: left;">300.000</p>
            <p onclick = "changeColor(8)" id = "changeColor8" class="recharge-money" style="float: center;">500.000</p>
        </div>
    
    </p>
</div>
            `
}

function AcceptRecharge(){
    document.querySelector("#Recharge").innerHTML =`
    <nav class="tm-nav">
        <ul>
            <li >
                <a href = "home.html"><span class="tm-nav-deco"></span>Tiếp tục</a>
            </li>
            <li >
                <a onclick = "Recharge()"><span class="tm-nav-deco"></span>Trở lại</a>
            </li>
        </ul>
    </nav>
    <div class="center">
        <div class="name-column">Xác nhận</div>
        <div style="color: #C4C4C4; height: 340px;" class="column-history">
           
        <div style="color: #C4C4C4;" class="column-recharge-phone">
            <div style="clear : both;">
                <p class="alignleft" >Tài khoản nguồn</p>
                <p class="alignright">18110000028436</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-recharge-phone">
            <div style="clear : both;">
                <p class="alignleft">Số điện thoại</p>
                <p class="alignright">0914080804</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-recharge-phone">
            <div style="clear : both;">
                <p class="alignleft">Mệnh giá</p>
                <p class="alignright">10,000 VND</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-recharge-phone">
            <div style="clear : both;">
                <p class="alignleft">Phí</p>
                <p class="alignright">0 VND</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-recharge-phone">
            <div style="clear : both;">
                <p class="alignleft">VAT</p>
                <p class="alignright">0 VND</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-recharge-phone">
            <div style="clear : both;">
                <p class="alignleft">Chiết khấu</p>
                <p class="alignright">500 VND</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-recharge-phone">
            <div style="clear : both;">
                <p class="alignleft">Thanh toán</p>
                <p class="alignright">9,500 VND</p>
            </div>
        </div>
       
       
        </div>
        
    </div>`
}

function changeColor(id){
    for(let i = 1;i<9;i++){ 
        document.getElementById('changeColor'+i).style.backgroundColor="#ECECF6";
    }
    document.getElementById('changeColor'+id).style.backgroundColor="#A3A3BF";
}

function changePhoneNumber(id){
    switch(id){
        case 1: document.getElementById("input-phone-number").value = "0974224812"; break;
        case 2: document.getElementById("input-phone-number").value = "0914080804"; break;
        case 3: document.getElementById("input-phone-number").value = "0707306918"; break;
        case 4: document.getElementById("input-phone-number").value = "0967479503"; break;
    }
    
    
}