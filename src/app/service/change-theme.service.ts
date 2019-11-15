import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { of } from 'rxjs/observable/of';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class ChangeThemeService {
  private themeUrl = 'http://localhost:9090/api/';

  /**
   * 生成一个文件夹
   * 定时把文件夹删掉
   */
  private fileDir = '';

  private selectThemeInfo: Subject<{}> = new Subject();
  constructor(private http: HttpClient) {
    this.fileDir = this.formatDateTime();
  }
  getFileDir(): String {
    return this.fileDir;
  }
  testFunc(): Observable<any> {
    return this.http.post(
      this.themeUrl + 'test',
      {
        fileName: 'test.txt'
      },
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          responseType: 'blob'
        })
      }
    );
  }
  /**
   * 变更主题
   * @param content 数组
   */
  changeTheme(variables, themeExtend): Observable<any> {
    return this.http.post(
      this.themeUrl + 'changevariables',
      {
        fileDir: this.fileDir,
        variables: variables,
        themeExtend: themeExtend
      },
      httpOptions
    );
    // return of([]);
  }
  /**
   * 获取变量详情
   */
  getVariables(): Observable<any> {
    return this.http.get(this.themeUrl + 'getvariables', httpOptions);
  }
  /***
   *
   */
  getThemeExtend(): Observable<any> {
    return this.http.get(this.themeUrl + 'getthemeextend', httpOptions);
  }
  /**
   * 获取主题类型
   */
  getPresetThemes(): Observable<any> {
    return this.http.get(this.themeUrl + 'getpresetthemes', httpOptions);
  }
  /**
   * 下载主题
   */
  downloadTheme(): Observable<any> {
    // return this.http.get(this.themeUrl + 'downloadtheme/test.txt', httpOptions);
    return this.http.get(
      this.themeUrl + 'downloadtheme/2019-03-02-13-45-24',
      httpOptions
    );
  }
  /**
   * 选择预置主题
   */
  selectTheme(themeCode, themeType): Observable<any> {
    this.selectThemeInfo.next({ themeCode, themeType });
    return this.http.post(
      this.themeUrl + 'selectTheme',
      {
        themeCode,
        themeType
      },
      httpOptions
    );
  }
  getThemeInfo(): Subject<any> {
    return this.selectThemeInfo;
  }
  private formatDateTime() {
    const date = new Date();
    const m = date.getMonth() + 1;
    const new_month = m < 10 ? '0' + m : m;
    const d = date.getDate();
    const new_day = d < 10 ? '0' + d : d;
    const h = date.getHours();
    const new_honr = h < 10 ? '0' + h : h;
    const minute = date.getMinutes();
    const new_minute = minute < 10 ? '0' + minute : minute;
    const second = date.getSeconds();
    const new_second = second < 10 ? '0' + second : second;
    return (
      date.getFullYear() +
      '-' +
      new_month +
      '-' +
      new_day +
      '-' +
      new_honr +
      '-' +
      new_minute +
      '-' +
      new_second
    );
  }
}
