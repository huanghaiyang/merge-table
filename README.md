# merge-table
HTML表格设计器可以快速的可视化设计一个表格，可以对单元格进行合并，拆分，添加，删除以及设置样式等操作，API简单易懂

###第一步:
<pre><code>grunt /*运行任务，生成js主文件*/</code></pre>


###第二步：
<pre><code>npm start /*运行项目*/</code></pre>



##API
<ul>
	<li>
		       <code>merge</code>  <em>合并多个单元格</em>
				<pre><code>MergeTable.merge();</code></pre>
	</li>
<li>
		 <code>splitH</code>  <em>横拆单元格</em><pre><code>MergeTable.splitH();</code></pre>
	</li>
<li>
		 <code>splitV</code>  <em>竖拆单元格</em><pre><code>MergeTable.splitV();</code></pre>
	</li>
<li>
		 <code>deleteCol</code>  <em>删除列</em><pre><code>MergeTable.deleteCol();</code></pre>
	</li>
<li>
		 <code>deleteRow</code>  <em>删除行</em><pre><code>MergeTable.deleteRow();</code></pre>
	</li>
<li>
		 <code>addRowTop</code>  <em>在当前选中的单元格上方添加行</em><pre><code>MergeTable.addRowTop();</code></pre>
	</li>
<li>
		 <code>addRowBottom</code>  <em>在当前选中的单元格下方添加行</em><pre><code>MergeTable.addRowBottom();</code></pre>
	</li>
<li>
		 <code>addColLeft</code>  <em>在当前选中的单元格左侧添加列</em><pre><code>MergeTable.addColLeft();</code></pre>
	</li>
<li>
		 <code>addColRight</code>  <em>在当前选中的单元格右侧添加列</em><pre><code>MergeTable.addColRight();</code></pre>
	</li>
<li>
		 <code>init</code>  <em>初始化表格</em>
<pre><code>
/*
tableContainer是表格的父容器
*/
var tableContainer = $("#tableContainer");
MergeTable.init("tableContainer", tableContainer.html());;</code></pre>
	</li>
<li>
		 <code>clearMerge</code>  <em>彻底拆分单元格</em><pre><code>MergeTable.clearMerge();</code></pre>
	</li>
<li>
		 <code>setSelectionCss</code>  <em>设置单元格样式</em>
<pre><code>
/*
可以设置任意样式到选中的表格上
*/
MergeTable.setSelectionCss('background-color:#dfdfdf;');</code></pre>
	</li>
<li>
		 <code>read</code>  <em>以HTML文本的方式返回表格内容</em><pre><code>var htmlStr = MergeTable.read();</code></pre>
	</li>
<li>
		 <code>getSelectionCells</code>  <em>获取当前被选中的单元格</em><pre><code>var arr = MergeTable.getSelectionCells();</code></pre>
	</li>

</ul>

以及其他 ...
