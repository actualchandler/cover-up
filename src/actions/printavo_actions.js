import axios from 'axios';

import { NOODLE } from './config';

export const CREATE_QUOTE = 'create_quote';

export function createQuote(){
   const request = axios.post('https://www.printavo.com/api/version/inquiries?email=test%40example.com&token=1dofnewoi233')
}