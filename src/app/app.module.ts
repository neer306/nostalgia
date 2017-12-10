import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { ContentItemPreviewComponent } from './content-item-preview/content-item-preview.component';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ContentComponent,
        ContentItemPreviewComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        MatSelectModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
