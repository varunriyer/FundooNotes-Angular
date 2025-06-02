import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reminder',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css']
})
export class ReminderComponent implements OnInit {
  reminders = [
    {
      title: 'Call Doctor',
      description: 'Don’t forget to book an appointment.',
      due: 'Today at 6:00 PM'
    },
    {
      title: 'Assignment Deadline',
      description: 'Submit the Angular app on GitHub.',
      due: 'Tomorrow at 9:00 AM'
    }
  ];

  ngOnInit(): void {}
}
