import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SceneNode } from '../../../Interfaces/SceneNode';

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.css']
})
export class TreeNodeComponent implements OnInit {
  @Input() node!: SceneNode;
  @Output() nodeSelected = new EventEmitter<SceneNode>();

  constructor() { }

  ngOnInit() {
  }

  onNodeClick(node: SceneNode): void {
    this.nodeSelected.emit(node);
  }

}
