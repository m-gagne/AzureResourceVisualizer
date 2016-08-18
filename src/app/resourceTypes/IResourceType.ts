module ResourceTypes {
  export interface IResourceType {

    getResourceKey(): string;    
    estimatedCost() : number;
  }
}

