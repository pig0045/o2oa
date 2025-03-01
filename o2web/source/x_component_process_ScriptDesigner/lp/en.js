MWF.xApplication = MWF.xApplication || {};
MWF.xApplication.process = MWF.xApplication.process || {};
MWF.xApplication.process.ScriptDesigner = MWF.xApplication.process.ScriptDesigner || {};
MWF.xApplication.process.ScriptDesigner.LP={
	"title": "ScriptEditor",
	"newScript": "Create Script",
	"scriptLibrary": "Script Library",
	"property": "Property",
	"include": "Include",
	"id": "ID",
	"name": "Name",
	"alias": "Alias",
	"description": "Description",
	"notice": {
		"save_success": "The script was saved successfully!",
		"deleteDataTitle": "Delete Data Confirmation",
		"deleteData": "Are you sure to delete the current data and its sub-data?",
		"changeTypeTitle": "Change Data Type Confirmation",
		"changeTypeDeleteChildren": "Changing the data type will delete all child data. Are you sure you want to execute it?",
		"changeType": "Changing the data type will change the value of the data. Are you sure you want to execute it?",
		"inputTypeError": "The data type you entered is wrong, please re-enter",
		"sameKey": "The item name you entered already exists in the object, please re-enter",
		"emptyKey": "Project name cannot be empty, please re-enter",
		"numberKey": "The item name cannot be a number, please re-enter",
		"inputName": "Please enter the script name"
	},
	"version": {
		"title": "View form version history",
		"close": "Close",
		"no": "SerialNumber",
		"updateTime": "UpdateTime",
		"op": "action",
		"resume": "Resume",
		"resumeConfirm": "Resume Confirmation",
		"resumeInfo": "Are you sure you need to perform a form recovery operation? After confirming the restoration, the current form will be updated, and the current form needs to be manually saved to take effect.",
		"resumeSuccess": "Resume Successfully"
	},
	"isSave": "Saving, please wait...",
	"formToolbar": {
		"save": "Save script",
		"autoSave": "AutoSave",
		"fontSize": "Font size",
		"style": "style",
		"scriptEditor": "Script Editor",
		"viewAllVersions": "View all script versions",
		"add": "newly build",
		"gotoApp": "Open the current application"
	},
	"sorkKeyNote": "-Sort by-",
	"createTime": "Creation time",
	"updateTime": "Update time",
	"asc": "positive sequence",
	"desc": "Reverse order",
	"searchPlacholder": "Enter name/alias/id search",
	"searchAndSort": "Sorting and Search",
	"duplicateNewNote": "There is already a new script, please save it first"
}
MWF.xApplication.process.ScriptDesigner["lp."+o2.language] = MWF.xApplication.process.ScriptDesigner.LP