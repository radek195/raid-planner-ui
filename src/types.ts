export type Attender = {
    id: number,
    required_profession: string,
    actual_profession: string,
    nickname: string,
}

export type Group = {
    id: number,
    group_type: string,
    ready: boolean,
    attenders: Attender[],
}

export type Event = {
    id: number,
    organizer_id: string,
    attendee_id: string,
    created_at: string,
    planned_start: string,
    ready: boolean,
    groups: Group[],
}