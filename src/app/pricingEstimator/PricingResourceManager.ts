/// <reference path="../main/ArmTemplate.ts" />
/// <reference path="../main/Resource.ts" />

module PricingEstimator {
  export class PricingResourceManager {
    armTemplate: ArmViz.ArmTemplate;
    resourceFactory: ResourceTypes.ResourceTypesFactory;

    constructor(armTemplate: ArmViz.ArmTemplate) {
      this.armTemplate = armTemplate;
      this.resourceFactory = new ResourceTypes.ResourceTypesFactory();
    }

    public getResourceSummary(): void {
      var resources = this.armTemplate.resources();
      var length = resources.length;

      var resource;

      for (var i = 0; i < length; i++) {
        console.log(resources[i]);
        resource = this.resourceFactory.getTypedResource(resources[i], this.armTemplate);
        if(resource) {
          console.log("KEY:", resource.getResourceKey());
        } else {
          console.log("Type not found, SKIP: ", resources[i].type);
        }
      }
    }
  }
}
