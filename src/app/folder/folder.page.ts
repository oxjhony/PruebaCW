import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Filesystem, Directory } from '@capacitor/filesystem';
import {
  Camera,
  CameraResultType,
  CameraSource,
  Photo,
} from '@capacitor/camera';
import { ActionSheetController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  imagen4: any;
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor(public actionSheetController: ActionSheetController, 
    private changeDetectorRef: ChangeDetectorRef,
    private plt: Platform) {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  async presentActionSheet2() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Cargar evidencia',
      mode: 'ios',
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Usar cámara',
          id: 'delete-button',
          handler: () => {
            this.TakePhotos2();
          },
        },
        {
          text: 'Seleccionar foto',
          handler: () => {
            this.selectImage2();
          },
        },
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }

  async selectImage2() {
    const image = await Camera.getPhoto({
      quality: 50,
      resultType: CameraResultType.Uri,
      source: CameraSource.Photos, // Camera, Photos or Prompt!
    });

    if (image) {
      const base64Data = await this.readAsBase64(image);
      let base64Image = 'data:image/jpeg;base64,' + base64Data;
      console.log(base64Image);
      this.imagen4 = base64Image;
      this.changeDetectorRef.detectChanges();
      console.log('ok');
    }
  }

  async TakePhotos2() {
    const image = await Camera.getPhoto({
      quality: 50,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera, // Camera, Photos or Prompt!
    });

    if (image) {
      const base64Data = await this.readAsBase64(image);
      let base64Image =  'data:image/jpeg;base64,' + base64Data;
      console.log(base64Image);
      this.imagen4 = base64Image;
      this.changeDetectorRef.detectChanges();
     console.log('ok');
    }
  }

  private async readAsBase64(photo: Photo) {
    if (this.plt.is('hybrid')) {
      if (photo.path) {
        const file = await Filesystem.readFile({
          path: photo.path,
        });
        return file.data;
      } else {
        console.error('El path de la foto es undefined');
        return null;
      }
    } else {
      // Añadir verificación para photo.webPath
      if (photo.webPath) {
        // Fetch the photo, read as a blob, then convert to base64 format
        const response = await fetch(photo.webPath);
        const blob = await response.blob();
        return (await this.convertBlobToBase64(blob)) as string;
      } else {
        console.error('El webPath de la foto es undefined');
        return null;
      }
    }
  }
  

 /*  private async readAsBase641(photo: Photo) {
    if (this.plt.is('hybrid')) {
      const file = await Filesystem.readFile({
        path: photo.path,
      });

      return file.data;
    } else {
      // Fetch the photo, read as a blob, then convert to base64 format
      const response = await fetch(photo.webPath);
      const blob = await response.blob();

      return (await this.convertBlobToBase64(blob)) as string;
    }
  } */

  convertBlobToBase64 = (blob: Blob) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    });
}
