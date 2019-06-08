import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TopBarComponent } from './top-bar/top-bar.component';


@NgModule({
    imports: [
        RouterModule,
        CommonModule
    ],
    declarations: [
        TopBarComponent
    ],
    exports: [
        TopBarComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class LayoutModule {}
