// TODO: Replace NAMESPACE with the site name in all caps

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