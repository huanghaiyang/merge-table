// 表格工具
var TableUtils = (function() {
	// 列标志
	var headCellTags = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

	var headCellTagsNum = (function() {
		var that = {};
		for (var i = 0; i < headCellTags.length; i++) {
			that[headCellTags[i]] = i + 1;
		}
		return that;
	}());

	return {
		// 获取右侧相邻的节点
		nextSibling: function(ele) {
			return ele.nextElementSibling || ele.nextSibling;
		},
		// 当前行的下一行
		nextRow: function(row) {
			var rows = this.fixedTableRows(row.parentNode.parentNode);
			var m = 0;
			for (var i = 0; i < rows.length; i++) {
				if (rows[i] === row) {
					m = i;
					break;
				}
			}
			if (rows[m + 1])
				return rows[m + 1];
			else
				return null;
		},
		preventEvent: function(e) {
			if (e.preventDefault)
				e.preventDefault();
			else
				e.returnValue = false;
			if (e.stopPropagation)
				e.stopPropagation();
			else
				e.cancelBubble = true;
		},
		// 单元格下标转对象
		index2Obj: function(index) {
			if (index) {
				var arr = index.split("_");
				return {
					// cellIndex
					y: parseInt(arr[0]),
					// rowIndex
					x: parseInt(arr[1])
				};
			} else
				return null;
		},
		index2Region: function(index) {
			var arr = index.split("_");
			return arr[2] + "_" + arr[3];
		},
		firstChild: function(ele) {
			return ele.firstElementChild || ele.firstChild
		},
		fixedRowIndex: function(row) {
			var rows = this.fixedTableRows(row.parentNode.parentNode)
			for (var i = 0; i < rows.length; i++) {
				if (rows[i] === row)
					return i;
			}
		},
		fixedTableRows: function(table) {
			var cs = [];
			try {
				cs = Array.prototype.slice.call(table.children);
			} catch (e) {
				for (var i = 0; i < table.children.length; i++)
					cs.push(table.children[i]);
			}
			for (var i = 0; i < cs.length; i++) {
				if (cs[i].tagName.toLowerCase() === "tfoot") {
					var p = cs.slice(0, i);
					var t = cs.slice(i);
					cs = p.concat(t.reverse());
					break;
				}
			}
			var rows = [];
			for (var i = 0; i < cs.length; i++) {
				for (var j = 0; j < cs[i].children.length; j++)
					rows.push(cs[i].children[j]);
			}
			return rows;
		},
		// 根据总单元格长度生成表头标签数组
		generateCellTags: function(len) {
			if (len <= headCellTags.length)
				return headCellTags.slice(0, len);
			else {
				var arr = [];
				var n = parseInt(len / headCellTags.length);
				var mo = len % headCellTags.length;
				if (n > 1) {
					for (var i = 0; i < n - 1; i++) {
						for (var j = 0; j < headCellTags.length; j++)
							arr.push(headCellTags[i] + headCellTags[j]);
					}
					for (var j = 0; j < mo; j++)
						arr.push(headCellTags[n - 1] + headCellTags[j]);
				} else if (n == 1) {
					for (var j = 0; j < mo; j++)
						arr.push(headCellTags[n - 1] + headCellTags[j]);
				}
				return headCellTags.concat(arr);
			}
		},
		// 获取最后一个下标
		generateLastCellTag: function(len) {
			return this.generateCellTags(len).pop();
		},
		// 下标转excel标签
		index2Tag: function(index) {
			if (index) {
				var arr = index.split("_");
				return this.generateLastCellTag(parseInt(arr[1]) + 1) + (parseInt(arr[0]) + 1);
			}
		},
		num2Char: function(len) {
			if (len <= headCellTags.length)
				return headCellTags[len - 1];
			else {
				var n = parseInt(len / headCellTags.length);
				var mo = len % headCellTags.length;
				if (mo == 0)
					return headCellTags[n - 2] + headCellTags[headCellTags.length - 1];
				else
					return headCellTags[n - 1] + headCellTags[mo - 1];
			}
		},
		canbeNumber: function(num) {
			if (num == "false")
				return false;
			if (num == "true")
				return true;
			return !isNaN(num);
		},
		getTagObj: function(tag) {
			var s = "";
			var arr = tag.split("");
			for (var i = 0; i < arr.length; i++) {
				if (this.canbeNumber(arr[i]))
					break;
				else
					s += arr[i];
			}
			return {
				row: tag.substring(s.length),
				col: s
			};
		},
		char2Num: function(c) {
			var num = 0;
			for (var i = 0; i < c.length; i++) {
				num += headCellTagsNum[c[i]] * (Math.pow(26, c.length - 1 - i));
			}
			return num;
		},
		// 是否存在与数组中
		isInArray: function(a, b) {
			for (var i = 0; i < a.length; i++) {
				if (a[i] == b)
					return true;
			}
			return false;
		},
		// 字符转数字
		toNumber: function(num, flag) {
			if (this.canbeNumber(num)) {
				if (flag) {
					// true和false可以转换为数字1和0
					if (num == "true")
						return 1;
					if (num == "false")
						return 0;
				}
				return parseFloat(num);
			}
		}
	};
}());