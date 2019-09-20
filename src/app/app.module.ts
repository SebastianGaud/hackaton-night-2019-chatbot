import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injector } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
    NbThemeModule,
    NbLayoutModule,
    NbChatModule,
    NbSpinnerModule
} from "@nebular/theme";
import { NbEvaIconsModule } from "@nebular/eva-icons";
import { ChatComponent } from "./chat/chat.component";
import { HttpClientModule } from "@angular/common/http";
import { createCustomElement } from "@angular/elements";

@NgModule({
    declarations: [AppComponent, ChatComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        NbThemeModule.forRoot({ name: "default" }),
        NbLayoutModule,
        NbEvaIconsModule,
        NbChatModule,
        NbSpinnerModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [ChatComponent]
})
export class AppModule {
    constructor(private injector: Injector) {}

    ngDoBootstrap() {
        // using createCustomElement from angular package it will convert angular component to stander web component
        const el = createCustomElement(AppComponent, {
            injector: this.injector
        });
        // using built in the browser to create your own custome element name
        customElements.define("chat-bot", el);
    }
}
