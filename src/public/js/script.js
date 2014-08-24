(function() {

	var socket = io.connect('http://server.lan');
		  
	/**function trigger() {
	console.log('go do something');
	socket.emit('message', { my: 'data' });
	}*/

	$('[data-trigger]').on('click', function(e) {
		console.log('Clicked');
		var data = $(this).data();
		data.loation = 'mobile';
		data.type = 'click';
		socket.emit('message', data);
	});

	$('[data-triggerer]').on('click', function(e) {
		console.log('Clicked');
		$.get('http://server.lan:3000/api?type=test&trigger=helloworld');
	});

	socket.on('data', function (data) {

		// Data must be of type sensor
		if( data.type !== 'sensor' ) 
			return;

		var id = data.location;

		if( $('#' + id).length > 0 ) { // Row item already exist, just update the values
			var $row = $('#' + id);
			$row.find('td:eq(2)').html( data.value[0] );
		} else { // Row item does not yet exist
			var html = '<tr id="' + id +  '"><td>' + data.label + '</td><td>' + data.location + '</td><td>' + data.value[0] + '</td></tr>';
			$('#sensors tbody').append(html);
		}

	});

})();