createDialog().then( config => {
	return DecoupledEditor
		.create( document.querySelector( '.editor' ), {
			licenseKey: config.licenseKey,
			sidebar: {
				container: document.querySelector( '.sidebar' )
			},
			extraPlugins: [
				// Learn more about users at https://ckeditor.com/docs/ckeditor5/latest/features/collaboration/users.html.
				class UsersInit {
					static get requires() {
						return [ 'Users' ];
					}

					constructor( editor ) {
						this.editor = editor;
					}

					init() {
						const users = this.editor.plugins.get( 'Users' );

						users.addUser( {
							id: 'u1'
						} );

						users.defineMe( 'u1' );
					}
				}
			]
		} )
		.then( editor => {
			window.editor = editor;

			// Set a custom container for the toolbar.
			document.querySelector( '.document-editor__toolbar' ).appendChild( editor.ui.view.toolbar.element );
			document.querySelector( '.ck-toolbar' ).classList.add( 'ck-reset_all' );
		} )
		.catch( handleSampleError );
} );

function handleSampleError( error ) {
	const issueUrl = 'https://github.com/ckeditor/ckeditor5/issues';

	const message = [
		'Oops, something went wrong!',
		`Please, report the following error on ${ issueUrl } with the build id "2a7oty4u83qi-p1rrel89zge1" and the error stack trace:`
	].join( '\n' );

	console.error( message );
	console.error( error );
}
