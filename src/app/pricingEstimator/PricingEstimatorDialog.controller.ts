/// <reference path="../main/Resource.ts" />
/// <reference path="../../../typings/index.d.ts" />

module PricingEstimator {
  export class PricingEstimatorController {
    private $modalInstance: any;
    private $http: any;
    private $window: any;

    /** @ngInject */
    constructor($modalInstance: any, $http: any, $window: any) {
      this.$modalInstance = $modalInstance;
      this.$http = $http;
      this.$window = $window;

      ArmViz.Telemetry.sendEvent('PricingEstimator', 'Open');

      
    }

    close() {
      this.$modalInstance.dismiss('cancel');
    }                
  }
}