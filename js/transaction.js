window.onload = Transaction();
function Transaction(){
    document.querySelector("#Transaction").innerHTML = `

<div class="row">
    <div class="center">
        <div class="name-column-transaction">Thông tin tài khoản thanh toán</div>
        <div style="color: #C4C4C4;" class="column-transaction">
           
        <div style="color: #C4C4C4;" class="column-transaction-info-mini">
            <div style="clear : both;">
                <p class="alignleft">Tên chủ tài khoản</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-transaction-info-mini">
            <div style="clear : both;">
                <p class="alignleft">VU GIA KHIEM</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-transaction-info-mini">
            <div style="clear : both;">
                <p class="alignleft">Tài khoản nguồn</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-transaction-info-mini">
            <div style="clear : both;">
                <p class="alignleft">18110000028436</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-transaction-info-mini">
            <div style="clear : both;">
                <p class="alignleft">Số dư</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-transaction-info-mini">
            <div style="clear : both;">
                <p class="alignright">2.000.000 VND</p>
            </div>
        </div>
       
        </div>
    </div>
    <div>
        <div class="name-column-transaction-benefit">Tài khoản thụ hưởng</div>
        <div style="color: #C4C4C4;" class="column-transaction">
        <div style="color: #C4C4C4;" class="column-transaction-info-mini">
            <div style="clear : both;">
                <p class="alignleft">Tên tài khoản thụ hưởng</p>
            </div>
        </div>

        <div style="color: #C4C4C4;" class="column-transaction-info-mini">
            <div style="clear : both;">
                <p class="alignleft" style="text-decoration: underline;">TRAN DUY MINH</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-transaction-info-mini">
            <div style="clear : both;">
                <p class="alignleft">Tài khoản thụ hưởng</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-transaction-info-mini">
            <div style="clear : both;">
                <p class="alignleft">31410003035831</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-transaction-info-mini">
            <div style="clear : both;">
                <p class="alignleft"></p>
            </div>
        </div>
       
        </div>
    </div>
  </div>
  <div class="center">
    <div class="name-column-transaction-info">Tài khoản thụ hưởng</div>
    <div style="color: #C4C4C4;" class="column-transaction-info">
    <div style="color: #C4C4C4;" class="column-transaction-info-mini">
        <div style="clear : both;">
            <p class="alignleft">Số tiền</p>
        </div>
    </div>
    <div style="color: #C4C4C4;" class="column-transaction-info-mini">
        <div style="clear : both;">
            <p class="alignleft" >100,000 VND</p>
        </div>
    </div>
    <div style="color: #C4C4C4;" class="column-transaction-info-mini">
        <div style="clear : both;">
            <p class="alignleft">Đối tượng chịu phí</p>
        </div>
    </div>
    <div style="color: #C4C4C4;" class="column-transaction-info-mini">
        <div style="clear : both;">
            <div class="alignleft">
                <label class="radio-inline">
                    <input type="radio" name="optradio" checked>Người chuyển
                  </label>
            </div>
            <div class="alignright">
                <label class="radio-inline">
                    <input type="radio" name="optradio">Người nhận
                  </label>
            </div>
              
        </div>
    </div>
    <div style="color: #C4C4C4;" class="column-transaction-info-mini">
        <div style="clear : both;">
            <p class="alignleft">Nội dung giao dịch</p>
            <div class="alignright">
                <input type="radio" name="gender" value="male" checked>Chuyển tiền<br>
            </div> 
            
        </div>
        
    </div>
   
    </div>
    <input type="button" class="button" value="Tiếp tục" onclick ="TransactionInfo()">
</div>


            `
}

function TransactionInfo(){
    document.querySelector("#Transaction").innerHTML = `
    <div class="center">
        <div class="name-column">Thông tin tài khoản tiền vay</div>
        <div style="color: #C4C4C4; height: 370px;" class="column-history">
           
        <div style="color: #C4C4C4;" class="column-account-info-pay">
            <div style="clear : both;">
                <p class="alignleft">Tên người thụ hưởng</p>
                <p class="alignright">TRAN DUY MINH</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-account-info-pay">
            <div style="clear : both;">
                <p class="alignleft">Tài khoản thụ hưởng</p>
                <p class="alignright">31410003035831</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-account-info-pay">
            <div style="clear : both;">
                <p class="alignleft">Đối tượng chịu phí</p>
                <p class="alignright">Người chuyển</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-account-info-pay">
            <div style="clear : both;">
                <p class="alignleft">Số tiền</p>
                <p class="alignright">100,000 VND</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-account-info-pay">
            <div style="clear : both;">
                <p class="alignleft">Phí</p>
                <p class="alignright">1,000 VND</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-account-info-pay">
            <div style="clear : both;">
                <p class="alignleft">VAT</p>
                <p class="alignright">100VND</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-account-info-pay">
            <div style="clear : both;">
                <p class="alignleft">Ngày giao dịch</p>
                <p class="alignright">05/11/2019 21:46:25</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-account-info-pay">
            <div style="clear : both;">
                <p class="alignleft">Nội dung</p>
                <p class="alignright">Chuyển tiền</p>
            </div>
        </div>
        <div class="center" >
            <div style="clear : both;">
                <p class="alignleft"><input type="button" class="button" value="    Huỷ    " onclick = "Transaction()"></p>
                <p class="alignleft"><input type="button" class="button" value="Tiếp tục"></p>
            </div>
            
            
        </div>
        
        </div>
        
    </div>
            `
}