window.onload = InterestVND();
function InterestVND(){
    document.querySelector("#Utilities").innerHTML =`
    <nav class="tm-nav">
    <ul>
        <li class="active">
            <a onclick = "InterestVND()"><span class="tm-nav-deco"></span>Lãi xuất tiền gửi VND</a>
        </li>
        <li>
            <a onclick = "InterestDollars()"><span class="tm-nav-deco"></span>Lãi xuất tiền gửi Dollars</a>
        </li>
        <li>
            <a onclick = "FindMap()"><span class="tm-nav-deco"></span>Tìm kiếm ATM</a>
        </li>
        <li>
            <a onclick = "ExchangeRate()"><span class="tm-nav-deco"></span>Tỷ giá ngoại lệ</a>
        </li>
        <li>
            <a onclick = "ExchangeInfo()"><span class="tm-nav-deco"></span>Trao đổi thông tin</a>
        </li>
    </ul>
</nav>
            <div class="center-utilities">
            <div class="grid-container">
                <div class="grid-item-name">LOẠI TIỀN GỬI</div>
                <div class="grid-item-name">LĨNH LÃI CUỐI KỲ(%/NĂM)</div>
                <div class="grid-item-name">LĨNH LÃI HÀNG NĂM(%/NĂM)</div>  
                <div class="grid-item-name">LĨNH LÃI HÀNG 6 THÁNG(%/NĂM)</div>
                <div class="grid-item-name">LĨNH LÃI HÀNG QUÝ(%/NĂM)</div>
                <div class="grid-item-name">LĨNH LÃI HÀNG THÁNG(%/NĂM)</div>  
    
                <div class="grid-item">Không kỳ hạn</div>
                <div class="grid-item"></div>
                <div class="grid-item"></div>  
                <div class="grid-item"></div>
                <div class="grid-item">0,80</div>
                <div class="grid-item"></div>  
    
                <div class="grid-item">Có kỳ hạn</div>
                <div class="grid-item"></div>
                <div class="grid-item"></div>  
                <div class="grid-item"></div>
                <div class="grid-item"></div>
                <div class="grid-item"></div>  
    
                <div class="grid-item">1-5 tháng</div>
                <div class="grid-item">5,00</div>
                <div class="grid-item"></div>  
                <div class="grid-item"></div>
                <div class="grid-item"></div>
                <div class="grid-item">4,94</div>  
    
                <div class="grid-item">6 tháng</div>
                <div class="grid-item">7,10</div>
                <div class="grid-item"></div>  
                <div class="grid-item"></div>
                <div class="grid-item">6,96</div>
                <div class="grid-item">6,87</div>  
    
                <div class="grid-item">12 tháng</div>
                <div class="grid-item">7,50</div>
                <div class="grid-item"></div>  
                <div class="grid-item">7,06</div>
                <div class="grid-item">6,98</div>
                <div class="grid-item">6,93</div>  
    
                <div class="grid-item">24 tháng</div>
                <div class="grid-item">7,55</div>
                <div class="grid-item">7,00</div>  
                <div class="grid-item">6,88</div>
                <div class="grid-item">6,81</div>
                <div class="grid-item">6,77</div>  
    
                <div class="grid-item">36 tháng</div>
                <div class="grid-item">7,55</div>
                <div class="grid-item">7,01</div>  
                <div class="grid-item">6,89</div>
                <div class="grid-item">6,82</div>
                <div class="grid-item">6,78</div>  
            </div>
        </div>
       

        `
}

function InterestDollars(){
    document.querySelector("#Utilities").innerHTML =`
    <nav class="tm-nav">
    <ul>
        <li>
            <a onclick = "InterestVND()"><span class="tm-nav-deco"></span>Lãi xuất tiền gửi VND</a>
        </li>
        <li class="active">
            <a onclick = "InterestDollars()"><span class="tm-nav-deco"></span>Lãi xuất tiền gửi Dollars</a>
        </li>
        <li>
            <a onclick = "FindMap()"><span class="tm-nav-deco"></span>Tìm kiếm ATM</a>
        </li>
        <li>
            <a onclick = "ExchangeRate()"><span class="tm-nav-deco"></span>Tỷ giá ngoại lệ</a>
        </li>
        <li>
            <a onclick = "ExchangeInfo()"><span class="tm-nav-deco"></span>Trao đổi thông tin</a>
        </li>
    </ul>
</nav>
            <div class="center-utilities">
            <div class="grid-container">
                <div class="grid-item-name">LOẠI TIỀN GỬI</div>
                <div class="grid-item-name">LĨNH LÃI CUỐI KỲ(%/NĂM)</div>
                <div class="grid-item-name">LĨNH LÃI HÀNG NĂM(%/NĂM)</div>  
                <div class="grid-item-name">LĨNH LÃI HÀNG 6 THÁNG(%/NĂM)</div>
                <div class="grid-item-name">LĨNH LÃI HÀNG QUÝ(%/NĂM)</div>
                <div class="grid-item-name">LĨNH LÃI HÀNG THÁNG(%/NĂM)</div>  
    
                <div class="grid-item">Không kỳ hạn</div>
                <div class="grid-item"></div>
                <div class="grid-item"></div>  
                <div class="grid-item"></div>
                <div class="grid-item">0,80</div>
                <div class="grid-item"></div>  
    
                <div class="grid-item">Có kỳ hạn</div>
                <div class="grid-item"></div>
                <div class="grid-item"></div>  
                <div class="grid-item"></div>
                <div class="grid-item"></div>
                <div class="grid-item"></div>  
    
                <div class="grid-item">1-5 tháng</div>
                <div class="grid-item">5,00</div>
                <div class="grid-item"></div>  
                <div class="grid-item"></div>
                <div class="grid-item"></div>
                <div class="grid-item">4,94</div>  
    
                <div class="grid-item">6 tháng</div>
                <div class="grid-item">7,10</div>
                <div class="grid-item"></div>  
                <div class="grid-item"></div>
                <div class="grid-item">6,96</div>
                <div class="grid-item">6,87</div>  
    
                <div class="grid-item">12 tháng</div>
                <div class="grid-item">7,50</div>
                <div class="grid-item"></div>  
                <div class="grid-item">7,06</div>
                <div class="grid-item">6,98</div>
                <div class="grid-item">6,93</div>  
    
                <div class="grid-item">24 tháng</div>
                <div class="grid-item">7,55</div>
                <div class="grid-item">7,00</div>  
                <div class="grid-item">6,88</div>
                <div class="grid-item">6,81</div>
                <div class="grid-item">6,77</div>  
    
                <div class="grid-item">36 tháng</div>
                <div class="grid-item">7,55</div>
                <div class="grid-item">7,01</div>  
                <div class="grid-item">6,89</div>
                <div class="grid-item">6,82</div>
                <div class="grid-item">6,78</div>  
            </div>
        </div>
       

        `
}

function FindMap(){
    document.querySelector("#Utilities").innerHTML =`
    <nav class="tm-nav">
    <ul>
        <li>
            <a onclick = "InterestVND()"><span class="tm-nav-deco"></span>Lãi xuất tiền gửi VND</a>
        </li>
        <li>
            <a onclick = "InterestDollars()"><span class="tm-nav-deco"></span>Lãi xuất tiền gửi Dollars</a>
        </li>
        <li  class="active">
            <a onclick = "FindMap()"><span class="tm-nav-deco"></span>Tìm kiếm ATM</a>
        </li>
        <li>
            <a onclick = "ExchangeRate()"><span class="tm-nav-deco"></span>Tỷ giá ngoại lệ</a>
        </li>
        <li>
            <a onclick = "ExchangeInfo()"><span class="tm-nav-deco"></span>Trao đổi thông tin</a>
        </li>
    </ul>
</nav>
    <div class="center">
    <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15673.40400524896!2d106.7824431470384!3d10.860885299316301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sBIDV!5e0!3m2!1sen!2s!4v1577457235576!5m2!1sen!2s" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe> -->

  </div>
        `
}

function ExchangeRate(){
    document.querySelector("#Utilities").innerHTML =`
    <nav class="tm-nav">
    <ul>
        <li>
            <a onclick = "InterestVND()"><span class="tm-nav-deco"></span>Lãi xuất tiền gửi VND</a>
        </li>
        <li>
            <a onclick = "InterestDollars()"><span class="tm-nav-deco"></span>Lãi xuất tiền gửi Dollars</a>
        </li>
        <li>
            <a onclick = "FindMap()"><span class="tm-nav-deco"></span>Tìm kiếm ATM</a>
        </li>
        <li  class="active">
            <a onclick = "ExchangeRate()"><span class="tm-nav-deco"></span>Tỷ giá ngoại lệ</a>
        </li>
        <li>
            <a onclick = "ExchangeInfo()"><span class="tm-nav-deco"></span>Trao đổi thông tin</a>
        </li>
    </ul>
</nav>
    <div class="center-utilities">
    <div class="grid-container-rechange-rate" >
        <div class="grid-item-rechange-rate" style="border-left: 1px solid rgba(0, 0, 0, 0.8);"></div>
        <div class="grid-item-rechange-rate">Mã NT</div>
        <div class="grid-item-rechange-rate">Mua CK</div>  
        <div class="grid-item-rechange-rate">Mua MT</div>
        <div class="grid-item-rechange-rate" style="border-right: 1px solid rgba(0, 0, 0, 0.8);">Bán</div>


        <div class="grid-item-rechange-rate" style="border-left: 1px solid rgba(0, 0, 0, 0.8);">
            <img style="width: 20px;" src="images/img.jpg" alt="">
        </div>
        <div class="grid-item-rechange-rate">USD<sub>1</sub></div>
        <div class="grid-item-rechange-rate">23,140.00</div>  
        <div class="grid-item-rechange-rate">23,140.00</div>
        <div class="grid-item-rechange-rate" style="border-right: 1px solid rgba(0, 0, 0, 0.8);">23,260.00</div>

        <div class="grid-item-rechange-rate" style="border-left: 1px solid rgba(0, 0, 0, 0.8);">
            <img style="width: 20px;" src="images/img.jpg" alt="">
        </div>
        <div class="grid-item-rechange-rate">USD<sub>2</sub></div>
        <div class="grid-item-rechange-rate">23,140.00</div>  
        <div class="grid-item-rechange-rate">23,140.00</div>
        <div class="grid-item-rechange-rate" style="border-right: 1px solid rgba(0, 0, 0, 0.8);">23,260.00</div> 

        <div class="grid-item-rechange-rate" style="border-left: 1px solid rgba(0, 0, 0, 0.8);">
            <img style="width: 20px;" src="images/img.jpg" alt="">
        </div>
        <div class="grid-item-rechange-rate">USD<sub>3</sub></div>
        <div class="grid-item-rechange-rate">23,140.00</div>  
        <div class="grid-item-rechange-rate">23,140.00</div>
        <div class="grid-item-rechange-rate" style="border-right: 1px solid rgba(0, 0, 0, 0.8);">23,260.00</div> 
        
        <div class="grid-item-rechange-rate" style="border-left: 1px solid rgba(0, 0, 0, 0.8);">
            <img style="width: 20px;" src="images/img.jpg" alt="">
        </div>
        <div class="grid-item-rechange-rate">GPB</div>
        <div class="grid-item-rechange-rate">23,140.00</div>  
        <div class="grid-item-rechange-rate">23,140.00</div>
        <div class="grid-item-rechange-rate" style="border-right: 1px solid rgba(0, 0, 0, 0.8);">23,260.00</div> 
        
        <div class="grid-item-rechange-rate" style="border-left: 1px solid rgba(0, 0, 0, 0.8);">
            <img style="width: 20px;" src="images/img.jpg" alt="">
        </div>
        <div class="grid-item-rechange-rate">HKD</div>
        <div class="grid-item-rechange-rate">23,140.00</div>  
        <div class="grid-item-rechange-rate">23,140.00</div>
        <div class="grid-item-rechange-rate" style="border-right: 1px solid rgba(0, 0, 0, 0.8);">23,260.00</div> 
        
        <div class="grid-item-rechange-rate" style="border-left: 1px solid rgba(0, 0, 0, 0.8);">
            <img style="width: 20px;" src="images/img.jpg" alt="">
        </div>
        <div class="grid-item-rechange-rate">JPY</div>
        <div class="grid-item-rechange-rate">23,140.00</div>  
        <div class="grid-item-rechange-rate">23,140.00</div>
        <div class="grid-item-rechange-rate" style="border-right: 1px solid rgba(0, 0, 0, 0.8);">23,260.00</div>

        <div class="grid-item-rechange-rate" style="border-left: 1px solid rgba(0, 0, 0, 0.8);">
            <img style="width: 20px;" src="images/img.jpg" alt="">
        </div>
        <div class="grid-item-rechange-rate">THB</div>
        <div class="grid-item-rechange-rate">23,140.00</div>  
        <div class="grid-item-rechange-rate">23,140.00</div>
        <div class="grid-item-rechange-rate" style="border-right: 1px solid rgba(0, 0, 0, 0.8);">23,260.00</div> 
        
        <div class="grid-item-rechange-rate" style="border-left: 1px solid rgba(0, 0, 0, 0.8);">
            <img style="width: 20px;" src="images/img.jpg" alt="">
        </div>
        <div class="grid-item-rechange-rate">AUD</div>
        <div class="grid-item-rechange-rate">23,140.00</div>  
        <div class="grid-item-rechange-rate">23,140.00</div>
        <div class="grid-item-rechange-rate" style="border-right: 1px solid rgba(0, 0, 0, 0.8);">23,260.00</div>

        
        <div class="grid-item-rechange-rate" style="border-left: 1px solid rgba(0, 0, 0, 0.8);border-bottom: 1px solid rgba(0, 0, 0, 0.8);">
            <img style="width: 20px;" src="images/img.jpg" alt="">
        </div>
        <div class="grid-item-rechange-rate" style="border-bottom: 1px solid rgba(0, 0, 0, 0.8);">CAD</div>
        <div class="grid-item-rechange-rate" style="border-bottom: 1px solid rgba(0, 0, 0, 0.8);">23,140.00</div>  
        <div class="grid-item-rechange-rate" style="border-bottom: 1px solid rgba(0, 0, 0, 0.8);">23,140.00</div>
        <div class="grid-item-rechange-rate" style="border-bottom: 1px solid rgba(0, 0, 0, 0.8); border-right: 1px solid rgba(0, 0, 0, 0.8);">23,260.00</div>
        
    </div>
</div>
       

        `
}

function ExchangeInfo(){
    document.querySelector("#Utilities").innerHTML =`
    <nav class="tm-nav">
    <ul>
        <li>
            <a onclick = "InterestVND()"><span class="tm-nav-deco"></span>Lãi xuất tiền gửi VND</a>
        </li>
        <li>
            <a onclick = "InterestDollars()"><span class="tm-nav-deco"></span>Lãi xuất tiền gửi Dollars</a>
        </li>
        <li>
            <a onclick = "FindMap()"><span class="tm-nav-deco"></span>Tìm kiếm ATM</a>
        </li>
        <li>
            <a onclick = "ExchangeRate()"><span class="tm-nav-deco"></span>Tỷ giá ngoại lệ</a>
        </li>
        <li  class="active">
            <a onclick = "ExchangeInfo()"><span class="tm-nav-deco"></span>Trao đổi thông tin</a>
        </li>
    </ul>
</nav>
    <div class = "center">
        <div class="exchange-info-1"  >
            <p>Truy vấn thông tin tài khoản</p>
        </div>  
        <textarea class="exchange-info-2" name="Text1" cols="40" rows="5" placeholder="Nhập văn bản"></textarea> 
        
       
        
    </div>
    <div style="width : 50%; margin: auto;display: flex; align-items: center;justify-content: center; padding: 10px;">
        <input type="button" class="button" value="Tiếp tục" onclick ="TransactionInfo()">
    </div>
        `
}