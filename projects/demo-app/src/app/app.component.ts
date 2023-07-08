import { Component } from '@angular/core';
import { FileItem, FileUploader } from "ng2-file-upload";

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular File Upload - Demo App';

  response: string;
  uploader: FileUploader;
  isUploading: boolean;
  hasBaseDropZoneOver: boolean;
  hasAnotherDropZoneOver: boolean;
  displayedColumns: string[] = [
    "name",
    "size",
    "progress",
    "status",
    "actions"
  ];

  get dataSource(): any[] {
    if (!this.uploader) return [];

    return this.uploader.queue.map(fi => ({
      name: fi.file.name ?? "",
      size: fi.file.size ?? 0,
      progress: fi.progress ?? 0,
      isSuccess: !!fi.isSuccess,
      isCancel: !!fi.isCancel,
      isError: !!fi.isError,
      isReady: !!fi.isReady,
      isUploading: !!fi.isUploading,
      remove: fi.remove.bind(fi),
      upload: fi.upload.bind(fi),
      cancel: fi.cancel.bind(fi)
    }))
  }

  constructor() {
    this.uploader = new FileUploader({
      url: URL,
      disableMultipart: true, // 'DisableMultipart' must be 'true' for formatDataFunction to be called.
      formatDataFunctionIsAsync: true,
      formatDataFunction: async (item: any) => {
        return new Promise((resolve, reject) => {
          resolve({
            name: item._file.name,
            length: item._file.size,
            contentType: item._file.type,
            date: new Date()
          });
        });
      }
    });

    this.isUploading = false;
    this.hasBaseDropZoneOver = false;
    this.hasAnotherDropZoneOver = false;

    this.response = '';

    this.uploader.onBeforeUploadItem = () => {
      this.isUploading = true;
    };

    this.uploader.response.subscribe(res => {
      this.response = res;
      this.isUploading = false;
    });
  }

  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }
}
