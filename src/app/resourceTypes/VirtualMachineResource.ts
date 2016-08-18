/// <reference path="../main/ArmTemplate.ts" />
/// <reference path="../main/Resource.ts" />

module ResourceTypes {
  export class VirtualMachineResource implements IResourceType {
    baseResource: ArmViz.Resource;
    template: ArmViz.ArmTemplate;
    type: string;

    constructor(resource: ArmViz.Resource, template: ArmViz.ArmTemplate) {
      this.baseResource = resource;
      this.template = template;
      this.type = resource.type;
      console.log(this.template);
    }

    public getResourceKey() : string {
      var key = this.baseResource.type;

      
      var param = this.baseResource.properties.hardwareProfile.vmSize;
      console.log("VM Size: ", param);

      key += param;
      return key;
    }

    public estimatedCost(): number {
      return 10.15;
    }
  }
}
