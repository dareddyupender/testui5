sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
  "use strict";

  return Controller.extend("your.namespace.controller.Main", {
    onInit: function () {
      // Create a JSON model with some sample data
      var oModel = new JSONModel({
        items: [
          { name: "Item 1", description: "Description for Item 1" },
          { name: "Item 2", description: "Description for Item 2" },
          { name: "Item 3", description: "Description for Item 3" }
        ]
      });

      // Set the model to the view
      this.getView().setModel(oModel);
    }
  });
});
