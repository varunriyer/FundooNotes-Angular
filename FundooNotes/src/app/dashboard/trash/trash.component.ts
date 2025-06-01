import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/core/services/notes.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.css']
})
export class TrashComponent implements OnInit {
  trashedNotes: any[] = [];

  constructor(private notesService: NotesService) {}

  ngOnInit(): void {
    this.notesService.getTrashNotesList().subscribe((res: any) => {
      this.trashedNotes = res.data.data;
    });
  }

  restore(note: any) {
    const data = { noteIdList: [note.id], isDeleted: false };
    this.notesService.trashNote(data).subscribe(() => {
      this.ngOnInit();
    });
  }

  deleteForever(note: any) {
    this.notesService.deleteNote({ noteIdList: [note.id] }).subscribe(() => {
      this.ngOnInit();
    });
  }
}
