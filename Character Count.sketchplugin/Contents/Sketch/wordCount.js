
function countWords ( context ) {

    var app = NSApplication.sharedApplication(),
        text = context.selection.firstObject(),
        range,
        count;

    if ( !text || text.class() != "MSTextLayer" ) {
        app.displayDialog( "Select a text layer!" );
        return;
    } else if ( text.isEditingText() ) {
        range = text.editingDelegate().textView().selectedRange();
        count = text.stringValue().substr(range.location, range.length).trim().split(" ").length;
    } else {
        count = text.stringValue().split(" ").length;
    }

    app.displayDialog( count );

}