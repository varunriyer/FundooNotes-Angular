import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/core/services/notes.service';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css']
})
export class ReminderComponent implements OnInit {
  reminders: any[] = [];

  constructor(private notesService: NotesService) {}

  ngOnInit(): void {
    this.loadReminders();
    setInterval(() => this.checkForDueReminders(), 30000); // check every 30s
  }

  loadReminders() {
    this.notesService.getReminderNotesList().subscribe((res: any) => {
      this.reminders = res.data.data;
    });
  }

  checkForDueReminders() {
    const now = new Date();
    this.reminders.forEach(note => {
      if (note.reminder) {
        const reminderTime = new Date(note.reminder);
        if (reminderTime <= now) {
          alert(`Reminder: ${note.title || 'Your reminder is due!'}`);
        }
      }
    });
  }
}
