import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class RecordService {
  constructor(private httpClient: HttpClient) {}

  // function to get records
  getRecords(cursor, max): Observable<any> {
    const option =
      "op?columns=row_id,time,type,sender,volume&receiver=tz1gfArv665EUkSg2ojMBzcbfwuPxAvqPvjo&";
    const url = `${environment.baseUrl}${option}limit=${max}&cursor.gt=${cursor}`;
    return this.httpClient.get(url);
  }
}
