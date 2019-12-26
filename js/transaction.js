window.onload = Transaction();
function Transaction(){
    document.querySelector("#Account").innerHTML = `
    <div>
                
    

</div>

<div class="row">
    <div class="center">
        <div class="z-index-transaction">Thông tin tài khoản thanh toán</div>
        <div style="color: #C4C4C4;" class="column-transaction">
           
        <div style="color: #C4C4C4;" class="column-transaction-origin">
            <div style="clear : both;">
                <p class="alignleft">Tên chủ tài khoản</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-transaction-origin">
            <div style="clear : both;">
                <p class="alignleft">VU GIA KHIEM</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-transaction-origin">
            <div style="clear : both;">
                <p class="alignleft">Tài khoản nguồn</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-transaction-origin">
            <div style="clear : both;">
                <p class="alignleft">18110000028436</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-transaction-origin">
            <div style="clear : both;">
                <p class="alignleft">Số dư</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-transaction-origin">
            <div style="clear : both;">
                <p class="alignright">2.000.000 VND</p>
            </div>
        </div>
       
        </div>
    </div>
    <div>
        <div class="z-index-transaction-benefit">Tài khoản thụ hưởng</div>
        <div style="color: #C4C4C4;" class="column-transaction">
        <div style="color: #C4C4C4;" class="column-transaction-origin">
            <div style="clear : both;">
                <p class="alignleft">Tên tài khoản thụ hưởng</p>
            </div>
        </div>

        <div style="color: #C4C4C4;" class="column-transaction-origin">
            <div style="clear : both;">
                <p class="alignleft" style="text-decoration: underline;">TRAN DUY MINH</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-transaction-origin">
            <div style="clear : both;">
                <p class="alignleft">Tài khoản thụ hưởng</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-transaction-origin">
            <div style="clear : both;">
                <p class="alignleft">31410003035831</p>
            </div>
        </div>
        <div style="color: #C4C4C4;" class="column-transaction-origin">
            <div style="clear : both;">
                <p class="alignleft">ICON beneficiaries</p>
            </div>
        </div>
       
        </div>
    </div>
  </div>
  <div class="center">
    <div class="z-index-transaction-info">Tài khoản thụ hưởng</div>
    <div style="color: #C4C4C4;" class="column-transaction-info">
    <div style="color: #C4C4C4;" class="column-transaction-origin">
        <div style="clear : both;">
            <p class="alignleft">Số tiền</p>
        </div>
    </div>
    <div style="color: #C4C4C4;" class="column-transaction-origin">
        <div style="clear : both;">
            <p class="alignleft" >100,000 VND</p>
        </div>
    </div>
    <div style="color: #C4C4C4;" class="column-transaction-origin">
        <div style="clear : both;">
            <p class="alignleft">Đối tượng chịu phí</p>
        </div>
    </div>
    <div style="color: #C4C4C4;" class="column-transaction-origin">
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
    <div style="color: #C4C4C4;" class="column-transaction-origin">
        <div style="clear : both;">
            <p class="alignleft">Nội dung giao dịch</p>
            <div class="alignright">
                <input type="radio" name="gender" value="male" checked>Chuyển tiền<br>
            </div> 
        </div>
        
    </div>
   
    </div>
</div>
            `
}