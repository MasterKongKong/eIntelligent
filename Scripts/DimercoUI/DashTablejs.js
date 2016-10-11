function SelectYear() {
    $("#DashPLYear").change(function () {
        
        
        var myDates = new Date();
        var PLParas = {
            _UserID: "A0001",
            _Year: myDates.getFullYear().toString()
        };
        //var t = setTimeout('$("#loading_PL").fadeOut(500)', 2000)
        $.ajax({
            url: "api/DimercoBO.eIntelligent/DimercoBO.eIntelligent/eIntelligentService/GetPLDataHTML",
            type: "POST",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(PLParas),
            async: true,
            timeout: 10000,
            beforeSend: function () {
                //这里是开始执行方法，显示效果，效果自己写
                $("#loading_PL").show();
            },
            complete: function () {
                //方法执行完毕，效果自己可以关闭，或者隐藏效果
                $("#loading_PL").fadeOut(500);
            },
            success: function (n) {
                if (n.hasOwnProperty("sourceException")) {
                    alert(JSON.stringify(n));
                    return;
                }
                var r = $("#tbodyPROFITLOSS").html();
                $("#tbodyPROFITLOSS").empty();
                $("#tbodyPROFITLOSS").append(r);
                
            },
            error: function (en) {
                alert(JSON.stringify(en));
            }
        });
    });
}

function GetPLData(para) {
    $.ajax({
        url: "api/DimercoBO.eIntelligent/DimercoBO.eIntelligent/eIntelligentService/GetPLDataHTML",
        type: "POST",
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify(para),
        async: false,
        timeout: 3000,
        success: function (n) {
            if (n.hasOwnProperty("sourceException")) {
                alert(n);
                return;
            }
            $("#tbodyPROFITLOSS").append(n);
        },
        error: function (en) {
            alert(en);
        }
    });
}
//生成chart缩微图
function CreateSparkLine() {
    Highcharts.SparkLine = function (a, b, c) {
        var hasRenderToArg = typeof a === 'string' || a.nodeName,
            options = arguments[hasRenderToArg ? 1 : 0],
            defaultOptions = {
                chart: {
                    renderTo: (options.chart && options.chart.renderTo) || this,
                    backgroundColor: null,
                    borderWidth: 0,
                    type: 'spline',
                    margin: [2, 0, 2, 0],
                    width: 50,//TODO:限定图表宽度
                    height: 20,
                    style: {
                        overflow: 'visible'
                    },
                    skipClone: true
                },
                title: {
                    text: ''
                },
                credits: {
                    enabled: false
                },
                exporting: {
                    enabled: false
                },
                xAxis: {
                    labels: {
                        enabled: false
                    },
                    title: {
                        text: null
                    },
                    startOnTick: false,
                    endOnTick: false,
                    tickPositions: [],
                    lineColor: "#fff" //TODO：设置x轴的颜色，隐藏x轴
                },
                yAxis: {
                    endOnTick: false,
                    startOnTick: false,
                    labels: {
                        enabled: false
                    },
                    title: {
                        text: null
                    },
                    tickPositions: [0]
                },
                legend: {
                    enabled: false
                },
                tooltip: {
                    enabled: false //TODO：设置关闭鼠标悬停效果
                },
                plotOptions: {
                    series: {
                        animation: false,
                        lineWidth: 1,
                        shadow: false,
                        states: {
                            hover: {
                                enabled: false,
                                lineWidth: 1
                            }
                        },
                        marker: {
                            radius: 1,
                            states: {
                                hover: {
                                    radius: 2
                                }
                            }
                        },
                        fillOpacity: 0.25
                    },
                    column: {
                        negativeColor: '#910000',
                        borderColor: 'silver'
                    }
                }
            };
        options = Highcharts.merge(defaultOptions, options);
        return hasRenderToArg ?
            new Highcharts.Chart(a, options, c) :
        new Highcharts.Chart(options, b);
    };
    var start = +new Date(),
        $tds = $('td[data-sparkline]'),
        fullLen = $tds.length,
        n = 0;

    function doChunk() {
        var time = +new Date(),
            i,
            len = $tds.length,
            $td,
            stringdata,
            arr,
            data,
            chart;
        for (i = 0; i < len; i += 1) {
            $td = $($tds[i]);
            stringdata = $td.data('sparkline');
            arr = stringdata.split('; ');
            data = $.map(arr[0].split(', '), parseFloat);
            chart = {};
            if (arr[1]) {
                chart.type = arr[1];
            }
            $td.highcharts('SparkLine', {
                series: [{
                    data: data,
                    pointStart: 1
                }],
                tooltip: {
                    headerFormat: '<span>' + $td.parent().find('th').html() + ', Q{point.x}:</span><br/>',
                    pointFormat: '<b>{point.y}.000</b> USD'
                },
                chart: chart
            });
            n += 1;
        }
    }
    doChunk();
}