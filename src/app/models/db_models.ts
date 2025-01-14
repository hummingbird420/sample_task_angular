export interface Specialty {
    sp_id: number;
    sp_name: string;
    sp_description: string;
}
export interface Doctor {
    dc_id: number,
    dc_name: string,
    sp_id: number,
    dc_uid: string,
    dc_password: string,
    dc_email: string,
    dc_phone: string,
    dc_description: string,
    dc_hierarchy: number,
}
export interface DKey {
    dk_id: number,
    dk_name: string,
    dc_id: number,
}
export interface DCertificate {
    dcr_id: number,
    dcr_name: string,
    dcr_examdate: string,
    dc_id: number,
}
export interface WHistory {
    wh_id: number,
    desig_name: string,
    dept_name: string,
    institute_name: string,
    start_date: string,
    end_date: string,
    dc_id: number,
}
export interface DayOfWeek {
    day_id: number,
    day_name: string,
}
export interface DSchedule {
    schedule_id: number,
    doctor_id: number,
    day_dayid: number,
    start_time: string,
    end_time: string,
    clinical_places: string,
    clinical_address: string,
    serial_phone: string,
    serial_alt_phone: string,
    target_patient: number,
    total_time: number,
    first_time_fee: number,
    visit_fee: number,
    report_show_fee: number,
}
export interface PSerials {
    sl_id: number,
    schedule_id: number,
    p_name: string,
    p_age: number,
    p_address: string,
    p_phone: string,
    p_email: string,
    s_date: string,
    possible_time: string,
    s_number: number
}

export interface DComments {
    comment_id: number,
    comments: string,
    t_ratting: string,
    c_ratting: string,
    c_date: string,
    sl_id: number,
}
