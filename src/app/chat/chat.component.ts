import { Component, OnInit, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
    selector: "app-chat",
    templateUrl: "./chat.component.html",
    styleUrls: ["./chat.component.scss"]
})
export class ChatComponent implements OnInit {
    messages = [];
    loading = false;
    context: string;
    conversationId = Math.random()
        .toString(36)
        .slice(-5);

    // Random ID to maintain session with server
    sessionId = Math.random()
        .toString(36)
        .slice(-5);

    constructor(
        private http: HttpClient,
        @Inject("BASE_URL") private baseUrl: string
    ) {}

    ngOnInit() {
        this.addBotMessage("Ciao, ti posso aiutare?");
    }

    handleUserMessage(event) {
        console.log(event);
        const text = event.message;
        this.loading = true;
        // Make an HTTP Request
        this.http
            .get<any>(`${this.baseUrl}/Dialog/GetResponseFromDialogFlow?`, {
                params: {
                    question: text,
                    context: this.context,
                    conversationId: this.conversationId
                }
            })
            .toPromise()
            .then(
                res => {
                    this.context = res.context;
                    this.addBotMessage(res.data);
                    this.loading = false;
                },
                err => {
                    console.log(err);
                }
            );

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
