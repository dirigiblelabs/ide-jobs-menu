/*
 * Copyright (c) 2010-2020 SAP and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v2.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v20.html
 *
 * Contributors:
 *   SAP - initial API and implementation
 */
exports.getTemplate = function () {
	return {
		"name": "job",
		"label": "Scheduled Job",
		"extension": "job",
		"data": JSON.stringify(JSON.parse('{"expression":"0/10 * * * * ?","group":"dirigible-defined","handler":"myproject/myhandler.js","description":"My Job"}'), null, 2)
	};
};