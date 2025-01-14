import { Observable } from "rxjs";

export interface FormFieldModel {

    label: string;
    hint: string;
    icon: string;
    buttons: Button[];
    fields: FormField[];
}
export interface Button {
    label: string;
    icon: string;
    type: string;
    buttonType: string;
    link?: string;
    cssClass?: string;
}
export interface Option {
    label: string;
    value: string;

}
export class FormField {
    serial: number;
    label: string;
    name: string;
    type: string;
    placeholder?: string;
    value?: string;
    matchValidator?: string;
    required?: boolean;
    icon?: string;
    disable?: boolean;
    options?: Observable<Option[]>;
    cssClass?: string;

    constructor(
        serial: number,
        label: string = '',
        name: string,
        type: string,
        placeholder: string = '',
        value: string = '',
        matchValidator: string = '',
        required: boolean = false,
        icon: string = '',
        disable: boolean = false,
        options: Observable<Option[]> = new Observable<[]>
    ) {
        this.serial = serial;
        this.label = label;
        this.name = name;
        this.type = type;
        this.placeholder = placeholder;
        this.value = value;
        this.matchValidator = matchValidator;
        this.required = required;
        this.icon = icon;
        this.disable = disable;
        this.options = options;
    }
}