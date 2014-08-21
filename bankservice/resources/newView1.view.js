jQuery.sap.require("bankservice.resources.utils.utility");

/**
 * First Application View - this is the application's starting point. It builds the application window.   
 */
sap.ui.jsview("bankservice.resources.newView1", {

      getControllerName : function() {
         return "bankservice.resources.newView1";
    	 
      },
      
      createContent : function(oController) {
		var oShell = this.createShell();
       	oShell.addContent(this.createBankTable());	
       	return oShell;
       	
      },

      createShell:function(oController){
      
    	  var oShell = sap.ui.ux3.Shell("ID_BankShell",{
    	      appIcon: "images/SAPLogo.gif",
    		  appTitle: oBundle.getText("APP_TITLE"),
    		  showLogoutButton:false,
    		  showSearchTool: false,
    		  showInspectorTool: false,
    		  showFeederTool: false,
    		  worksetItems: [new sap.ui.ux3.NavigationItem("navItemList",{key: "BankList",text:oBundle.getText("WORKSET_TITLE")})]
    	  });
    	  return oShell;
      },
      
      /**
	 * Returns a table with the required columns, each column is bound for a specific odata service property   
	 * @returns {sap.ui.table.Table}
	 */
      createBankTable:function(){
      
    	var oTable = new sap.ui.table.Table("ID_BankTable", {
    		visibleRowCount  : 20,
  			selectionMode: sap.ui.table.SelectionMode.None
  		});
    	
 
     	 oTable.addColumn(new sap.ui.table.Column({
    	 	label: new sap.ui.commons.Label({text:oBundle.getText("BANK_BANKCOUNTRY")}),
 			template: new sap.ui.commons.TextView().bindProperty("text", "bankCountry"),
			sortProperty: "bankCountry",
			filterProperty: "bankCountry"
 		}));

     	 oTable.addColumn(new sap.ui.table.Column({
    	 	label: new sap.ui.commons.Label({text:oBundle.getText("BANK_BANKID")}),
 			template: new sap.ui.commons.TextView().bindProperty("text", "bankID"),
			sortProperty: "bankID",
			filterProperty: "bankID"
 		}));

     	 oTable.addColumn(new sap.ui.table.Column({
    	 	label: new sap.ui.commons.Label({text:oBundle.getText("BANK_BANKNAME")}),
 			template: new sap.ui.commons.TextView().bindProperty("text", "bankName"),
			sortProperty: "bankName",
			filterProperty: "bankName"
 		}));

     	 oTable.addColumn(new sap.ui.table.Column({
    	 	label: new sap.ui.commons.Label({text:oBundle.getText("BANK_REGION")}),
 			template: new sap.ui.commons.TextView().bindProperty("text", "region"),
			sortProperty: "region",
			filterProperty: "region"
 		}));

     	 oTable.addColumn(new sap.ui.table.Column({
    	 	label: new sap.ui.commons.Label({text:oBundle.getText("BANK_STREET")}),
 			template: new sap.ui.commons.TextView().bindProperty("text", "street"),
			sortProperty: "street",
			filterProperty: "street"
 		}));

     	 oTable.addColumn(new sap.ui.table.Column({
    	 	label: new sap.ui.commons.Label({text:oBundle.getText("BANK_CITY")}),
 			template: new sap.ui.commons.TextView().bindProperty("text", "city"),
			sortProperty: "city",
			filterProperty: "city"
 		}));
 		return oTable;   		
      }
      
});
