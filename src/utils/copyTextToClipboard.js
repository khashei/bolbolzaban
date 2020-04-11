/* eslint-disable no-bitwise */
export default (text) => {
  if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
    const el = document.createElement('textarea');
    el.contentEditable = true;
    el.readOnly = false;
    el.style.position = 'fixed';
    el.value = text;
    document.body.appendChild(el);
    const range = document.createRange();
    range.selectNodeContents(el);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    el.setSelectionRange(0, 999999);
    document.execCommand('copy');
    document.body.removeChild(el);
  } else {
    const el = document.createElement('textarea');
    el.value = text;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    const selected =
      document.getSelection().rangeCount > 0
        ? document.getSelection().getRangeAt(0)
        : false;
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    if (selected) {
      document.getSelection().removeAllRanges();
      document.getSelection().addRange(selected);
    }
  }
};

