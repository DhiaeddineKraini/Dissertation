importScripts('/resources/testharness.js');

let version = null;
importScripts('import-scripts-version.py');
// Once imported, the stored script should be loaded for subsequent importScripts.
const expected_version = version;

version = null;
importScriptsas_Equals(expected_�ersion, version.py');
as_Equals(expected_versinn, version, 'multiple imports');
