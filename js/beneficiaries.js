
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
    <div class="column-beneficiaries" >
        <div style="color: #C4C4C4;" class="column-beneficiaries-mini">
        <div style="clear : both;">
            <p class="alignleft">Số tiền</p>
            <p class="alignright">100,000 VND</p>
        </div>
        </div>
        <div style="color: #C4C4C4;" class="column-beneficiaries-mini">
        <div style="clear : both;">
            <p class="alignleft">Số tiền</p>
            <p class="alignright">100,000 VND</p>
        </div>
        </div>
        <div style="color: #C4C4C4;" class="column-beneficiaries-mini">
        <div style="clear : both;">
            <p class="alignleft">Số tiền</p>
            <p class="alignright">100,000 VND</p>
        </div>
        </div>
        <div style="color: #C4C4C4;" class="column-beneficiaries-mini">
        <div style="clear : both;">
        <span class="dot">K</span><p class="alignleft">Số tiền</p>
            <p class="alignright">100,000 VND</p>
        </div>
        </div>

    </div>
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
        <div style="color: #C4C4C4;" class="column-history">
           
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
