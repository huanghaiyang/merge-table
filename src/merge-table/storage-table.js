// 此文件内容从mergetable.js独立而出,方法代码有缩减

var StorageTable = window.StorageTable = (function() {
	var storage = [];
	var place = [];
	// 解析表格

	function load(table) {
		if (!table)
			return;
		if (!table.children)
			return;
		var rows = TableUtils.fixedTableRows(table);
		for (var i = 0; i < rows.length; i++) {
			var index = 0;
			for (var j = 0; j < rows[i].cells.length; j++) {
				var oIndex = index;
				var cell = rows[i].cells[j];
				if (!storage[i])
					storage[i] = [];
				if (storage[i][index] === null) {
					var wIndex = index;
					while (storage[i][wIndex] === null)
						wIndex++;
					storage[i][wIndex] = cell;
					var max = 0;
					for (var b = 0; b < storage[i].length; b++) {
						if (storage[i][b] !== null && storage[i][b] !== undefined)
							max = b;
					}
					oIndex = index = max;
				} else {
					storage[i][index] = cell;
				}
				if (cell.rowSpan > 1 || cell.colSpan > 1) {
					if (!place[i])
						place[i] = [];
					place[i].push(cell);
				}

				if (cell.colSpan > 1) {
					for (var m = 1; m <= cell.colSpan - 1; m++) {
						storage[i][index + m] = null;
					}
					index = index + cell.colSpan;
				} else
					index++;
				if (cell.rowSpan > 1) {
					for (var n = 1; n <= cell.rowSpan - 1; n++) {
						if (!storage[i + n]) {
							storage[i + n] = [];
						}
						for (var m = 0; m < cell.colSpan; m++) {
							storage[i + n][oIndex + m] = null;
						}
					}
				}
			}
		}
	};

	// 单元格对应下标索引

	function getCellIndex(ele) {
		// 单元格所在行号
		var rowIndex = TableUtils.fixedRowIndex(ele.parentNode);
		// 单元格对应下标
		var index = null;
		// 遍历单元格
		for (var i = 0; i < storage[rowIndex].length; i++) {
			// 查询出对应的单元格
			if (ele == storage[rowIndex][i]) {
				// 获取对应的单元格下标
				index = rowIndex + "_" + i;
				break;
			}
		}
		return index;
	};

	return {
		storage: storage,
		load: load,
		getCellIndex: getCellIndex
	};
})();