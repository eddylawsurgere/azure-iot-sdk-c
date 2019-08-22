"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var msRest = require("@azure/ms-rest-js");
var packageName = "dt10";
var packageVersion = "1.0.0";
var IotHubGatewayServiceAPIs20190701PreviewContext = /** @class */ (function (_super) {
    __extends(IotHubGatewayServiceAPIs20190701PreviewContext, _super);
    /**
     * Initializes a new instance of the IotHubGatewayServiceAPIs20190701PreviewContext class.
     * @param apiVersion Version of the Api. Must be 2019-07-01-preview
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param [options] The parameter options
     */
    function IotHubGatewayServiceAPIs20190701PreviewContext(apiVersion, credentials, options) {
        var _this = this;
        if (apiVersion === null || apiVersion === undefined) {
            throw new Error('\'apiVersion\' cannot be null.');
        }
        if (credentials === null || credentials === undefined) {
            throw new Error('\'credentials\' cannot be null.');
        }
        if (!options) {
            options = {};
        }
        if (!options.userAgent) {
            var defaultUserAgent = msRest.getDefaultUserAgentValue();
            options.userAgent = packageName + "/" + packageVersion + " " + defaultUserAgent;
        }
        _this = _super.call(this, credentials, options) || this;
        _this.baseUri = options.baseUri || _this.baseUri || "https://fully-qualified-iothubname.azure-devices.net";
        _this.requestContentType = "application/json; charset=utf-8";
        _this.apiVersion = apiVersion;
        _this.credentials = credentials;
        return _this;
    }
    return IotHubGatewayServiceAPIs20190701PreviewContext;
}(msRest.ServiceClient));
exports.IotHubGatewayServiceAPIs20190701PreviewContext = IotHubGatewayServiceAPIs20190701PreviewContext;
