
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
    <div style="color: #C4C4C4;" class="column-recharge">
        <p>Số tài khoản</p>
        <p class="center">18110000028436</pclass="center">
        <p>Số dư</p>
        <p class="alignright">2,000,000 VND</p>
    
    </div>
    <div class="column-recharge" style="width: 100%;">
        <p>Số điện thoại được nạp</p> 
        <button style="float: right;">SSSSSSS</button>
        <button style="float: right;">SSSSSSS</button>
        <button style="float: right;">SSSSSSS</button>
        <p class="center">ICON</p>
        <p>Bỏ trống nếu nạp cho chính mình</p>
        <p>Mệnh giá</p>
        <div>
            <p class="recharge-money" style="float: left;">10.000</p>
            <p class="recharge-money" style="float: right;">10.000</p>
            <p class="recharge-money" style="float: center;">10.000</p>
        </div>
        <div>
            <p class="recharge-money" style="float: left;">10.000</p>
            <p class="recharge-money" style="float: right;">10.000</p>
            <p class="recharge-money" style="float: center;">10.000</p>
        </div>
        <div>
            <p class="recharge-money" style="float: left;">10.000</p>
            <p class="recharge-money" style="float: right;">10.000</p>
            <p class="recharge-money" style="float: center;">10.000</p>
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
        <div class="z-index-div">Xác nhận</div>
        <div style="color: #C4C4C4; height: 340px;" class="column-history">
           
        <div style="color: #C4C4C4;" class="column-recharge-phone">
            <div style="clear : both;">
                <p class="alignleft">Tài khoản nguồn</p>
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
