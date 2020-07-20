tinymce.PluginManager.add("lineheight", function (t, e) {
  t.addButton("lineheight", function () {
    var items = [];
    items.push({
      text: '100%',
      value: '100%'
    });
    items.push({
      text: '150%',
      value: '150%'
    });
    items.push({
      text: '200%',
      value: '200%'
    });
    items.push({
      text: '250%',
      value: '250%'
    });

    return {
      type: 'listbox',
      text: "行间距",
      values: items,
      onselect: function (e) {
        if (e.control.settings.value) {
          var ed = tinymce.activeEditor;
          var node = ed.selection.getNode();
          var text = ed.selection.getContent({
            'format': 'text'
          });
          if (node && text) {
            ed.dom.setStyle(node, 'lineHeight', e.control.settings.value);
          } else {
            alert('请选择需要更改的内容');
          }
        }
      }
    };
  })
});
