gdjs.codesCode = {};
gdjs.codesCode.GDpcObjects1= [];
gdjs.codesCode.GDpcObjects2= [];
gdjs.codesCode.GDloadObjects1= [];
gdjs.codesCode.GDloadObjects2= [];
gdjs.codesCode.GDcodesObjects1= [];
gdjs.codesCode.GDcodesObjects2= [];
gdjs.codesCode.GDNewObjectObjects1= [];
gdjs.codesCode.GDNewObjectObjects2= [];
gdjs.codesCode.GDNewObject2Objects1= [];
gdjs.codesCode.GDNewObject2Objects2= [];
gdjs.codesCode.GDNewObject3Objects1= [];
gdjs.codesCode.GDNewObject3Objects2= [];
gdjs.codesCode.GDNewObject4Objects1= [];
gdjs.codesCode.GDNewObject4Objects2= [];
gdjs.codesCode.GDNewObject5Objects1= [];
gdjs.codesCode.GDNewObject5Objects2= [];
gdjs.codesCode.GDNewObject6Objects1= [];
gdjs.codesCode.GDNewObject6Objects2= [];
gdjs.codesCode.GDNewObject7Objects1= [];
gdjs.codesCode.GDNewObject7Objects2= [];

gdjs.codesCode.conditionTrue_0 = {val:false};
gdjs.codesCode.condition0IsTrue_0 = {val:false};
gdjs.codesCode.condition1IsTrue_0 = {val:false};


gdjs.codesCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.codesCode.GDNewObject3Objects1);

gdjs.codesCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.codesCode.GDNewObject3Objects1.length;i<l;++i) {
    if ( gdjs.codesCode.GDNewObject3Objects1[i].getString() == "kickstart6x23a5" ) {
        gdjs.codesCode.condition0IsTrue_0.val = true;
        gdjs.codesCode.GDNewObject3Objects1[k] = gdjs.codesCode.GDNewObject3Objects1[i];
        ++k;
    }
}
gdjs.codesCode.GDNewObject3Objects1.length = k;}if (gdjs.codesCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.codesCode.GDNewObject4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject5"), gdjs.codesCode.GDNewObject5Objects1);
{for(var i = 0, len = gdjs.codesCode.GDNewObject4Objects1.length ;i < len;++i) {
    gdjs.codesCode.GDNewObject4Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.codesCode.GDNewObject5Objects1.length ;i < len;++i) {
    gdjs.codesCode.GDNewObject5Objects1[i].hide(false);
}
}}

}


{


gdjs.codesCode.condition0IsTrue_0.val = false;
{
gdjs.codesCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.codesCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.codesCode.GDNewObject4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject5"), gdjs.codesCode.GDNewObject5Objects1);
{for(var i = 0, len = gdjs.codesCode.GDNewObject4Objects1.length ;i < len;++i) {
    gdjs.codesCode.GDNewObject4Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.codesCode.GDNewObject5Objects1.length ;i < len;++i) {
    gdjs.codesCode.GDNewObject5Objects1[i].hide();
}
}}

}


{


gdjs.codesCode.condition0IsTrue_0.val = false;
{
gdjs.codesCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Escape");
}if (gdjs.codesCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};

gdjs.codesCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.codesCode.GDpcObjects1.length = 0;
gdjs.codesCode.GDpcObjects2.length = 0;
gdjs.codesCode.GDloadObjects1.length = 0;
gdjs.codesCode.GDloadObjects2.length = 0;
gdjs.codesCode.GDcodesObjects1.length = 0;
gdjs.codesCode.GDcodesObjects2.length = 0;
gdjs.codesCode.GDNewObjectObjects1.length = 0;
gdjs.codesCode.GDNewObjectObjects2.length = 0;
gdjs.codesCode.GDNewObject2Objects1.length = 0;
gdjs.codesCode.GDNewObject2Objects2.length = 0;
gdjs.codesCode.GDNewObject3Objects1.length = 0;
gdjs.codesCode.GDNewObject3Objects2.length = 0;
gdjs.codesCode.GDNewObject4Objects1.length = 0;
gdjs.codesCode.GDNewObject4Objects2.length = 0;
gdjs.codesCode.GDNewObject5Objects1.length = 0;
gdjs.codesCode.GDNewObject5Objects2.length = 0;
gdjs.codesCode.GDNewObject6Objects1.length = 0;
gdjs.codesCode.GDNewObject6Objects2.length = 0;
gdjs.codesCode.GDNewObject7Objects1.length = 0;
gdjs.codesCode.GDNewObject7Objects2.length = 0;

gdjs.codesCode.eventsList0(runtimeScene);
return;

}

gdjs['codesCode'] = gdjs.codesCode;
