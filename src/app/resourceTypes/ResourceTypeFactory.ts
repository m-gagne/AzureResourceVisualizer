/// <reference path="../main/ArmTemplate.ts" />
/// <reference path="../main/Resource.ts" />


module ResourceTypes {
  export class ResourceTypesFactory {
    public getTypedResource(resource: ArmViz.Resource, template: ArmViz.ArmTemplate) : IResourceType {
      switch(resource.type) {
        case "Microsoft.Compute/virtualMachines":
          return new ResourceTypes.VirtualMachineResource(resource, template);
        default:
          return null;
      }
    }
  }
}

