import { Component, OnInit } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { switchMap, tap } from 'rxjs';
import { UserServiceService } from "../../application/user-service.service"
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Interest } from 'src/app/models/interest';
import { OrientationsService } from '../orientations.service';
import { InterestService } from '../interest.service';
import { NgForm } from '@angular/forms';
import { UpdateProfile, UserInterest, UserProfile } from 'src/app/models/user';
import { AuthService } from '../../auth/auth.service';

@UntilDestroy()
@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {

  interestList: Interest[] = []

  panelOpenState: boolean = false
  signos: string[] = ["Paso... 😒", "Aries ♈", "Tauro ♉", "Géminis ♊", "Cáncer ♋", "Leo ♌", "Virgo ♍", "Libra ♎", "Escorpión ♏", "Sagitario ♐", "Capricornio ♑", "Acuario ♒", "Piscis ♓"]

  estados: string[] = [
    'Aguascalientes',
    'Baja California',
    'Baja California Sur',
    'Campeche',
    'Chiapas',
    'Chihuahua',
    'Coahuila de Zaragoza',
    'Colima',
    'Ciudad de México',
    'Durango',
    'Guanajuato',
    'Guerrero',
    'Hidalgo',
    'Jalisco',
    'Estado de Mexico',
    'Michoacan de Ocampo',
    'Morelos',
    'Nayarit',
    'Nuevo Leon',
    'Oaxaca',
    'Puebla',
    'Queretaro de Arteaga',
    'Quintana Roo',
    'San Luis Potosi',
    'Sinaloa',
    'Sonora',
    'Tabasco',
    'Tamaulipas',
    'Tlaxcala',
    'Veracruz de Ignacio de la Llave',
    'Yucatan',
    'Zacatecas',
  ];
  user$ = this.userService.currentUserProfile$;
  orientations$ = this.orientationService.orientations$;
  user: UserProfile | null = null
  interests$ = this.interestService.interestList$

  profilePic: string | null = null
  constructor(private userService: UserServiceService,
    private authService: AuthService,
    private toast: HotToastService,
    private orientationService: OrientationsService,
    private interestService: InterestService) { }


  uploadFile(event: any) {
    this.userService.uploadImage(event.target.files[0]).pipe(
      this.toast.observe({
        loading: 'Subiendo foto de perfil...',
        success: 'Imagen subida con exito',
        error: 'Tuvimos un error :(',
      }),
      switchMap(() =>
        this.userService.currentUserProfile$
      )
    )
      .subscribe(res => {
        console.log(res)
        this.ngOnInit()
      });

  }
  ngOnInit(): void {
    this.userService.currentUserProfile$
      .pipe(untilDestroyed(this), tap(console.log))
      .subscribe((user) => {
        this.user = user
        this.profilePic = user.photos[0]?.path ?? "/assets/img/profile.png"
        this.interestList.forEach(element => {
          element.state = false;
        });
        this.user?.interest.forEach((e) => {
          let index = -1
          index = this.interestList.findIndex(a => a.id === e.id)
          if (index != -1) {
            this.interestList[index].state = true
          }
        }
        )

      });

    this.orientationService.orientations$.pipe(untilDestroyed(this), tap(console.log))
      .subscribe((orientations) => { });

    this.interestService.interestList$.pipe(untilDestroyed(this), tap(console.log))
      .subscribe((interests: Interest[]) => {
        interests.forEach(element => {
          element.state = false;
        });
        this.user?.interest.forEach((e) => {
          let index = -1
          index = interests.findIndex(a => a.id === e.id)
          if (index != -1) {
            interests[index].state = true
          }
        }
        )
        this.interestList = interests;
      });
  }

  updateProfile() {
    let interestIDs: number[ ] = []
    for(let i= 0 ; i< this.interestList.length; i++){
        if(this.interestList[i].state == true)
        interestIDs.push(this.interestList[i].id)
    }
    
    let user_profile: UpdateProfile= this.user!.user!
    user_profile.interests = interestIDs

    this.userService.updateProfile(user_profile).pipe(
      this.toast.observe({
        loading: 'Actualizando perfil...',
        success: 'Su perfil se actualizó con exito',
        error: 'Tuvimos un error :(',
      }),
      switchMap(() =>
        this.userService.currentUserProfile$
      )
    )
      .subscribe(res => {
        console.log(res)
        this.ngOnInit()
      });
  }
  logout(){
    this.authService.logout().pipe(
      this.toast.observe({
        loading: 'Cerrando Sesión...',
        success: 'Byeeee',
        error: 'Tuvimos un error :(',
      }))
      .subscribe(res => {
        console.log(res)
      });
  }
}

