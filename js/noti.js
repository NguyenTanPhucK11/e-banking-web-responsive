window.onload = Transaction();
function Transaction(){
    document.querySelector("#Noti").innerHTML = `
            <nav class="tm-nav">
                <ul>
                  <li class="active">
                    <a onclick = "Transaction()"><i class='fas fa-exchange-alt'></i> Giao dịch</a>
                  </li>
                  <li>
                    <a onclick = "Promotion()"><i class='fas fa-cart-arrow-down'></i>Khuyến mãi</a>
                  </li> 
                  <li >
                    <a onclick = "Notification()"><i class='fas fa-bell'></i>Thông báo</a>
                  </li>
                </ul>
            </nav> 
            <div class = "noti">
                <div class = "center">
                    <div style="color: #C4C4C4;" class="break-word-trans">
                        <i class="fas fa-sign-in-alt"></i>&emsp;22/11/2019
                        <div style="color: black;"><i class="far fa-money-bill-alt"></i>&emsp;Quý khách đã thanh toán thành công số tiền 3,399,999 cho sản phẩm X. Số điện thoại hỗ trợ : 1900 1000</div>             
                        <hr class="line">
                    </div>
                </div>
                <div class = "center">
                    <div style="color: #C4C4C4;" class="break-word-trans">
                        <i class="fas fa-sign-in-alt"></i>&emsp;22/11/2019      
                        <div style="color: black;"><i class="far fa-money-bill-alt"></i>&emsp;Quý khách nhận được số tiền 10.000 từ tài khoản 18110000028436 . Số điện thoại hỗ trợ : 1900 1000</div>  
                        <hr class="line">
                    </div>
                </div>
                <div class = "center">
                    <div style="color: #C4C4C4;" class="break-word-trans">
                        <i class="fas fa-sign-in-alt"></i>&emsp;22/11/2019     
                        <div style="color: black;"><i class="far fa-money-bill-alt"></i>&emsp;Qúy khách đã chuyển số tiền 2.000.000 đến tài khoản 15220000012451. Số dư còn lại: 1.500.000. Số điên thoại hỗ trợ: 1900 1000</div>
                        <hr class="line">
                    </div>
                </div>
                <div class = "center">
                    <div style="color: #C4C4C4;" class="break-word-trans">
                        <i class="fas fa-sign-in-alt"></i>&emsp;22/11/2019      
                        <div style="color: black;"><i class="far fa-money-bill-alt"></i>&emsp;Qúy khách đã nạp 20.000 vào số điện thoại 0967479503. Số dư còn lại: 410.000. Số điên thoại hỗ trợ: 1900 1000</div>
                        <hr class="line">
                    </div>
                </div>
            </div>

            `
}

function Promotion(){
    document.querySelector("#Noti").innerHTML =`
    <nav class="tm-nav">
                <ul>
                    <li>
                        <a onclick = "Transaction()"><i class='fas fa-exchange-alt'></i>Giao dịch</a>
                    </li>
                    <li class="active">
                        <a onclick = "Promotion()"><i class='fas fa-cart-arrow-down'></i> Khuyến mãi</a>
                    </li> 
                    <li >
                        <a onclick = "Notification()"><i class='fas fa-bell'></i>Thông báo</a>
                    </li>
                </ul>
            </nav>
            <div class = "column-pro-all" >

            <div class = "icon-left">
                <i class="fas fa-caret-left fa-3x"></i>
            </div>

            <div class="center">
                <div style="color: #C4C4C4;" class="column-pro-1">
                <img class = "column-pro-img" src="images/img.jpg" > 

                    <div style="color: black;">Đừng bỏ lỡ ! Cơ hội cuối để nhận 1 chiếc xe SUV SUBARU giá 1 tỷ đồng khi gia hạn K + 3 tháng. Số điện thoại hỗ trợ : 1900 1000</div>

                    22/11/2019
                </div>


                <div style="color: #C4C4C4;" class="column-pro-2">
                    <img class = "column-pro-img" src="images/img.jpg" > 

                    <div style="color: black;">Từ ngày 02/11 - 3-11 Mobifone tặng 50% giá trị thẻ nạp vào tài khoản khuyến mại. Không giới hạn số lần nạp</div>
                    </br>
                    05/11/19 11:16:02
                </div>


                <div style="color: #C4C4C4;" class="column-pro-3">
                    <img class = "column-pro-img" src="images/img.jpg" > 

                    <div style="color: black;">Quý khách đã thanh toán thành công số tiền 3,399,999 cho sản phẩm X. Số điện thoại hỗ trợ : 1900 1000</div>
                    </br>
                    05/11/19 11:16:02
                </div>
            </div>
            <div class = "icon-right">
            <i class="fas fa-caret-right fa-3x"></i>
            </div>
            </div>
            `
}

function Notification(){
    document.querySelector("#Noti").innerHTML = `<nav class="tm-nav">
    <ul>
        <li>
            <a onclick = "Transaction()"><i class='fas fa-exchange-alt'></i>Giao dịch</a>
        </li>
        <li>
            <a onclick = "Promotion()"><i class='fas fa-cart-arrow-down'></i>Khuyến mãi</a>
        </li> 
        <li class="active">
            <a onclick = "Notification()"><i class='fas fa-bell'></i> Thông báo</a>
        </li>
    </ul>
  </nav>
        <div class = "column-noti-all">
        <div class = "center">
            <div style="color: #C4C4C4;" class="column-noti-1">
                <div class = "noti-icon" > <i class="fas fa-bullhorn"></i></div>
            
                <div style="color: black;">Cập nhật thông tin BSMS đối với các thuê bao chuyển mạng giữ số </div>
                </br></br>
                22/11/2019
            </div>
        </div>
        <div class = "center">
            <div style="color: #C4C4C4;" class="column-noti-2">
                <div class = "noti-icon" > <i class="fas fa-bullhorn"></i></div>
            
                <div style="color: black;">Biểu phí và hạn mức Ngân hàng điện tử    (áp dụng từ ngày 15/10/2019)</div>
                </br></br>
                05/11/19  11:16:02 
            </div>
        </div>
        <div class = "center">
            <div style="color: #C4C4C4;" class="column-noti-3">
                <div class = "noti-icon" > <i class="fas fa-bullhorn"></i></div>
                
                <div style="color: black;">Tính năng mới: Tích điểm đổi quà - Navi Reward Ngay trên Navi-Bank</div>
                </br></br>
                05/11/19  11:16:02
            </div>
        </div>
        
        </div>
        <div class="pagination">
        <a href="#">&laquo;</a>
        <a href="#">1</a>
        <a href="#" class="active">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">6</a>
        <a href="#">&raquo;</a>
      </div>
`
}