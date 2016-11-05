(function() {

    function linkHovered(el) {
        var $el = $(el.toElement);
        if (!$el.attr('href')) {
            return;
        }
        chrome.runtime.sendMessage({
            linkToLoad: $el.attr('href')
        }, function(response) {
            if (response.data) {
                $el.popover({
                    content: response.data,
                    html: true
                }).popover('show');
            }
        });
    }
    // $.get($el.attr('href')),
    //         function(data) {
    //             alert(JSON.stringify(data));
    // $el.popover({
    //     content: data,
    //     html: true
    // }).popover('show');
    //         }
    // };
    $('a').hover(linkHovered);
})();