window.onload = Transaction();
function Transaction(){
    document.querySelector("#Account").innerHTML = `
    <nav class="tm-nav">
                <ul>
                  <li class="active">
                    <a onclick = "Transaction()"><span class="tm-nav-deco"></span>Giao dịch</a>
                  </li>
                  <li>
                    <a onclick = "Promotion()"><span class="tm-nav-deco"></span>Khuyến mãi</a>
                  </li> 
                  <li >
                    <a onclick = "Notification()"><span class="tm-nav-deco"></span>Thông báo</a>
                  </li>
                </ul>
            </nav> 
            <div class = "center">
                <div style="color: #C4C4C4;" class="break-word-trans">
                    <i class="fas fa-car">22/11/2019</i>
                    <div style="color: black;">Cập nhật thông tin BSMS đối với các thuê bao chuyển mạng giữ số </div>             
                    <hr class="line">
                </div>
            </div>
            <div class = "center">
                <div style="color: #C4C4C4;" class="break-word-trans">
                    <i class="fas fa-car">22/11/2019</i>      
                    <div style="color: black;">Cập nhật thông tin BSMS đối với các thuê bao chuyển mạng giữ số </div>  
                    <hr class="line">
                </div>
            </div>
            <div class = "center">
                <div style="color: #C4C4C4;" class="break-word-trans">
                    <i class="fas fa-car">22/11/2019</i>      
                    <div style="color: black;">Cập nhật thông tin BSMS đối với các thuê bao chuyển mạng giữ số </div>
                    <hr class="line">
                </div>
            </div>
            <div class = "center">
                <div style="color: #C4C4C4;" class="break-word-trans">
                    <i class="fas fa-car">22/11/2019</i>      
                    <div style="color: black;">Cập nhật thông tin BSMS đối với các thuê bao chuyển mạng giữ số </div>
                    <hr class="line">
                </div>
            </div>
            `
}

function Promotion(){
    document.querySelector("#Account").innerHTML =`
    <nav class="tm-nav">
                <ul>
                    <li>
                        <a onclick = "Transaction()"><span class="tm-nav-deco"></span>Giao dịch</a>
                    </li>
                    <li class="active">
                        <a onclick = "Promotion()"><span class="tm-nav-deco"></span>Khuyến mãi</a>
                    </li>
                    <li>
                        <a onclick = "Notification()"><span class="tm-nav-deco"></span>Thông báo</a>
                    </li>
                </ul>
            </nav>
            

            <div class="center">
                <div style="color: #C4C4C4;" class="column-pro">
                    <img src="images/img.jpg" >

                    <div style="color: black;">Quý khách đã thanh toán thành công số tiền 3,399,999 cho sản phẩm X. Số điện thoại hỗ trợ : 1900 1000 </div>

                    22/11/2019
                </div>
            </div>
            <div class="center">
                <div style="color: #C4C4C4;" class="column-pro">
                    <img src="images/img.jpg" > 

                    <div style="color: black;">Quý khách đã thanh toán thành công số tiền 3,399,999 cho sản phẩm X. Số điện thoại hỗ trợ : 1900 1000</div>

                    05/11/19 11:16:02
                </div>
            </div>
            <div class="center">
                <div style="color: #C4C4C4;" class="column-pro">
                    <img src="images/img.jpg" >

                    <div style="color: black;">Quý khách đã thanh toán thành công số tiền 3,399,999 cho sản phẩm X. Số điện thoại hỗ trợ : 1900 1000</div>

                    05/11/19 11:16:02
                </div>
            </div>
            <div class="center">
                <div style="color: #C4C4C4;" class="column-pro">
                    <img src="images/img.jpg" >

                    <div style="color: black;">Quý khách đã thanh toán thành công số tiền 3,399,999 cho sản phẩm X. Số điện thoại hỗ trợ : 1900 1000</div>

                    05/11/19 11:16:02
                </div>
            </div>`
}

function Notification(){
    document.querySelector("#Account").innerHTML = `<nav class="tm-nav">
    <ul>
      <li >
        <a onclick = "Transaction()"><span class="tm-nav-deco"></span>Giao dịch</a>
      </li>
      <li>
        <a onclick = "Promotion()"><span class="tm-nav-deco"></span>Khuyến mãi</a>
      </li> 
      <li class="active">
        <a onclick = "Notification()"><span class="tm-nav-deco"></span>Thông báo</a>
      </li>
    </ul>
  </nav>
  
<div class = "center">
    <div style="color: #C4C4C4;" class="column">
        <i class="fas fa-car"></i>
       
        <div style="color: black;">Cập nhật thông tin BSMS đối với các thuê bao chuyển mạng giữ số </div>
    
        22/11/2019
    </div>
</div>
<div class = "center">
    <div style="color: #C4C4C4;" class="column">
        <i class="fas fa-car"></i>
       
        <div style="color: black;">Quý khách đã thanh toán thành công số tiền 3,399,999 cho sản phẩm X. Số điện thoại hỗ trợ : 1900 1000</div>
 
        05/11/19  11:16:02 
    </div>
</div>
<div class = "center">
    <div style="color: #C4C4C4;" class="column">
        <i class="fas fa-car"></i>
        
        <div style="color: black;">Quý khách đã thanh toán thành công số tiền 3,399,999 cho sản phẩm X. Số điện thoại hỗ trợ : 1900 1000</div>
        
        05/11/19  11:16:02
    </div>
</div>
<div class = "center">
    <div style="color: #C4C4C4;" class="column">
        <i class="fas fa-car"></i>
        
        <div style="color: black;">Quý khách đã thanh toán thành công số tiền 3,399,999 cho sản phẩm X. Số điện thoại hỗ trợ : 1900 1000</div>

        05/11/19  11:16:02 
    </div>
</div>`
}