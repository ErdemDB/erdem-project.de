/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface TaskDTO
 */
export interface TaskDTO {
    /**
     * 
     * @type {string}
     * @memberof TaskDTO
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof TaskDTO
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof TaskDTO
     */
    text?: string;
    /**
     * 
     * @type {Date}
     * @memberof TaskDTO
     */
    begin?: Date;
    /**
     * 
     * @type {Date}
     * @memberof TaskDTO
     */
    end?: Date;
}

/**
 * Check if a given object implements the TaskDTO interface.
 */
export function instanceOfTaskDTO(value: object): boolean {
    return true;
}

export function TaskDTOFromJSON(json: any): TaskDTO {
    return TaskDTOFromJSONTyped(json, false);
}

export function TaskDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaskDTO {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'title': json['title'] == null ? undefined : json['title'],
        'text': json['text'] == null ? undefined : json['text'],
        'begin': json['begin'] == null ? undefined : (new Date(json['begin'])),
        'end': json['end'] == null ? undefined : (new Date(json['end'])),
    };
}

export function TaskDTOToJSON(value?: TaskDTO | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'title': value['title'],
        'text': value['text'],
        'begin': value['begin'] == null ? undefined : ((value['begin']).toISOString()),
        'end': value['end'] == null ? undefined : ((value['end']).toISOString()),
    };
}
