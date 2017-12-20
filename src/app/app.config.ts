import {UploadParams } from 'angular-azure-blob-service';

export const Config: UploadParams = {
    sas: '?sv=2017-04-17&ss=bfqt&srt=sco&sp=rwdlacup&se=2017-12-31T23:59:59Z&st=2017-12-01T10:01:03Z&sip=192.168.15.2&spr=https,http&sig=Zkt%2Bkyltjdc7dda5gCb6mMvRFgE7Suk7jjHuePtkmjc%3D',
    storageAccount: 'storageaccount1205',
    containerName: 'imageblobcontainer'
    
  };