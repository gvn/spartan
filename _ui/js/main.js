// TODO: Replace NAMESPACE with something meaningful

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