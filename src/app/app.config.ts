import {UploadParams } from 'angular-azure-blob-service';

export const Config: UploadParams = {
    sas: '?sv=2017-04-17&ss=bfqt&srt=sco&sp=rwdlacup&se=2017-12-21T18:36:46Z&st=2017-12-07T10:36:46Z&sip=192.168.15.9&spr=https&sig=EGzTn9HqJvlJhz4QY96d78I0ncfORw3HW236HSmYf90%3D',
    //?sv=2017-04-17&ss=bfqt&srt=sco&sp=rwdlacup&se=2017-12-21T18:36:46Z&st=2017-12-07T10:36:46Z&sip=192.168.15.9&spr=https&sig=EGzTn9HqJvlJhz4QY96d78I0ncfORw3HW236HSmYf90%3D
    storageAccount: 'storageaccount1205',
    containerName: 'imageblobcontainer'
    
  };