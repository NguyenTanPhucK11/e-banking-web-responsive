
window.onload = Recharge();
function Recharge(){
    document.querySelector("#Recharge").innerHTML = `
<div class="center">
    <div style="color: black;" class="column-recharge">
        <p style="color: black;"><i class="fas fa-mobile-alt"></i> Số điện thoại</p>
        <p class="center" style=" font-weight:bold; color: black">0974224812</p>
        <p style="color: black;"> <i class="fas fa-dollar-sign"></i>&nbsp;Số dư</p>
        <p class="alignright" style=" font-weight:bold; color : #EE2E2E">2,000,000 VND</p>
    </div>

    <div class="column-recharge-2" ">
        <p>Số điện thoại được nạp</p>
        <div>
        <input type="text" id="input-phone-number" name="firstname" placeholder="Số điện thoại">
        <button class = "button-recharge" style="background-color: white; "onclick = "changePhoneNumber(5)"><i class="far fa-address-book" style = "color : red" ></i></button>    
        <button class = "button-recharge" style="float: right;" onclick = "changePhoneNumber(1)"><img class="img-recharge-phone" src="images/img.jpg" >&ensp;Phúc</button>    
        <button class = "button-recharge" style="float: right;" onclick = "changePhoneNumber(2)"><img class="img-recharge-phone" src="images/img.jpg" >&ensp;Khoa</button>
        <button class = "button-recharge" style="float: right;" onclick = "changePhoneNumber(3)"><img class="img-recharge-phone" src="images/img.jpg" >&ensp;Minh</button>
        <button class = "button-recharge" style="float: right;" onclick = "changePhoneNumber(4)"><img class="img-recharge-phone" src="images/img.jpg" >&ensp;Khiêm</button>
        
        
        </div>
        <p style = "color : #EE2E2E; font-size : 0.8em ; padding : 0.2em"><i class="fas fa-info-circle" style = "color : #EE2E2E;"> </i>&ensp;Bỏ trống nếu nạp cho chính mình</p>
        <p><i class="fas fa-coins"></i> Mệnh giá</p>
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
        
        </div>
        
    </p>
</div>
        <div class = "button-recharge-phone">
            <input type="button" class="button" value="Tiếp tục" onclick ="AcceptRecharge()">
        </div>
            `
}

function AcceptRecharge(){
    document.querySelector("#Recharge").innerHTML =`
    <div class="center">
        <div class="name-column">Xác nhận</div>
        <div style="color: #C4C4C4;" class="column-accept-recharge">
           
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
    <div class = "button-accept-recharge-phone">
        <i class="fas fa-caret-left"></i><input type="button" class="button" value="Trở lại" onclick ="Recharge()">
        <input type="button" class="button" value="Tiếp tục" onclick ="window.location.href='home.html'">&ensp;<i class="fas fa-caret-right"></i>
    </div>
    `
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