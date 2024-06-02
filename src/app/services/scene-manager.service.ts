import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SceneNode } from '../../Interfaces/SceneNode';

@Injectable({
  providedIn: 'root'
})
export class SceneManagerService {

  private dataUrl = './assets/json/scene-manager.json';

  constructor(private http: HttpClient) {}

  getScenes(): Observable<any> {
  return this.http.get<SceneNode>(this.dataUrl);
}

}
