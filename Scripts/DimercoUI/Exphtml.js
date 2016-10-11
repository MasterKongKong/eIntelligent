<div class="panel-body divborder">
                    <ul id="myTab1" class="nav nav-tabs">
                        <li class="active"><a href="#org" data-toggle="tab">ORGANIZATION</a></li>
                        <li><a href="#cus" data-toggle="tab">CUSTOMER</a></li>
                        <li><a href="#lane" data-toggle="tab">LANE</a></li>
                    </ul>
                    <div id="myTabContent1" class="tab-content">
                        <div class="tab-pane fade in active" id="org">
                            <div class="col-sm-2" style="padding-left:0px;padding-right:0px;margin-top:15px;">
                                <div class="panel-group" id="accordion">
                                    <div class="panel panel-default">
                                        <div class="panel-heading">
                                            <h4 class="panel-title">
                                                <a data-toggle="collapse" data-parent="#accordion"
                                                   href="#collapseOne">
                                                    Ready Package
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseOne" class="panel-collapse collapse">
                                            <ul class="list-group">
                                                <li class="list-group-item cursorclass">Sales Drop</li>
                                                <li class="list-group-item cursorclass">GP% Drop</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="panel panel-default">
                                        <div class="panel-heading">
                                            <h4 class="panel-title">
                                                <a data-toggle="collapse" data-parent="#accordion"
                                                   href="#collapseTwo">
                                                    Pick Condition
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseTwo" class="panel-collapse collapse in">
                                            <ul class="list-group">
                                                <li class="list-group-item cursorclass active"><a href="#SalesCondition" data-toggle="tab" class="divblock">Sales</a></li>
                                                <li class="list-group-item cursorclass"><a href="#GPCondition" data-toggle="tab" class="divblock">GP</a></li>
                                                <li class="list-group-item cursorclass">GP%</li>
                                                <li class="list-group-item cursorclass">NO of Shipment</li>
                                                <li class="list-group-item cursorclass">Tonnage</li>
                                                <li class="list-group-item cursorclass">Volumn-LCL</li>
                                                <li class="list-group-item cursorclass">Volumn-FCL</li>
                                                <li class="list-group-item cursorclass">AR Aging</li>
                                                <li class="list-group-item cursorclass">AR Overdue</li>
                                                <li class="list-group-item cursorclass">Np B4 Tax</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="panel panel-default">
                                        <div class="panel-heading">
                                            <h4 class="panel-title">
                                                <a data-toggle="collapse" data-parent="#accordion"
                                                   href="#collapseThree">
                                                    My Package
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseThree" class="panel-collapse collapse">
                                            <div class="panel-body">

                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel panel-default">
                                        <div class="panel-heading">
                                            <h4 class="panel-title">
                                                <a data-toggle="collapse" data-parent="#accordion"
                                                   href="#collapseThree">
                                                    Most Frequent Use
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseThree" class="panel-collapse collapse">
                                            <div class="panel-body">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-content col-sm-4" style="padding-left:10px;padding-right:0px;margin-top:15px;" id="expPreCondition">
                                <div class="tab-pane fade in active" id="SalesCondition">
                                    <!--<div class="col-sm-4" style="padding-left:10px;padding-right:0px;margin-top:15px;" id="expPreCondition">-->
                                    <div class="panel panel-default">
                                        <div class="panel-heading">Sales</div>
                                        <ul class="list-group">
                                            <li class="list-group-item expConditionli">
                                                <span class="expConditionFirstSpan">YTD</span>
                                                <button class="btn btn-default expAddConditionbtn fright" type="button">></button>
                                                <span class="expConditionSecSpan">%</span>
                                                <input type="text" class="form-control textalign expInput inputPadding expConditionInput" value="10"/>
                                                <button class="btn btn-default expABButton expConditionButton" type="button">Actual < Budget</button>
                                            </li>
                                            <li class="list-group-item expConditionli">
                                                <span class="expConditionFirstSpan">Last Month</span>
                                                <button class="btn btn-default expAddConditionbtn fright" type="button">></button>
                                                <span class="expConditionSecSpan">%</span>
                                                <input type="text" class="form-control textalign expInput inputPadding expConditionInput" value="10"/>
                                                <button class="btn btn-default expABButton expConditionButton" type="button">Actual < Budget</button>
                                            </li>
                                            <li class="list-group-item expConditionli">
                                                <span class="expConditionFirstSpan">CONSEC 2 Month</span>
                                                <button class="btn btn-default expAddConditionbtn fright" type="button">></button>
                                                <span class="expConditionSecSpan">%</span>
                                                <input type="text" class="form-control textalign expInput inputPadding expConditionInput" value="30"/>
                                                <button class="btn btn-default expUDButton expConditionButton" type="button">↑</button>
                                            </li>
                                            <li class="list-group-item expConditionli">
                                                <span class="expConditionFirstSpan">CONSEC 3 Month</span>
                                                <button class="btn btn-default expAddConditionbtn fright" type="button">></button>
                                                <span class="expConditionSecSpan">%</span>
                                                <input type="text" class="form-control textalign expInput inputPadding expConditionInput" value="30"/>
                                                <button class="btn btn-default expUDButton expConditionButton" type="button">↑</button>
                                            </li>
                                            <li class="list-group-item expConditionli">
                                                <span class="expConditionFirstSpan">CONSEC 6 Month</span>
                                                <button class="btn btn-default expAddConditionbtn fright" type="button">></button>
                                                <span class="expConditionSecSpan">%</span>
                                                <input type="text" class="form-control textalign expInput inputPadding expConditionInput" value="30"/>
                                                <button class="btn btn-default expUDButton expConditionButton" type="button">↑</button>
                                            </li>
                                            <li class="list-group-item expConditionli">
                                                <span class="expConditionFirstSpan" title="Quarter-on-Quarter">QOQ(Quarter-on-Quarter)</span>
                                                <button class="btn btn-default expAddConditionbtn fright" type="button">></button>
                                                <span class="expConditionSecSpan">%</span>
                                                <input type="text" class="form-control textalign expInput inputPadding expConditionInput" value="30"/>
                                                <button class="btn btn-default expUDButton expConditionButton" type="button">↑</button>
                                            </li>
                                            <li class="list-group-item expConditionli">
                                                <span class="expConditionFirstSpan" title="Year-over-Year">YoY(Year-over-Year)</span>
                                                <button class="btn btn-default expAddConditionbtn fright" type="button">></button>
                                                <span class="expConditionSecSpan">%</span>
                                                <input type="text" class="form-control textalign expInput inputPadding expConditionInput" value="30"/>
                                                <button class="btn btn-default expUDButton expConditionButton" type="button">↑</button>
                                            </li>
                                            <li class="list-group-item expConditionli">
                                                <span class="expConditionFirstSpan">Last 3 Month</span>
                                                <button class="btn btn-default expAddConditionbtn fright" type="button">></button>
                                                <span class="expConditionSecSpan">%</span>
                                                <input type="text" class="form-control textalign expInput inputPadding expConditionInput" value="20"/>
                                                <button class="btn btn-default expTopButton expConditionButton" type="button">Bottom</button>
                                            </li>
                                            <li class="list-group-item expConditionli">
                                                <span class="expConditionFirstSpan">Last 6 Month</span>
                                                <button class="btn btn-default expAddConditionbtn fright" type="button">></button>
                                                <span class="expConditionSecSpan">%</span>
                                                <input type="text" class="form-control textalign expInput inputPadding expConditionInput" value="20"/>
                                                <button class="btn btn-default expTopButton expConditionButton" type="button">Bottom</button>
                                            </li>
                                            <li class="list-group-item expConditionli">
                                                <span class="expConditionFirstSpan">Last 12 Month</span>
                                                <button class="btn btn-default expAddConditionbtn fright" type="button">></button>
                                                <span class="expConditionSecSpan">%</span>
                                                <input type="text" class="form-control textalign expInput inputPadding expConditionInput" value="20"/>
                                                <button class="btn btn-default expTopButton expConditionButton" type="button">Bottom</button>
                                            </li>
                                            <li class="list-group-item expConditionli">
                                                <span class="expConditionFirstSpan">Last 3 Month</span>
                                                <button class="btn btn-default expAddConditionbtn fright" type="button">></button>
                                                <span class="expConditionSecSpan">%</span>
                                                <input type="text" class="form-control textalign expInput inputPadding expConditionInput" value="20"/>
                                                <button class="btn btn-default expTopButton expConditionButton" type="button">Top</button>
                                            </li>
                                            <li class="list-group-item expConditionli">
                                                <span class="expConditionFirstSpan">Last 6 Month</span>
                                                <button class="btn btn-default expAddConditionbtn fright" type="button">></button>
                                                <span class="expConditionSecSpan">%</span>
                                                <input type="text" class="form-control textalign expInput inputPadding expConditionInput" value="20"/>
                                                <button class="btn btn-default expTopButton expConditionButton" type="button">Top</button>
                                            </li>
                                            <li class="list-group-item expConditionli">
                                                <span class="expConditionFirstSpan">Last 12 Month</span>
                                                <button class="btn btn-default expAddConditionbtn fright" type="button">></button>
                                                <span class="expConditionSecSpan">%</span>
                                                <input type="text" class="form-control textalign expInput inputPadding expConditionInput" value="20"/>
                                                <button class="btn btn-default expTopButton expConditionButton" type="button">Top</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="GPCondition">
                                    <div class="panel panel-default">
                                        <div class="panel-heading">GP</div>
                                        <ul class="list-group">
                                            <li class="list-group-item expConditionli">
                                                <span class="expConditionFirstSpan">YTD</span>
                                                <button class="btn btn-default expAddConditionbtn fright" type="button">></button>
                                                <span class="expConditionSecSpan">%</span>
                                                <input type="text" class="form-control textalign expInput inputPadding expConditionInput" value="10"/>
                                                <button class="btn btn-default expABButton expConditionButton" type="button">Actual < Budget</button>
                                            </li>
                                            <li class="list-group-item expConditionli">
                                                <span class="expConditionFirstSpan">Last Month</span>
                                                <button class="btn btn-default expAddConditionbtn fright" type="button">></button>
                                                <span class="expConditionSecSpan">%</span>
                                                <input type="text" class="form-control textalign expInput inputPadding expConditionInput" value="10"/>
                                                <button class="btn btn-default expABButton expConditionButton" type="button">Actual < Budget</button>
                                            </li>
                                            <li class="list-group-item expConditionli">
                                                <span class="expConditionFirstSpan">CONSEC 2 Month</span>
                                                <button class="btn btn-default expAddConditionbtn fright" type="button">></button>
                                                <span class="expConditionSecSpan">%</span>
                                                <input type="text" class="form-control textalign expInput inputPadding expConditionInput" value="30"/>
                                                <button class="btn btn-default expUDButton expConditionButton" type="button">↑</button>
                                            </li>
                                            <li class="list-group-item expConditionli">
                                                <span class="expConditionFirstSpan">CONSEC 3 Month</span>
                                                <button class="btn btn-default expAddConditionbtn fright" type="button">></button>
                                                <span class="expConditionSecSpan">%</span>
                                                <input type="text" class="form-control textalign expInput inputPadding expConditionInput" value="30"/>
                                                <button class="btn btn-default expUDButton expConditionButton" type="button">↑</button>
                                            </li>
                                            <li class="list-group-item expConditionli">
                                                <span class="expConditionFirstSpan">CONSEC 6 Month</span>
                                                <button class="btn btn-default expAddConditionbtn fright" type="button">></button>
                                                <span class="expConditionSecSpan">%</span>
                                                <input type="text" class="form-control textalign expInput inputPadding expConditionInput" value="30"/>
                                                <button class="btn btn-default expUDButton expConditionButton" type="button">↑</button>
                                            </li>
                                            <li class="list-group-item expConditionli">
                                                <span style="float:left;line-height:36px;font-size:10px;" title="Quarter-on-Quarter">QOQ</span>
                                                <button class="btn btn-default expAddConditionbtn fright" type="button">></button>
                                                <span class="expConditionSecSpan">%</span>
                                                <input type="text" class="form-control textalign expInput inputPadding expConditionInput" value="30"/>
                                                <button class="btn btn-default expUDButton expConditionButton" type="button">↑</button>
                                            </li>
                                            <li class="list-group-item expConditionli">
                                                <span style="float:left;line-height:36px;font-size:10px;" title="Year-over-Year">YoY</span>
                                                <button class="btn btn-default expAddConditionbtn fright" type="button">></button>
                                                <span class="expConditionSecSpan">%</span>
                                                <input type="text" class="form-control textalign expInput inputPadding expConditionInput" value="30"/>
                                                <button class="btn btn-default expUDButton expConditionButton" type="button">↑</button>
                                            </li>
                                            <li class="list-group-item expConditionli">
                                                <span class="expConditionFirstSpan">Last 3 Month</span>
                                                <button class="btn btn-default expAddConditionbtn fright" type="button">></button>
                                                <span class="expConditionSecSpan">%</span>
                                                <input type="text" class="form-control textalign expInput inputPadding expConditionInput" value="20"/>
                                                <button class="btn btn-default expTopButton expConditionButton" type="button">Bottom</button>
                                            </li>
                                            <li class="list-group-item expConditionli">
                                                <span class="expConditionFirstSpan">Last 6 Month</span>
                                                <button class="btn btn-default expAddConditionbtn fright" type="button">></button>
                                                <span class="expConditionSecSpan">%</span>
                                                <input type="text" class="form-control textalign expInput inputPadding expConditionInput" value="20"/>
                                                <button class="btn btn-default expTopButton expConditionButton" type="button">Bottom</button>
                                            </li>
                                            <li class="list-group-item expConditionli">
                                                <span class="expConditionFirstSpan">Last 12 Month</span>
                                                <button class="btn btn-default expAddConditionbtn fright" type="button">></button>
                                                <span class="expConditionSecSpan">%</span>
                                                <input type="text" class="form-control textalign expInput inputPadding expConditionInput" value="20"/>
                                                <button class="btn btn-default expTopButton expConditionButton" type="button">Bottom</button>
                                            </li>
                                            <li class="list-group-item expConditionli">
                                                <span class="expConditionFirstSpan">Last 3 Month</span>
                                                <button class="btn btn-default expAddConditionbtn fright" type="button">></button>
                                                <span class="expConditionSecSpan">%</span>
                                                <input type="text" class="form-control textalign expInput inputPadding expConditionInput" value="20"/>
                                                <button class="btn btn-default expTopButton expConditionButton" type="button">Top</button>
                                            </li>
                                            <li class="list-group-item expConditionli">
                                                <span class="expConditionFirstSpan">Last 6 Month</span>
                                                <button class="btn btn-default expAddConditionbtn fright" type="button">></button>
                                                <span class="expConditionSecSpan">%</span>
                                                <input type="text" class="form-control textalign expInput inputPadding expConditionInput" value="20"/>
                                                <button class="btn btn-default expTopButton expConditionButton" type="button">Top</button>
                                            </li>
                                            <li class="list-group-item expConditionli">
                                                <span class="expConditionFirstSpan">Last 12 Month</span>
                                                <button class="btn btn-default expAddConditionbtn fright" type="button">></button>
                                                <span class="expConditionSecSpan">%</span>
                                                <input type="text" class="form-control textalign expInput inputPadding expConditionInput" value="20"/>
                                                <button class="btn btn-default expTopButton expConditionButton" type="button">Top</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-1" style="padding-left:10px;padding-right:0px;margin-top:15px;">
                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        Mode
                                    </div>
                                    <ul class="list-group">
                                        <li class="list-group-item cursorclass textalign expMode">ALL</li>
                                        <li class="list-group-item cursorclass textalign expMode">AE</li>
                                        <li class="list-group-item cursorclass textalign expMode">AI</li>
                                        <li class="list-group-item cursorclass textalign expMode">OE</li>
                                        <li class="list-group-item cursorclass textalign expMode">OI</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-sm-5" style="padding-left:10px;padding-right:0px;margin-top:15px;" id="expCondition">
                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        <div style="float:left;">
                                            <button type="button" class="btn btn-default">SEARCH</button>
                                            <button type="button" class="btn btn-default">CLEAR</button>
                                        </div>
                                        <div class="input-group" style="width:205px; padding-left:10px;">
                                            <input type="text" class="form-control">
                                            <span class="input-group-btn">
                                                <button class="btn btn-default" type="button">SAVE</button>
                                            </span>
                                        </div>

                                    </div>
                                    <div class="panel-body">
                                        <div class="divblock"><h2>PICK CONDITION</h2></div><br />
                                        <div class="divblock">1. PICK CONDITION ON THE LEFT AND CLICK ">"</div><br />
                                        <div class="divblock">2. PICK ANY SPECIFIC "MODE" ONLY IF YOU DO NOT LIKE TO ANALYZE ALL SERVICE</div><br />
                                        <div class="divblock">3. ONCE ALL CONDITIONS ARE PICKED,CLICK "SEARCH"</div><br />
                                        <div class="divblock">4. COMPLETED(SCROLL DOWN TO SEE RESULTS)</div>
                                        
                                        <!--<ul class="list-group">
                                            <li class="list-group-item">
                                                <div class="input-group">
                                                    <span class="input-group-addon" style="width:110px;"></span>
                                                    <span class="input-group-addon"></span>
                                                    <span class="input-group-addon noLeftRightBorder"></span>
                                                    <span class="input-group-addon inputPadding" style="width:44px;"></span>
                                                    <span class="input-group-btn">
                                                        <button class="btn btn-default expConditionDel" type="button">X</button>
                                                    </span>
                                                </div>
                                            </li>
                                        </ul>-->
                                    </div>
                                    <ul class="list-group"></ul>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="cus">

                        </div>
                        <div class="tab-pane fade" id="lane">

                        </div>

                    </div>
                </div>
<script type="text/javascript">
$(function () {
    //Explore 点击事件
    $(".expTopButton").click(function () {
        var e = $(this);
        if (e.text() == 'Top') {
            e.text('Bottom');
        }
        else {
            e.text('Top');
        }
    });
    //Explore 点击事件
    $(".expABButton").click(function () {
        var e = $(this);
        if (e.text() == 'Actual < Budget') {
            e.text('Actual > Budget');
        }
        else {
            e.text('Actual < Budget');
        }
    });
    //Explore ↑↓点击事件
    $(".expUDButton").click(function () {
        var e = $(this);
        //e.css("background-color", "#43b5e8").css("text-decoration", "underline");
        //$("div", ".module").not(e).css("background-color", "#ffffff").css("text-decoration", "none");
        if (e.text() == '↑') {
            e.text('↓');
        }
        else {
            e.text('↑');
        }
    });
    //Explore Mode选择
    $(".expMode").click(function () {
        var e = $(this);
        //e.css("background-color", "#43b5e8").css("text-decoration", "underline");
        //$(".expMode").not(e).css("background-color", "#ffffff").css("text-decoration", "none");
        if (!e.hasClass("divselected")) {
            e.addClass("divselected").addClass("textunder");
        }
        else {
            e.removeClass("divselected").removeClass("textunder");
        }
        //$(".expMode").not(e).removeClass("divselected").removeClass("textunder");
    });
    //点击Pick Condition
    //$("li", "#collapseTwo").click(function () {
    //    var e = $(this);
    //    if (!e.hasClass("divselected")) {
    //        e.addClass("divselected").addClass("textunder");
    //    }
    //    $("li", "#collapseTwo").not(e).removeClass("divselected").removeClass("textunder");
    //});
    //$("li", "#collapseTwo").click(function () {
    //    $(".panel-heading", "#expPreCondition").html($(this).html());
    //});
    $(".expAddConditionbtn").click(function () {
        if ($(".expInput", $(this).parent()).val() != '') {

            $("#expCondition .panel-body").hide();
            var obj = '<li class="list-group-item expConditionli"><span class="expConditionFirstSpan expConditionSpanMar"></span><span class="expConditionFirstSpan expConditionSpanMar"></span><button class="btn btn-default expConditionDel fright" type="button">X</button><span class="expConditionFirstSpan expConditionSpanMar fright"></span><span class="expConditionFirstSpan expConditionSpanMar fright"></span></li>';
            $("#expCondition ul").append(obj);
            var v1 = $(".panel-heading", $(this).parent().parent().parent()).html();
            var v2 = $("span:eq(0)", $(this).parent()).html();
            var v3 = $("button:eq(1)", $(this).parent()).html();
            var v4 = $("input:first", $(this).parent()).val() + " %";


            $("#expCondition ul li:last span:eq(0)").html(v1+":");
            
            $("#expCondition ul li:last span:eq(1)").html(v2);
            
            $("#expCondition ul li:last span:eq(2)").html(v4);
            
            $("#expCondition ul li:last span:eq(3)").html(v3);
            $(this).attr("disabled", "disabled");
            $("#expCondition .expConditionDel").click(function () {
                $(this).parent().remove();
                if ($("#expCondition ul li").length == 0) {
                    $("#expCondition .panel-body").show();
                }
                var condition1 = $("span:eq(0)", $(this).parent()).html();
                var condition2 = $("span:eq(1)", $(this).parent()).html();
                var r = $("#expPreCondition .panel-heading");
                for (var i = 0; i < r.length; i++) {
                    //if ($(r[i]).html() == condition1) {
                    //    var con2 = $("span", $(r[i]).parent());
                    //    for (var j = 0; j < con2.length; j++) {
                    //        if ($(con2[j]).html() == condition2) {
                    //            $(".expAddConditionbtn", $(con2[j]).parent()).removeAttr("disabled");
                    //        }
                    //    }
                    //}


                    var con2 = $("span", $(r[i]).parent());
                    for (var j = 0; j < con2.length; j++) {
                        if ($(con2[j]).html() == condition2) {
                            $(".expAddConditionbtn", $(con2[j]).parent()).removeAttr("disabled");
                        }
                        if ($(r[i]).html()+":"+$(con2[j]).html()==condition1+condition2) {
                            $(".expAddConditionbtn", $(con2[j]).parent()).removeAttr("disabled");
                        }
                    }
                }
            });
            //if ($("#expCondition ul").length < 1) {
            //    $("#expCondition .panel-body").hide();
            //    var obj = '<ul class="list-group"><li class="list-group-item"><div class="input-group"><span class="input-group-addon" style="width:110px"></span> <span class="input-group-addon"></span> <span class="input-group-addon noLeftRightBorder"></span> <span class="input-group-addon inputPadding"  style="width:44px;"></span> <span class="input-group-btn"><button class="btn btn-default expConditionDel" type="button">X</button></span></div></li></ul>';
            //    $("#expCondition .panel-default").append(obj);
            //    var v1 = $(".panel-heading", $(this).parent().parent().parent().parent().parent()).html();
            //    $("#expCondition ul span:eq(0)").html(v1);
            //    var v2 = $("span:eq(0)", $(this).parent().parent()).html();
            //    $("#expCondition ul span:eq(1)").html(v2);
            //    var v3 = $("span:eq(1) button", $(this).parent().parent()).html();
            //    $("#expCondition ul span:eq(2)").html(v3);
            //    var v4 = $("input:first", $(this).parent().parent()).val() + " %";
            //    $("#expCondition ul span:eq(3)").html(v4);
            //    $(this).attr("disabled", "disabled");
            //    $("#expCondition .expConditionDel").click(function () {
            //        if ($("#expCondition ul li").length == 1) {
            //            $(this).parent().parent().parent().parent().remove();
            //            $("#expCondition .panel-body").show();
            //        }
            //        else {
            //            $(this).parent().parent().parent().remove();
            //        }
            //    });
            //}
            //else {
            //    var obj = '<li class="list-group-item"><div class="input-group"><span class="input-group-addon" style="width:110px"></span> <span class="input-group-addon"></span> <span class="input-group-addon noLeftRightBorder"></span> <span class="input-group-addon inputPadding" style="width:44px;"></span> <span class="input-group-btn"><button class="btn btn-default expConditionDel" type="button">X</button></span></div></li>';
            //    $("#expCondition ul").append(obj);
            //    var v1 = $(".panel-heading", $(this).parent().parent().parent().parent().parent()).html();
            //    $("#expCondition ul li:last span:eq(0)").html(v1);
            //    var v2 = $("span:eq(0)", $(this).parent().parent()).html();
            //    $("#expCondition ul li:last span:eq(1)").html(v2);
            //    var v3 = $("span:eq(1) button", $(this).parent().parent()).html();
            //    $("#expCondition ul li:last span:eq(2)").html(v3);
            //    var v4 = $("input:first", $(this).parent().parent()).val() + " %";
            //    $("#expCondition ul li:last span:eq(3)").html(v4);
            //    $(this).attr("disabled", "disabled");
            //    $("#expCondition .expConditionDel").click(function () {
            //        if ($("#expCondition ul li").length == 1) {
            //            $(this).parent().parent().parent().parent().remove();
            //            $("#expCondition .panel-body").show();
            //        }
            //        else {
            //            $(this).parent().parent().parent().remove();
            //        }
            //    });
            //}
        }
    });
});
</script>