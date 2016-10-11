function mLang() {
    $(".lang").each(function () {
        var _val = $(this).val();
        var _txt = $(this).text();
        if (_val != "")
            $(this).val(Label[_val]);
        else if (_txt != "")
            $(this).text(Label[_txt]);
    });
}

function loadData(para) {
    $.ajax({
        url: $.dimercoUI.webPath + para.URI,
        type: "POST",
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify(para.data),
        success: function (n) {
            if (n.hasOwnProperty("sourceException")) {
                alert(n);
                return;
            }
            para.succ(n);
        },
        error: function (n) {
            alert(n);
        }
    });
}

(function ($) {

    window.dimercoUI = $.dimercoUI = {
        version: "V3.0.0",
        webPath: "/v3/api"
    };    

    window.dimercoURI = $.dimercoURI = {
        getMenu: "",
        AE: {
            ControlBankSearch: "/DimercoBO.SDK/DimercoBO.SDK/clseChainVP/GetUserPageConfig",
            ControlBankEdit: ""
        },
        AI: {},
        OE: {},
        OI: {},
        SM: {}
    };

})(jQuery);
    