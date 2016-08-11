/// <reference path="../main/ArmTemplate.ts" />
/// <reference path="../main/Resource.ts" />

module PricingEstimator {
  export class PricingResourceManager {
    armTemplate: ArmViz.ArmTemplate;

    constructor(armTemplate: ArmViz.ArmTemplate) {
      this.armTemplate = armTemplate;
    }

    public getResourceSummary(): void {
      var resources = this.armTemplate.resources;
      console.log(resources)
    }
  }
}
