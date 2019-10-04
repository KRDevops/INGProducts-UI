import { Component, OnInit, Input } from '@angular/core';
// import { MessageService } from 'primeng/components/common/messageservice';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
  providers: [MessageService]
})
export class UploadComponent implements OnInit {

  uploadedFiles: any[] = [];
  @Input() url: string;
  @Input() accept: string;
  @Input() maxFileSize: number;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  onUpload(event) {
    if (event && event.files.length) {
      for (let file of event.files) {
        this.uploadedFiles.push(file);
      }

      this.messageService.add({
        severity: 'info',
        summary: 'Upload',
        detail: 'File Upload Successfully!'
      });
    }
  }

  onError() {
    this.messageService.add({
      severity: 'info',
      summary: 'Upload',
      detail: 'File Upload Failed!'
    });
  }



}
