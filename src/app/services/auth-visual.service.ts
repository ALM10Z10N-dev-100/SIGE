import { Injectable } from '@angular/core';
import {
  getAuth,
  Auth,
  signInWithPhoneNumber,
  ConfirmationResult,
  RecaptchaVerifier
} from 'firebase/auth';
import { auth } from '../firebase.config'; // ✅ ruta corregida

@Injectable({
  providedIn: 'root'
})
export class AuthVisualService {
  private verifier: RecaptchaVerifier | null = null;

  crearRecaptcha(containerId: string): RecaptchaVerifier {
    this.verifier = new RecaptchaVerifier(auth, containerId, { size: 'invisible' }); // ✅ orden correcto
    this.verifier.render();
    return this.verifier;
  }

  enviarCodigo(telefono: string): Promise<ConfirmationResult> {
    const numeroFormateado = '+52' + telefono;

    if (!this.verifier) {
      throw new Error('RecaptchaVerifier no inicializado');
    }

    return signInWithPhoneNumber(auth, numeroFormateado, this.verifier);
  }

  confirmarCodigo(codigo: string, confirmationResult: ConfirmationResult): Promise<any> {
    return confirmationResult.confirm(codigo);
  }
}
