// 表格工具
var TableUtils = (function() {
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
		}
	};
}());