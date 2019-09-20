import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
    selector: "app-chat",
    templateUrl: "./chat.component.html",
    styleUrls: ["./chat.component.scss"]
})
export class ChatComponent implements OnInit {
    messages = [];
    loading = false;

    // Random ID to maintain session with server
    sessionId = Math.random()
        .toString(36)
        .slice(-5);

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.addBotMessage("Human presence detected 🤖. How can I help you? ");
    }

    handleUserMessage(event) {
        console.log(event);
        const text = event.message;
        this.addUserMessage(text);
    }

    addUserMessage(text) {
        this.messages.push({
            text,
            sender: "You",
            reply: true,
            date: new Date()
        });
    }

    addBotMessage(text) {
        this.messages.push({
            text,
            sender: "Bot",
            avatar: "/assets/bot-icon.png",
            date: new Date()
        });
    }
}
