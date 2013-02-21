/*global $: false, console: false */
/*jslint browser: true, sloppy: true, forin: true, plusplus: true, maxerr: 50, indent: 4 */

if (typeof window.NAMESPACE !== 'undefined') {
    throw 'NAMESPACE already in use.';
}

window.NAMESPACE = {
    init: function () {
        var self = this;

        
    }
};

$(document).ready(function () {
    NAMESPACE.init();
});
