(function ($) {
    //$.fn.hilight = function (options) {
    //    var defaults = {
    //        background: 'yellow'
    //    };
    //    // Extend our default options with those provided.    
    //    var opts = $.extend(defaults, options);
    //    // Our plugin implementation code goes here. 
    //    this.css('background', opts.background);
    //};
    $.fn.ShipmentFM = function (options) {
        var opts = $.extend({}, $.fn.ShipmentFM.defaults, options);
        //this.css('background', opts.background);
        //function reset() {
        //    $(this).next().hide();
        //}
        var g = this, t = $(this);
        g.addClass("CRP_Shipment_EI");
        g.append('<div class="Shipment_left"></div><div class="Shipment_center"></div><div class="Shipment_right"></div>')
        $('.Shipment_left', g).append('<div><span>No of Shipment</span></div><div><span>Tonnage/Volume</span></div><div><span>Sales</span></div><div><span>GP</span></div>');
        $('.Shipment_center', g).append('<div class="subTab"><div class="sublist"><div><span>AE</span></div><div><span>AI</span></div><div><span>OE-FCL</span></div><div><span>OE-LCL</span></div><div><span>OI-FCL</span></div><div><span>OI-LCL</span></div></div></div><div class="subTab unshown"><div class="sublist"><div><span>AE(Kg)</span></div><div><span>AI(Kg)</span></div><div><span>OE-FCL(TEU)</span></div><div><span>OE-LCL(CBM)</span></div><div><span>OI-FCL(TEU)</span></div><div><span>OI-LCL(CBM)</span></div></div></div>');
        $('.Shipment_right', g).append('<div class="irr"><div class="irr_no"><span>2</span></div><div class="irr_info"><div class="irr_info1"><span>IRREGULARITY LOTS</span></div><div class="irr_info2"><span>View More >>></span></div></div></div><div class="lot"><div class="title">Sourse of Lots ( Closed / Total )</div><div class="lot_detail"><div class="lot_model"><div class="first"><span>AE</span></div><div><span>120/880</span></div></div><div class="lot_model"><div class="first"><span>AI</span></div><div><span>120/880</span></div></div><div class="lot_model last"><div class="first"><span>OE</span></div><div><span>120/880</span></div></div><div class="lot_model"><div class="first"><span>OI</span></div><div><span>120/880</span></div></div><div class="lot_model"><div class="first"><span>3P</span></div><div><span>120/880</span></div></div><div class="lot_model last"><div class="first"><span>CC</span></div><div><span>120/880</span></div></div></div></div><div class="closelot"><div class="title"><div>% of Closed Lot</div></div><div class="detail"><div class="detail_1"><div>AE</div><div class="detail_2">88%</div></div><div class="detail_1"><div>AI</div><div class="detail_2">88%</div></div><div class="detail_1"><div>OE</div><div class="detail_2">88%</div></div><div class="detail_1"><div>OI</div><div class="detail_2">88%</div></div><div class="detail_1"><div>3P</div><div class="detail_2">88%</div></div><div class="detail_1"><div>CC</div><div class="detail_2">88%</div></div></div></div><div class="poplot"><div class="closebtn"><span>x</span></div><div class="title"><div class="title1"><span>GP&lt;0</span></div><div class="title2"><span>2</span></div></div><div class="detail"><ul><li>AE: 09150003: -USD150.00</li><li>AE: 09150004: -USD250.00</li></ul></div></div>');

        $(".Shipment_left>div", g).click(function () {
            var e = $(this);
            e.addClass("selected").css("background-color", "#97c6f3");
            $(".Shipment_left>div",g).not(this).removeClass("selected").css("background-color", "#ffffff");
            if ($("span", this).html() == "Tonnage/Volume") {
                $(".Shipment_center .subTab:eq(1)",g).css("display", "block");
                $(".Shipment_center .subTab:first",g).css("display", "none");
            }
            else {
                $(".Shipment_center .subTab:eq(1)",g).css("display", "none");
                $(".Shipment_center .subTab:first",g).css("display", "block");
            }
        });
        $(".Shipment_center .sublist div",g).click(function () {
            var e = $(this);
            e.addClass("selected").css("background-color", "#97c6f3");
            $(".Shipment_center .sublist div",g).not(this).removeClass("selected").css("background-color", "#ffffff");
        });
        //
        $(".irr_info2",g).click(function () {
            $(".poplot").show();
        });
        $(".poplot .closebtn",g).click(function () {
            $(".poplot").hide();
        });
    };
    $.fn.ShipmentFM.defaults = {
        background: 'yellow'
    };
    
})(jQuery);