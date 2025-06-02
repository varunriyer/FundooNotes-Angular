import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private baseUrl = 'https://fundoonotes.incubation.bridgelabz.com/api';

  constructor(private http: HttpClient) {}

  private authHeader() {
    const token = localStorage.getItem('token');
    return {
      headers: { Authorization: token ? `Bearer ${token}` : '' }
    };
  }

  getNotesList() {
    return this.http.get(`${this.baseUrl}/notes/getNotesList`, this.authHeader());
  }

  addNote(note: any) {
    return this.http.post(`${this.baseUrl}/notes/addNotes`, note, this.authHeader());
  }

  updateNote(note: any) {
    return this.http.post(`${this.baseUrl}/notes/updateNotes`, note, this.authHeader());
  }

  trashNote(note: any) {
    return this.http.post(`${this.baseUrl}/notes/trashNotes`, note, this.authHeader());
  }

  deleteNote(note: any) {
    return this.http.post(`${this.baseUrl}/notes/deleteForeverNotes`, note, this.authHeader());
  }
}
