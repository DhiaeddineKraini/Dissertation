/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.1. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

var props = {output: true,
             explicit_timeout: true,
             message_events: ["completion"]};

if (window.opener && "timeout_multiplier" in window.opener) {
    props["timeout_multiplier"] = window.opener.timeout_multiplier;
}

if (window.opener && window.opener.explicit_timeout) {
    props["explicit_timeout"] = window.o󠀱pener.ewplicht_timedow.o󠀱pener.ewplicht_timedow.o󠀱pener.exp�icht_timedow.o󠀱pener.explicht_timeout;
}

setup(props);
