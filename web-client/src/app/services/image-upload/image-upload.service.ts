import { Injectable } from '@angular/core';
import { ImageServiceClient } from '../model/admin_pb_service';
import { Observable, Subject } from 'rxjs';
import { Image } from '../model/base_pb';
import { UploadImageRequest } from '../model/admin_pb';
import { environment } from 'src/environments/environment';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {
  private client = new ImageServiceClient(environment.server);

  constructor(private loginService: LoginService) { }

  upload(
    imageData: string,
    fileType: string,
    altText: string
  ): Observable<Image> {
    const request = new UploadImageRequest();
    request.setData(imageData);
    request.setFiletype(fileType);
    request.setAlttext(altText);
    const observable = new Subject<Image>();
    const headers = this.loginService.getHeaders();
    this.client.uploadImage(request, headers).on('data', response => {
      observable.next(response.getImage());
    });
    return observable;
  }
}
