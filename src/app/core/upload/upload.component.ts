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
    console.log('upload');
    for (let file of event.file) {
      this.uploadedFiles.push(file);
    }

    this.messageService.add({
      severity: 'info',
      summary: 'Success Message',
      detail: 'Upload Successfully'
    });
  }

  onError(event) {
    console.log('error');
    this.messageService.add({
      severity: 'info',
      summary: 'Error Message',
      detail: 'Upload Failed'
    });
    console.log(event);
  }



}
