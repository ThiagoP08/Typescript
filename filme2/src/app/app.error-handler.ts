// Importações necessárias
import { HttpErrorResponse } from "@angular/common/http"; // Módulo para lidar com erros HTTP
import { throwError } from "rxjs"; // Função que cria um observable com um erro

// Classe ErrorHandler para tratamento de erros personalizado
export class ErrorHandler {
  // Método estático para lidar com erros
  static handleError(error: HttpErrorResponse | any) {
    let errorMessage: string;

    if (error instanceof HttpErrorResponse) {
      // Se o erro for uma resposta HTTP
      errorMessage = `Erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText}`;
    } else {
      // Se não for uma resposta HTTP, trata como erro genérico
      errorMessage = error.toString();
    }

    console.log(errorMessage); // Registra o erro no console

    return throwError(() => errorMessage); // Cria um observable com o erro
  }
}
