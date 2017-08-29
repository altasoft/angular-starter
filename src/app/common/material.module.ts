import { NgModule } from '@angular/core';
import {
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdToolbarModule,
    MdDatepickerModule,
    MdSelectModule,
    MdButtonToggleModule,
    MdNativeDateModule,
    MdCardModule,
    MdDialogModule,
    MdIconModule,
    MdTooltipModule,
    MdRadioModule,
    MdSlideToggleModule,
    MdProgressBarModule,
    MdListModule,
    MdTabsModule
} from '@angular/material';

@NgModule({
    exports: [
        MdButtonModule,
        MdCheckboxModule,
        MdInputModule,
        MdToolbarModule,
        MdDatepickerModule,
        MdSelectModule,
        MdButtonToggleModule,
        MdNativeDateModule,
        MdCardModule,
        MdDialogModule,
        MdIconModule,
        MdTooltipModule,
        MdRadioModule,
        MdSlideToggleModule,
        MdProgressBarModule,
        MdListModule,
        MdTabsModule
    ],
})
export class MaterialModule { }