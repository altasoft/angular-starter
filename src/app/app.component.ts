import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.ts.html',
	styleUrls: ['app.component.ts.scss']
})
export class AppComponent {

	public options = {
		position: ['bottom', 'right'],
		timeOut: 5000,
		lastOnBottom: true
	};


	constructor() { }
}
