import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureSqlManagedinstanceadministrators implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Azure SQL Managedinstanceadministrators',
		name: 'N8nDevAzureSqlManagedinstanceadministrators',
		icon: { light: 'file:./azure-sql-managedinstanceadministrators.png', dark: 'file:./azure-sql-managedinstanceadministrators.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Azure SQL Database RESTful API manages databases via CRUD operations.',
		defaults: { name: 'Azure SQL Managedinstanceadministrators' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevAzureSqlManagedinstanceadministratorsApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
		],
	};
}
