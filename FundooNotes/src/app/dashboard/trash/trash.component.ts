import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trash',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.css']
})
export class TrashComponent implements OnInit {
  trashedNotes = [
    {
      title: 'Old Shopping List',
      description: '☐ Milk\n☐ Bread\n☐ Eggs\n☐ Peanut butter'
    },
    {
      title: 'Rejected Project Idea',
      description: 'AI-based dog translator\nToo ambitious for this semester.'
    }
  ];

  recoverNote(note: any) {
  alert('Note recovered (placeholder).');
}


  ngOnInit(): void {}
}
