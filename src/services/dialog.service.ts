import { Injectable, Component } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import 'rxjs/Rx';


@Injectable()
export class DialogService {

	title: string;
	content: string;
	buttons: string[];

	isHtml: boolean;
	temp: any;


	constructor(private dialog: MdDialog) {
	}


	show(title: string, content: string, buttons: string[], disableClose = true, html = false): Promise<number> {
		this.title = title;
		this.content = content;
		this.buttons = buttons;

		this.isHtml = html;
		const dialogRef = this.dialog.open(DialogComponent, { disableClose: disableClose });

		return dialogRef.afterClosed().toPromise();
	}

	alret(title: string, content: string, disableClose = true) {
		this.show(title, content, ['Ok'], disableClose);
	}

	html(title: string, html: string, disableClose = true) {
		this.show(title, html, ['Ok'], disableClose, true);
	}

	custom(component: any, disableClose = true) {
		return this.dialog.open(component, { disableClose: disableClose }).afterClosed().toPromise();
	}

	async confirm(title: string, content: string, disableClose = true): Promise<boolean> {
		const result = await this.show(title, content, ['Yes', 'No'], disableClose);

		if (result == null || result === undefined)
			return null;

		return result === 0;
	}
}



@Component({
	selector: 'custom-dialog',
	template: `
<h1 *ngIf="dialog.title" md-dialog-title>{{dialog.title}}</h1>
<div *ngIf=dialog.isHtml md-dialog-content [innerHTML]="dialog.content"></div>
<div *ngIf=!dialog.isHtml md-dialog-content>{{dialog.content}}</div>
<div md-dialog-actions>
    <button *ngFor="let item of dialog.buttons" md-button style="flex:1" (click)="select(item)">{{item}}</button>
</div>
`,
	styles: [`.mat-dialog-title { margin-bottom: 0; } .mat-dialog-content { font-size: 14px; }`]
})
export class DialogComponent {

	constructor(private dialogRef: MdDialogRef<DialogComponent>, private dialog: DialogService) {
	}

	select(item) {
		const index = this.dialog.buttons.indexOf(item);
		this.dialogRef.close(index);
	}

}
