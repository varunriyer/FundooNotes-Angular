import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Note {
  title: string;
  description: string;
}

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notes: Note[] = [];
  title: string = '';
  description: string = '';

  ngOnInit(): void {
    this.notes = [
      {
        title: 'NETFLIX',
        description:
          '✓ Maska\n✓ Zoya Factor\n✓ Guilty\n✓ She\n✓ Billu\n✓ Deadline: Sirf 24 Ghante\n✓ The Lunchbox'
      },
      {
        title: 'Movies/Shows to watch after boards',
        description:
          '☐ The high note\n☐ Martin\n☐ Kirk Douglas movies\n☐ I lost my body\n☐ Love Simon\n☐ Tumbbad'
      }
    ];
  }

  addNote() {
    if (this.title.trim() || this.description.trim()) {
      this.notes.unshift({ title: this.title, description: this.description });
      this.title = '';
      this.description = '';
    }
  }

  onEdit(note: Note) {
    alert('Edit feature not implemented (placeholder).');
  }

  onSetReminder(note: Note) {
    alert('Reminder set (placeholder).');
  }

  onDelete(note: Note) {
    alert('Note moved to Trash (placeholder).');
  }
}
