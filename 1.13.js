const nestedElement=(
    <div class="i-am-a-big-box">
    <div class="i-am-also-a-box-inside-the-big-box">
        <div class="i-am-a-box-inside-a-box-inside-a-box"></div>
    </div>
</div>
)
ReactDOM.render(nestedElement,document.getElementById('root'));