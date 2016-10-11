var ORM = [] || ORM;
ORM.Tip = [];
ORM.WebPath = "/ORMManage";
ORM.FormType = "insert";
ORM.Type = {
	Insert: "insert",
	Update: "update",
	Delete: "delete"
};
ORM.Process = {
	Dictionary: "AP00000020",
	DictionaryCode: "AP00000014",
	DictionaryForm: "AP00000015"
};
ORM.Handler = {
	mapping: ORM.WebPath + "/handler/MappingHandler.ashx",
	binding: ORM.WebPath + "/handler/BindingHandler.ashx",
	commond: ORM.WebPath + "/handler/CommonHandler.ashx",
	script: ORM.WebPath + "/handler/ScriptHandler.ashx",
	download: ORM.WebPath + "/handler/DownloadHandler.ashx",
	uploadify: ORM.WebPath + "/handler/CommonHandler.ashx?op=Uploadify&&classname=ConfigClass"
};
ORM.POST = function (url, para, callback) {
    //para.timespan = new Date().toGMTString();
	$.ajax({
		type: "POST",
		url: url,
		data: JSON.stringify(para),
		async: false,
		dataType: "json",
		contentType: "application/json",
		success: function (data) {
			if (data.ReturnStatus == "false") {
				$.ligerDialog.error(data.ReturnData);
				return;
			} else
				callback(data);
		}, error: function (XH, status, response) {
			alert(0);
			$.ligerDialog.error(status);
		}
	});
};
ORM.Ajax = function (url, para, callback) {
	//para.timespan = new Date().toGMTString();
	$.ajax({
		type: "GET",
		url: url,
		data: para,
		async: false,
		dataType: "json",
		success: function (data) {
			if (data.ReturnStatus == "false") {
				$.ligerDialog.error(data.ReturnData);
				return;
			} else
				callback(data);
		}, error: function (XH, status, response) {
			$.ligerDialog.error(status);
		}
	});
};
ORM.AjaxURL = function (url, para) {
    var _data;
    $.ajax({
        type: "GET",
        url: url,
        data: para,
        async: false,
        dataType: "json",
        success: function (data) {
            _data = data;
        }, error: function (XH, status, response) {
            $.ligerDialog.error(status);
        }
    });
    return _data;
};

ORM.Dialog = {
	Open: function (para) {
		var _para = {
			title: "窗口",
			modal: true,
			showMax: false,
			showToggle: true,
			showMin: false,
			isResize: true,
			width: $(window).width() + 10,
			height: $(window).height()+38,
			url: ""
		};
		para = $.extend({}, _para, para);
		$.ligerDialog.open({title:para.title,width:para.width, height: para.height, url: para.url,modal:para.modal });
	},
	Tips: function (message) {
		var _para = { title: '消息', content: message };
		if (parent) {
			if (parent.parent) {
				if (parent.parent.parent) {
					ORM.Tip.push(parent.parent.parent.$.ligerDialog.tip(_para));
				}
				else {
					ORM.Tip.push(parent.parent.$.ligerDialog.tip(_para));
				}
			} else {
				ORM.Tip.push(parent.$.ligerDialog.tip(_para));
			}
		} else {
			ORM.Tip.push($.ligerDialog.tip(_para));
		}
		setTimeout(function () {
			if (ORM.Tip.length > 0) {
				ORM.Tip[0].close();
				ORM.Tip.splice(0, 1);
			}
		}, 3000);
	},
	Waitting: function () {
		$.ligerDialog.waitting('正在执行操作,请稍候...');
	},
	WaittingClose: function () {
		$.ligerDialog.closeWaitting();
	},
	Confirm: function (callback) {
		if (parent) {
		    if (parent.parent) {
		        if (parent.parent.parent) {
		            parent.parent.parent.$.ligerDialog.confirm('是否提交选中项？', function (yes) {
		                if (yes) {
		                    callback();
		                }
		            });
		        }
		        else {
		            parent.parent.$.ligerDialog.confirm('是否提交选中项？', function (yes) {
		                if (yes) {
		                    callback();
		                }
		            });
		        }
		    } else {
		        parent.$.ligerDialog.confirm('是否提交选中项？', function (yes) {
		            if (yes) {
		                callback();
		            }
		        });
		    }
		} else {
		    $.ligerDialog.confirm('是否提交选中项？', function (yes) {
		        if (yes) {
		            callback();
		        }
		    });
		}
	},
	CallbackDialog: function (para) {
		var _para = { url: "", width: $(window).width() - 50, height: $(window).height() - 120 };
		para = $.extend({}, _para, para);
		var _height = $(window).height() - 50;
		$.ligerDialog.open({
			title:para.title,url: para.url, width: para.width, height: para.height,top:para.top, buttons: [{
				text: '确定', onclick: function (item, dialog) {
					var fn = dialog.frame || dialog.frame.window;
					para.sureevent(fn, dialog);
				}
			}, {
				text: '取消', onclick: function (item, dialog) {
					dialog.close();
				}
			}]
		});
	},
	PageDialog: function (para) {
		var _para = { grid: "grid", type: "url", url: "", action: "" };
		para = $.extend({}, _para, para);
		//alert(para.width);
		var _width = para.width == null ? $(window).width() - 50 : para.width;
		var _height = para.height == null ? $(window).height() - 50 : para.height;
		$.ligerDialog.open({title:para.title,
			url: para.url, width:_width , height: _height, buttons: [{
				text: '确定', onclick: function (item, dialog) {
					var fn = dialog.frame.Page.Function.GetGrid || dialog.frame.window.Page.Function.GetGrid;
					var data = fn().getCheckedRows();
					$.ligerDialog.confirm('是否提交选中项？', function (yes) {
						if (yes) {
							para.callback(data);
							dialog.close();
						} else {
							dialog.close();
						}
					});
				}
			}, {
				text: '取消', onclick: function (item, dialog) {
					dialog.close();
				}
			}]
		});
	}
};
ORM.Page = function (url) {
	var _get;
	$.ajax({
		url: url,
		context: document.body,
		cache: false,
		async: false,
		success: function (data) {
			_get = data;
		}
	});
	return _get;
};
ORM.Request = {
	QueryString: function (code) {
		var reg = new RegExp("(^|&)" + code + "=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if (r != null) return unescape(r[2]); return null;
	},
	QueryURL: function (url,code) {
		var reg = new RegExp("(^|&)" + code + "=([^&]*)(&|$)");
		var r = url.substr(1).match(reg);
		if (r != null) return unescape(r[2]); return null;
	}
};
ORM.Dictionary = function (key) {
	return eval(ORM.Config.Action(ORM.Process.Dictionary, { ParentCode: key }).ReturnData);
};
ORM.DictionaryModel = function (key) {
	return eval(ORM.Config.Action(ORM.Process.DictionaryForm, { Name: key }).ReturnData)[0];
};
ORM.DictionarySource = function () {
	return eval(ORM.Config.Action(ORM.Process.DictionaryCode).ReturnData);
};
ORM.Config = {
	//进程执行方法code:ProcessID, para:进程参数
	Action: function (code,para) {
		var _get = {};
		var _para = {op:code};
		if (para != null) {
			for (var i in para) {
				_para[i] = para[i];
			}
		}
		ORM.Ajax(ORM.Handler.mapping, _para, function (data) {
			_get = data;
			if (_get.ReturnStatus == "false") {
				$.ligerDialog.error(data.ReturnData);
				data.ReturnData == "";
			}
		});
		return _get;
	},
	Download: function (ProcessID,para, Filters, FormID) {
		if ($("#Tips")) {
			$("#Tips").html("<a class='l-button' >正在下载</a>");
		} else {
			ORM.Dialog.Waitting();
		};
		var _para = { op: ProcessID };
		para = $.extend({}, _para, para);
		ORM.Ajax(ORM.Handler.download, para, function (data) {
			FormID = FormID == null ? "aspnetForm" : FormID;
			//alert(JSON.stringify(data));
			$("#" + FormID).attr("src", data.ReturnData);
			if ($("#Tips")) {
				if (data.ReturnStatus == "false")
					$("#Tips").html("下载失败-" + data.ReturnData);
				else
					$("#Tips").html("<a class='l-button' href='" + data.ReturnData + "'><div class='l-img-excel'></div>下载文件</a>");
			} else {
				ORM.Dialog.WaittingClose();
			}
		});
	},
	Binding: function (code, para) {
		var _get = {};
		var _para = { op: code };
		if (para != null) {
			for (var i in para) {
				_para[i] = para[i];
			}
		}
		ORM.Ajax(ORM.Handler.binding, _para, function (data) {
			_get = data;
			if (_get.ReturnStatus == "false") {
				$.ligerDialog.error(data.ReturnData);
				data.ReturnData == "";
			}
		});
		return _get;
	},
	//调用系统方法 
	Load: function (para, callback) {
		ORM.Ajax(ORM.Handler.commond, para, function (data) {
			callback(data);
		});
	},
	LoadData: function (para) {
		var _get = {};
		ORM.Ajax(ORM.Handler.commond, para, function (data) {
			_get = data;
		});
		return _get;
	},
	Post: function (para,callback) {
		ORM.POST(ORM.Handler.commond, para, function (data) {
			callback(data);
		});
	},
	PostData: function (para) {
		var _get = {};
		ORM.POST(ORM.Handler.commond, para, function (data) {
			_get = data;
		});
		return _get;
	},
	Form: {
		//绑定表单数据（process:进程编号，para:传值参数）
		BindData: function (process, para, callback,formId) {
			var _temp = { op: process };
			para = $.extend(_temp, para);
			ORM.Ajax(ORM.Handler.binding, para, function (data) {
				//alert(data.ReturnData);
				if (data.ReturnData != null) {
					var paralist = data.ReturnData;
					//alert(JSON.stringify(paralist));
					//获取进程数据对象 绑定表单值；
					var _data = {};
					$.each(paralist, function () {
						var _name = this.ParameterName;
						var _value = this.ParameterValue;
						_data[_name] = _value;
					});
					var form = liger.get(formId == null ? "aspnetForm" : formId);
					if (typeof (form) == "undefined") { alert("无法找到表单对象"); return; }
					form.setData(_data);
					callback(_data);
				} else {
					callback(null);
				}
			});
		},
		//提交表单数据
		SumbitForm: function (process, para, callback, formId) {
			var _para = { op: process };
			//获取表单值，转换为 对象 数据；
			var form = liger.get(formId == null ? "aspnetForm" : formId);
			if (typeof (form) == "undefined") { alert("无法找到表单对象"); return; }
			if (form.valid()) {
				ORM.Dialog.Confirm(function () {
					var _formdata = form.getData();
					_para = $.extend(_formdata, _para);
					_para = $.extend(_para, para);
					//执行 异步提交操作
					ORM.Dialog.Waitting();
					ORM.POST(ORM.Handler.mapping, _para, function (data) {
						if (data.ReturnStatus == "true") {
							ORM.Dialog.WaittingClose();
							var sucess = '<p style="color:#00ff21; font-size:16px;">操作执行成功!</p><br/>执行时间：' + data.RetrunTime + 's';
							var faild = '<p style="color:#f00; font-size:16px;">操作执行失败!</p><br/>执行时间：' + data.RetrunTime + 's';
							ORM.Dialog.Tips((data.ReturnData == "error" ? faild : sucess));
							callback(data);
						}
						else {
							$.ligerDialog.error(data.ReturnData)
						}
					});
				});
			}
		},
		//提交异步数据
		SumbitData: function (process, para, callback, isTips) {
			var _temp = { op: process };
			para = $.extend(_temp, para);
			ORM.Dialog.Waitting();
			ORM.Ajax(ORM.Handler.mapping, para, function (data) {
				if (data.ReturnStatus == "true") {
					ORM.Dialog.WaittingClose();
					var sucess = '<p style="color:#00ff21; font-size:16px;">操作执行成功!</p><br/>执行时间：' + data.RetrunTime + 's';
					var faild = '<p style="color:#f00; font-size:16px;">操作执行失败!</p><br/>执行时间：' + data.RetrunTime + 's';
					if (isTips == null) ORM.Dialog.Tips((data.ReturnData == "error" ? faild : sucess));
					callback(data);
				}
				else {
					$.ligerDialog.error(data.ReturnData)
				}
			});
		},
		//批量提交异步数据
		SumbitDataMore: function (process, para, callback) {
			var _temp = { op: process };
			para = $.extend(_temp, para);
			ORM.Ajax(ORM.Handler.mapping, para, function (data) {
				if (data.ReturnStatus == "true") {
					ORM.Dialog.WaittingClose();
					var sucess = '<p style="color:#00ff21; font-size:16px;">操作执行成功!</p><br/>执行时间：' + data.RetrunTime + 's';
					var faild = '<p style="color:#f00; font-size:16px;">操作执行失败!</p><br/>执行时间：' + data.RetrunTime + 's';
					var messages = (data.ReturnData == "error" ? faild : sucess);
					ORM.Dialog.Tips(messages);
					callback(data);
				}
				else {
					$.ligerDialog.error(data.ReturnData)
				}
			});
		},
		//批量删除
		SumbitListDelete: function (config) {
			var _config = {
				process: config.process,
				para: config.para,
				callback: config.callback,
				key: config.key,
				listid: config.listid
			};
			ORM.Config.Form.SumbitListDelete(_config.process, _config.para, _config.callback, _config.key, _config.listid);
		},
		//批量删除
		SumbitListDelete: function (process, para, callback, search, listid) {
			ORM.Dialog.Confirm(function () {
				var grid = $("#" + (listid == null ? "maingrid" : listid));
				if (typeof (grid) == "undefined") { alert("无法找到表单对象"); return; }
				var rows = grid.ligerGetGridManager().getCheckedRows();
				if (rows.length == 0) {
					ORM.Dialog.Tips("没有选中项！");
					return;
				} else {
					search = (search == null ? "ID" : search);
					var _para = { formtype: ORM.Type.Delete };
					ORM.Dialog.Waitting();
					$.each(rows, function (i) {
						if (typeof search == "string") _para[search] = this[search];
						else {
							for (var i in search) {
								if (search[i] == "") {
									_para[i] = rows[0][i];
								} else {
									_para[i] = search[i];
								}
							}
						}
						para = $.extend(_para, para);
						ORM.Config.Form.SumbitDataMore(process, para, function (data) {
							if (i == (rows.length - 1)) {
								grid.ligerGetGridManager().loadData();
								callback(data);
							}
						});
					});
				}
			});
		},
		//获取选中行，会话框
		SumbitListRows: function (callback, listid) {
			ORM.Dialog.Confirm(function () {
				var grid = $("#" + (listid == null ? "maingrid" : listid));
				if (typeof (grid) == "undefined") { alert("无法找到表单对象"); return; }
				var rows = grid.ligerGetGridManager().getCheckedRows();
				if (rows.length == 0) {
					ORM.Dialog.Tips("没有选中项！");
					return;
				} else {
					callback(rows);
				}
			});
		}
	},
	List: {
		OpenPage: function (config) {
			var _config = {
				tabid: config.tabid,
				listid: config.listid,
				title: config.title,
				url: config.url,
				para: config.para,
				type: config.type,
				width: config.width,
				height: config.height
			};
			var _para = "?timespan=" + new Date().toString();
			for (var i in _config.para) {
				_para += "&&" + i + "=" + _config.para[i];
			}
			_config.url = _config.url + _para;
			switch (_config.type) {
				case "tab":
					_config.tabid = _config.tabid == "" ? new Date().toGMTString() : _config.tabid;
					parent.Page.Function.addTabPage(_config.tabid, _config.title, _config.url);
					break;
				case "page":
					window.location.href = _config.url;
					break;
				case "window":
					ORM.Dialog.Open({ title: _config.title, width: _config.width, height: _config.height, url: _config.url });
					break;
			}
		},
		OpenListPage: function (config) {
			var _config = {
				tabid: config.tabid,
				listid: config.listid,
				title: config.title,
				titlecol: config.titlecol,
				url: config.url,
				para: config.para,
				type: config.type,
				width: config.width,
				height: config.height
			};
			_config.listid = _config.listid == null ? "maingrid" : _config.listid;
			var grid = $("#" + _config.listid);
			if (typeof (grid) == "undefined") { alert("无法找到表单对象"); return; }
			var _rows = grid.ligerGetGridManager().getCheckedRows();
			if (_rows.length == 0) {
				ORM.Dialog.Tips("没有选中项！");
				return;
			} else {
				for (var i in _config.para) {
					var _value = _rows[0][i];
					if (_config.para[i] == "") {
						_config.para[i] = _value;
						_config.tabid += _value;
					}
				}
				if (_config.titlecol) {
					_config.title += _rows[0][_config.titlecol];
				}
				ORM.Config.List.OpenPage(_config);
			}
		},
		ActionData: function (config) {
			var _config = {
				listid: config.listid,
				process: config.process,
				para: config.para,
				callback: config.callback
			};
			_config.listid = _config.listid == null ? "maingrid" : _config.listid;
			var grid = $("#" + _config.listid);
			if (typeof (grid) == "undefined") { alert("无法找到表单对象"); return; }
			var $grid = grid.ligerGetGridManager();
			var _rows = $grid.getCheckedRows();
			if (_rows.length == 0) {
				ORM.Dialog.Tips("没有选中项！");
				return;
			} else {
				var _para = {};
				//添加为空值对象
				for (var i in _config.para) {
					if (_config.para[i] == "") {
						_para[i] = "";
					}
				};
				$grid.reload();
				//alert(JSON.stringify(_config.para));
				ORM.Dialog.Confirm(function () {
					for (count = 0; count < _rows.length; count++) {
						//复制空值对象
						for (var i in _para) {
							_para[i] = _rows[count][i];
						};
						//合并参数
						_config.para = $.extend(_config.para, _para);
						//alert(JSON.stringify(_config.para));
						var tips = null;
						if (count == _rows.length - 1) tips = "true";
						ORM.Config.Form.SumbitData(_config.process, _config.para, function () {
							if (count == _rows.length - 1) {
								$grid.loadData();
							}
						}, tips);
					}
				});
			}
		}
	}
};