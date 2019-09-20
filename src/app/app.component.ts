import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    template: `
        <nb-layout>
            <nb-layout-column>
                <app-chat></app-chat>
            </nb-layout-column>
        </nb-layout>
    `,
    styles: []
})
export class AppComponent {
    title = "chatbot";
}
