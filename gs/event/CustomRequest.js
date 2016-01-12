// ====================================================================================================
//
// Cloud Code for CustomRequest, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================

var p = Spark.getPlayer();
p.credit1(1);

Spark.setScriptData("bal", p.getBalance1());