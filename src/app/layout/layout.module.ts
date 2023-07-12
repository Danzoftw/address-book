import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { RouterModule } from '@angular/router';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
// import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([]),
    ],
    exports: [
        MainLayoutComponent,
    ],
    declarations: [
        MainLayoutComponent,
        TopNavigationComponent
    ]
})

export class layoutModule {}