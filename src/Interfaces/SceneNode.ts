export interface SceneNode {
  type: string;
  id?: string;
  children?: SceneNode[];
  [key: string]: any; // Other properties
}
