import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {DefaultViewComponent} from "./components/default-view/default-view.component";
import {KolibriViewComponent} from "./components/kolibri-view/kolibri-view.component";
import {defineCustomElements} from "@public-ui/components/dist/loader";
import {DEFAULT} from "@public-ui/themes";
import {setKolibriTheme} from "../customTheme";
import { register } from '@public-ui/components';
import { CustomElementViewComponent } from './components/custom-element-view/custom-element-view.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: DefaultViewComponent },
      { path: 'custom-element', component: CustomElementViewComponent },
      { path: 'kolibri', component: KolibriViewComponent },
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    register(DEFAULT, defineCustomElements)
      .then(() => {
        // setKolibriTheme();
      })
      .catch(console.warn);
  }
}
