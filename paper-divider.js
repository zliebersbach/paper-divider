/** @license
paper-divider, a Polymer element that provides a Material Design divider.
Copyright (C) 2016  Kevin Boxhoorn

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';

/**
Polymer element that provides a Material Design divider. It can be given a
margin on the top and bottom.

### Example

The basic divider looks like this:

    <paper-divider></paper-divider>

To give it a margin, simply set the `margin` property:

    <paper-divider margin></paper-divider>

### Styling

The following custom properties and mixins are available for styling:

Custom property   | Description   | Default
------------------|---------------|-------------------
`--paper-divider-color` | Divider color | `rgba(0,0,0,.12)`
@demo
*/
class PaperDividerElement extends PolymerElement {
    static get is() { return "paper-divider"; }
    static get properties() {
        return {
            /** Gives the divider an 8px margin on the top and bottom. */
            "margin": {
                value: false,
                type: Boolean,
                reflectToAttribute: true
            }
        }
    }
    static get template() {
        return html`
            <style>
                :host {
                    display: block;
                    position: relative;
                }

                :host::after {
                    content: "";
                    position: absolute;
                    left: 0; right: 0;
                    top: -1px; bottom: 0;
                    background: var(--paper-divider-color, rgba(0,0,0,.12));
                }

                :host([margin]) {
                    margin: 8px 0;
                }
            </style>
`;
    }
}

window.customElements.define(PaperDividerElement.is, PaperDividerElement);
