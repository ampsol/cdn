(function() {
	var turndownService = new TurndownService()
	var editor = new MediumEditor('.editable', {
		placeholder: {
      text: 'Your feedback is gold.',
      hideOnClick: true
    },
    toolbar: {
    	buttons: ['bold', 'italic', 'underline', 'anchor'],
    	static: true,
  		align: 'center',
  		sticky: true
    }
	});
	editor.subscribe('editableKeyup', () => {
		console.log(turndownService.turndown(editor.getContent()))
	})
})()