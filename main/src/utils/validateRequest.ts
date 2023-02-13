import * as RESPONSE_TYPES from './types/responseTypes';
import { stringFormat } from './StringConstructor';

export function validRequest(productName: string, price: number): Array<string>{
    let messages: string[] = []
    if(productName == undefined || productName == ''){
        messages.push(stringFormat(RESPONSE_TYPES.FIELD_REQUIRED,'productName'))
    }
    if(price == undefined || price == null){
        messages.push(stringFormat(RESPONSE_TYPES.FIELD_REQUIRED,'price'))
    }
    return messages;
  }