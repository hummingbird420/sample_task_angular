export class TableData {
    label: string = '';
    value: string = '';
    color?: string = '';
    align?: string = '';
    type?: string = '';
    callBack?: boolean = false;
    buttonType?: number[] = [];
}
export interface Table {
    [key: string]: string;
}
export interface EmbadedKey {
    key: string,
    label: { key: number, value: string }[]
}