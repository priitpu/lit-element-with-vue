var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { LitElement, html, customElement, property, css } from "lit-element";
import '@material/mwc-icon';
let TButton = class TButton extends LitElement {
    constructor() {
        super(...arguments);
        this.glyph = 'info';
    }
    static get styles() {
        return css `
      :host {
        display: flex;
      }
    `;
    }
    render() {
        return html `
      <mwc-icon>${this.glyph}</mwc-icon>
    `;
    }
};
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], TButton.prototype, "glyph", void 0);
TButton = __decorate([
    customElement("t-icon")
], TButton);
export { TButton };
//# sourceMappingURL=t-icon.js.map