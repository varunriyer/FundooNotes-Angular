import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/core/services/notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notes: any[] = [];
  title = '';
  description = '';

  constructor(private notesService: NotesService) {}

  ngOnInit(): void {
    this.fetchNotes();
  }

  fetchNotes() {
    this.notesService.getNotesList().subscribe((res: any) => {
      this.notes = res.data.data;
    });
  }

  createNote() {
    const payload = { title: this.title, description: this.description };
    this.notesService.addNote(payload).subscribe(() => {
      this.title = '';
      this.description = '';
      this.fetchNotes();
    });
  }

  trash(note: any) {
    this.notesService.trashNote({ noteIdList: [note.id], isDeleted: true }).subscribe(() => {
      this.fetchNotes();
    });
  }
}
