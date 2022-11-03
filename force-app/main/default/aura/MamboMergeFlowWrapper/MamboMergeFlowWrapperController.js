({
    init : function(component, event, helper) {
        let record = component.get("v.record");
        if ( !record ){
            record = {};
        }
        let flowTextInput = component.get("v.flowTextInput");
        record['flowTextInput'] = flowTextInput;
        component.set("v.mergeData",[record]);
        component.set("v.showMambo",true);
    }
})