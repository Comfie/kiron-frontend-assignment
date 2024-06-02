import { Component, OnInit } from '@angular/core';
import { SceneManagerService } from '../services/scene-manager.service';
import { SceneNode } from '../../Interfaces/SceneNode';

@Component({
  selector: 'app-scene-manager',
  templateUrl: './scene-manager.component.html',
  styleUrls: ['./scene-manager.component.css']
})
export class SceneManagerComponent implements OnInit {

  sceneData: SceneNode | null = null;
  selectedNode: SceneNode | null = null;

  constructor(private _sceneManagerService: SceneManagerService) {}

  ngOnInit(): void {
    this._sceneManagerService.getScenes().subscribe(data => {
      this.sceneData = data;
    });
  }

  selectNode(node: SceneNode): void {
    this.selectedNode = node;
  }

  getProperties(node: SceneNode): string[] {
    return Object.keys(node).filter(key => key !== 'children');
  }

}
