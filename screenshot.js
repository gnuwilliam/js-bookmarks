// variables
var page = new WebPage();
var address;
var outfile;
var width;
var height;
var clip_height;

address = phantom.args[0];
outfile = phantom.args[1];
width = 1024;
clip_height = height = 800;

page.viewportSize = { width: width, height: height };
page.clipRect = { width: width, height: clip_height };

page.open(address, function (status) {
    if (status !== 'success') {
        return phantom.exit(1);
    }
    page.render(outfile);
    phantom.exit();
});