import axios from 'axios';
import {Event} from '../types.ts'
axios.defaults.baseURL = 'http://localhost:8080';

export const getEvent = async (uuid: string) => {
    return await axios.get<Event>(`/api/v1/events/${uuid}`);
};

export const postEvent = async () => {
    return await axios.post(`/api/v1/events`);
};

export const patchEventReadiness = async (uuid: string, plannedStartDate: string) => {
    const url = `/api/v1/events/${uuid}`
    const body = `{
        "plannedStart": "${plannedStartDate}"
    }`
    return await axios.patch(url, body, {headers: {'Content-Type': 'application/json'}});
};

export const postGroup = async (uuid: string, groupType: string) => {
    const url = `/api/v1/events/${uuid}/groups`
    const body = `{"groupType": "${groupType}"}`
    return await axios.post(url, body, {headers: {'Content-Type': 'application/json'}});
}

export const postAttender = async (uuid: string, id: string, requiredProfession: string) => {
    const url = `/api/v1/events/${uuid}/groups/${id}/attender`
    const body = `{"requiredProfession": "${requiredProfession}"}`
    return await axios.post(url, body, {headers: {'Content-Type': 'application/json'}});
}

export const signAttender = async (uuid: string, group_id: string, id: string, nickname: string) => {
    const url = `/api/v1/events/${uuid}/groups/${group_id}/attender/${id}`
    const body = `{
        "actualProfession": "bishop",
        "nickname": "${nickname}"
    }`
    return await axios.patch(url, body, {headers: {'Content-Type': 'application/json'}});
}

