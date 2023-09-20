sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        addQuestions: function(oEvent) {
            MessageToast.show("Custom handler invoked.");
        }
    };
});
