/**
 * キーボード入力を受け取り、IME文字変換確定のEnterキーイベントをキャンセルする
 */
document.addEventListener("keydown", function(e) {
    // see at https://developer.mozilla.org/ja/docs/Web/API/Element/keydown_event
    if (e.isComposing && e.key == "Enter") {
    // if (e.key == "Enter" & (e.isComposing || e.keyCode === 229)) {
            e.stopPropagation();
        e.preventDefault();
        return false;
    }

});