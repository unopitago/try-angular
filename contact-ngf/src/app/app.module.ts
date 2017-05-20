import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CollapseGroupComponent } from './collapse-group/collapse-group.component';
import { CollapseComponent } from './collapse/collapse.component';
import { TempConverterPipe } from './pipes/temp-converter.pipe';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CollapseGroupComponent,
    CollapseComponent,
    TempConverterPipe,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
