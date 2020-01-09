
window.onload = Account();
function Account(){
    document.querySelector("#Account").innerHTML = `
    <div class = "center">
        <div class="account" onclick="AccountInfo()">
            <p><i class="fa fa-info-circle"></i>&emsp;&emsp;Truy vấn thông tin tài khoản&emsp;&emsp;<i class="fa fa-arrow-right"></i></p>
        </div>  
    </div>

    <div class = "center">
        <div class="account" onclick="HistoryTransaction()">
            <p><i class="fa fa-info-circle"></i>&emsp;&emsp;Lịch sử giao dịch&emsp;&emsp;<i class="fa fa-arrow-right"></i></p>
        </div>  
    </div>
    
            `
}

function AccountInfo(){
    document.querySelector("#Account").innerHTML =`
    <nav class="tm-nav">
    <ul>
        <li >
            <a onclick = "Account()"><span class="tm-nav-deco"></span>Quay lại</a>
        </li>
    </ul>
    </nav>
    <div class = "center">
    <div class="account-info-1" >
        <p><i class="fa fa-info-circle"></i>&emsp;&emsp;Tài khoản thanh toán&emsp;&emsp;<i class="fa fa-arrow-right"></i></p>
    </div>  
    <div class="account-info-2" onclick = "AccountInfoPay()">
        <div style="clear : both;">
        <p class="alignleft">Số dư khả dụng</p>
        <p class="alignright">0.00</p>
        </div>
    </div> 
</div>
<div class = "center">
    <div class="account-info-1" >
        <p><i class="fa fa-info-circle"></i>&emsp;&emsp;Tài khoản tiết kiệm&emsp;&emsp;<i class="fa fa-arrow-right"></i></p>
    </div>  
    <div class="account-info-2" >
        <div style="clear : both;">
        <p class="alignleft">Số dư khả dụng</p>
        <p class="alignright">0.00</p>
        </div>
    </div> 
</div>
<div class = "center">
    <div class="account-info-1" >
        <p><i class="fa fa-info-circle"></i>&emsp;&emsp;Tài khoản tiền vay&emsp;&emsp;<i class="fa fa-arrow-right"></i></p>
    </div>  
    <div class="account-info-2" >
        <div style="clear : both;">
        <p class="alignleft">Số dư khả dụng</p>
        <p class="alignright">0.00</p>
        </div>
    </div> 
</div>`
}
function HistoryTransaction(){
    document.querySelector("#Account").innerHTML =`
    <nav class="tm-nav">
    <ul>
        <li >
            <a onclick = "Account()"><span class="tm-nav-deco"></span>Quay lại</a>
        </li>
    </ul>
    </nav>
    <div class="center">
        <div class="name-column">Lịch sử giao dịch</div>
        <div style="color: #C4C4C4;" class="column-history">
           
            <div class="center">
                
                <input type="email" placeholder=" Search" class="column-history-search-text" required="required">
                
                <!-- <div style="color: #C4C4C4;" class="column-history-search">
                    
                </div> -->
  
            </div>
        <div style="color: #C4C4C4;" class="column-history-info">
            <div style="clear : both;">
                <p class="alignleft"></p>
                <p class="alignright">15:33:22 20/08/2019</p>
            </div>
            <div style="clear : both;">
                <p class="alignleft">Chuyển khoản cho</p>
                <p class="alignright">18110000028436</p>
            </div>
            <div style="clear : both;">
                <p class="alignleft">Số tiền</p>
                <p class="alignright" style="color: #EE2E2E ;">20,000 VND</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-history-info">
            <div style="clear : both;">
                <p class="alignleft"></p>
                <p class="alignright">15:33:22 20/08/2019</p>
            </div>
            <div style="clear : both;">
                <p class="alignleft">Chuyển khoản cho</p>
                <p class="alignright">18110000028436</p>
            </div>
            <div style="clear : both;">
                <p class="alignleft">Số tiền</p>
                <p class="alignright" style="color: #EE2E2E ;">20,000 VND</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-history-info">
            <div style="clear : both;">
                <p class="alignleft"></p>
                <p class="alignright">15:33:22 20/08/2019</p>
            </div>
            <div style="clear : both;">
                <p class="alignleft">Chuyển khoản cho</p>
                <p class="alignright">18110000028436</p>
            </div>
            <div style="clear : both;">
                <p class="alignleft">Số tiền</p>
                <p class="alignright" style="color: #EE2E2E ;">20,000 VND</p>
            </div>
        </div>

        
        </div>
        
    </div>
    `
}

function AccountInfoPay(){
    document.querySelector("#Account").innerHTML =`
    <nav class="tm-nav">
        <ul>
            <li class="active">
                <a onclick = "AccountInfoPay()"><span class="tm-nav-deco"></span>Tài khoản thanh toán</a>
            </li>
            <li >
                <a onclick = "AccountInfoSaving()"><span class="tm-nav-deco"></span>Tài khoản tiết kiệm</a>
            </li>
            <li>
                <a onclick = "AccountInfoLoan()"><span class="tm-nav-deco"></span>Tài khoản tiền vay</a>
            </li>
        </ul>
    </nav>
    <div class="center">
        <div class="name-column">Thông tin tài khoản thanh toán</div>
        <div style="color: #C4C4C4;" class="column-history">
           
        <div style="color: #C4C4C4;" class="column-account-info-pay">
            <div style="clear : both;">
                <p class="alignleft">Tên tài khản</p>
                <p class="alignright">VU GIA KHIEM</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-account-info-pay">
            <div style="clear : both;">
                <p class="alignleft">Số tài khoản</p>
                <p class="alignright">18110000028436</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-account-info-pay">
            <div style="clear : both;">
                <p class="alignleft">Số dư hiện tại</p>
                <p class="alignright">2,000,000 VND</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-account-info-pay">
            <div style="clear : both;">
                <p class="alignleft">Số dư khả dụng</p>
                <p class="alignright">2,000,000 VND</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-account-info-pay">
            <div style="clear : both;">
                <p class="alignleft">Tiền phong tỏa</p>
                <p class="alignright">100,000 VND</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-account-info-pay">
            <div style="clear : both;">
                <p class="alignleft">Loại tiền</p>
                <p class="alignright">VND</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-account-info-pay">
            <div style="clear : both;">
                <p class="alignleft">Chi nhánh mở</p>
                <p class="alignright">NH TMCP DT PT VN - CN QUAN 9 SAI GON</p>
            </div>
        </div>
       
        </div>
        
    </div>
    `
}

function AccountInfoSaving(){
    document.querySelector("#Account").innerHTML =`
    <nav class="tm-nav">
        <ul>
            <li >
                <a onclick = "AccountInfoPay()"><span class="tm-nav-deco"></span>Tài khoản thanh toán</a>
            </li>
            <li class="active">
                <a onclick = "AccountInfoSaving()"><span class="tm-nav-deco"></span>Tài khoản tiết kiệm</a>
            </li>
            <li>
                <a onclick = "AccountInfoLoan()"><span class="tm-nav-deco"></span>Tài khoản tiền vay</a>
            </li>
        </ul>
    </nav>
    <div class="center">
        <div class="name-column">Thông tin tài khoản tiền vay</div>
        <div style="color: #C4C4C4;" class="column-history">
           
        <div style="color: #C4C4C4;" class="column-account-info-pay">
            <div style="clear : both;">
                <p class="alignleft">Tên tài khoản</p>
                <p class="alignright">VU GIA KHIEM</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-account-info-pay">
            <div style="clear : both;">
                <p class="alignleft">Số tài khoản</p>
                <p class="alignright">18110000028436</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-account-info-pay">
            <div style="clear : both;">
                <p class="alignleft">Ngày mở</p>
                <p class="alignright">01/11/2019 14:02:33</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-account-info-pay">
            <div style="clear : both;">
                <p class="alignleft">Ngày đáo hạn</p>
                <p class="alignright">01/11/2019 14:02:33</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-account-info-pay">
            <div style="clear : both;">
                <p class="alignleft">Lãi suất</p>
                <p class="alignright">3,000,000 VND</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-account-info-pay">
            <div style="clear : both;">
                <p class="alignleft">Số tiền gốc</p>
                <p class="alignright">100,000,000VND</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-account-info-pay">
            <div style="clear : both;">
                <p class="alignleft">Tiền thực hưởng</p>
                <p class="alignright">3,000,000VND</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-account-info-pay">
            <div style="clear : both;">
                <p class="alignleft">Tiền lãi cuối kì</p>
                <p class="alignright">3,000,000VND</p>
            </div>
        </div>
       
       
        </div>
        
    </div>
    `
}

function AccountInfoLoan(){
    document.querySelector("#Account").innerHTML =`
    <nav class="tm-nav">
        <ul>
            <li >
                <a onclick = "AccountInfoPay()"><span class="tm-nav-deco"></span>Tài khoản thanh toán</a>
            </li>
            <li >
                <a onclick = "AccountInfoSaving()"><span class="tm-nav-deco"></span>Tài khoản tiết kiệm</a>
            </li>
            <li class="active">
                <a onclick = "AccountInfoLoan()"><span class="tm-nav-deco"></span>Tài khoản tiền vay</a>
            </li>
        </ul>
    </nav>
    <div class="center">
        <div class="name-column">Thông tin tài khoản tiết kiệm</div>
        <div style="color: #C4C4C4;" class="column-history">
           
        <div style="color: #C4C4C4;" class="column-account-info-pay">
            <div style="clear : both;">
                <p class="alignleft">Mã giao dịch</p>
                <p class="alignright">345892</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-account-info-pay">
            <div style="clear : both;">
                <p class="alignleft">Thời gian GD</p>
                <p class="alignright">01/11/2019 13:33:33</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-account-info-pay">
            <div style="clear : both;">
                <p class="alignleft">Số tiền GD</p>
                <p class="alignright">300,000 VND</p>
            </div>
        </div>
        <div style="color: #C4C4C4; " class="column-account-info-pay">
            <div style="clear : both;">
                <p class="alignleft">Tài khoản ghi </p>
                <p class="alignright">01/11/2019 14:02:33</p>
            </div>
            <div style="clear : both;">
                <p class="alignleft">nợ/ghi có</p>
                <p class="alignright"></p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-account-info-pay">
            <div style="clear : both;">
                <p class="center" style="width: 10%;">Mô tả</p>
            </div>
        </div>
       
       
        </div>
        
    </div>
    `
}