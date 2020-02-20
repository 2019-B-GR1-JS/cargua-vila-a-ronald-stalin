import {Injectable} from "@angular/core";
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class UsuarioRestService {
    constructor(
        //public readonly httpClient: HttpClient,
        private readonly _httpClient: HttpClient,
    ){}
}