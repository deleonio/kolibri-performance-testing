import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {DefaultViewComponent} from "./components/default-view/default-view.component";
import {KolibriViewComponent} from "./components/kolibri-view/kolibri-view.component";
import {defineCustomElements} from "@public-ui/components/dist/loader";
import {DEFAULT} from "@public-ui/themes";
import {register} from "@a11y-ui/core";
import {setKolibriTheme} from "../customTheme";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: DefaultViewComponent },
      { path: 'kolibri', component: KolibriViewComponent },
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    register(DEFAULT, defineCustomElements)
      .then(() => {
        setKolibriTheme();
      })
      .catch(console.warn);
  }
}
