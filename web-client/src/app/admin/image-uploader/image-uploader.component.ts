import { Component, OnInit, ViewChild, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Input } from '@angular/core';
import { Image } from 'src/app/services/model/base_pb';
import { ImageUploadService } from 'src/app/services/image-upload/image-upload.service';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss']
})
export class ImageUploaderComponent implements OnInit {
  private input: HTMLInputElement;
  file: File;
  private altTextValue: string;

  @Output()
  imageEvent = new EventEmitter<Image>();
  @Input()
  image: Image;
  saving = false;
  saved = false;

  constructor(private imageService: ImageUploadService) { }

  ngOnInit() {
    this.input = document.getElementById('image') as HTMLInputElement;
    this.input.addEventListener('input', event => {
      this.file = this.input.files[0];
    });
  }

  get alttext() {
    if (this.altTextValue) {
      return this.altTextValue;
    } else if (this.image) {
      return this.image.getAlttext();
    }
    return '';
  }

  set alttext(text: string) {
    this.altTextValue = text;
  }

  save() {
    if (this.file && this.alttext) {
      this.saving = true;
      const reader = new FileReader();
      reader.onload = e => {
        const split = this.file.name.split('.');
        const fileType = split[split.length - 1];
        const subscription = this.imageService
          .upload(btoa(reader.result as string), fileType, this.alttext)
          .subscribe(data => {
            this.image = data;
            this.imageEvent.next(this.image);
            this.saving = false;
            this.saved = true;
            subscription.unsubscribe();
          });
      };
      reader.readAsBinaryString(this.file);
    }
  }
}
