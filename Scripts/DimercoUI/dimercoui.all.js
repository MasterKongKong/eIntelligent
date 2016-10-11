(function ($) {
    
    window.dimercoUI = $.dimercoUI = {
        version: "V3.0.1",
        webPath: "v3/api"
    };


    dimercoUI.request = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return decodeURI(r[2]); return "";
    }


    $.fn.dimercoGrid = function (options) {
        var options = $.extend({}, $.fn.dimercoGrid.defaultOptions, options || {});
        var _para = {
            method: "POST",
            contentType: "application/json",
            url: this.webPath + "/" + this.dllName + "/" + this.nameSpace + "/" + this.className + "/" + this.functionName
        };


    };
    $.fn.dimercoGrid.defaultOptions = {
        webPath: dimercoUI.webPath,
        dllName: "",
        nameSpace: "",
        className: "",
        functionName: ""
    };
            
            


    dimercoUI.Module = {
        eAMS: "DIMERCO.eAMS",
        eOMS: "DIMERCO.eOMS",
    };


    dimercoUI.Form = {
        BindData: function (para) {

            $.ajax({
                url: $.dimercoUI.webPath + "/" + para.ddlName + "/" + para.nameSpace + "/" + para.className + "/" + para.functionName,
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
        },
        SaveData: function (para) {
            $.ajax({
                url: $.dimercoUI.webPath + "/" + para.ddlName + "/" + para.nameSpace + "/" + para.className + "/" + para.functionName,
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
            });;
        }
    }

    //$.extend(dimercoUI.Form, {
    //    LoadData: function (callback) {
    //        var g = this, p = this.options;
    //        alert("22");
    //    }
    //});

    dimercoUI.Dialog = {
        SMD: function (para) {
            var _para = {
                title: "Dialog",
                modal: true,
                showMax: false,
                showToggle: true,
                showMin: false,
                isResize: true,
                width: $(window).width() - 10,
                height: $(window).height() - 38,
                url: ""
            };
            para = $.extend({}, _para, para);
            $.ligerDialog.open({ title: para.title, width: para.width, height: para.height, url: para.url, modal: true });
        }
    };

})(jQuery);