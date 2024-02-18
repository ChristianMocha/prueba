import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoadingComponent } from 'src/app/public/components/loading/loading.component';
import { LoadingService } from 'src/app/services/loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  private loading = false;

  constructor(private loadingService: LoadingService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loading = true;
    this.loadingService.show();

    return next.handle(request).pipe(
      finalize(() => {
        this.loading = false;
        this.loadingService.hide();
      })
    );
  }
}
