Template.input.events({
	'submit form': function(event) {
		event.preventDefault();

		if (Meteor.user()) {
			var name = Meteor.user().profile.name;

			var message = document.getElementById('message');

			if (message.value != '') {
				Messages.insert({
					name: name,
					message: message.value,
					time: Date().now
				});
			}

			document.getElementById('message').value = '';
			message.value = '';

		} else {
			alert('Please login if you would like to send a message');
		}

	}
});