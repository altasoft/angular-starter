import { Injectable, EventEmitter } from '@angular/core'
import { NotificationsService } from 'angular2-notifications';

@Injectable()
export class NotifyService {

    constructor(private service: NotificationsService) {
    }

    success(content: string, title: string = '', override?: any): NotifyMessageToken {
        return this.service.success(title, content, override);
    }

    error(content: string, title: string = 'Error', override?: any): NotifyMessageToken {
        return this.service.error(title, content, override);
    }

    alert(content: string, title: string = 'Warning', override?: any): NotifyMessageToken {
        return this.service.alert(title, content, override);
    }

    info(content: string, title: string = 'Info', override?: any): NotifyMessageToken {
        return this.service.info(title, content, override);
    }

    bare(content: string, title: string, override?: any): NotifyMessageToken {
        return this.service.bare(title, content, override);
    }

    create(content: string, title: string, type: string, override?: any): NotifyMessageToken {
        return this.service.create(title, content, type, override);
    }

    html(html: any, type: string, override?: any): any {
        return this.service.html(html, type, override);
    }

    remove(id?: string): void {
        this.service.remove(id);
    }

    handleError(err) {
        if (err && err.statusCode === 401) {
            this.info('Unauthorized access', 'Info');
            return;
        }

        const message = err ? (err.message || err.Message || 'Unknown Error') : 'Unknown Error';

        if (err.statusCode >= 400 && err.statusCode < 500)
            this.info(message, 'Info');
        else
            this.error(message, 'Problem');
    }
}

export interface NotifyMessageToken {
    id?: string;
    click?: EventEmitter<{}>;
}

export enum NotifyType {
    Toast,
    Push
}