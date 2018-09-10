import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatchListItem, Match, Frame } from '@shared';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {
  private API_PATH = '/api/bowling/matches';

  constructor(private http: HttpClient) { }

  getAllMatches() {
    return this.http.get<Array<MatchListItem>>(this.API_PATH);
  }

  createMatch() {
    return this.http.post<Match>(`${this.API_PATH}`, {});
  }

  getMatch(id: string) {
    return this.http.get<Match>(`${this.API_PATH}/${id}`);
  }

  addMatchFrame(id: string, frame: Frame) {
    return this.http.post<Match>(`${this.API_PATH}/${id}/frame`, frame);
  }
}
