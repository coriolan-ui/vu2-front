/**
 * lazyload.js
 * https://github.com/tuupola/jquery_lazyload
 */
$(function() {
    $("img.js-lazy").lazyload({
        // threshold : 0,
        effect : "fadeIn",
         placeholder : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
    });
});