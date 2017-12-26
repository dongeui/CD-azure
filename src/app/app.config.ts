import {UploadParams } from 'angular-azure-blob-service';

export const Config: UploadParams = {
    sas: '?sv=2017-04-17&ss=bfqt&srt=sco&sp=rwdlacup&se=2017-12-26T12:00:00Z&st=2017-12-26T00:00:00Z&sip=192.168.15.1-192.168.15.10&spr=https,http&sig=jCgDMVb890vwvBqfBMpYpQBpGFNUInAlK%2Fhzfdu6DZ4%3D',
    storageAccount: 'dongeuistorage1',
    containerName: 'blob1'
    
  };